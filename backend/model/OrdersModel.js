const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = model("order", OrdersSchema); // ✅ No 'new'

module.exports = { OrdersModel };
