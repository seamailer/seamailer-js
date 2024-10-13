import { ApiClient } from "../../api/ApiClient";
import { SeaConfig } from "../../types/sea.types";
import {
    ContactAttributes,
    ContactCreateAttributes,
} from "../contacts/Contacts.types";
import { ApiResponse } from "../../api/Api.types";

export default class Group {
    private apiClient: ApiClient;
    constructor(private config: SeaConfig) {
        this.apiClient = new ApiClient(config);
    }

    async createGroup(contactInfo: ContactCreateAttributes) {
        const result = await this.apiClient.post<
            ApiResponse<ContactAttributes>,
            ContactCreateAttributes
        >("/connect/v1.0/groups/create", {
            body: contactInfo,
        });
        return result.data;
    }
}
