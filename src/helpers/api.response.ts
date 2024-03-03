import { Response } from 'express'

enum StatusCode {
    SUCCESS = '20000',
    FAILURE = '40001',
    FORBIDDEN= '40003'
}

enum TypeErrors {
    TECNICO = 'Tecnico',
    BUSINESS = 'Negocio',
    NOTFOUND = 'Not Found',
    INTERNAL_ERROR = 'Internal error',
    BAD_REQUEST = 'Bad request',
    PAYLOAD_TOO_LARGE = 'Payload Too Large',
    UNAUTHORIZED = 'Authentication error',
    ECONNREFUSED = 'ECONNREFUSED',
    ECONNABORTED = 'ECONNABORTED',
    ECONNRESET = 'ECONNRESET'
}

enum ResponseStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    PAYLOAD_TOO_LARGE = 413,
    INTERNAL_ERROR = 500
}

export function evalueCode(numero: number) {
    // Convierte el número a una cadena para trabajar con los dígitos
    const numeroStr = numero.toString();

    // Obtiene el primer dígito convirtiendo la cadena nuevamente a número
    const primerDigito = parseInt(numeroStr.charAt(0), 10);

    // Comprueba si el primer dígito es 4 o 5
    if (primerDigito === 4 || primerDigito === 5) {
        return false;
    } else {
        return true;
    }
}

export const dinamicResponse = (res: Response, msg :string, data?: any, code= 200): Response => {
    
    let body;
    if(evalueCode(code))
    {
        body = {
            success: true,
            message: msg,
            StatusCode: code,
            code: msg
        }
    }else{
        body = {
            success: false,
            message: data?.error_description ?? data?.error,
            StatusCode: code,
            code: data?.codeFront?data.codeFront: data?.error
        }
    }
    
    if (data !== undefined) {
        if(data.data){
            Object.assign(body, { data: data.data })   
        }else{
            Object.assign(body, { data })   
        }
    }
    if(code== 204)return res.status(code).json(body);
    return res.status(code).json(body)
}
export const ForbiddenResponse = (res: Response, msg = 'FORBIDDEN', data?: unknown): Response => {
    const body = {
        success: true,
        message: msg,
        StatusCode: StatusCode.FORBIDDEN
    }
    if (data !== undefined) Object.assign(body, { data })
    return res.status(ResponseStatus.FORBIDDEN).json(body)
}
export const SuccessOkResponse = (res: Response, msg = 'OK', data?: unknown): Response => {
    const body = {
        success: true,
        message: msg,
        StatusCode: StatusCode.SUCCESS
    }
    if (data !== undefined) Object.assign(body, { data })
    return res.status(ResponseStatus.OK).json(body)
}

export const SuccessCreatedResponse = (res: Response, msg = 'OK', data?: unknown): Response => {
    const body = {
        success: true,
        message: msg,
        StatusCode: StatusCode.SUCCESS
    }
    if (data !== undefined) Object.assign(body, { data })
    return res.status(ResponseStatus.CREATED).json(body)
}

export const NotFoundError = (res: Response): Response => {
    return responseError(StatusCode.FAILURE, TypeErrors.NOTFOUND, ResponseStatus.NOT_FOUND, res)
}

export const AuthFailureError = (res: Response, message: string = TypeErrors.UNAUTHORIZED): Response => {
    return responseError(StatusCode.FAILURE, message, ResponseStatus.UNAUTHORIZED, res)
}

export const BadRequestError = (res: Response, message: string = TypeErrors.BAD_REQUEST): Response => {
    return responseError(StatusCode.FAILURE, message, ResponseStatus.BAD_REQUEST, res)
}

export const PayloadTooLargeError = (res: Response, message: string = TypeErrors.PAYLOAD_TOO_LARGE): Response => {
    return responseError(StatusCode.FAILURE, message, ResponseStatus.PAYLOAD_TOO_LARGE, res)
}

export const InternalError = (res: Response): Response => {
    return responseError(StatusCode.FAILURE, TypeErrors.INTERNAL_ERROR, 500, res)
}

export const responseError = (code: string, type: string, statusCode: number, res: Response): Response => {
    return res.status(statusCode).json({
        success: false,
        statusCode: code,
        message: type
    })
}