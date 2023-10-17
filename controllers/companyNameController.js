// FOR:  '/companyName' endpoints

// remember: Retrieving and Deleting should be PLURAL otherwise singular

const getCompanyNames = (request, response, next) => {
  response
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me! Show me all the company names!" });
};

const createCompanyName = (request, response, next) => {
  response
    .status(201)
    .setHeader("Content-Type", "application/json")
    .json({
      message: `Created category with name of ${request.body.companyName}`,
    });
};

const putCompanyName = (request, response, next) => {
  response
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me! Show me all the company names!" });
};

const deleteCompanyNames = (request, response, next) => {
  response
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "Deleting the Companies!" });
};

module.exports = {
  getCompanyNames,
  createCompanyName,
  putCompanyName,
  deleteCompanyNames,
};
