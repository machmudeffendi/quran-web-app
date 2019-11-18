import { combineReducers } from 'redux';
import * as currentSurah from './currentSurah';
import * as currentAyyah from './currentAyyah';

export const initialState = {
    currentSurah: currentSurah.initialState,
    currentAyyah: currentAyyah.initialState
}

export const rootReducer = combineReducers({
    currentSurah: currentSurah.reducer,
    currentAyyah: currentAyyah.reducer
})

export default rootReducer;