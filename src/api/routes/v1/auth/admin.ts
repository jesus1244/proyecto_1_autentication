
import { Request, Response, Router, RequestHandler } from 'express'

import { SuccessOkResponse, InternalError, BadRequestError, AuthFailureError, ForbiddenResponse, dinamicResponse } from '../../../../helpers/api.response'
// import cognitoService from '../../../../services/cognito'
import { keyCloakServices } from '../../../../services/keycloak'

const router = Router()
//#region users


const countUsers: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.countUsers(token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Enable', result.count)
  } catch (error) {
    InternalError(res)
  }
  
}


const updateAttributesUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const { username, attributes } = req.body
    const result: any = await keyCloakServices.updateAttributesUser(username, attributes,token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Enable', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}
const disableUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.disableUser(username, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Disable', result.data)
  } catch (error) {
    InternalError(res)
  }
}
const enableUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.enableUser(username, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Enable', result.data)
  } catch (error) {
    InternalError(res)
  }
}
const adminSignUp: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username,name , family_name, password, enable, userAttributes, email } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.adminSignUpUser(username,name,family_name, password, email, enable, userAttributes, token)
    
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Sign up successfully', result.data)
  } catch (error) {
    InternalError(res)
  }
}

const deleteUser = async (req: Request, res: Response) => {

  try {
    const { username } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.deleteUser(username, token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Verify successfully', result.data)
  } catch (error) {
    InternalError(res)
  }
}

const getUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const { username } = req.body;
    const result: any = await keyCloakServices.getUser(username, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User obtained successfully', result.data[0])
  } catch {
    InternalError(res)
  }
}

const listUsers: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { attributesToGet, filter, limit, skip } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.listUsers(attributesToGet, filter, limit,skip, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}

//#endregion
//#region groups

const adminUpdateToGroup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { oldIdUsers ,newIdUsers, group } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.adminUpdateToGroup(oldIdUsers ,newIdUsers, group, token);
    console.log(result)
    return dinamicResponse(res,
       result?.error? result?.error:'success',
       result?.error? result.error: result.data,
       result.code)
  } catch (error) {
    InternalError(res)
  }
  
}

const RenameGroup = async (req: Request, res: Response) => {
  try {
    const { idGroup, newname } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.RenameGroup(idGroup, newname, token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Verify successfully', result.data)
  } catch (error) {
    InternalError(res)
  }
}

const GetMenberOfGroup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { exact, filter, limit, skip, idgroup } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.getMenberOfGroup(idgroup,exact, filter, limit,skip, token);
    
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}
const getGroupsOfUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.getGroupsOfUser(username,token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Enable', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}
const adminAddToGroup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username, group } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.adminAddToGroup(username, group, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Enable', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}

const adminremoveToGroup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username, group } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.adminRemoveToGroup(username, group, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Enable', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}

const deleteGroup  = async (req: Request, res: Response) => {

  try {
    const { idGroup } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.deleteGroup(idGroup, token)
    console.log('delete data final',result)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Verify successfully', result.data)
  } catch (error) {
    InternalError(res)
  }
}


const GetAllGroups: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { exact, filter, limit, skip } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.getAllGroups(exact, filter, limit,skip, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}
const UpdateDataGroup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { idGroup, attributes } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.UpdateDataGroup(idGroup,attributes, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}
const UpdateLinkedGroup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { idGroup, attributes } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.UpdateLinkedGroup(idGroup,attributes, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}

const GetSubmodulesOfGroup: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { idGroup } = req.params;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.GetSubmodulesOfGroup(idGroup , token);
    console.log(result)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}

//#endregion
//#region role

const GetRolesById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.GetGroupById(id, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}

const createRole: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.createRole(name , description, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Create role', result.data)
  } catch (error) {
    InternalError(res)
  }
}

