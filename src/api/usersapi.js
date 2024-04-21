
import axios from "axios"
let UsersApi = "http://localhost:3000/"


export const Users =  async (password) =>{
    try{
        let postMethod = axios.post(UsersApi, { password: password });   
        let data = await postMethod
        if((await postMethod).status === 200)
        {
        localStorage.setItem("data", JSON.stringify(data.data))
        return data.data
        }
        else
        return []
    }
    catch(err){
        console.log(err)
    }
  
}