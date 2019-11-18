const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://chriskcarr.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://chriskcarr.herokuapp.com",
  "process.env.CLIENT_ID": "NDcCZJS6qYYUbe21DAQHRpiQHH36yMB6"
};
