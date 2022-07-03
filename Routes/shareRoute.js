const {
  createShare,
  getAllShare,
  getShareById,
  deleteShareById
} = require("../Controller/shareController.js");
const express = require("express");
const router = express.Router();

router.route("/create").post(createShare);
router.get("/findAll", getAllShare);
router.get("/:id", getShareById);
router.delete("/:id", deleteShareById)



module.exports = router;
