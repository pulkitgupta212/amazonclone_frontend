import  axios from 'axios';
import endPointUrls from './endpoint';
const BASE_URL =  'http://localhost:8080' //'https://amazonclonebackend212.herokuapp.com';



const postRequest = async( endpoint ,data) =>  {
    return await axios.post(BASE_URL + endpoint , data )
}


export default { 
    BASE_URL,
    endPointUrls,
    postRequest     
}