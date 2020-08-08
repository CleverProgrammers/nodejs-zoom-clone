module.exports = class User {
    constructor(setup) {
        this.name = setup.name;
        this.id = setup.socket.id;
        this.room = setup.socket.room;
        this.socket = setup.socket;
    }
}