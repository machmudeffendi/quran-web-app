import * as types from './types';
import { HOST } from './config';

export const fetchNewSurah = (callback) => ({
    type: types.FETCH_NEW_SURAH,
    payload: [],
    meta: {
        type: 'api',
        url: HOST + "/surah",
        callback: callback,
    }
})

export const fetchNewAyyah = (noSurah = 1, callback) => ({
    type: types.FETCH_NEW_AYYAH,
    payload: [],
    meta: {
        type: 'api',
        url: HOST + `/quran-indopak/${noSurah}`,
        callback: callback
    }
})

export const getTitleSurah = (idSurah, callback) => ({
    type: types.GET_TITLE_SURAH,
    payload: [],
    meta: {
        type: 'api',
        url : HOST + `/surah/${idSurah}`,
        callback: callback
    }
})