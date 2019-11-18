const loggingMiddleware = (store) => (next) => (action) => {
    console.log(`Redux Log: `, action);
    next(action);
}

export default loggingMiddleware;