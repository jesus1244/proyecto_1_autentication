import axios from "axios";
import { urlApiSMS } from "../../config";
import { SMSInterface } from "../../interfaces/mail.interface";

const sendSMS = async ( {template, number }: SMSInterface) => {
    const options = {
        method: 'POST',
        url: urlApiSMS,
        headers: { 'Content-Type': 'application/json' },
        data: { template: template, phone: number}
      };
    var res = await axios.request(options)
    return res
}
export default sendSMS