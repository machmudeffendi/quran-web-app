const apiMiddleware = store => next => action => {
    if(!action.meta || action.meta.type !== 'api'){
        return next(action);
    }

    const { url, callback } = action.meta;
    const fetchOption = Object.assign({}, action.meta);

    fetch(url, fetchOption)
        .then(response => response.json())
        .then(json => {
            if(typeof action.meta.onSuccess === 'function'){
                action.meta.onSuccess(json);
            }
            return json;
        })
        .then(json => {
            let newAction = Object.assign({}, action, {
                payload: json
            });
            delete newAction.meta;
            store.dispatch(newAction);
            if(!!callback){
                callback();
            }
        })
}

export default apiMiddleware;