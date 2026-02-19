/* global module */
module.exports = {
    createId: function () {
        return 'id_' + Math.random().toString(36).substr(2, 9);
    },
    parseData: function (data) {
        if (typeof data !== 'string') return null;
        return { payload: data, success: true };
    }
};
