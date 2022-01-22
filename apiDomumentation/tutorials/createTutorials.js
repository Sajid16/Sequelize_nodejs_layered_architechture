module.exports = {
    // method of operation
    post: {
        tags: ["Tutorials"], // operation's tag.
        description: "Create New Tutorial", // operation's desc.
        operationId: "createTutorials", // unique operation id.
        parameters: [], // expected params.
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Tutorials", // todo input data model
                    },
                },
            },
        },
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