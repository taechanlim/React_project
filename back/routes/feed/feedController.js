const pool = require('../../Database/db.js').pool


exports.list = async (req,res)=>{
    
    const sql = `SELECT * from feed`
    
    try{
        const [result] = await pool.execute(sql)
        console.log(result)
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


exports.view = async (req,res)=>{
    
    const idx = req.query
    
    
    const sql = `SELECT * FROM board WHERE idx=?`
    
    const prepare = [idx]
    let response = {
        errno:0
    }
    try{
        const [result] = await pool.execute(sql,prepare)
                         
                        
        response = {
            ...response,
            result
        }
        
    }catch(e){
            {
                console.log(e.message)
                response={
                    errno:1
                }
            }
    }
    res.json(response)
}