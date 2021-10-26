import axios from "axios"
const URL = 'https://localhost:44343'

export default function CALLER (method,path,body){
    if(method === 'POST' || method==='PUT' && body === null) {
        console.log('Phương thức POST cần dữ liệu');
        return ;
    }
    return (axios({
        method : method,
        url : URL+'/'+path,
        data : body
    }));
}