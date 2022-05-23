const pool = require('../../Database/db.js').pool
const {createToken} = require('../../utils/jwt')
const {alertMove} = require('../../utils/alert.js')

exports.register = async (req,res)=>{
    const {userid,userpw,nickname,phonenumber} = req.body
    console.log(req.body)
        
    const sql = `INSERT INTO user(
            userid,
            userpw,
            nickname,
            phonenumber
        ) values(
            ?,?,?,?
        )`
    
    
    const prepare = [userid,userpw,nickname,phonenumber]
    try{
        const [result] = await pool.execute(sql,prepare)
            
        const response = {
            result:{
                row:result.affectedRows,
                id:result.insertId
            },
            errno:0,
        }
    
        res.json(response)
        
    
        }catch(e){
        console.log(e.message)
        console.log(e)
        const response = {
            result:{
                row:0,
                id:0
            },
            errno:e.errno,
        }
        res.json(response)
        }
}


exports.login = async (req,res)=>{
    const {userid,userpw} = req.body
    console.log(userid,userpw)
    const sql = `SELECT userid,nickname,phonenumber,active FROM user WHERE userid=? and userpw=? and active=1`
    const prepare = [userid,userpw]

    try{
        const [result] = await pool.execute(sql,prepare)

        if(result.length <= 0) throw new Error('회원이 아닙니다')
        const jwt = createToken(result[0])
    
        res.cookie('token',jwt,{
            path:'/', 
            secure:true,
            domain:'localhost'
        })

        const response = {
            result,
            errno:0,
        }
        res.json(response)

    }catch(e){
        const response = {
            result:[],
            errno:1,
        }
        res.json(response)
    }
}


exports.update = async (req,res)=>{
    const {token,userpw,nickname,phonenumber} = req.body
    const [,payload,] = token.split('.')
    const decodingPayload = Buffer.from(payload,'base64').toString()
    const userid = JSON.parse(decodingPayload).userid
    console.log(userid)

    const sql = `UPDATE user SET userpw = ?, nickname=? , phonenumber=? WHERE userid = '${userid}'`
    
    
    const prepare = [userpw,nickname,phonenumber]
    try{
        const [result] = await pool.execute(sql,prepare)
            
        const response = {
            result:{
                row:result.affectedRows,
                id:result.insertId
            },
            errno:0,
        }
    
        res.json(response)
        
    
        }catch(e){
        console.log(e.message)
        console.log(e)
        const response = {
            result:{
                row:0,
                id:0
            },
            errno:1,
        }
        res.json(response)
        }
}

exports.delete = async (req,res)=>{
    const {token} = req.body
    const [,payload,] = token.split('.')
    const decodingPayload = Buffer.from(payload,'base64').toString()
    const userid = JSON.parse(decodingPayload).userid
    console.log(req.body);
    const sql = `DELETE from user where userid = '${userid}'`
    
    const prepare = [token]
    try{
        const [result] = await pool.execute(sql,prepare)
            
        const response = {
            result:{
                row:result.affectedRows,
                id:result.insertId
            },
            errno:0,
        }
    
        res.json(response)
        
    
        }catch(e){
        console.log(e.message)
        console.log(e)
        const response = {
            result:{
                row:0,
                id:0
            },
            errno:1,
        }
        res.json(response)
        }
}


exports.wallet = async (req,res)=>{
    const {wallet,token} = req.body
    const [,payload,] = token.split('.')
    const decodingPayload = Buffer.from(payload,'base64').toString()
    const nickname = JSON.parse(decodingPayload).nickname
    const sql = `UPDATE user SET wallet = '${wallet}' WHERE nickname = '${nickname}'`
    
    
    try{
        const [result] = await pool.execute(sql)
            
        const response = {
            result:{
                row:result.affectedRows,
                id:result.insertId
            },
            errno:0,
        }
    
        res.json(response)
        
    
        }catch(e){
        console.log(e.message)
        console.log(e)
        const response = {
            result:{
                row:0,
                id:0
            },
            errno:e.errno,
        }
        res.json(response)
        }
}