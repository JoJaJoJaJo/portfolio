import express from "express";
import contactCtrl from "../controllers/contactController.js";

const router = express.Router();

router.route("/api/contacts")
  .get(contactCtrl.list)
  .post(contactCtrl.create);

router.route("/api/contacts/:id")
  .delete(contactCtrl.remove);

export default router;
