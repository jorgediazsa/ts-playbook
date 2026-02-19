// A legacy file untouched for years!

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 */

/**
 * Validates a user returning true/false
 * @param {User} user
 * @returns {boolean}
 */
export function isUserValid(user) {
    // If `checkJs: true` is enabled, this file gets type-checked!
    // It will successfully catch that `user.name` is a string,
    // so `user.name.toFixed()` below is a TYPE ERROR, even though it's a `.js` file!

    // @ts-expect-error - (Uncomment this pragma once checkJs is enabled to make it pass!)
    return user.id > 0 && user.name.toFixed() === "2";
}
