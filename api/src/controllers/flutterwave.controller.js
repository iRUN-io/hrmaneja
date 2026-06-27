const db = require("../models");
const Activity = db.activity;
const axios = require('axios');
const Flutterwave = require('flutterwave-node-v3');
const raveConfig = require("../../config/rave");
const { FLW_SECRET_KEY } = require("../../config/rave");
const { updateCompanyFLWAccount } = require("./company.controller");
const { cleanStringify } = require("../helpers/cleanString");
const flw = new Flutterwave(raveConfig.FLW_PUBLIC_KEY, raveConfig.FLW_SECRET_KEY);

function generateTransactionReference() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

exports.bulkTransfer = async (req, res) => {
    const response = await flw.Transfer.bulk(req);
    return response;
}

exports.transfer = (req, res) => {
    const data = req.body;
    const recipient = data.recipient;
    const amount = data.amount;
    const currency = data.currency;
    const narration = data.narration;
    const reference = data.reference;
    const transfer_type = data.transfer_type;
    const response = flw.Transfer.create({
        recipient: recipient,
        amount: amount,
        currency: currency,
        narration: narration,
        reference: reference,
        transfer_type: transfer_type
    });
    if (response.status === 'success') {
        const activity = new Activity({
            employeeId: recipient, // employeeId is the userId of the employee on line 19
            name: 'salary transfer',
            activity: 'You have received a transfer from ' + data.sender,
            user: data.sender,
            company_id: data.company_id,
        });
        activity.save();

        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    };
}

exports.createVirtualAccount = (req, res) => {
    const data = req.body;
    const response = flw.VirtualAcct.create({
        email: data.email,
        narration: data.accountName,
    });
    if (response.status === 'success') {
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    };
}



exports.verify = (req, res) => {
    const data = req.body;
    const response = flw.Transfer.verify(data.txref);
    if (response.status === 'success') {
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    }
}

exports.refund = (req, res) => {
    const data = req.body;
    const response = flw.Transfer.refund(data.txref);
    if (response.status === 'success') {
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    }
}

exports.list = (req, res) => {
    const data = req.body;
    const response = flw.Transfer.list(data.limit, data.offset);
    if (response.status === 'success') {
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    }
}

exports.listRecipients = (req, res) => {
    const data = req.body;
    const response = flw.Transfer.listRecipients(data.limit, data.offset);
    if (response.status === 'success') {
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    }
}

exports.listTransactions = (req, res) => {
    const data = req.body;
    const response = flw.Transfer.listTransactions(data.limit, data.offset);
    if (response.status === 'success') {
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    }
}

// airtime
exports.airtime = async (req, res) => {
    // Construct the POST request configuration
    const config = {
      method: 'POST',
      url: 'https://api.flutterwave.com/v3/bills',
      headers: {
        'Authorization': `Bearer ${raveConfig.FLW_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        country: 'NG',
        customer: req.body.phoneNumber,
        amount: req.body.amount,
        recurrence: 'ONCE',
        type: 'AIRTIME',
        debit_subaccount: req.body.payout_account_ref,
        reference: generateTransactionReference(),
        biller_name: 'DSTV, MTN VTU, TIGO VTU, VODAFONE VTU, VODAFONE POSTPAID PAYMENT'
      }
    };
  
    try {
      // Send the POST request using Axios
      const response = await axios(config);
      
      // Log and send the response data
      console.log(JSON.stringify(response.data));
      res.status(200).send(response.data);
    } catch (error) {
      // Log and send an error response
      console.log(error);
      res.status(500).send({
        message: error.message || "Some error occurred while making the request."
      });
    }
  };

// bulk airtime
exports.bulkAirtime = (req, res) => {
    const data = req.body;
    const recipients = data.recipients;
    const amount = data.amount;
    const bulk_recipients = [];
    for (let i = 0; i < recipients.length; i++) {
        bulk_recipients.push({
            recipient: recipients[i],
            amount: amount[i],
            customer: recipients[i],
            type: "AIRTIME",
            recurrence: 'ONCE',
            reference: generateTransactionReference(),
        });
    }
    const response = flw.Bills.create_bulk(bulk_recipients);
    if (response.status === 'success') {
        for (let i = 0; i < recipients.length; i++) {
            const activity = new Activity({
                employeeId: recipients[i], // employeeId is the userId of the employee on line 19
                name: 'airtime transfer',
                activity: 'You have received a transfer from ' + data.sender,
                user: data.sender,
                company_id: data.company_id,
            });
            activity.save();
        }
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    }
}

exports.getBanks = async (req, res) => {
    const response = await axios.get(`https://api.flutterwave.com/v3/banks/NG`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${FLW_SECRET_KEY}`
        }
    });
    const data = response.data.data;
    return res.status(200).send(data);
}

