import axios from 'axios';

export const setFormRegister = (input, value) => {
    return{
        type: 'SET_FORM', inputType: input, inputValue: value
    };
};

export const setFormLogin = (input, value) => {
    return{
        type: 'SET_FORM_LOGIN', inputType: input, inputValue: value
    };
};