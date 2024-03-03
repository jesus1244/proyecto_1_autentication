import crypto from 'crypto';

import axios from 'axios';

import {
  deployFront,
  deployURL,
    keycloakCli,
    keycloakCliScopes,
    keycloakPassword,
    keycloakUsername
  } from './../../config/index';
import { bodyQuery } from "../../interfaces/peticions.interfaces";
import { clienScope_route, count_users, delete_user, get_usrs, group_route, refresh_token, revoke_token, role_by_id_route, role_route, sign_in, sign_in_admin, sign_up, user_info_route } from "./routes";
import { makePeticionJson, makePeticionQuery, makePeticionUrlEncoded, updateAttributesUser } from "./peticions";
// import OTPService from '../otp';
import { sendEmailOtp } from '../../templates/sendEmailOtp';
import sendMail from '../sendMail';
import { sendUserPassword } from '../../templates/sendUserPassword';
import { setTimeout } from 'timers/promises';
import { sendEmailConfirm } from '../../templates/sendEmailConfirm';

import { get } from 'http';
import { getCredentialAdmin } from './adminMachine';
import { sendWelcome } from '../../templates/sendWelcome';
import { evalueCode } from '../../helpers/api.response';


const createModule= async (name: string, token: string) => {
  const params :any = {
    name:name, 
  };  

  try {
    const data: any = await makePeticionJson(`${group_route}` ,'POST',params, token)
    if(data.error){
      return data
    }
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}
const createModuleSubModule = async (idGroup: string,chield:string, token:string) =>{
  try {
    const dataM= await makePeticionJson(`${group_route}/${idGroup}/children` ,'POST',chield, token)
    return {data: dataM.data, code: dataM.code}
  }catch (err:any){
    return {code: err.code, error: err.message}
  }

}

const updateDataGroup = async (idGroup: string,chield:any, token:string) =>{
  try {
    const dataM = await makePeticionJson(`${group_route}/${idGroup}` ,'PUT',chield, token)
    return dataM
  }catch (err:any){
    return {code: err.code, error: err.message}
  }

}
const findMissing = async (array1: Array<string>, array2:Array<string>) =>{
  // Convertir cada array en un conjunto
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  // Encontrar los elementos que faltan en cada conjunto
  const missing1 = [...set2].filter(elemento => !set1.has(elemento));
  const missing2 = [...set1].filter(elemento => !set2.has(elemento));

  // Retornar los arrays de elementos faltantes
  return {missing1, missing2};
}

const createRole= async (name: string, token: string) => {
  const moduleName="ROLE-"+name
  const params :any = {
    name:moduleName, 
  }; 
  try {
    
    const data: any = await makePeticionJson(`${group_route}` ,'POST',params, token)
   return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}
const createPermiso= async (name: string,description:string, token: string) => {
  // const roleName="PERMISE-"+name
  const params :any = {
    name:name,
    description
  };  

  try {
    const data: any = await makePeticionJson(`${role_route}` ,'POST',params, token)
   return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}
const LinkRoleToGroups= async (idGroup: string, params:Array<string>, token: string) => {
  try {
    const data: any = await makePeticionJson(`${group_route}/${idGroup}/role-mappings/realm` ,'POST',params, token)
    if(data.error) {throw{code: data.code, error: "no puedes linkear"}}
      
    
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
  
}
const getGroup= async (nameGroup: string, token: string) => {
  try {
    let palabraCodificada = encodeURIComponent(nameGroup);
    const data: any = makePeticionJson(`${group_route}?search=${palabraCodificada}&briefRepresentation=false` ,'GET',null, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}

export const getUser= async (nameGroup: string, token: string) => {
  try {
    let palabraCodificada = encodeURIComponent(nameGroup);
    const user: any = await makePeticionJson(`${get_usrs}?username=${palabraCodificada}&exact=true` ,'GET',null, token)
    return user;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}
const getUserById= async (id: string, token: string) => {
  try {
    let palabraCodificada = encodeURIComponent(id);
    const user:any = await makePeticionJson(`${get_usrs}/${palabraCodificada}`, 'GET', null, token);
    return user;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}

const deleteGroup= async (idGroup: string, token: string) => {
  try {
    const data: any = makePeticionJson(`${group_route}/${idGroup}` ,'DELETE',null, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}


const deleteRole= async (roleID: string, token: string) => {
  try {
    const data: any = makePeticionJson(`${role_by_id_route}/${roleID}` ,'DELETE',null, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}


const getRoleMappinRealgroup= async (id: string, token: string) => {
  try {
    const data: any = makePeticionJson(`${group_route}/${id}/role-mappings/realm` ,'GET',null, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}
const deteleRoleMappingRealm= async (id: string, permisses: any, token: string) => {
  try {
    const data: any = makePeticionJson(`${group_route}/${id}/role-mappings/realm` ,'DELETE',permisses, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}

const getGroupByIp= async (idGroup: string, token: string) => {
  try {
    const data: any = await makePeticionJson(`${group_route}/${idGroup}` ,'GET',null, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }
}

const getRole= async (nameRole: string, token: string) => {
  try {
    // let palabraCodificada = encodeURIComponent(nameRole);
    const data: any = await makePeticionJson(`${role_route}/${nameRole}` ,'GET',null, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }

}


const getRoleForSearch= async (nameRole: string, token: string) => {
  try {
    let palabraCodificada = encodeURIComponent(nameRole);
    const data: any = await makePeticionJson(`${role_route}?search=${palabraCodificada}` ,'GET',null, token)
    return data;
  } catch (err: any) {
    return { code: err.code, error: err.message };
  }

}

const replaceObjectParam2 = async (attributes: any, attributesToReplace: any) => {
  for (const [key, value] of Object.entries(attributesToReplace)) {
    attributes[key] = value;
  }

  return attributes;
}


const replaceObjectParam = async (attributes:any, attributesToReplace: any) => {
  for (const [key, value] of Object.entries(attributesToReplace)){
    if(!attributes[key]){
      attributes[key] = [value]
    }
  }

  console.log(attributes)

  console.log(attributesToReplace)
  return attributes
}
  
const generatePassword = (length: number = 20, wishlist: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$') =>
  Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

export const keyCloakServices = {
    signUpUser: async (userName: string,name: string, family_name: string,  password: string = '', email:string ,enable: Boolean = false, userAttr: object, token: string) => {
      const TemporaryPassword = generatePassword();
      const passwordForUser = password ? password : TemporaryPassword
      
      const params :any = {
        username: userName,
        enabled: enable,
        firstName: name,
        lastName: family_name,
        email: email,
        emailVerified: false,
        credentials: [{
            type: "Password",
            userLabel: "password",
            value: passwordForUser
            }],
        attributes: userAttr,
        requiredActions: ['VERIFY_EMAIL']
      };  
      try {
        const result = await makePeticionJson(sign_up, 'POST', params, token);
        if(result.error || result.errorMessage) return { code: result.code, error: result.error.error  }
        
        let user= await getUser(userName, token);
        let link= `${deployURL}/api/auth/keycloak/confirmEmail/${user.data[0].id}`
        const template = sendEmailConfirm(link)
        sendMail({ to: email, subject: 'Confirmacion de correo', html: template })
        return result
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    deleteUser: async (userName: string, token: string) => {
      try {
        const user: any = await getUser(userName, token)
        if(!user.error)
          return { code: user.code, error: user.error };
        if(!user.data[0])
          return { code: 404, error: 'the user don´t exist' };
          

        const result = await makePeticionJson(`${delete_user}/${user.data[0].id}` ,'DELETE',null, token);
        
        return result
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    deleteRole: async (id: string, token: string) => {
      try {
        const groupData: any = await getGroupByIp(id,token)
        if(!groupData.data)
          return { code: groupData.code, error: 'the role don´t exist' };
        const result= await makePeticionJson(`${group_route}/${groupData.data.id}` ,'DELETE',null, token);
        return result
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    RenameGroup: async (idgroup: string, newname: string, token: string) => {
      try {
        const groupData: any = await makePeticionJson(`${group_route}/${idgroup}` ,'GET',null, token)
        
        let params = {
          name: newname
        }
        if(!groupData.data)
          return { code: groupData.code, error: 'the role don´t exist' };
        const result= await makePeticionJson(`${group_route}/${groupData.data.id}` ,'PUT',params, token);
        return result
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    signInUser: async (userName: string, password: string) => {
        const body = {
            client_id: keycloakCliScopes,
            username: userName,
            password: password,
            grant_type: 'password'
        }
        try {
          const result=await makePeticionUrlEncoded(sign_in, 'POST', body);
          return result
        } catch (err: any) {
            return { code: err.code, error: err.data.message };
        }
    },
    refreshToken: async (refreshToken: string) => {
      const params = {
            client_id: keycloakCli,
            refresh_token: refreshToken,
            grant_type: 'refresh_token'
        
      };
      try {
        return await makePeticionUrlEncoded(refresh_token, 'POST', params);
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    revokeToken: async (access_token: string) => {
      const params = {
        client_id: keycloakCli,
        token: access_token
      };
      try {
        return await makePeticionUrlEncoded(revoke_token, 'POST', params);
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    adminSignUpUser: async (userName: string,name: string, family_name: string,  password: string = '', email:string ,enable: Boolean = false, userAttr: object, token: string) => {
      const TemporaryPassword = generatePassword();
      const passwordForUser = password ? password : TemporaryPassword
      
      const params :any = {
        username: userName,
        enabled: enable,
        firstName: name,
        lastName: family_name,
        email: email,
        emailVerified: true,
        credentials: [{
            type: "Password",
            userLabel: "password",
            value: passwordForUser
            }],
        attributes: userAttr
      };  
      try {
        const result = await makePeticionJson(sign_up, 'POST', params, token);
        if(result.error || result.errorMessage) return { code: result.code, error: result.error.error  }
        const template = sendUserPassword(userName, passwordForUser)
        sendMail({ to: email, subject: 'Codigo de verificación', html: template })
        return result
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    listUsers: async (attributesToGet: string | null, filter: string, limit: string,skip : string, token: string) => {
      let attriburesQuery = attributesToGet?.replace(' ', '%20')
      const params: bodyQuery = {
        query: [
           {
            key: "search",
            value: filter
            
          },
          {
            key: "first",
            value: skip
          },
          {
            key: "q",
            value: attriburesQuery?attriburesQuery:''
          },
          {
            key: "max",
            value: limit
          }
        ],
        body : null
      }
      try {
        const users:any = await makePeticionQuery(get_usrs, 'GET', params, token);
        const count: any = await makePeticionJson(`${count_users}?search=${filter}` ,'GET',null, token)
        if(users.error)
          return { code: users.code, error: users.error };
        if(count.error)
          return { code: count.code, error: count.error };
        const parseData = await Promise.all(users.data?.map(async(user: any) => {
          const sesion:any = await makePeticionQuery(`${get_usrs}/${user.id}/sessions`, 'GET', params, token);
          const groups:any = await makePeticionJson(`${get_usrs}/${user.id}/groups`, 'GET', null, token);

          let listgroup :any=[]
          groups.data.forEach((element:any) => {
            const inittial=element.name.split("-")[0];
            if(inittial == "ROLE")
            {
              listgroup.push(element)
            }
          });
          user.roles = listgroup
          // Ordenar las sesiones por fecha de último acceso en orden descendente
          const sessionsSorted = sesion.data.sort((a: any, b: any) => b.lastAccess - a.lastAccess);
          // Verificar si hay sesiones disponibles
          if (sessionsSorted.length > 0) 
          {
            // Obtener la última sesión abierta (primera sesión en la lista ordenada)
            user.lastSession = sessionsSorted[0];
          }
          else
          {
            user.lastSession = null
          }
          return user;
        }))

        return { users: parseData, count: count.data, code: users.data};
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    getAllGroups: async (exact: boolean | null, filter: string, limit: string,skip : string, token: string) => {
      const params: bodyQuery = {
        query: [
           {
            key: "search",
            value: filter
            
          },
          {
            key: "first",
            value: skip
          },
          {
            key: "exact",
            value: exact? 'true':'false'
          },
          {
            key: "max",
            value: limit
          },
          {
            key: "briefRepresentation",
            value: "false"
          }
        ],
        body : null
      }
      try {
        const groups:any = await makePeticionQuery(group_route, 'GET', params, token);
        if(groups.error)
          return { code: groups.code, error: groups.error };
        return { groups:groups.data, code:groups.code};
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    getMenberOfGroup: async (idgroup: string,exact: boolean | null, filter: string, limit: string,skip : string, token: string) => {
      const params: bodyQuery = {
        query: [
           {
            key: "search",
            value: filter
            
          },
          {
            key: "first",
            value: skip
          },
          {
            key: "exact",
            value: exact? 'true':'false'
          },
          {
            key: "max",
            value: limit
          },
          {
            key: "briefRepresentation",
            value: "false"
          }
        ],
        body : null
      }
     
      try {
        const menbers:any = await makePeticionQuery(`${group_route}/${idgroup}/members`, 'GET', params, token);
        // const count:any = await makePeticionQuery(`${group_route}/${groups[0].id}/members/count`, 'GET', params, token);
        // console.log(count)
        if(menbers.error)
          return { code: menbers.code, error: menbers.error };
        return {menbers:menbers.data};
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    GetRoles: async (exact: boolean | null, filter: string, limit: string,skip : string, token: string) => {
      let fill="ROLE-"
      if(filter || filter != ""){
        fill+=filter
      }
      const params: bodyQuery = {
        query: [
           {
            key: "search",
            value:fill
          },
          {
            key: "first",
            value: skip
          },
          {
            key: "exact",
            value: exact? 'true':'false'
          },
          {
            key: "max",
            value: limit
          },
          {
            key: "briefRepresentation",
            value: "false"
          }
        ],
        body : null
      }
      try {
        const groups:any = await makePeticionQuery(group_route, 'GET', params, token);
        const count:any = await makePeticionQuery(`${group_route}/count`, 'GET', params, token);
        if(groups.error)
          return { code: groups.code, error: groups.error };
        return {roles:groups.data,...count.data};
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    GetGroupById: async (id: string, token:string)=>{
      try {
        const data= await getGroupByIp(id, token)
        return data  
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
      
    },
    GetModule: async (exact: boolean | null, filter: string, limit: string,skip : string, token: string) => {
      let fill="MODULE-"
      if(filter || filter != ""){
        fill+=filter
      }
      const params: bodyQuery = {
        query: [
           {
            key: "search",
            value:fill
          },
          {
            key: "first",
            value: skip
          },
          {
            key: "exact",
            value: exact? 'true':'false'
          },
          {
            key: "max",
            value: limit
          },
          {
            key: "briefRepresentation",
            value: "false"
          }
        ],
        body : null
      }
      try {
        const groups:any = await makePeticionQuery(group_route, 'GET', params, token);
        const count:any = await makePeticionQuery(`${group_route}/count`, 'GET', params, token);
        if(groups.error)
          return { code: groups.code, error: groups.error };
        return {modules:groups.data, ...count.data};
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    createModule: async (name: string,subModule:Array<any>, token: string) => {
      let dataMapping: any= null
      const moduleName="MODULE-"+name
      const params :any = {
        name:moduleName, 
      };  

      try {
        const data: any = await makePeticionJson(`${group_route}` ,'POST',params, token)
        if(data.error){
          return data.data
        }
        const dataRoute: any = await makePeticionJson(`${group_route}?search=${moduleName}` ,'GET',null, token)
        subModule.forEach(async element=>{
          const submodelName="SUBMODULE-"+name+"-"+element
          const chield :any = {
            name:submodelName
          };
          const dataM= await makePeticionJson(`${group_route}/${dataRoute[0].id}/children` ,'POST',chield, token)
          dataMapping +=dataM.data
        })
        return {dataRoute:dataRoute.data,dataMapping};
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    createRole: async (name: string, description: string, token: string) => {
      const moduleName="ROLE-"+name
      const params :any = {
        name:moduleName, 
        attributes:{
          description: 
          [
            description
          ]
        }
      }; 
      try {
        
        const data: any = await makePeticionJson(`${group_route}` ,'POST',params, token)
       return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    createPermiso: async (name: string,description:string, token: string) => {
      const roleName="PERMISE-"+name
      const params :any = {
        name:roleName,
        description
      };  

      try {
        const data: any = await makePeticionJson(`${role_route}` ,'POST',params, token)
       return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    linkPermisseToGroups: async (group: string, role:Array<string>, token: string,description:string ='') => {
      try {
        const dataRoute: any = await getGroup(group, token)
        if(dataRoute.data[0]== null){throw { code: dataRoute.code, error: "don't exist the group" }}
        let paramsList : Array<any> = []
        const data = await Promise.all(role.map( async(element)=>{
          const dataRoles: any = await getRole(element, token)
          if(dataRoles.data== null){throw { code: dataRoles.code, error: "don't exist the role" }}
          
          const params :any = {
            id: dataRoles.data.id,
            name: element,
            clientRole: false,
            composite: true,
            description
          };
          paramsList.push(params)
        }))
        const datanose = await makePeticionJson(`${group_route}/${dataRoute.data[0].id}/role-mappings/realm` ,'POST',paramsList, token)
        if(datanose.error) {throw{code: datanose.code, error: "no puedes linkear"}}
          
        return datanose;
      } catch (err: any) {
        console.log(err)
        return { code: err.code, error: err.message };
      }
    },
    linkPermisseToGroupsUpdate: async (group: string, role:Array<string>, token: string,description:string ='') => {
      try {
        const dataRoute: any = await getGroup(group, token)
        if(dataRoute.data[0]== null){throw { code: dataRoute.code, error: "don't exist the group" }}
        
        const dataRoleMapping =  await getRoleMappinRealgroup(dataRoute.data[0].id, token)
        let paramsList : Array<any> = []
        const data = await Promise.all(role.map( async(element)=>{
          const dataRoles: any = await getRoleForSearch(element, token)
          if(dataRoles.data== null){throw { code: dataRoles.code, error: "don't exist the role" }}
          
          const params :any = {
            id: dataRoles.data[0].id,
            name: element,
            clientRole: false,
            composite: true,
            description
          };
          paramsList.push(params)
        }))
        const detelePermisse= await deteleRoleMappingRealm(dataRoute.data[0].id,dataRoleMapping.data, token)
        if(detelePermisse.error){ throw { code: detelePermisse.code, error: detelePermisse.error }}

        const datanose = await makePeticionJson(`${group_route}/${dataRoute.data[0].id}/role-mappings/realm` ,'POST',paramsList, token)
        if(datanose.error) {throw{code: datanose.code, error: "no puedes linkear"}}
          
        return datanose;
      } catch (err: any) {
        console.log(err)
        return { code: err.code, error: err.message };
      }
    },
    deleteGroup: async (id: string, token: string) => {
      try {
        const dataRoute: any = await getGroupByIp(id, token)
        // console.log(dataRoute)
        if(dataRoute.data== null){throw { code: dataRoute.code, message: "don't exist the group" }}
        const data= await Promise.all(dataRoute.data.subGroups.map(async (subgroups: any)=>{
          // console.log(subgroups)
          await Promise.all(subgroups.realmRoles.map(async (permisse: any)=>{
            // console.log(permisse)
            const dataPermisse= await getRoleForSearch(permisse, token)
            const responseDelete= await deleteRole(dataPermisse.data[0].id, token)
            if(responseDelete.error){throw { code: dataRoute.code, message: "error to delete permisse" }}
          })) 
        })) 
        const dataRoleMapping =  await deleteGroup(id, token)
        
        return dataRoleMapping;
      } catch (err: any) {
        console.log(err)
        return { code: err.code, error: err.message };
      }
    },
    CreateModuleMaster: async (name: string,subModule:Array<any>, token: string) => {
      try {
        const moduleName="MODULE-"+name
        const module = await createModule(moduleName, token)
        if(module.error){
          return module
        }
        const dataRoute: any = await getGroup(moduleName, token)
        
        let dataMapping: any
        let namesSubModules: Array<string> = []
        const data= await Promise.all(subModule.map(async element=>{
          const submodelName="SUBMODULE-"+name+"-"+element
          namesSubModules.push(submodelName) 
          const chield :any = {
            name:submodelName
          };
          const moduleSunmodules = await createModuleSubModule(dataRoute.data[0].id,chield, token)
          if(moduleSunmodules.error){
            throw moduleSunmodules
          }
          dataMapping +=moduleSunmodules.data
          return dataMapping;
        }))
        const dataGroupLinkedWithSubmodule: any = await getGroup(moduleName, token)
        // let j=0
        // let i=0
        // while(i < dataGroupLinkedWithSubmodule.data[0].subGroups.length){
        //   const prefixPermise= ["VIEW", "CREATE","UPDATE", "DELETE"]
        //   let AllPermiseArray :any=[]
        //   const dataSubmodule = dataGroupLinkedWithSubmodule.data[0].subGroups[i]
        //   console.log('prefixPermise.length => ', prefixPermise.length)
        //   while(j < prefixPermise.length){
        //     const roleName="PERMISE-"+name+"-"+prefixPermise[j]+"-"+dataSubmodule.name
        //     console.log('roleName => ', roleName)
        //     namesSubModules.push(roleName) 
        //     const permiseSubmodules = await createPermiso(roleName , '', token)
        //     console.log('permiseSubmodules => ', permiseSubmodules)
        //     if(permiseSubmodules.error){
        //       throw permiseSubmodules
        //     }
        //     const dataRoles: any = await getRole(roleName, token)
        //     console.log('dataRoles => ', dataRoles)
        //     if(dataRoles.data== null|| dataRoles.error){throw { code: dataRoles.code, error: "don't exist the role" }}
        //     const params :any = {
        //       id: dataRoles.id,
        //       name: roleName,
        //       clientRole: false,
        //       composite: true,
        //       description: ''
        //     };  
        //     AllPermiseArray.push(params)
        //     j++
        //   }
        //   j=0
        //   const dataLink= await LinkRoleToGroups(dataSubmodule.id, AllPermiseArray, token)       
        //   i++
        // }

        const dataPermisse= await Promise.all(dataGroupLinkedWithSubmodule.data[0].subGroups.map(async (element: any)=>{
          const prefixPermise= ["VIEW", "CREATE","UPDATE", "DELETE"]
          let AllPermiseArray :any=[]
          const allData= await Promise.all(prefixPermise.map(async (permi)=>{
            const roleName="PERMISE-"+name+"-"+permi+"-"+element.name
            const permiseSubmodules = await createPermiso(roleName , '', token)
            if(permiseSubmodules.error){
              throw permiseSubmodules
            }
            namesSubModules.push(roleName) 
            
            return roleName
            }
          ))
          const allDataPermise= await Promise.all(allData.map((async (rolename)=>{
            const dataRoles: any = await getRoleForSearch(rolename, token)
            // const dataRoles: any = await getRole(rolename, token)
            if(dataRoles.data[0]== null|| dataRoles.error){throw { code: dataRoles.code, error: "don't exist the role" }}
            const params :any = {
              id: dataRoles.data[0].id,
              name: rolename,
              clientRole: false,
              composite: true,
              description: ''
            };  
            AllPermiseArray.push(params)
            
          })))
          console.log(AllPermiseArray)
          const dataLink= await LinkRoleToGroups(element.id, AllPermiseArray, token)        
        }))
        const resp: any = await getGroup(moduleName, token)
        // const resp: any = await makePeticionJson(`${group_route}?search=${moduleName}` ,'GET',null, token)
        return  {data: resp.data[0],code:201}
      } catch (err: any) {
        console.log(err)
        return { code: err.code, error: err.message };
      }
    },

    UpdateDataGroup: async (id: string,attributes:Array<string>, token: string) => {
      const dataGroup= await getGroupByIp(id,token)
      dataGroup.data.attributes.modulesLinked = attributes
      try {
        const data: any = await updateDataGroup(id ,dataGroup.data, token)
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },

    
    UpdateLinkedGroup: async (id: string,attributes:Array<string>, token: string) => {
      
      try {
        const dataGroup= await getGroupByIp(id,token)
        let arrayAttributesWithName: any= []
        const nose= await Promise.all(attributes.map(async (element)=>{
          const dataSubModule= await getGroupByIp(element,token)
          console.log(dataSubModule)
          if(dataSubModule.error){ throw dataSubModule}
          arrayAttributesWithName.push(JSON.stringify({name: dataSubModule.data.name, id: dataSubModule.data.id}))
          
        }))
        
        dataGroup.data.attributes.modulesLinked = arrayAttributesWithName
        const data: any = await updateDataGroup(id ,dataGroup.data, token)
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.error };
      }
    },
    GetSubmodulesOfGroup: async (id: string, token: string) => {
      try {
        const dataGroup= await getGroupByIp(id,token)
        console.log(dataGroup)
        
        if(dataGroup.data.attributes.modulesLinked[0] == null) {throw {error: "don't have submodules associated" ,code: dataGroup.code}}
        let listSubmodules: any= []
        const nose= await Promise.all(dataGroup.data.attributes.modulesLinked.map(async (element: string)=>{
          const dataSubModule= await getGroupByIp(element,token)
          if(dataSubModule.error){ throw dataSubModule}
          listSubmodules+= dataSubModule.data
          return dataSubModule.data
        }))
        return {data: nose, code: 200};
      } catch (err: any) {
        return { code: err.code, error: err.error };
      }
    },
    createClientScope: async (name: string,description:string, token: string) => {
      const params :any = {
        name:name,
        description:description,
        attributes:{
          "consent.screen.text":"",
          "display.on.consent.screen":"true",
          "include.in.token.scope":"true",
          "gui.order":""
        },
        type:"none",
        protocol:"openid-connect"
      };  

      try {
        const data: any = await makePeticionJson(`${clienScope_route}` ,'POST',params, token)
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    scopeMappingClient: async (name: string,description:string, token: string) => {
      const params :any = {
        realmMappings:[
          {
          clientRole: false,
          composite: false,
          containerId: "47af31c3-998d-47cc-a693-d1a69f7238f7",
          description: description,
          id: "601141d6-2454-47d2-9956-73bacbb4000e",
          name: name
        }]
      };  

      try {
        const data: any = await makePeticionJson(`${clienScope_route}` ,'POST',params, token)
        console.log(data)
        return data.data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    
    disableUser: async (username: string, token: string) => {
      const user: any = await getUser(username, token)
      if(!user.data[0])
        return { code: user.code, error: 'the user don´t exist' };
      const params = {
          enabled: false
      }
      try {
        const data = await updateAttributesUser(user.data[0].id, params, token);
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    enableUser: async (username: string, token: string) => {
      const user: any = await getUser(username, token)
      if(!user.data[0])
        return { code: user.code, error: 'the user don´t exist' };
      const params = {
          enabled: true
      }
      try {
        const data = await updateAttributesUser(user.data[0].id, params, token);
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    adminAddToGroup: async (idusers: Array<string>, idgroup: string, token:string) => {
      try {
        await idusers.forEach(async (element) =>{
            const data:any = await makePeticionJson(`${get_usrs}/${element}/groups/${idgroup}`, 'PUT', null, token);
            if(data.error) throw data;
            return data
        })
        return {data: null, code: 204};

      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    adminRemoveToGroup: async (idusers: Array<string>, idgroup: string, token:string) => {
      try {
        await idusers.forEach(async (element) =>{
            const data:any = await makePeticionJson(`${get_usrs}/${element}/groups/${idgroup}`, 'DELETE', null, token);
            if(data.error) throw data;
            return data;
        })
        return {data: null, code: 204};

      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    adminUpdateToGroup: async (oldIdUsers: Array<string>,newIdUsers: Array<string>, idgroup: string, token:string) => {
      try {
        const { missing1, missing2}= await findMissing(oldIdUsers, newIdUsers)
        const datacreate= await Promise.all(missing2.map(async (element) =>{
          const data:any = await makePeticionJson(`${get_usrs}/${element}/groups/${idgroup}`, 'DELETE', null, token);
          if(data.error) throw data;
          return data;
        })) 
        const dataDelete=await Promise.all(missing1.map(async (element) =>{
          const data:any = await makePeticionJson(`${get_usrs}/${element}/groups/${idgroup}`, 'PUT', null, token);
          if(data.error) throw data.err;
          return data
        })) 

        return {data: {datacreate,dataDelete}, code: 204};;
      } catch (err: any) {
        console.log(err)
        return { code: err.code, error: err.message};
      }
    },
    getGroupsOfUser: async (username: string, token: string) => {
      const user: any = await getUser(username, token)
      if(user.error)
        return { code: user.code, error: user.error };
      try {
        const data:any = await makePeticionJson(`${get_usrs}/${user.data[0].id}/groups`, 'GET', null, token);
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    adminGetUser: async (userName: string) => {
      
      try {
        const body = {
            client_id: keycloakCli,
            username: keycloakUsername,
            password: keycloakPassword,
            grant_type: 'password'
        }
        const result = await makePeticionUrlEncoded(sign_in_admin, 'POST', body);
        const user: any = await getUser(userName, `Bearer ${result.data.access_token}`)

        if(!user.data[0] || user.error)
          return { code: 401, error: "user dont found" };
        return user.data[0]
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    getUserToken: async (token: string) => {
      try {
        
        const user: any = await makePeticionJson(user_info_route ,'GET',null, `Bearer ${token}`)
        return user
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    getUserTokenAllInfo: async (accessToken: string, skip= 0 ,limit = 1000) => {
      try {
        
        const user: any = await makePeticionJson(user_info_route ,'GET',null, `Bearer ${accessToken}`)
        if(user.error){
          return user
        }
        const body = {
            client_id: keycloakCli,
            username: keycloakUsername,
            password: keycloakPassword,
            grant_type: 'password'
        }
        const result = await makePeticionUrlEncoded(sign_in_admin, 'POST', body);
        const userFullData: any = await getUserById(user.data.sub, `Bearer ${result.data.access_token}`)
        const groups:any = await makePeticionJson(`${get_usrs}/${user.data.sub}/groups?first=${skip}&max=${limit}&search=ROLE&briefRepresentation=false`, 'GET', null, `Bearer ${result.data.access_token}`);
        // groups.data.forEach((ele: any) =>{
        //   ele.attributes.modulesLinked = undefined
        // })
        userFullData.data.groups = groups.data
        // console.log(userFullData)
        return userFullData
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    getUser :  async (username: string, token: string) => {
      try {
        const user: any = await getUser(username, token)
      if(!user.data[0])return { code: 401, error: 'the user don´t exist' };
      return user
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    adminUpdateAttributesUserOTP :async (username: string, password: string) => {
      try {
          const body = {
            client_id: keycloakCli,
            username: keycloakUsername,
            password: keycloakPassword,
            grant_type: 'password'
        }
        const result = await makePeticionUrlEncoded(sign_in_admin, 'POST', body);
        const user: any = await getUser(username, `Bearer ${result.data.access_token}`)
        if(user.error) return { code: user.code, error: user.error };
        if(!user.data[0]) return { code: user.code, error: 'the user don´t exist' };
        const params= {
          credentials: [
              {
                  type: "Password",
                  userLabel: "password",
                  value: password
              }
          ]
        }
        const data = await updateAttributesUser(user.data[0].id, params, `Bearer ${result.data.access_token}`);
      
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    countUsers :  async (token: string) => {
      try {
        const user: any = await makePeticionJson(count_users ,'GET',null, token)
        
      return {count: user.data, code: user.code}
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    updateAttributesUser :async (username: string, attributes: object, token: string) => {
      try {
        const user: any = await getUser(username, token)
        if(user.error) return { code: user.code, error: user.error };
        if(!user.data[0]) return { code: 401, error: 'the user don´t exist' };
        
        let result = await replaceObjectParam(user.data[0].attributes, attributes)
        
        const params= {
          
          attributes: result
        }
        
        const data = await updateAttributesUser(user.data[0].id, params, token);
        if(data.error ) return { code: data.code, error: "problemas al guardar" } 
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    updateAttributesUser2 :async (username: string, attributes: object, token: string, email:undefined|null|string, firstName:undefined|null|string, lastName: undefined|null|string) => {
      try {
        const user: any = await getUser(username, token)
        if(user.error) return { code: user.code, error: user.error };
        if(!user.data[0]) return { code: 401, error: 'the user don´t exist' };
        let result = await replaceObjectParam2(user.data[0].attributes, attributes)
        let params: any= {
          
          attributes: result
        }
        if(email) params.email= email;
        if(firstName) params.firstName= firstName;
        if(lastName) params.lastName= lastName;
        const data = await updateAttributesUser(user.data[0].id, params, token);
        if(data.error ) return { code: data.code, error: "problemas al guardar" } 
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },   
    confirmEmail: async (idUser: string, token: string) => {
     
      try { 
        const user= await getUserById(idUser, token);
        const params = {
          enabled:true,
          emailVerified:true,
          requiredActions: []
        }
        const data = await updateAttributesUser(idUser, params, token);
        const template= await sendWelcome(deployFront)
        await sendMail({ to: user.data.email, subject: 'Bienvenido a Xplorer', html: template })
        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    },
    changePassword: async (accessToken: string, newPassword: string, oldPassword: string) => {
      try {
        const result = await keyCloakServices.getUserToken(accessToken);
        const login = await keyCloakServices.signInUser(result.data.preferred_username, oldPassword);
        if(!evalueCode(login.code)) throw {code: login.code, message: "OldPassword don't macth", codeFront: "invalid_grant"};
        const data = await keyCloakServices.adminUpdateAttributesUserOTP(result.data.preferred_username, newPassword);

        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message, codeFront: err.codeFront  };
      }
    },
    changeAttributes : async (accessToken: string, attributes: object, email:undefined|null|string, firstName:undefined|null|string, lastName: undefined|null|string) => {

      try {
        if (!attributes) {
          throw new Error("El objeto de atributos es requerido.");
        }
        const result = await keyCloakServices.getUserToken(accessToken);

        const Credentials: any = await getCredentialAdmin();
        const token= `Bearer ${Credentials.data.access_token}`

        const data = await keyCloakServices.updateAttributesUser2(result.data.preferred_username, attributes, token, email, firstName, lastName);

        return data;
      } catch (err: any) {
        return { code: err.code, error: err.message };
      }
    }
}