exports.createSubAccount = async (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
      }
    const accountData = {
        account_name: req.body.account_name,
        email: req.body.email,
        mobilenumber: req.body.mobile_number,
        country: 'NG',
    }
    await axios.post(`https://api.flutterwave.com/v3/payout-subaccounts`, accountData, {
        headers: {
          'Authorization': `Bearer ${FLW_SECRET_KEY}`,
          'Content-Type': 'application/json',
        }
      }).then(data => {
        const accountRqData = data.data.data;
        const accountData = {
            companyId: req.body.companyId,
            bank_name: accountRqData.bank_name,
            account_ref: accountRqData.account_reference,
            account_number: accountRqData.nuban,
            account_name: accountRqData.account_name,
            bank_code: accountRqData.bank_code
        }

        updateCompanyFLWAccount(accountData);
        res.status(200).send(data.data);
    })
    .catch(err => {
        // console.log('err', err)
        res.status(201).send({
            message:
                err.message || "Some error occurred while retrieving employees.",
                status: 404
        });
    });
  }

  exports.getSubAccount = async (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
    }

    await axios.get(`https://api.flutterwave.com/v3/payout-subaccounts/${req.params.account_ref}`, {
        headers: {
          'Authorization': `Bearer ${FLW_SECRET_KEY}`,
          'Content-Type': 'application/json',
        }
      }).then(data => {
        const newData = cleanStringify(data.data);
        res.status(200).send(newData);
    })
    .catch(err => {
        console.log('err', err)
        res.status(500).send({
            message:
                err || "Some error occurred while retrieving employees.",
        });
    });
  }


  exports.getSubAccounts = async (req, res) => {
    // if(!req.headers.authorization) {
    //     return res.status(401).send({ message: "Unauthorized request" });
    //   }
    await axios.get(`https://api.flutterwave.com/v3/payout-subaccounts`, {
        headers: {
          'Authorization': `Bearer ${FLW_SECRET_KEY}`,
          'Content-Type': 'application/json',
        }
      }).then(data => {
        const newData = cleanStringify(data.data);

        res.status(200).send(newData);
    })
    .catch(err => {
        console.log('err', err)
        res.status(500).send({
            message:
                err || "Some error occurred while retrieving employees.",
        });
    });
  }

  exports.getSubAccountBalance = async (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
      }
    await axios.get(`https://api.flutterwave.com/v3/payout-subaccounts/${req.params.account_ref}/balances?currency=NGN`, {
        headers: {
          'Authorization': `Bearer ${FLW_SECRET_KEY}`,
          'Content-Type': 'application/json',
        }
      }).then(data => {
        const newData = cleanStringify(data.data);

        res.status(200).send(newData);
    })
    .catch(err => {
        console.log('err', err)
        res.status(500).send({
            message:
                err || "Some error occurred while retrieving employees.",
        });
    });
  }


  exports.getSubAccountTransactions = async (req, res) => {
    if(!req.headers.authorization) {
        return res.status(401).send({ message: "Unauthorized request" });
      }
    await axios.get(`https://api.flutterwave.com/v3/payout-subaccounts/${req.params.account_ref}/transactions`, {
        headers: {
          'Authorization': `Bearer ${FLW_SECRET_KEY}`,
          'Content-Type': 'application/json',
        }
      }).then(data => {

        res.status(200).send(data.data);
    })
    .catch(err => {
        console.log('err', err)
        res.status(500).send({
            message:
                err || "Some error occurred while retrieving employees.",
        });
    });
  }


// data bundle
exports.dataBundle = (req, res) => {
    const details = {
        country: 'NGN',
        customer: req.body.recipient,
        amount: req.body.amount,
        type: req.body.type,
        reference: generateTransactionReference(),
    };

    const response = flw.Bills.create_bill(details);
    if (response.status === 'success') {
        res.status(200).send(response);
    }
    else {
        res.status(500).send(response);
    }
}