"use strict";

const express = require('express');
const router  = express.Router();

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

module.exports = () => {

  router.post("/api/commitGrabber/:username", (req, res) => {

    let username = req.params.username
    console.log(req.body)
    console.log(username)
    console.log(req.params.username)
    let data = req.body[0]

  });
  return router;
}
