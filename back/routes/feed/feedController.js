const pool = require('../../Database/db.js').pool


exports.list = async (req,res)=>{
    
    const sql = `SELECT * from feed`
    
    try{
        const [result] = await pool.execute(sql)
        // console.log(result)
        const response = {
            
                result,
                row:result.affectedRows,
                id:result.insertId,
            
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


exports.delete = async (req,res)=>{
    // console.log(req.body)
    const {idx} = req.body
    
    const sql = `DELETE from feed WHERE idx=${idx}`
    
    try{
        const [result] = await pool.execute(sql)
        console.log(result)
        const response = {
            
                result,
                row:result.affectedRows,
                id:result.insertId,
            
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