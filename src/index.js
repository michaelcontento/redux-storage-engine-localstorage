const rejectWithMessage = error => Promise.reject(error.message);

export default (key) => ({
    load() {
        return new Promise(resolve => {
            const jsonState = localStorage.getItem(key);
            resolve(JSON.parse(jsonState) || {});
        }).catch(rejectWithMessage);
    },

    save(state) {
        return new Promise(resolve => {
            const jsonState = JSON.stringify(state);
            localStorage.setItem(key, jsonState);
            resolve();
        }).catch(rejectWithMessage);
    }
});
