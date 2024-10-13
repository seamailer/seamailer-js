import { SeaConfig } from "./types/sea.types";
import Contact from "./modules/contacts/Contact";

export default class Seamailer {
    private readonly config: SeaConfig;

    public contacts: Contact;

    constructor(apiKey: string, baseUrl: string = "https://api.seamailer.app") {
        this.config = { apiKey, baseUrl };
        this.contacts = new Contact(this.config);
    }
}

export * from "./types/sea.types";
export * from "./modules/contacts/Contacts.types";
