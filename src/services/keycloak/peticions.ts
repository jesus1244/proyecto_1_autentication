import { peticionHttpsUrlEncoded, peticionHttpsJson, options } from "../../helpers/peticcionsHttps";
import crypto from 'crypto';

import {
    keycloakCli,
    keycloakHost,
    keycloakPassword,
    keycloakRealm,
    keycloakUsername
  } from './../../config/index';
import { bodyQuery } from "../../interfaces/peticions.interfaces";
import { get_usrs } from "./routes";
export const makePeticionUrlEncoded = async (path: string, typePeticion: string, body: any, auth: string | null = null) =>{
    const params : options = {
        method: typePeticion,
        hostname: keycloakHost,
        path: path,
        port: 8443,
        headers : {
            'Content-Type': "application/x-www-form-urlencoded",
            Authorization: auth? auth:null      
        },
        maxRedirects: 20
    };  
    try {
        const result: any = await peticionHttpsUrlEncoded(params, body);
        if(result.error || result.errorMessage)
          return {error: result.error? result.error:result.errorMessage, code: result.code };
        if(result.data.error || result.data.errorMessage)
          return {error: result.data.error? result.data.error: result.data.errorMessage, code: result.code };
        return result
    } catch (err: any) {
        return { code: err.code, error: err.error };
    }
}
export const makePeticionJson = async (path: string, typePeticion: string, body: any, auth: string | null = null) =>{
    const params : options = {
        method: typePeticion,
        hostname: keycloakHost,
        port: 8443,
        path: path,
        headers : {
            'Content-Type': "application/json", 
            Authorization: auth? auth: null
        },
        maxRedirects: 20
    };
    try {
      
        const result: any = await peticionHttpsJson(params, body); 
        if(result.error || result.errorMessage)
          return {error: result.error? result.error:result.errorMessage, code: result.code };
        if(result.data?.error || result.data?.errorMessage)
          return {error: result.data.error? result.data.error: result.data.errorMessage, code: result.code };
        return result
    } catch (err: any) {
        console.log(err)
        return {error: err.error, code: err.code };
    }
}
export const makePeticionQuery =async (path: string, typePeticion: string, paramsQuery : bodyQuery, auth: string | null = null) => {
  const pathParam = paramsQuery.query.reduce((acc: any, item, index)=>{
    if(item.value){
      const palabra =encodeURIComponent(item.value);
      acc += `${item.key}=${palabra}`
      if(paramsQuery.query[index+1])
        acc += '&'
    }
    return acc
  }, '?')
  const params : options = {
    method: typePeticion,
    hostname: keycloakHost,
    path: path+pathParam ,
    port: 8443,
    headers : {
        'Content-Type': "application/json", 
        Authorization: auth? auth: null
    },
    maxRedirects: 20
  };
  try {
      const result: any=await  peticionHttpsJson(params, paramsQuery.body);
      if(result.error || result.errorMessage)
        return {error: result.error? result.error:result.errorMessage, code: result.code };
      if(result.data.error || result.data.errorMessage)
        return {error: result.data.error? result.data.error: result.data.errorMessage, code: result.code };
      return result
  } catch (err: any) {
      console.log(err)
      return { code: err.statusCode, error: err.error };
  }
}
export const updateAttributesUser = async (id: string, params: any, token:string) => {
  try {
    const result: any=await makePeticionJson(`${get_usrs}/${id}`, 'PUT', params, token);
    if(result.error || result.errorMessage)
      return {error: result.error? result.error:result.errorMessage, code: result.code };
    if(result.data?.error || result.data?.errorMessage)
      return {error: result.data.error? result.data.error: result.data.errorMessage, code: result.code };
    return result
  } catch (err: any) {
    console.log("try catch otp")
    console.log(err)
    return { code: err.code, error: err.message };
  }
}
