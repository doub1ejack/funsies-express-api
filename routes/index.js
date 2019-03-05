var express = require("express");
var router = require("express").Router();

// stub out first route & response
const moods = [{ mood: "excited about express!" }, { mood: "route-tastic!" }];

// behavior for the moods route
function moodRoute(req, res, next) {
  res.send(moods);
}

// assign both the root & moods routes the same behavior for now
router.get("/", moodRoute);
router.get("/moods", moodRoute);

module.exports = router;
