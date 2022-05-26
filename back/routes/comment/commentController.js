const pool = require('../../Database/db.js').pool


exports.list = async (req,res)=>{
    // console.log(req.body)
    const {idx} = req.body
    const sql = `SELECT nickname,comment,DATE_FORMAT(date,'%Y-%m-%d') as date from comment where idx=${idx} ORDER BY comment_idx DESC`
    
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

exports.write = async (req,res)=>{
    const {values,token,router} = req.body
    const {idx} = router.query
    const {comment} = values
    const [,payload,] = token.split('.')
    const decodingPayload = Buffer.from(payload,'base64').toString()
    const nickname = JSON.parse(decodingPayload).nickname
    
    const sql = `INSERT INTO comment(idx,nickname,comment) values(${idx},'${nickname}','${comment}')`
    
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

    const {comment_idx,values} = req.body
    const comment = values.comment
    
    const sql = `UPDATE comment SET comment = '${comment}' WHERE comment_idx = '${comment_idx}'`

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
            errno:1,
        }
        res.json(response)
        }
}

exports.delete = async (req,res)=>{
    const {comment_idx} = req.body
    
    const sql = `DELETE from comment WHERE comment_idx=${comment_idx}`
    
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