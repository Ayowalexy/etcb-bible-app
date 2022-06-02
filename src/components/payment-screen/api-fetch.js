import axios from 'axios';


// export const API_URL = "http://192.168.43.32:8080"
export const API_URL = "https://etb-bible.herokuapp.com"


export const signUp = async (data) => {
    const url = `${API_URL}/sign-up`
    let response;
    await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        return response = res.data
    })
    .catch(e => console.log(e))
    return response
}

export const update = async (data) => {
    const url = `${API_URL}/update`
    let response;
    await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        return response = res.data
    })
    .catch(e => console.log(e))
    return response
}


export const login = async (data) => {
    const url = `${API_URL}/login`
    await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => console.log(res.data))
    .catch(e => console.log(e))
}