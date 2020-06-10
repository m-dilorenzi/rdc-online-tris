// Array of connected users
var users = [];

// Remove user after the game ended
function deleteUser(id) {
    var i = users.findIndex(user => user.id == id);
    users.splice(i, 1);
}

// Add new user to the array
function joinUser(id, nickname, room) {
    const user = {id, nickname, room};
    users.push(user);
    return user;
}

// Get user from array by id
function getUserById(id) {
    return users.find(user => user.id == id);
}


exports.joinUser        = joinUser;
exports.getUserById     = getUserById;
exports.deleteUser      = deleteUser;