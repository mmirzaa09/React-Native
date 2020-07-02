import { combineReducers } from 'redux';

const initialStateRegister = {
    form: {
        Email: '',
        NamaLengkap: '',
        KataSandi: '',
    },
    title: 'Halaman Register',
    desc: 'ini adalah halaman Register'
};

const RegisterReducer = (state = initialStateRegister, action) => {
    if(action.type == 'SET_TITLE'){
        return{
            ...state,
            title: 'Title diganti',
        };
    }

    if(action.type == 'SET_FORM'){
        return{
            ...state,
            form: {
                ...state.form,
                [action.inputType] : action.inputValue,
            },
        };
    }
    return state
};

const initialStateLogin = {
    form:{
        Email: '',
        KataSandi: ''
    },
    info: 'Tolong Masukan Kata Sandi',
    isLogin: true,
};

const LoginReducer = (state = initialStateLogin, action) => {
    if(action.type == 'SET_FORM_LOGIN'){
        return{
            ...state,
            form: {
                ...state.form,
                [action.inputType] : action.inputValue
            }
        }
    }
    return state
};


const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;