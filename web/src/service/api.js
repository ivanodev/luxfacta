import axios from  'axios';


export const api = axios.create({
    baseURL: 'http://enqueteapi.luxfacta.com/',
    headers: {  
                'Content-Type': 'application/json; charset=utf-8',                    
                'Accept': '*/*' 
    }
});

