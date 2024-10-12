export interface ContactCreateAttributes {
    email:               string;
    firstName?:           string;
    lastName?:            string;
    phoneCountry?:        string;
    phoneNumber?:         string;
    isActive?:            boolean;
    joinDate?:            Date;
    tags?:                string;
    address?:             string;
    country?:             string;
    countryCode?:         string;
    company?:             string;
    website?:             string;
    city?:                string;
    zipCode?:             string;
    state?:               string;
    notes?:               string;
    age?:                 string;
    birthday?:            Date;
    timezone?:            string;
    utcOffset?:           string;
    ipAddress?:           string;
    gender?:              string;
    customFields:    Record<string, unknown>;
}

export interface ContactAttributes {
    id:                  number;
    teamId:              string;
    teamMemberId:        string;
    firstName:           string;
    lastName:            string;
    email:               string;
    phoneCountry:        string;
    phoneNumber:         string;
    isSubscribed:        boolean;
    isActive:            boolean;
    isInvalid:           boolean;
    createdAt:           Date;
    unSubscribedDate:    Date;
    joinDate:            Date;
    createdFromPlatform: string;
    tags:                string;
    address:             string;
    country:             string;
    company:             string;
    website:             string;
    countryCode:         string;
    city:                string;
    zipCode:             string;
    state:               string;
    notes:               string;
    age:                 string;
    birthday:            string;
    unsubscribeReason:   string;
    timezone:            string;
    utcOffset:           string;
    ipAddress:           string;
    gender:              string;
    updatedAt:           Date;
    customProperties:    any[];
}

export interface ContactResponse {
    contact: ContactAttributes
}