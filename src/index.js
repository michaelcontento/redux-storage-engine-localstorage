function rejectWithMessage(error) {
    return Promise.reject(error.message);
}

export default (key, replacer, reviver) => ({
    load() {
        return new Promise((resolve) => {
            const jsonState = localStorage.getItem(key);
            resolve(JSON.parse(jsonState, reviver) || {});
        }).catch(rejectWithMessage);
    },

    save(state) {
        return new Promise((resolve) => {
            const jsonState = JSON.stringify(state, replacer);
            localStorage.setItem(key, jsonState);
            resolve();
        }).catch(rejectWithMessage);
    }
});
