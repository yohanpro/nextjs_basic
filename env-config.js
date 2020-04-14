const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://portfolio-yohan.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://portfolio-yohan.herokuapp.com",
  "process.env.CLIENT_ID": "akEPVW71HpnNNu4hlbJ6h6BDd4YOVvO0",
};
