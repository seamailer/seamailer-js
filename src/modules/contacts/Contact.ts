import { SeaConfig } from "../../types/sea.types";
import { ContactAttributes, ContactCreateAttributes } from "./Contacts.types";
import { ApiClient } from "../../api/ApiClient";
import { ApiResponse } from "../../api/Api.types";

export default class Contact {
    private apiClient: ApiClient;
    constructor(private config: SeaConfig) {
        this.apiClient = new ApiClient(config);
    }

    async createContact(contactInfo: ContactCreateAttributes) {
        const result = await this.apiClient.post<
            ApiResponse<ContactAttributes>,
            ContactCreateAttributes
        >("/connect/v1.0/contacts/create", {
            body: contactInfo,
        });
        return result.data;
    }

    async updateContact() {
        const result = await this.apiClient.post<
            ApiResponse<ContactAttributes>
        >("/connect/v1.0/contacts");
        return result.data;
    }
}
