const express = require("express");
const router = express.Router();
const ApiService = require("../public/services/api.service");
const apiHandler = new ApiService();

/* GET home page */
router.get("/", async (req, res, next) => {
  try {
    //TODO add userinsession
    const response = await apiHandler.getAllProducts();
    const allProducts = response.data;
    res.render("index", { allProducts });
    console.log(allProducts);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
