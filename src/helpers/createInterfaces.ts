import { bodyQuery, queryI } from "../interfaces/peticions.interfaces"

export  const createBodyQueryI = (props : Array<queryI>)=>{

    const result= props.reduce((acc: any, items)=>{
        acc["key"] =items.key;
        acc["value"] =items.value;
        return acc;
    }, {})
    const params: bodyQuery = {
        query: result,
        body : null
      }
} 
