import { createContext, useState } from "react"

export const Context_user_data = createContext(); 

const Context_user = ({children})=> {

    const [user, setUser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    })



    return (
        <div>
            <Context_user_data.Provider value={[user,setUser]}>
                {children}
            </Context_user_data.Provider>
        </div>
    )
}

export default Context_user