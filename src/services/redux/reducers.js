import { combineReducers } from 'redux';
import * as dataSurah from './surah/surahReducer';

export const initialState = {
    response: dataSurah.initialState
}

export const rootReducer = combineReducers({
    response: dataSurah.reducer
})

export default rootReducer;