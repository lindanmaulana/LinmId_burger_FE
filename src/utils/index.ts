export const getDataSignin = () => {
    const storage = localStorage.getItem("auth")
    
    const {token, role} = storage ? JSON.parse(storage) : {role: null, token: null}

    return {token, role}
}