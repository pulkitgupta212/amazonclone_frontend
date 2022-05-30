import rootService from '../../rootServices'
const { postRequest, endPointUrls } = rootService;
const { loginUrl } = endPointUrls

export const loginService = async(data)=>{
    return await postRequest(loginUrl, data )
}
