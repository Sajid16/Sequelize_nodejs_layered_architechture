module.exports = {
    // method of operation
    get: {
        tags: ["Tutorials"], // operation's tag.
        description: "Get Tutorial By Id", // operation's desc.
        operationId: "getTutorialsById", // unique operation id.
        parameters: [
            // expected params.
            {
                name: "id", // name of the param
                in: "path", // location of the param
                // schema: {
                //     $ref: "#/components/schemas/id", // data model of the param
                // },
                required: true, // Mandatory param
                description: "A single tutorial id", // param desc.
            },
        ],
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