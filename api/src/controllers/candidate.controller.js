
const db = require("../models");
const Candidate = db.candidate;
const Job = db.job;
const PDFParse = require("pdf-parse");

// Create and Save a new Candidate
exports.create = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  // Validate request
  if (!req.body || req.body.firstName === '' || req.body.email === '' || req.body.lastName === '') {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  let jobData = [];
  let userData = [];

  const id = req.body.jobId;

  const userExists = await Promise.all([
    await Candidate.findOne({ email: req.body.email })
  ]);

  for (const resp of userExists) {
    resp && userData.push(resp);
  }

  if (userData.length > 0) {
    res.status(200).send({ status: 404, message: "Candidate already exist" });
    return;
  }

  const jobExist = await Promise.all([
    await Job.findOne({ _id: id })
  ]);

  for (const resp of jobExist) {
    resp && jobData.push(resp);
  }

  if (jobData.length === 0) {
    res.status(200).send({ status: 404, message: "Job does not exist" });
    return;
  }

  this.increaseJobApplicant(id);

  // Create a Candidate
  const candidate = new Candidate({
    company_id: req.body.company_id,
    jobId: id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    postCode: req.body.postCode,
    resume: req.body.resume,
    dateAvailable: req.body.dateAvailable,
    desiredPay: req.body.desiredPay,
    whyUs: req.body.whyUs,
    link: req.body.link,
    linkedInUrl: req.body.linkedInUrl,
    status: 'active',
  });

  // Save Candidate in the database
  candidate
    .save(candidate)
    .then(data => {
      this.increaseJobApplicant(candidate.jobId);
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(200).send({
        status: 404,
        message:
          err.message || "Some error occurred while creating the Candidate."
      });
    });
};

// Retrieve all Candidates from the database.
exports.findAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Candidate.find({ jobId: req.params.job_id })
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      res.status(200).send(sortedData);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};

// Find a single Candidate with an id
exports.findOne = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Candidate.findOne(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Candidate with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Candidate with id=" + id });
    });
};

exports.findJob = async (id, res) => {
  Job.findOne({ _id: id })
    .then(data => {
      if (!data)
        return false;
      else {
        return data;
      }
    })
    .catch(err => {
      return false;
    });
};

// increase job applicant 
exports.increaseJobApplicant = (id, res) => {
  Job.findByIdAndUpdate(id, { $inc: { applicants: 1 } }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        return {
          message: `Cannot update Job with id=${id}. Maybe Job was not found!`,
          status: 200,
          data: data,
        };
      } else return {
        message: `Job was updated successfully.`,
        status: 200,
        data: data,
      };
    })
    .catch(err => {
      return {
        message: `Cannot update Job with id=${id}. Maybe Job was not found!`,
        status: 200,
        data: [],
      };
    });
};

// Update a Candidate by the id in the request
exports.update = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Candidate.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Candidate with id=${id}. Maybe Candidate was not found!`
        });
      } else res.status(200).send({ message: "Candidate was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Candidate with id=" + id
      });
    });
};

// Delete a Candidate with the specified id in the request
exports.delete = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  const id = req.params.id;

  Candidate.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Candidate with id=${id}. Maybe Candidate was not found!`
        });
      } else {
        res.send({
          message: "Candidate was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Candidate with id=" + id
      });
    });
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Candidate.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount}  were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ."
      });
    });
};

exports.scoreCandidate = async (req, res) => {
  if (!req.headers.authorization) {

    return res.status(401).send({ message: "Unauthorized request" });

  }
  const id = req.params.id;

  const job = Job.findOne({ _id: id })
    .then(data => {
      if (!data)
        return false;
      else {
        return data;
      }
    })
    .catch(err => {
      return false;
    });

  if (!job) {
    return res.status(404).send({ message: "Job not found" });
  }

  const jobCandidate = req.body;

  const score = await this.calculateScore(jobCandidate.resume, job);
  const data = {
    candidate: await jobCandidate.applicantId,
    score: score
  }

  res.status(200).send(data);

  // MULTIPLE SCORE :: GODFRED Check it out in the future
  // const candidateScore = jobCandidate.map(async (candidate) => { 
  //   const score = await this.calculateScore(candidate.resume, job);
  //   const data = {
  //     candidate: await candidate.applicantId,
  //     score: score
  //   }

  //   return data;
  // });
  // const candidate = await Promise.all(candidateScore);

  // res.status(200).send(candidate);

};

