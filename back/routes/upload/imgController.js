const pool = require('../../Database/db.js').pool

exports.img = async (req,res)=>{
    // console.log('여긴 바디',req.body.token);
    // console.log('여긴 파일',req.file);
    const {fieldname,originalname,mimetype,filename,path,destination} = req.file
    const {token} = req.body
    
    const sql = `INSERT INTO userImg(
        fieldname,
        originalname,
        mimetype,
        destination,
        filename,
        path,
        nickname
    ) values(
        ?,?,?,?,?,?,?
    )`
    
    const prepare = [fieldname,
        originalname,
        mimetype,
        destination,
        filename,
        path,
        token]
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

exports.userimg = async (req,res)=>{
    const {nickname} = req.body.nickname

    const sql = `SELECT * FROM userImg where nickname='${nickname}'`
    
    try{
        const [result] = await pool.execute(sql)
        const response = {
            result:{
                result,
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
