const express    = require("express");
const controller = require("../controller/email");

const router     = express.Router();

router.post("/email", controller.enviar);

module.exports = router;