exports.calculateScore = async (resume, job) => {

  async function extractTextFromPDF(filePath) { // extract text from pdf
    
    try {
      const pdfData = await PDFParse(filePath);
      if(pdfData.text){
        return pdfData.text;
      }else{
        return '';
      }
    } catch (err) {

      console.log(err);
      return '';

    }
  }

  let resumeWords = [] // array of words in resume

  const jobwords = extractTextFromPDF(resume).then(text => {

    resumeWords.push(text) // push text to array

    resumeWords = resumeWords.join(' ').split(' '); // split text into array of words

    const removeWords = ['or', 'and', 'the', 'a', 'an', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'from', 'by', 'about', 'as', 'into', 'like', 'through', 'after', 'over', 'against', 'during', 'without', 'before', 'under', 'among', 'throughout', 'despite', 'towards', 'upon', 'concerning', 'behind', 'beyond', 'plus', 'except', 'but', 'up', 'out', 'around', 'down', 'off', 'above', 'near', 'and']; // words to remove

    const filteredWords = resumeWords.filter((word) => {
      return !removeWords.includes(word); // remove words
    });


    const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; // regex to remove special characters
    const removeSpecialChar = filteredWords.filter((word) => {
      return !regex.test(word);
    });


    const removeShortWords = removeSpecialChar.filter((word) => { // remove words less than 4 characters
      return word.length > 4;
    });

    return removeShortWords; // return array of words

  });

  resumeWords = await jobwords; // await for array of words

  const candidateJob = await job; // await for job

  const jobText = candidateJob.responsibilities;

  const jobDescription = []; // array of words in job description
  for (const word of jobText) {
    jobDescription.push(word);
  }

  const jobDescriptionLength = jobDescription.length;

  for (let i = 0; i < jobDescriptionLength; i++) { // split job description into array of words
    const splitJobDescription = jobDescription[i].split(' ');
    jobDescription.push(splitJobDescription);
  }

  const removeArrays = jobDescription.filter((word) => { // remove arrays
    return typeof word !== 'object';
  });

  const splitJobDescription = removeArrays.join(' ').split(' '); // split job description into array of words

  const topKeywords = []; // array of top keywords

  for (const word of resumeWords) { // compare resume words to job description
    if (splitJobDescription.includes(word)) {
      topKeywords.push(word);
    }
  }


  console.log('jobDescription', splitJobDescription); // log job description

  // compare resume words to job description
  const jobWords = [];
  for (const word of splitJobDescription) { // compare resume words to job description
    if (resumeWords.includes(word)) {
      jobWords.push(word);
    }
  }

  console.log('jobWords', jobWords);

  const topKeywordsSet = new Set(topKeywords); // remove duplicates

  const topKeywordsArray = Array.from(topKeywordsSet); // convert to array

  const topKeywordsCount = topKeywordsArray.map((keyword) => { // count number of times a keyword appears
    return {
      keyword: keyword,
      count: topKeywords.filter((word) => word === keyword).length,
    };
  });

  topKeywordsCount.sort((a, b) => b.count - a.count);

  let score = 0; // calculate score
  for (const keyword of topKeywords) { // compare resume words to job description
    if (jobWords.includes(keyword)) {
      score += 1;
    }
  }

  console.log(`Candidate score: ${score}`);
  return score; // return score

};

exports.count = (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized request" });
  }
  Candidate.countDocuments({ company_id: req.params.company_id })
    .then(data => {
      res.status(200).json({ totalCandidates: data });
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving ."
      });
    });
}