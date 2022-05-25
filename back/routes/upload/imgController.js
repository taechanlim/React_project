const pool = require('../../Database/db.js').pool

exports.img = async (req,res)=>{
    console.log('이미지 들어오냐?',req.FormData)
    const {img, content} = req.file
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