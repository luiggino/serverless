'use strict';

const { stringify } = JSON

exports.hello = async event => {
  const response = {message : 'Go Serverless v1.0! Your function executed successfully!'}
  
  return {
    body: stringify (response),
    statusCode: 200
  };
}

exports.toBeInvoked = async (event, context) => {
  return {
    clienteContext: context.clienteContext,
    event,
  }
}