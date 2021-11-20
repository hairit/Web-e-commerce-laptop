import axios from "axios"

export default function call (method,path,body){
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
