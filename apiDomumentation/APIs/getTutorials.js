module.exports = {
    // method of operation
    get: {
      tags: ["Tutorials"], // operation's tag.
      description: "Get Tutorials", // operation's desc.
      operationId: "getTutorials", // unique operation id.
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