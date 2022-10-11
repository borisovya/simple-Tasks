import React from 'react';
import axios from "axios";

export const RequestApi =  {
    sendRequest(body: {success: boolean}) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test/`, body)
    }
}

