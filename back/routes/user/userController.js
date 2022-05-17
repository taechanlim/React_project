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
