export const something= async(something: string)=>{
    console.log(something)    
}

//-------------------------------schemes shared
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     singup:
 *       type: object
 *       properties:
 *         username: 
 *           type: string
 *           example: '10018187238'
 *         password: 
 *           type: string
 *           example: 'dCwfbx3!M17M'
 *         userAttributes:
 *           type: array
 *           example: '[{"Name": "email","Value": "example@gmail.com"}, {"Name": "phone_number","Value": "+573045715763"}, {"Name": "gender","Value": "male"}, {"Name": "birthdate","Value": "02-03-2002"}, {"Name": "name","Value": "luigi bros"}, {"Name": "family_name","Value": "mario"}, {"Name": "profile","Value": "1"}, {"Name": "custom:adviser_code","Value": "006"}, {"Name": "custom:adviser_id","Value": "206"}, {"Name": "custom:advise_document","Value": "1052957192"}, {"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"}]'
 *     login:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Sign in successfully"
 *         StatusCode:
 *           type: string
 *           example: 20000
 *         data:
 *           type: object
 *           properties:
 *             ChallengeParameters:
 *               type: object
 *             AuthenticationResult:
 *               type: object
 *               properties:
 *                 AccessToken:
 *                   type: string
 *                   example:  "eyJraWQiOiJYWk5kWE1rbHV4UWhJcHdhanZYQWhTMHBEd3Jxb3R3VDhuXC9MVjkyNDJKdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV8wRFF6aUw2VGgiLCJjbGllbnRfaWQiOiIyazAwMHEycnA5NjEzYW5zNnJxYzJnbW9hNiIsIm9yaWdpbl9qdGkiOiJkMmFiN2EzMC04ZmQ3LTQ5ZWQtODY3OS03MTFkNWJhMTVlZmUiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiIyZmI0ZTI5MS0xNmMyLTQ1YzgtYjkyNy00YzBmYmI5ODIxMjkiLCJ1c2VybmFtZSI6IjEyMzQwOTcyMDYifQ.mq1AHVua8YfGgSosAHIsApilOnYN4U-eLi9Uj3GGjIUGRUybW4yaqjQAEVqmCHBZo5EbBoebj2V6B1QJp204m1pVMdQiCgCiQDTuCvytLIWvIJhMfri41LlnHOk3nsL0X7y6gFDSVQFzHHdR5orxyzN70tIxFfdU6uTzfaSei3zcEIkptVU4-PzEs5yKcesTY-AFbI3suyCIaGm0nNp3nnUZN7GdGNq9ypyK08NCO_rUHJFpkFdF2v1GksPT3Ra-T4ZkJ9lEbEu4_UCjvWQZbFgEcMgaYALtYkQ74Uy1VzAtpn7yPndnJWqMH8yGv3wRwGBUda0yNjPUHty7sp7mqg"
 *                 ExpiresIn: 
 *                   type: integer
 *                   example: 3600
 *                 TokenType:
 *                   type: string
 *                   example: "Bearer"
 *                 RefreshToken:
 *                   type: string
 *                   example:  "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.OIgXS5jGWGOkrd0wU_uyV1H_b3rDeWXb3zWNvoZZRM-S51slbZKK49BHMP3krmBqZPABhuyGBiu04vpBfiCJZLodM_VlweUIe7Oyp5EmH5kLoaePGJimwQ2f2zPgZC-cfIEqdngMjgbHNZh9svLETBjuclsUbQKn5CdJoxh6DfET_2spGnmVEF2yeSzot5jet-cuXcHzLd98eijHS-lV8uGC0j8zVY6oaFZejYzBv6qjEWZo4noCglN4Qt-D63i6ouQKCBzlioLRzl6GEge4cec79Yy_J0Vtn8mf_UD4x7r-vnWq4dR1lbG2J664APy2UbWsBYaLqfdq8gbKIt0QhA.FMd8_kbthfEkAjVK.9S8UkrpHdbPZhQB3D7nyoVD0S45I8kz_aXshyT7HRyoDiKx_UU0egPlrp5pS_NFt6QNkJDlM72WKyC9Mu0hOZHOLkBMI7z3jThL-L53DWe_7XQuzQOoledEgpSQIODB1P72tjI-MtUzDYbeiMHTtjcoQ2KMC-AWxpkATv4IAsFCteWKfSCmUOlIlOEfNYbsGWcZzc43WV_3QAgrhX-5ca2zoFbMFFCOPdJQ750pfx_5IDarV8F4Hctr81pPksN7XCmHMFOWZslRVi8xRc3fqmwv_ZRZI08RDtrow3X23cSpgFjDqjO17hGYGLPntUeE2asQNNnkzOX3pETt20l1ORoMZW_0HYWzQpHuKsG3Hfm32JfLFIai0h3teohs_HF2GU3mHRaUQr0dF1SSTNv7AlWCfdg9nn-qKcbXjQoSN-1Y58cXh-HsmN_yc0KMjshJbsn1Us5Q5g6H5BthvkvIFbmfLt7uOMKXUX5QhZpW7rhhc_tLYDHQ0l7tPym3tfgw4uULJGKYqDBk43fhaFq7m_W_uyCPg389zuKOS7rpDeSUW-oZSn7PtoxmBgphPnM_vNxQqkYm3ncHTVvtMM2CYN1lrGtbGbcGVQxxXJ5xw6185zrph1LCJmUc71CzTS5Mw6ss1oVzQf-DzhVwQADemaTeqMUynpYnFIJPknIU6SquY2STD3_IE0RRjaI54b5lvTKdcKzFVMqQpFOt-DnOii8WWE1324Wd-zmNO40Ck4njI0pKrdcPukvb1FjHHv-A1QUbqlgLDz2qR2rvD2vkhz-f3t-p01gFlg3mT1ZKET3tvpDf8fVykWp0ALeYlknqCkwRe1W38wozYcu5hiLzOzhMoxkbdnX31ter3Z8iDVK1fK-jUBKQSrpnrBaV7-jqp0WvagqVCkBKgTSenuz4q3eZL-hKZtTEJsKeFsUzDvopKMi4NAJO5OtwTSQWXy61jjDbjEPQ7hx3P68_9C4ZMEz2-pdzKZLYZsD1nEDUXTlHwdwurQ7VupMbvBCyzmkxF7T0QdlKAlhl9MEvqoM0tkFEIPOPTz0MuiEMSqTLNcVPYEs-QtIpf61DUREGtxzYdMgNDq4oqEEKvUhBoXDNfbKzH5jos5D51vwr8TVysAhuancio4QiDQ2-X9BTGSo_qOCgX_MPZ_guay_53UJ9OK11CuMnMfqvHIXVOuCmJPAH9mxb_BhaYuU3Q7DnXaD5yLz6f5czTN98Kwm6RJ5KBxFKuaqrq7pDChaIcqJPMekEyN-h2ynDGaTOXT1InML9cVvxLVFmV8ugk.qWe513Vq_wgyx8lp36E8rQ"
 *                 IdToken:
 *                   type: string
 *                   example: "eyJraWQiOiJKQ3NsXC9DQlR4MEZoMWVHbGJCVjFDcXVcL1NXaCs0OEtkTStZemJYUEVJQjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhY2UwYjAzYy0xYTA3LTRmY2QtOGE3OC1lNGE0ZTJlYTBlZjkiLCJiaXJ0aGRhdGUiOiIyMi0xMS0xOTk5IiwiZ2VuZGVyIjoibWFsZSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzBEUXppTDZUaCIsImN1c3RvbTphZHZpc2VyX2NvZGUiOiIwMDciLCJhdXRoX3RpbWUiOjE2NzAxMDE0NDgsImV4cCI6MTY3MDEwNTA0OCwiaWF0IjoxNjcwMTAxNDQ4LCJqdGkiOiI3NGMzNzE1ZS04Zjc2LTRkNjUtOTU2Mi05ZGQ4ODY0MzFhNDUiLCJlbWFpbCI6Im1pY2hhZWwucm9kcmlndWV6QGltYWdpbmVtb3MuY28iLCJjdXN0b206YWR2aXNlcl9pZCI6Ijc4MDI4ODk1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByb2ZpbGUiOiIxIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IjEyMzQwOTcyMDYiLCJjdXN0b206YWR2aXNlX2RvY3VtZW50IjoiNzgwMjg4OTUiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2ltYWdlcy5wZXhlbHMuY29tXC9waG90b3NcLzk5NjY1NzBcL3BleGVscy1waG90by05OTY2NTcwLmpwZWc_YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTEiLCJvcmlnaW5fanRpIjoiZDJhYjdhMzAtOGZkNy00OWVkLTg2NzktNzExZDViYTE1ZWZlIiwiYXVkIjoiMmswMDBxMnJwOTYxM2FuczZycWMyZ21vYTYiLCJldmVudF9pZCI6ImY3ZWYwMmU3LWZhMTEtNDRkMC1hYTVlLWYyN2MxMmU5NDEzMyIsInRva2VuX3VzZSI6ImlkIiwibmFtZSI6Ik1pY2hhZWwiLCJwaG9uZV9udW1iZXIiOiIrNTczMDIyNzIxMTE3IiwiZmFtaWx5X25hbWUiOiJSb2RyaWd1ZXoifQ.NJqGvDyNjLNMi74CHOqW70qOgZiexADhhasUN4VzFw3f6gXV1CHDCAirIMo6Kb7j2Hca47GGIqdDdz52c2E9Lg130W5Fuw-rC-we3ZQs6xAWquJfNc37JL5CKeZbE2HmG2RnxhLPk4FK_PRid-0Fe9Bp2LqICGmp64V_bf0idrEGGO1r5_xlcRfBzquSbe5SEN87p3H-bPpQaehbcFeC_Nx6lsVGf0pgazn3nm2GJz6GHXcrM4-a2dnSu9Ya2uAXBuMWerHjOIk_4gA4ROsELp29ybXQoSqR0OEqIfYGqr2I_EpKuu0DKb09C6IOBThlCAqA23aCNbtNZMtl8VKwBA"
 *             
 * 
 * 
 * 
 */
