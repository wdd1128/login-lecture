"use strict";



const output={
     home: (req,res)=>{
        res.render("home/index");
    },
    
     login: (req,res)=>{
        res.render("home/login");
    },
}
const users = {
    id:["qwe","asd","zxc"],
    pw:["123","234","345"],
}
const process={
    login: (req,res)=>{
        const id = req.body.id,
        pw = req.body.pw;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                return res.json({
                    success:true,
                });
            }
        }
        return res.json({
            success:false,
            msg:"로그인에 실패하셨습니다.",
        })
    },
}



module.exports = {
    output,
    process,
};