const deleteRole = async (req: Request, res: Response) => {

  try {
    const { role } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.deleteRole(role, token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Verify successfully', result.data)
  } catch (error) {
    InternalError(res)
  }
}
const GetRoles: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { exact, filter, limit, skip } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.GetRoles(exact, filter, limit,skip, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}
//#endregion
//#region modules

const GetModule: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { exact, filter, limit, skip } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.GetModule(exact, filter, limit,skip, token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'List users successfully', result)
  } catch (error) {
    InternalError(res)
  }
}
const DeleteModule = async (req: Request, res: Response) => {
  try {
    const { module } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.deleteRole(module, token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Verify successfully', result.data)
  } catch (error) {
    InternalError(res)
  }
}
const CreateModuleMaster: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const { name, subModule } = req.body
    const result: any = await keyCloakServices.CreateModuleMaster(name, subModule,token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Module create', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}


const createModule: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const { name, subModule } = req.body
    const result: any = await keyCloakServices.createModule(name, subModule,token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Module create', result)
  } catch (error) {
    InternalError(res)
  }
  
}
//#endregion
//#region permisse

const createPermise: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name,description  } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const result: any = await keyCloakServices.createPermiso(name, description , token);
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Create role', result.data)
  } catch (error) {
    InternalError(res)
  }
}
const linkPermisseToGroups: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const { group, permisse, description} = req.body
    const result: any = await keyCloakServices.linkPermisseToGroups(group , permisse, token,description)
    console.log(result)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'permisse linked', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}
const linkPermisseToGroupsUpdate: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const { group, permisse, description} = req.body
    const result: any = await keyCloakServices.linkPermisseToGroupsUpdate(group , permisse, token,description)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'permisse linked', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}

//#endregion
//#region clientScope
const createClientScope: RequestHandler = async (req: Request, res: Response) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    const { name, description } = req.body
    const result: any = await keyCloakServices.createClientScope(name, description,token)
    if(result.code == 401)
      return AuthFailureError(res, result?.error);
    if(result.code == 403)
      return ForbiddenResponse(res, result?.error);
    
    result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'User Enable', result.data)
  } catch (error) {
    InternalError(res)
  }
  
}

//#endregion
// const respondToAuthChallenge: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const { username, password, session } = req.body;
//     const token =
//       req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
//     const result: any = await cognitoService.respondToAuthChallenge(username, password, session)
//     result?.error ? BadRequestError(res, result?.error) : SuccessOkResponse(res, 'Sign in successfully', result)
//   } catch (error) {
//     InternalError(res)
//   }
// }

//#region routes



router.post('/admin-signup', adminSignUp)

router.delete('/delete-user', deleteUser)
 

router.post('/admin-signup', adminSignUp)

router.delete('/delete-group', deleteGroup)
 

router.post('/list-users', listUsers)

router.post('/get-all-groups', GetAllGroups)

router.post('/enable-user', enableUser)

router.put('/disable-user', disableUser)

router.post('/adminAddToGroup', adminAddToGroup)

router.delete('/admin-remove-to-group', adminremoveToGroup)


router.put('/admin-update-to-group', adminUpdateToGroup)

router.post('/getGroupsOfUser', getGroupsOfUser)


router.post('/get-user-info', getUser)



router.post('/count-users', countUsers)


router.put('/update-attributes', updateAttributesUser)



router.put('/create-permise', createPermise)



router.post('/create-role', createRole)


router.post('/create-client-scope', createClientScope)


router.post('/create-module', createModule)




router.post('/link-Permisse-to-groups', linkPermisseToGroups)



router.put('/link-Permisse-to-groups-update', linkPermisseToGroupsUpdate)

router.post('/get-roles', GetRoles)



 router.put('/update-attibutes-group', UpdateDataGroup)

 router.put('/update-LinkedModules-group', UpdateLinkedGroup)


 router.post('/get-roles-by-id', GetRolesById)


 router.get('/get-submodule-of-group/:idGroup', GetSubmodulesOfGroup)

 router.post('/get-modules', GetModule)


 router.post('/get-menbersof-group', GetMenberOfGroup)


router.delete('/delete-role', deleteRole)

router.put('/rename-group', RenameGroup) 

router.post('/create-module-master', CreateModuleMaster)

//#endregion


export default router