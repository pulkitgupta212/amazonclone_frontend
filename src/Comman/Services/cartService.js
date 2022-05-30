
import  rootService  from "../../services/index";
import axios from "axios";
const  { endpoints,BASE_URL } = rootService;
const { addToCart } = endpoints;

export const addNewItemToCart = async(newItem)=> {
    console.log(newItem.payload);

    return await axios.post(`${BASE_URL}/addtocart`,newItem.payload)
}

export const getAllCartItems = async () =>{
    return await axios.get(`${BASE_URL}/cardShow`)
}

export const deleteNewItemToCart = async (id) =>{
    console.log(id.payload);
    return await axios.delete(`${BASE_URL}/deleteitem/${id.payload}`)
}