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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users)
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    static save(userInfo){
        const users =  this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.id);
        users.pw.push(userInfo.id);
        return {success:true};
    };
};

module.exports = UserStorage;