//-------------------[ADMIN]
//-------------------------------/admin-signup
/**
 * @openapi
 * /api/auth/keycloak/admin-signup:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Creates a new Admin.
 *    security:
 *      - BearerAuth: [admin]
 *    description: Update an existing pet by Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: example@gmail.com
 *              username:
 *                type: string
 *                example: 10018187238
 *              enable:
 *                type: boolean
 *                example: true
 *              password:
 *                type: string
 *                example: password12#
 *              name:
 *                type: string
 *                example: luigi bros
 *              family_name:
 *                type: string
 *                example: mario
 *              userAttributes:
 *                type: object
 *                properties:
 *                  phone_number:
 *                    type: string
 *                    example: +573045715763
 *                  gender:
 *                    type: string
 *                    example: male
 *                  birthdate:
 *                    type: string
 *                    example: 02-03-2002
 *                  adviser_code:
 *                    type: string
 *                    example: 006
 *                  adviser_id:
 *                    type: string
 *                    example: 206
 *                  advise_document:
 *                    type: string
 *                    example: 1052957192
 *                  picture:
 *                    type: string
 *                    example: https://i.ibb.co/QPmmrWw/thumbnail.webp
 *
 *
 *                  
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "Sign up successfully"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 *                data:
 *                  type: object
 *                  properties:
 *                    UserConfirmed:
 *                      type: boolean
 *                      example: false
 *                    CodeDeliveryDetails:
 *                      type: object
 *                      properties:
 *                        Destination: 
 *                          type: string
 *                          example: "c***@i***"
 *                        DeliveryMedium:
 *                          type: string
 *                          example: "EMAIL"
 *                        AttributeName: 
 *                          type: string
 *                          example: "email"
 *                    UserSub: 
 *                      type: string
 *                      example: "192076a8-09fe-46b6-8e03-87ffdff9c618"
 *      '400':
 *        description: Failed peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                statusCode: 
 *                  type: string 
 *                  example: "40001"
 *                message:
 *                  type: string
 *                  example: "User already exists"
 *
 */
 //-------------------------------/delete user
 /**
  * @openapi
  * /api/auth/keycloak/delete-user:
  *  delete:
  *    tags:
  *      - ADMIN
  *    summary: Delete a user
  *    security:
  *      - BearerAuth: [admin]
  *    description: the route can delete a user if you have the identification and credential of admin 
  *    requestBody:
  *      description: You need the indentification of the user for deleted 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              username: 
  *                type: string
  *                example: '10018187238'
  *      required: true
  *    responses:
  *      '200':
  *        description: Successful peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "delete successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                
  *      '400':
  *        description: Successful operation
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: false
  *                statusCode: 
  *                  type: string 
  *                  example: "40001"
  *                message:
  *                  type: string
  *                  example: "User does not exist."
  */
 //-------------------------------/delete user
 /**
  * @openapi
  * /api/auth/keycloak/delete-group:
  *  delete:
  *    tags:
  *      - ADMIN
  *    summary: Delete a user
  *    security:
  *      - BearerAuth: [admin]
  *    description: the route can delete a user if you have the identification and credential of admin 
  *    requestBody:
  *      description: You need the indentification of the user for deleted 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              idGroup: 
  *                type: string
  *                example: '81e1fe06-9607-4a6b-8901-533b4a1ae494'
  *      required: true
  *    responses:
  *      '200':
  *        description: Successful peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "delete successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                
  *      '400':
  *        description: Successful operation
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: false
  *                statusCode: 
  *                  type: string 
  *                  example: "40001"
  *                message:
  *                  type: string
  *                  example: "User does not exist."
  */
 //-------------------------------/list-users
 /**
  * @openapi
  * /api/auth/keycloak/list-users:
  *  post:
  *    tags:
  *      - ADMIN-GET
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              attributesToGet: 
  *                type: string 
  *                example: 'profile:1 gender:male'
  *              filter:
  *                type: string
  *                example: ''
  *              limit:
  *                type: integer
  *                example: 1
  *              skip:
  *                type: integer
  *                example: 0
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List users successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  *                PaginationToken:
  *                  type: string
  *                  example: "CAIShAIIARLdAQgDEtgBAHGC+vYvlIXSoF3zqSk9yURFjbGjDre49hX+NhNouMgreyJAbiI6IlBhZ2luYXRpb25Db250aW51YXRpb25EVE8iLCJuZXh0S2V5IjoiQUFBQUFBQUFBQTREQVFFQjk3YzN2YnhZUkMrTUJSQWM0b3AwUlZvSWw1NU8rRVNHa2xKZnBwRGdSM0JsYm1ZN01UQXdNamN6TVRFd01Ucz0iLCJwYWdpbmF0aW9uRGVwdGgiOjMsInByZXZpb3VzUmVxdWVzdFRpbWUiOjE2NzAxMTcwOTEwMTl9GiBY5qydjVWz4x4kGRboCQ0s3iErBojfb/mrrYnBfGOvMA=="
  */
 //-------------------------------/list-users
 /**
  * @openapi
  * /api/auth/keycloak/get-all-groups:
  *  post:
  *    tags:
  *      - ADMIN-GET
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              exact: 
  *                type: boolean 
  *                example: false
  *              filter:
  *                type: string
  *                example: ''
  *              limit:
  *                type: integer
  *                example: 1
  *              skip:
  *                type: integer
  *                example: 0
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List users successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  *                PaginationToken:
  *                  type: string
  *                  example: "CAIShAIIARLdAQgDEtgBAHGC+vYvlIXSoF3zqSk9yURFjbGjDre49hX+NhNouMgreyJAbiI6IlBhZ2luYXRpb25Db250aW51YXRpb25EVE8iLCJuZXh0S2V5IjoiQUFBQUFBQUFBQTREQVFFQjk3YzN2YnhZUkMrTUJSQWM0b3AwUlZvSWw1NU8rRVNHa2xKZnBwRGdSM0JsYm1ZN01UQXdNamN6TVRFd01Ucz0iLCJwYWdpbmF0aW9uRGVwdGgiOjMsInByZXZpb3VzUmVxdWVzdFRpbWUiOjE2NzAxMTcwOTEwMTl9GiBY5qydjVWz4x4kGRboCQ0s3iErBojfb/mrrYnBfGOvMA=="
  */
