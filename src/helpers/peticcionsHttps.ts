var https = require('follow-redirects').https;
var qs = require('querystring');
export interface options {
    method :string,
    hostname: string,
    path: string,
    port: number | null,
    headers: {
      'Content-Type': string | null
      Authorization: string | null
    },
    maxRedirects: number | null
}


export const peticionHttpsUrlEncoded = async (requestOptions: options, bodyUrlEncoded: any)=>{
    return new Promise((resolve, rejects) => {
        const req = https.request(requestOptions, function (res : any) {
        let chunks = '';
        
        res.on("data", function (chunk : any) {
            chunks += chunk;
        });
        
        res.on("end", function (chunk : any) {
            try {
              const json = JSON.parse(chunks.toString())
              if (json.error)
                rejects({error:json,code: res.statusCode})
              resolve({data:json,code: res.statusCode});
            } catch (error) {
              resolve({err:error,code: res.statusCode})
            }
            
        });
        
        res.on("error", function (error : any) {
            rejects(error);
        });
        });
        
        const postData = qs.stringify(bodyUrlEncoded);
        req.write(postData);
        
        req.end();
        return
        
      })
    
}


export const peticionHttpsJson = async (requestOptions: options, bodyJson: any)=>{
    return new Promise((resolve, rejects) => {
        const req = https.request(requestOptions, function (res : any) {
            let chunks1: any = [];
          
            res.on("data", function (chunk : any) {
              chunks1.push(chunk)
            });
          
            res.on("end", function (chunk : any) {
              const body = Buffer.concat(chunks1);
              try {
                const json = JSON.parse(body.toString())
                if (json.error!=undefined){
                  
                  return rejects({error:json,code: res.statusCode});
                }
                resolve({data: json,code: res.statusCode});  
              } catch (error) {
                resolve({err:body.toString(),code: res.statusCode})
              }
            });
          
            res.on("error", function (error : any) {
              rejects(error)
            });
          });
          
          const Data = JSON.stringify(bodyJson);
          req.write(Data);
          
          req.end();
        return
        
      })
    
}
