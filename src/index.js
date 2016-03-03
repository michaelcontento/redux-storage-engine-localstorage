export default (key) => ({
    load() {
        let jsonState;

        try {
            jsonState = localStorage.getItem(key);
        } catch (err) {
            return Promise.reject(err.message);
        }

        return Promise.resolve(JSON.parse(jsonState) || {});
    },

    save(state) {
        const jsonState = JSON.stringify(state);

        try {
            localStorage.setItem(key, jsonState);
        } catch (err) {
            return Promise.reject(err.message);
        }

        return Promise.resolve();
    }
});
