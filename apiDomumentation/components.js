module.exports = {
    components: {
      schemas: {
        // id model
        // id: {
        //   type: "string", // data type
        //   description: "An id of a todo", // desc
        //   example: "tyVgf", // example of an id
        // },
        // todo model
        Tutorials: {
          type: "object", // data type
          properties: {
            id: {
              type: "string", // data-type
              description: "Primary key and auto incremented", // desc
              example: "1/2/3", // example of an id
            },
            title: {
              type: "string", // data-type
              description: "Tutorial Title", // desc
              example: "Coding in JavaScript", // example of a title
            },
            description: {
              type: "string", // data type
              description: "A short description", // desc
              example: "long/short paragraph", // example of a completed value
            },
            published: {
              type: "boolean", // data type
              description: "published tutorial or not", // desc
              example: "true/false", // example of a completed value
            },
          },
        },
        // Todo input model
        // TodoInput: {
        //   type: "object", // data type
        //   properties: {
        //     title: {
        //       type: "string", // data type
        //       description: "Todo's title", // desc
        //       example: "Coding in JavaScript", // example of a title
        //     },
        //     completed: {
        //       type: "boolean", // data type
        //       description: "The status of the todo", // desc
        //       example: false, // example of a completed value
        //     },
        //   },
        // },
        // error model
        Error: {
          type: "object", //data type
          properties: {
            message: {
              type: "string", // data type
              description: "Error message", // desc
              example: "Not found", // example of an error message
            },
            internal_code: {
              type: "string", // data type
              description: "Error internal code", // desc
              example: "Invalid parameters", // example of an error internal code
            },
          },
        },
      },
    },
  };