//-------------------------------/enable user
/**
 * @openapi
 * /api/auth/keycloak/enable-user:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                type: string 
 *                example:  '10018187238'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/disable user
/**
 * @openapi
 * /api/auth/keycloak/disable-user:
 *  put:
 *    tags:
 *      - ADMIN
 *    summary: Disable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: if you don´t use a user, and you don´t like delete information of the user, you can disable the user
 *    requestBody:
 *      description: you need the username to delete a user
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                type: string 
 *                example:  '10018187238'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Disable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/add to group
/**
 * @openapi
 * /api/auth/keycloak/adminAddToGroup:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                 type: array
 *                 example: '["70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d", "70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d"]'
 *              group:
 *                type: string
 *                example: '70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/add to group
/**
 * @openapi
 * /api/auth/keycloak/admin-remove-to-group:
 *  delete:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                 type: array
 *                 example: '["70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d", "70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d"]'
 *              group:
 *                type: string
 *                example: '70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/add to group
/**
 * @openapi
 * /api/auth/keycloak/admin-update-to-group:
 *  put:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              oldIdUsers:
 *                 type: array
 *                 example: '["70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d", "70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d"]'
 *              newIdUsers: 
 *                 type: array
 *                 example: '["70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d", "70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d"]'
 *              group:
 *                type: string
 *                example: '70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/get user form group
/**
 * @openapi
 * /api/auth/keycloak/getGroupsOfUser:
 *  post:
 *    tags:
 *      - ADMIN-GET
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                type: string 
 *                example:  '10018187238'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/get user form group
/**
 * @openapi
 * /api/auth/keycloak/get-user-info:
 *  post:
 *    tags:
 *      - ADMIN-GET
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                type: string 
 *                example:  '10018187238'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/get user form group
/**
 * @openapi
 * /api/auth/keycloak/count-users:
 *  post:
 *    tags:
 *      - ADMIN-GET
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/get user form group
/**
 * @openapi
 * /api/auth/keycloak/update-attributes:
 *  put:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username: 
 *                type: string 
 *                example:  '10018187238'
 *              attributes:
 *                type: object
 *                properties:
 *                  gender: 
 *                    type: string
 *                    example: male  
 *                              
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/create-role
/**
 * @openapi
 * /api/auth/keycloak/create-permise:
 *  put:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name: 
 *                type: string 
 *                example:  'name'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/create-role
/**
 * @openapi
 * /api/auth/keycloak/create-role:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name: 
 *                type: string 
 *                example:  'name'
 *              description: 
 *                type: string 
 *                example:  'description'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/create-client-scope
/**
 * @openapi
 * /api/auth/keycloak/create-client-scope:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name: 
 *                type: string 
 *                example:  'name'
 *              description: 
 *                type: string 
 *                example:  ''
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/create-module
/**
 * @openapi
 * /api/auth/keycloak/create-module:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name: 
 *                type: string 
 *                example:  'name'
 *              subModule: 
 *                 type: array
 *                 example: '["viabilidad", "algo"]'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/link-Permisse-to-groups
/**
 * @openapi
 * /api/auth/keycloak/link-Permisse-to-groups:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              group: 
 *                type: string 
 *                example:  'group'
 *              permisse: 
 *                type: array
 *                example: '["PERMISE-SUBMODULE", "PERMISE-SUBMODULE"]'
 *              description: 
 *                 type: string
 *                 example: 'nose'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */
