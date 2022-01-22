module.exports = {
    // method of operation
    put: {
        tags: ["Tutorials"], // operation's tag.
        description: "Update Tutorial", // operation's desc.
        operationId: "updateTutorials", // unique operation id.
        parameters: [
            // expected params.
            {
                name: "id", // name of the param
                in: "path", // location of the param
                // schema: {
                //     $ref: "#/components/schemas/id", // data model of the param
                // },
                required: true, // Mandatory param
                description: "Update Tutorial by Id", // param desc.
            },
        ],
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