// This vendor library lies heavily! 
// It returns a Promise at runtime, but the .d.ts says it returns a boolean sync.
module.exports = {
    capture: async function (event) {
        return true;
    }
};
