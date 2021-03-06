/*
 * Copyright (C) 2016 TopCoder Inc., All Rights Reserved.
 */
'use strict';
/**
 * The Drone model
 *
 * @author      TSCCODER
 * @version     1.0
 */

const mongoose = require('../datasource').getMongoose();
const timestamps = require('mongoose-timestamp');
const helper = require('../common/helper');

const DroneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

DroneSchema.plugin(timestamps);

helper.sanitizeSchema(DroneSchema);

module.exports = {
  DroneSchema,
};
