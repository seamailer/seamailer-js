import Seamailer from "seamailer-js";

const seamailer = new Seamailer(
    "sm_test_epzq3relf",
    "https://api.dev.seamailer.app",
);

function createSampleContact() {
    const param = {
        email: "frontend@example.com",
        firstName: "John",
        lastName: "Doe",
        company: "Acme Inc.",
        tags: "tag1, tag2",
        customFields: {
            field1: "value1",
            field2: "value2",
        },
    };
    seamailer.contacts.createContact(param).then();
}

// createSampleContact()
