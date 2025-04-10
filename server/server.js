const express = require("express");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");
const errorMiddleware = require("./middleware/errorMiddleware.js");
const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");
const {  connectDB } = require("./config/db.js");
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);


app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);
app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));






///dharma
MONGO_URL = mongodb+srv://pratibhasuryavanshi117:pratibhasuryavanshi117@cluster0.r57qql1.mongodb.net/ecom
JWT_SECRET = d22h3a3r4m4a34r2c34k2342p2r3a4b4h55a6o67k

CLIENT_ID = AVPY69RshIFWOqgjmqi7jtThz_vahPy6ki5_OPIh-w423aKzwyYCpV0xMDQr3elHugjdteGttGJelLci
CLIENT_SECRET_KEY = EHKMAbJQloAvMA9hvt3vFqZ-Avz-XZU2CUhQHQbRMVsEZUM-JcqKh7ckbp5knJ0FOAaJ-UpUidiUOts9
