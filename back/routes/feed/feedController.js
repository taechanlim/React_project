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

exports.write = async (req,res)=>{
    
    const {values,token} = req.body
    const subject = values.subject
    const content = values.content
    const [,payload,] = token.split('.')
    const decodingPayload = Buffer.from(payload,'base64').toString()
    const nickname = JSON.parse(decodingPayload).nickname
    
    const sql = `INSERT INTO feed(subject,content,nickname) values('${subject}','${content}','${nickname}')`
    
    try{
        const [result] = await pool.execute(sql)
       
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

exports.update = async (req,res)=>{
    const {token,idx,values} = req.body
    const subject = values.subject
    const content = values.content``
    // const [,payload,] = token.split('.')
    // const decodingPayload = Buffer.from(payload,'base64').toString()
    // const userid = JSON.parse(decodingPayload).userid
    // console.log(userid)
    
    const sql = `UPDATE feed SET subject = ?, content = ? WHERE idx = '${idx}'`
    
    
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