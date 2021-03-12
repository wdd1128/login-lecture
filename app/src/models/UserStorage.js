"use strict";

class UserStorage{
    static #users = {
        id:["qwe","asd","zxc"],
        pw:["123","234","345"],
        name:["QWE","ASD","ZXC"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        return newUsers;
    };
};

module.exports = UserStorage;