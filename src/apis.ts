import axios from "axios";

export function getFacts(){
    return axios.get('https://catfact.ninja/fact')
}