const axios = require('axios');

exports.createImage = async (req, res) => {
    const response = await axios.post(`https://api.replicate.com/v1/predictions`, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'access-control-allow-headers': '*',
        'access-control-allow-methods': '*',
        'Access-Control-Allow-Origin': '*',
        'Authorization' : `Token 9f4da99394d38a7713ee9a738d16827b06fc0c24`
      },
    });
    const data = response.data;
    return res.status(200).send(data);
  }


  exports.getImage = async (req, res) => {
    const url = req.body.url;
    const response = await axios.get(`${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'access-control-allow-headers': '*',
        'access-control-allow-methods': '*',
        'Access-Control-Allow-Origin': '*',
        'Authorization' : `Token 9f4da99394d38a7713ee9a738d16827b06fc0c24`
      }
    });
    const data = response.data;
    return res.status(200).send(data);
  }
