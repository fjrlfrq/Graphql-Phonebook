const models = require("../models");
var { Response } = require("../helpers/util");
const { Op } = require("sequelize");

var root = {
    hello: () => {
        return "Hello world!"
    },
}

module.exports = {
    root
};