import { keycloakCli, keycloakPassword, keycloakUsername } from "../../config";
import { makePeticionUrlEncoded } from "./peticions";
import { sign_in_admin } from "./routes";

export const getCredentialAdmin= async()=>{
    const body = {
        client_id: keycloakCli,
        username: keycloakUsername,
        password: keycloakPassword,
        grant_type: 'password'
    }
    const result = await makePeticionUrlEncoded(sign_in_admin, 'POST', body);
    return result
}
