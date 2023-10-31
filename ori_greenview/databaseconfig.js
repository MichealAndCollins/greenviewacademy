let Connection = require('tedious').Connection
let Request = require('tedious').Request
let config = {  
    server: 'KORWUTA\\SQLEXPRESS', 
    authentication: {
        type: 'default',
        options:{
            userName:'sa',
            password:'collins'
        }
    },  
    options:{
        encrypt:false,
        trustServerCertificate:true,
        database:'master'
    }
}; 

async function getStudentData(){
    let connection = new Connection(config)
    return new Promise((resolve,reject)=>{
        let students = []
        
        connection.on('connect',(err)=>{
            if(err){
                reject(err)
                connection.close()
            }
            let request = new Request('SELECT * FROM student', function(err) {  
                if (err) {  
                    console.log(err);}  
                })
            request.on('row',(columns)=>{
                let student = {}
                columns.forEach((column) => {
                    student[column.metadata.colName] = column.value
                });
                students.push(student)
            })
            request.on('done',()=>{
                
            })
            request.on('requestCompleted',()=>{
                resolve(students)
                connection.close() 
            })
            connection.execSql(request)
        })
        connection.connect()
    })
}
async function getTeacherData(teacherLogin){
    let connection = new Connection(config)
    return new Promise((resolve,reject)=>{
        connection.on('connect',(err)=>{
            if(err){
                reject(err)
                connection.close()
            }
            let request = new Request(`SELECT * FROM teacher where username = 
            '${teacherLogin.username}' and teacherpassword = '${teacherLogin.password}'`, function(err) {  
                if (err) {  
                    console.log(err);}  
                })
            request.on('row',(columns)=>{
                let teacher = {}
                if(columns.length > 0){
                    columns.forEach((column) => {
                        teacher[column.metadata.colName] = column.value
                    });
                    resolve(teacher)
                }else{
                    reject("login incorrect")
                }
            })
            request.on('done',()=>{
                
            })
            request.on('requestCompleted',()=>{
                connection.close() 
            })
            connection.execSql(request)
        })
        connection.connect()
    })
}
module.exports = {getStudentData,getTeacherData}