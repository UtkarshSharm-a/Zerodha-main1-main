const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = model("position", PositionsSchema); // ✅ No 'new'

module.exports = { PositionsModel };
