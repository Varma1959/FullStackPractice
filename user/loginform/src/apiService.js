import axios from "axios";
export const getCustomersData = () => {

    return axios .get('http://localhost:3001/api/register')
    };