//-------------------------------/link-Permisse-to-groups-update
/**
 * @openapi
 * /api/auth/keycloak/link-Permisse-to-groups-update:
 *  put:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              group: 
 *                type: string 
 *                example:  'group'
 *              permisse: 
 *                type: array
 *                example: '["PERMISE-SUBMODULE", "PERMISE-SUBMODULE"]'
 *              description: 
 *                 type: string
 *                 example: 'nose'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */

 //-------------------------------/get-roles
 /**
  * @openapi
  * /api/auth/keycloak/get-roles:
  *  post:
  *    tags:
  *      - ADMIN-GET
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              exact: 
  *                type: boolean 
  *                example: false
  *              filter:
  *                type: string
  *                example: ''
  *              limit:
  *                type: integer
  *                example: 1
  *              skip:
  *                type: integer
  *                example: 0
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List Roles successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  */

//-------------------------------/get-roles-by-id
 /**
  * @openapi
  * /api/auth/keycloak/update-attibutes-group:
  *  put:
  *    tags:
  *      - ADMIN
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              idGroup:
  *                type: string
  *                example: '29645366-4b8e-4bd3-88b5-1c9578fe393f'
  *              attributes:
  *                type: array
  *                example: '["module", "module2"]'
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List Roles successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  */

//-------------------------------/get-roles-by-id
 /**
  * @openapi
  * /api/auth/keycloak/update-LinkedModules-group:
  *  put:
  *    tags:
  *      - ADMIN
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              idGroup:
  *                type: string
  *                example: '29645366-4b8e-4bd3-88b5-1c9578fe393f'
  *              attributes:
  *                type: array
  *                example: '["29645366-4b8e-4bd3-88b5-1c9578fe393f", "29645366-4b8e-4bd3-88b5-1c9578fe393f"]'
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List Roles successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  */
//-------------------------------/get-roles-by-id
 /**
  * @openapi
  * /api/auth/keycloak/get-roles-by-id:
  *  post:
  *    tags:
  *      - ADMIN-GET
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              id:
  *                type: string
  *                example: '29645366-4b8e-4bd3-88b5-1c9578fe393f'
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List Roles successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  */
//-------------------------------/get-roles-by-id
 /**
  * @openapi
  * /api/auth/keycloak/get-submodule-of-group/{idGroup}:
  *  get:
  *    tags:
  *      - ADMIN-GET
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    parameters:
  *      - name: idGroup
  *        in: path
  *        required: true
  *        description: Parameter description in CommonMark or HTML.
  *        schema:
  *          type : string
  *          
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List Roles successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  */

 //-------------------------------/get-modules
 /**
  * @openapi
  * /api/auth/keycloak/get-modules:
  *  post:
  *    tags:
  *      - ADMIN-GET
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              exact: 
  *                type: boolean 
  *                example: false
  *              filter:
  *                type: string
  *                example: ''
  *              limit:
  *                type: integer
  *                example: 1
  *              skip:
  *                type: integer
  *                example: 0
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List Roles successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  */
 //-------------------------------/get-menbersof-group
 /**
  * @openapi
  * /api/auth/keycloak/get-menbersof-group:
  *  post:
  *    tags:
  *      - ADMIN-GET
  *    summary: List a group of role
  *    security:
  *      - BearerAuth: [admin]
  *    description: Get user or admins in a list with options
  *    requestBody:
  *      description: List atrributes of users 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              exact: 
  *                type: boolean 
  *                example: false
  *              filter:
  *                type: string
  *                example: ''
  *              limit:
  *                type: integer
  *                example: 1
  *              skip:
  *                type: integer
  *                example: 0
  *              idgroup:
  *                type: string
  *                example: '70cc3533-26e4-4e8a-b8b0-37bc2e4d0b6d'
  *                
  *      required: true
  *    responses:
  *      '200':
  *        description: Successfull peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "List Roles successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                data:
  *                  type: object
  *                  properties:
  *                    Users:
  *                      type: array
  *                      items:
  *                        Name:
  *                      example: '[{"Username": "10018187238","Attributes": [{"Name": "custom:adviser_id","Value": "206"},{"Name": "sub","Value": "4677acd3-7fc3-46a2-ade6-025905ba2761"},{"Name": "birthdate","Value": "02-05-2002"},{"Name": "email_verified","Value": "true"},{"Name": "gender","Value": "male"},{"Name": "profile","Value": "1"},{"Name": "phone_number_verified","Value": "false"},{"Name": "picture","Value": "https://pbs.twimg.com/profile_images/1569374895456272384/sxGNulEa_400x400.jpg"},{"Name": "custom:advise_document","Value": "10018187238"},{"Name": "custom:adviser_code","Value": "006"},{"Name": "name","Value": "jerardo"},{"Name": "phone_number","Value": "+573045715763"},{"Name": "family_name","Value": "bros"},{"Name": "email","Value": "example@gmail.com"}],"UserCreateDate": "2022-11-22T15:03:33.739Z","UserLastModifiedDate": "2022-11-22T15:04:05.755Z","Enabled": true,"UserStatus": "CONFIRMED"}]'
  */
