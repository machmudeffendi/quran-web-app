import * as types from './types';

export const initialState = {
    currentAyyah: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_NEW_AYYAH:
            return {...state, currentAyyah: action.payload}
        default:
            return state;
    }
}

export default reducer;