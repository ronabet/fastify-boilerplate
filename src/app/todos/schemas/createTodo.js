'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const createTodoResponseSchema = {
  type: 'object',
  properties: {
    todoId: {
      type: 'string',
      format: 'uuid'
    }
  }
};

const createTodoRequestSchema = {
  tags: ['Todos'],
  summary: 'This api creates a todo',
  description: `<ul> * This api let users to add a todo</ul>`,
  headers: headers,
  body: {
    title: 'Create a Todo',
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string', minLength: 1 },
      description: { type: 'string', minLength: 1 },
      label: { type: 'string' },
      dueDate: { type: ['string', 'object'], format: 'date-time' },
      priority: { type: 'string' }
    }
  }
};

const createTodoSchema = {
  ...createTodoRequestSchema,
  response: {
    200: createTodoResponseSchema,
    ...errorSchemas
  }
};

module.exports = { createTodoSchema };
