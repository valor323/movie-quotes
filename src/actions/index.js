import types from './types';
import axios from 'axios';

export const signup = (userInfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://api.reactprototypes.com/signup', userInfo)
            console.log('sign up response', response);
        }catch(error){
            console.log('sign up error', error.message);
        }
    }
};
