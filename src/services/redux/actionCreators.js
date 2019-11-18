import * as types from './types';

const host = 'https://al-quran-8d642.firebaseio.com';
const listSurah = '/data.json?print=pretty';
// const listAyyah = '/surat/1.json?print=pretty';

export const fetchNewSurah = (callback) => ({
    type: types.FETCH_NEW_SURAH,
    payload: [],
    meta: {
        type: 'api',
        url: host + listSurah,
        callback: callback,
    }
})

export const fetchNewAyyah = (noSurah = 1, callback) => ({
    type: types.FETCH_NEW_AYYAH,
    payload: [],
    meta: {
        type: 'api',
        url: host + `/surat/${noSurah}.json?print=pretty`,
        callback: callback
    }
})