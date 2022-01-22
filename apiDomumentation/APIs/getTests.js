module.exports = {
    // method of operation
    get: {
      tags: ["Tests"], // operation's tag.
      description: "Get Tests", // operation's desc.
      operationId: "getTests", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Successful", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tutorials", // Todo model
              },
            },
          },
        },
      },
    },
  };