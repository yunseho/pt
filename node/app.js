const express = require('express');
const app = express();
const {sequelize}=require('./models') //index생략가능  //model의 index를 가져옴

const {User}=require('./models')



app.get('/', async (req,res)=>{ //요 익명함수를 async로 해놓고 
    /* insert문
    User.create({   //User의 부모에 create를 가지고 있어서 사용 가능 
        name:'zero',
        age:24,
        married:false,
        comment:'자기소개1',
    })*/

    //Select 문
    console.log(await User.findAll({}));



    res.send('hello world');
})

app.listen(3000,()=>{
    console.log('server start 3000')
})