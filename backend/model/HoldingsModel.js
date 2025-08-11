const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = model("holding", HoldingsSchema); // Removed "new"

module.exports = { HoldingsModel };

