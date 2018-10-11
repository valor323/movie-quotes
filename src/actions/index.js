import types from './types';
import axios from 'axios';

export const signup = (userInfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://api.reactprototypes.com/signup', userInfo)

            localStorage.setItem('token', response.data.token);
            
            dispatch({
                type: types.SIGN_UP
            });
        }catch(error){
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating account'
            })
        }
    }
};

export const signIn = userInfo => async dispatch => {
    try {
        const response = await axios.post('http://api.reactprototypes.com/signin', userInfo);

        console.log('sign in response', response);

        localStorage.setItem('token', response.data.token);

        dispatch({
            type: types.SIGN_IN
        });
    }catch(error){
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid email and/or password'
        })
    }
};

export const signOut = ()=> {
    localStorage.removeItem('token');
    
    return {
        type: types.SIGN_OUT  
    }
};
