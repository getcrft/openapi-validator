// Assertation 1:
// check if swagger field exist

// Assertation 2:
// make sure the swagger field is of type string

// Assertation 3:
// make sure the value of swagger field must be "2.0"

const MessageCarrier = require('../../../utils/messageCarrier');

module.exports.validate = function({ jsSpec }) {
  const messages = new MessageCarrier();

  const swagger = jsSpec.swagger;
  // we don't actually care about swagger docs specifically
  // so remove this from the locked built-in ruleset
  return messages;
};