//-------------------------------/delete user
 /**
  * @openapi
  * /api/auth/keycloak/delete-role:
  *  delete:
  *    tags:
  *      - ADMIN
  *    summary: Delete a role
  *    security:
  *      - BearerAuth: [admin]
  *    description: the route can delete a user if you have the identification and credential of admin 
  *    requestBody:
  *      description: You need the indentification of the user for deleted 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              role: 
  *                type: string
  *                example: '77389e32-efc5-4cab-ad51-77b5dee571c8'
  *      required: true
  *    responses:
  *      '200':
  *        description: Successful peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "delete successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                
  *      '400':
  *        description: Successful operation
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: false
  *                statusCode: 
  *                  type: string 
  *                  example: "40001"
  *                message:
  *                  type: string
  *                  example: "User does not exist."
  */


//-------------------------------/rename-group
 /**
  * @openapi
  * /api/auth/keycloak/rename-group:
  *  put:
  *    tags:
  *      - ADMIN
  *    summary: update name role
  *    security:
  *      - BearerAuth: [admin]
  *    description: the route can delete a user if you have the identification and credential of admin 
  *    requestBody:
  *      description: You need the indentification of the user for deleted 
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              idGroup: 
  *                type: string
  *                example: 'ac87fa38-9ee0-422e-a201-34d5bbd7de7c'
  *              newname: 
  *                type: string
  *                example: 'algo'
  *      required: true
  *    responses:
  *      '200':
  *        description: Successful peticion
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: true
  *                message:
  *                  type: string
  *                  example: "delete successfully"
  *                StatusCode:
  *                  type: string
  *                  example: 20000
  *                
  *      '400':
  *        description: Successful operation
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                success:
  *                  type: boolean
  *                  example: false
  *                statusCode: 
  *                  type: string 
  *                  example: "40001"
  *                message:
  *                  type: string
  *                  example: "User does not exist."
  */

//-------------------------------/create-module-master
/**
 * @openapi
 * /api/auth/keycloak/create-module-master:
 *  post:
 *    tags:
 *      - ADMIN
 *    summary: Enable user
 *    security:
 *      - BearerAuth: [admin]
 *    description: after creater a user/admin, you need to enable for working
 *    requestBody:
 *      description: the token to recive this route you can take it un signin
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name: 
 *                type: string 
 *                example:  'name'
 *              subModule: 
 *                 type: array
 *                 example: '["viabilidad", "algo"]'
 *                
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful peticion
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                message:
 *                  type: string
 *                  example: "User Enable"
 *                StatusCode:
 *                  type: string
 *                  example: 20000
 * 
 */