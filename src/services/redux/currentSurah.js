import * as types from './types';

export const initialState = {
    currentSurah: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_NEW_SURAH:
            return {...state, currentSurah: action.payload}
        default:
            return state;
    }
}

export default reducer;