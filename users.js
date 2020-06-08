// Array of connected users
var users = [];

// Remove user when leave the chat
function leaveUser(id) {
    // Get the index of the user to remove
    // returns -1, not found
    const i = users.findIndex(user => user.id == id);

    if (i != -1) {
        // get and remove one element starting from i
        const result = users.splice(i, 1);
        return result[0];
    }

    return null;
}

// Push user in chat room when join
function joinUser(id, nickname, room) {
    const user = {id, nickname, room};
    users.push(user);
    return user;
}

// Get user from array by id
function getUserById(id) {
    return users.find(user => user.id == id);
}

// Get user index
function getUserIndex(id) {
    return users.findIndex(user => user.id == id);
}

exports.joinUser        = joinUser;
exports.getUserById     = getUserById;
exports.leaveUser       = leaveUser;
exports.getUserIndex    = getUserIndex;