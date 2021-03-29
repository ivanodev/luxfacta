import axios from  'axios';


export const api = axios.create({
    //baseURL: 'http://enqueteapi.luxfacta.com/',
    baseURL: 'http://192.168.0.16:3000/',
    headers: {  
                'Content-Type': 'application/json; charset=utf-8',                    
                'Accept': '*/*' 
    }
});

export const get = async ( uri ) => {

    return await api.get( `${uri}` );

}
