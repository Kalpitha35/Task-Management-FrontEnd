import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

// registerAPI called by Auth
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
} 

// loginAPI called by Auth component when user click login here
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

// addTaskAPI
export const addTaskAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addtask`,reqBody,reqHeader)
}