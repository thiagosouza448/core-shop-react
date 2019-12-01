import axios from "axios";

export const api = axios.create({

    baseURL: 'https://desolate-brushlands-20405.herokuapp.com/api/v1/'

});

