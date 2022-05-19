const pool = require('../../Database/db.js').pool


exports.list = async (req,res)=>{
    
    const sql = `SELECT * from feed`
    
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

exports.update = async (req,res)=>{
    const {token,subject,content} = req.body
    const [,payload,] = token.split('.')
    const decodingPayload = Buffer.from(payload,'base64').toString()
    const userid = JSON.parse(decodingPayload).userid
    console.log(userid)

    const sql = `UPDATE feed SET subject = ?, content=? WHERE userid = '${userid}'`
    
    
    const prepare = [subject,content]
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
    const sql = `DELETE from feed where userid = '${userid}'`
    
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
