export interface UserKeycloak {
    id: String,
    createdTimestamp: Number,
    username: String,
    enabled: Boolean,
    totp: Boolean,
    emailVerified: Boolean,
    email: String,
    attributes: {
        'custom:adviser_id': Array<any>,
        birthdate: Array<any>,
        'custom:adviser_code': Array<any>,
        gender: Array<any>,
        profile: Array<any>,
        name: Array<any>,
        phone_number: Array<any>,
        family_name: Array<any>,
        picture: Array<any>,
        'custom:advise_document': Array<any>
    },
    disableableCredentialTypes: Array<any>,
    requiredActions: Array<String>,
    notBefore: Number,
    access: {
        manageGroupMembership: Boolean,
        view: Boolean,
        mapRoles: Boolean,
        impersonate: Boolean,
        manage: Boolean
    }
}