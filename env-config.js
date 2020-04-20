const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://portfolio-yohan.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://portfolio-yohan.herokuapp.com",
  "process.env.CLIENT_ID": "akEPVW71HpnNNu4hlbJ6h6BDd4YOVvO0",
  "process.env.DB_URI": prod
    ? "mongodb+srv://yohanKim:yohanKim@cluster0-kpmtn.mongodb.net/test?retryWrites=true&w=majority"
    : "mongodb+srv://yohan:yohan@cluster0-tym4s.mongodb.net/test?retryWrites=true&w=majority",
};
