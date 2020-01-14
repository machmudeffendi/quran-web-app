import * as types from "./actionTypes";

export const initialState = {
    dataAllSurah: {},
    dataValueSurah: {},
    dataIdnTranslate: {},
    dataLatin: {},
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_ALL_SURAH:
            return {...state, dataAllSurah: action.payload}
        case types.GET_TITLE_SURAH:
            return {...state, dataTitleSurah: action.payload}
        case types.GET_VALUE_SURAH:
            return {...state, dataValueSurah: action.payload}
        case types.GET_TERJEMAHAN:
            return {...state, dataIdnTranslate: action.payload}
        case types.GET_LATIN:
            return {...state, dataLatin: action.payload}
        default: 
            return state;
    }
}

export default reducer;