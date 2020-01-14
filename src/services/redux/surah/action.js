import * as types from './actionTypes';
import { HOST } from '../config';

export const getAllSurah = (callback) => ({
    type: types.GET_ALL_SURAH,
    payload: [],
    meta: {
        type: 'api',
        url: HOST + "/surah",
        callback: callback
    }
})

export const getTitleSurah = (noSurah, callback) => ({
    type: types.GET_TITLE_SURAH,
    payload: [],
    meta: {
        type: 'api',
        url: HOST + `/surah/${noSurah}`,
        callback: callback
    }
})

export const getValueSurah = (noSurah, callback) => ({
    type: types.GET_VALUE_SURAH,
    payload: [],
    meta: {
        type: 'api',
        url: HOST + `/quran-indopak/${noSurah}`,
        callback: callback
    }
})

export const getIdnTranslate = (idSurah, callback) => ({
    type: types.GET_TERJEMAHAN,
    payload: [],
    meta: {
        type: 'api',
        url: HOST + `/terjemah/${idSurah}`,
        callback: callback
    }
})

export const getLatin = (idSurah, callback) => ({
    type: types.GET_LATIN,
    payload: [],
    meta: {
        type: 'api',
        url: HOST+`/latin/${idSurah}`,
        callback: callback
    }
})