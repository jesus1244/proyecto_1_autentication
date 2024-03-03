import { keycloakRealm } from "../../config"

export const sign_up = `/admin/realms/${keycloakRealm}/users`
export const sign_in = `/realms/${keycloakRealm}/protocol/openid-connect/token`
export const sign_in_admin = `/realms/master/protocol/openid-connect/token`

export const refresh_token = `/realms/${keycloakRealm}/protocol/openid-connect/token`
export const revoke_token = `/realms/${keycloakRealm}/protocol/openid-connect/revoke`
export const delete_user = `/admin/realms/${keycloakRealm}/users`


export const role_route = `/admin/realms/${keycloakRealm}/roles`
export const role_by_id_route = `/admin/realms/${keycloakRealm}/roles-by-id`

export const get_usrs = `/admin/realms/${keycloakRealm}/users`
export const clienScope_route = `/admin/realms/${keycloakRealm}/client-scopes`
export const updateUserAttributes= `/admin/realms/${keycloakRealm}/users`
export const group_route= `/admin/realms/${keycloakRealm}/groups`
export const user_info_route= `/realms/${keycloakRealm}/protocol/openid-connect/userinfo`
export const count_users = `/admin/realms/${keycloakRealm}/users/count`
