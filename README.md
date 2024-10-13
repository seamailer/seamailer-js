# Seamailer JS SDK
For collecting contact information from frontend forms

![NPM Version](https://img.shields.io/npm/v/%40seamailer%2Fseamailer-js)

### if you want to send emails try our Node SDK or use the API
- [Seamailer Node SDK](https://www.npmjs.com/package/seamailer-nodejs)
- [API Documentation](https://developers.seamailer.app)

## Installing
```shell
npm install @seamailer/seamailer-js
```
## Usage

```javascript
import Seamailer from "seamailer-js"

const seamailer = new Seamailer("public api key")

seamailer.contacts.createContact({
    email: "user@myemail.com",
    firstName: "John",
    lastName: "Doe",
    company: "Acme Inc.",
    tags: "tag1, tag2",
    customFields: {
        field1: "value1",
        field2: "value2",
    },
}).then();

```