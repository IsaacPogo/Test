const createUserSchema = {
    type: "object",
    required: ["id", "name", "job", "createdAt"],
    properties: {
        id: { type: "string" },
        name: { type: "string" },
        job: { type: "string" },
        createdAt: { type: "string", format: "date-time" }
    }
};

module.exports = {
    createUserSchema
};