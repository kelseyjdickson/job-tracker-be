const express = require("express");
const router = express.Router();
const {
  getCompanyNames,
  createCompanyName,
  putCompanyName,
  deleteCompanyNames,
} = require("../controllers/companyNameController");

router
  .route("/")
  .get(getCompanyNames)
  .post(createCompanyName)
  .put(putCompanyName)
  .delete(deleteCompanyNames);
module.exports = router;
