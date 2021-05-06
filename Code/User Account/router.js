const express = require('express');
const router = express.Router();
const User = require('./models/user');
//const index = require('./front-end/src/index')


router.get('/logined',function(req,res) {
    res.render('logined.html');
});

router.get('/login',function(req,res) {
    res.render('index.html');
});

router.get('/register',function(req,res){
    res.render('register.html');
})


router.post('/login',function(req,res){
    var body = req.body;
    User.findOne({
        email: body.email,
        password: body.password
    }, function(err,user){
        if(err){
            return res.render('index.html',{
                err_message:'Server Error.',
                form: body
            })
        }
        if(!user){
            return res.render('index.html',{
                err_message:'Email or Password is invalid.',
                form: body
            })
        }
        req.session.isLogin = true;
        req.session.user=user;

        return res.render('logined.html',{
            err_message:'OK~',
            form: body
        })
        
    })
})

router.post('/register',function(req,res){
    var body = req.body;
    User.findOne({
        email: body.email
    },function(err,data){
        if(err){
            /*return res.status(500).json({
                sucess: false,//err_code: 500
                message: 'Server Error'
            })*/
            return res.render('register.html',{
                err_message:'Server Error.',
                form: body
            })
        }
        //console.log(data);
        if(data){
            /*return res.status(200).json({
                sucess: true,//err_code: 1
                message: 'Email already exists.'
            })*/
            return res.render('register.html',{
                err_message:'Email already exists.',
                form: body
            })
        }

        new User(body).save(function(err,user){
            if(err){
                /*return res.status(500).json({
                    sucess: false,//err_code: 500
                    message: 'Server Error'
            })*/
                return res.render('register.html',{
                    err_message:'Server Error.',
                    form: body
                })
            }   

            req.session.isLogin = true;
            req.session.user = user;

            /*res.status(200).json({
                sucess: true,//err_code: 0
                message: 'ok~'
            })*/
            return res.render('index.html',{
                form: body
            })
        })
    })
})


router.get('/',function(req,res) {
    if(req.session.isLogin){
    var user1 = req.session.user;
    //res.render('hello.html');
    console.log(user1.email);
    User.findOne({
        email: user1.email
    },function(err,user1){
        var bmi = user1.weight/(user1.height*user1.height/10000);
        console.log("bmi: "+bmi);
        if(err){
            return res.render('hello.html',{
                err_message:'Error!',
            })
        }
        if(bmi<20){
            //console.log("email: "+user1.email);
            //console.log("height: "+user1.height);
            if(user1.bodypart =="Arm"){
                return res.render('hello.html',{
                    message:'This tutorial uses stretchy ropes to stimulate the arms at multiple\nangles! Recommended to be practised every other day to stimulate\nthe arm muscle groups at multiple angles. After 4 weeks of practice\nthere will be a significant increase in arm strength and a more\ndefined line.',
                    plan:'Iron Arm Shaping',
                    http:'https://www.youtube.com/watch?v=UyTR2EjTAXU',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Pectoralis"){
                return res.render('hello.html',{
                    message:'This is a variation of the push-up exercise to get perfect pecs\nat home. The push-up is a classic unarmed pec training move,\nbut a single push-up is not enough to build wide, firm pecs too.\nIn this class, the pecs are given a deeper stimulation through\na variety of variations.',
                    plan:'Freehand Pectoral Training',
                    http:'https://www.youtube.com/watch?v=BkS1-El_WlE',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Abdomen"){
                return res.render('hello.html',{
                    message:'This is the globally popular abdominal exercise to tone your abs\nand is recommended to be practised 3-5 times a week. Shortness\nof breath and abdominal rips and soreness are normal during\nthe workout and your abs will show significant results after\n2-4 weeks of adherence.',
                    plan:'Abs Ripper',
                    http:'https://www.youtube.com/watch?v=-HDzxuSddJw',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Legs"){
                return res.render('hello.html',{
                    message:'This is a hip and leg stretching tutorial that can be done anywhere,\nanytime. It is a full standing all-round stretch for the buttocks\nand legs to improve thick muscular legs, beautify the lines\nand stretch the body, and can also be applied to everyday\nstretches.',
                    plan:'Lower limb training',
                    http:'https://www.youtube.com/watch?v=7KKDFfTGWLo',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Back"){
                return res.render('hello.html',{
                    message:'This is a back training course that incorporates core training\nfor spinal stress improvement in addition to simple and effective\nback training movements. It will help you to build a good\nfoundation of back strength, improve your hunchback and enhance\nyour overall tone.',
                    plan:'Back Training',
                    http:'https://www.youtube.com/watch?v=SOvsUhLCdys',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }    
        }else if(bmi>20&&bmi<28){
            if(user1.bodypart =="Arm"){
                return res.render('hello.html',{
                    message:'This tutorial uses stretchy ropes to stimulate the arms at multiple\nangles! Recommended to be practised every other day to stimulate\nthe arm muscle groups at multiple angles. After 4 weeks of practice\nthere will be a significant increase in arm strength and a more\ndefined line.',
                    plan:'Iron Arm Shaping',
                    http:'https://www.youtube.com/watch?v=UyTR2EjTAXU',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Pectoralis"){
                return res.render('hello.html',{
                    message:'This is a variation of the push-up exercise to get perfect pecs\nat home. The push-up is a classic unarmed pec training move,\nbut a single push-up is not enough to build wide, firm pecs too.\nIn this class, the pecs are given a deeper stimulation through\na variety of variations.',
                    plan:'Freehand Pectoral Training',
                    http:'https://www.youtube.com/watch?v=BkS1-El_WlE',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Abdomen"){
                return res.render('hello.html',{
                    message:'This is the globally popular abdominal exercise to tone your abs\nand is recommended to be practised 3-5 times a week. Shortness\nof breath and abdominal rips and soreness are normal during\nthe workout and your abs will show significant results after\n2-4 weeks of adherence.',
                    plan:'Abs Ripper',
                    http:'https://www.youtube.com/watch?v=-HDzxuSddJw',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Legs"){
                return res.render('hello.html',{
                    message:'This is a hip and leg stretching tutorial that can be done anywhere,\nanytime. It is a full standing all-round stretch for the buttocks\nand legs to improve thick muscular legs, beautify the lines\nand stretch the body, and can also be applied to everyday\nstretches.',
                    plan:'Lower limb training',
                    http:'https://www.youtube.com/watch?v=7KKDFfTGWLo',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Back"){
                return res.render('hello.html',{
                    message:'This is a back training course that incorporates core training\nfor spinal stress improvement in addition to simple and effective\nback training movements. It will help you to build a good\nfoundation of back strength, improve your hunchback and enhance\nyour overall tone.',
                    plan:'Back Training',
                    http:'https://www.youtube.com/watch?v=SOvsUhLCdys',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }
        }else if(bmi>28){
            if(user1.bodypart =="Arm"){
                return res.render('hello.html',{
                    message:'This tutorial uses stretchy ropes to stimulate the arms at multiple\nangles! Recommended to be practised every other day to stimulate\nthe arm muscle groups at multiple angles. After 4 weeks of practice\nthere will be a significant increase in arm strength and a more\ndefined line.',
                    plan:'Iron Arm Shaping',
                    http:'https://www.youtube.com/watch?v=UyTR2EjTAXU',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Pectoralis"){
                return res.render('hello.html',{
                    message:'This is a variation of the push-up exercise to get perfect pecs\nat home. The push-up is a classic unarmed pec training move,\nbut a single push-up is not enough to build wide, firm pecs too.\nIn this class, the pecs are given a deeper stimulation through\na variety of variations.',
                    plan:'Freehand Pectoral Training',
                    http:'https://www.youtube.com/watch?v=BkS1-El_WlE',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Abdomen"){
                return res.render('hello.html',{
                    message:'This is the globally popular abdominal exercise to tone your abs\nand is recommended to be practised 3-5 times a week. Shortness\nof breath and abdominal rips and soreness are normal during\nthe workout and your abs will show significant results after\n2-4 weeks of adherence.',
                    plan:'Abs Ripper',
                    http:'https://www.youtube.com/watch?v=-HDzxuSddJw',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Legs"){
                return res.render('hello.html',{
                    message:'This is a hip and leg stretching tutorial that can be done anywhere,\nanytime. It is a full standing all-round stretch for the buttocks\nand legs to improve thick muscular legs, beautify the lines\nand stretch the body, and can also be applied to everyday\nstretches.',
                    plan:'Lower limb training',
                    http:'https://www.youtube.com/watch?v=7KKDFfTGWLo',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }else if(user1.bodypart =="Back"){
                return res.render('hello.html',{
                    message:'This is a back training course that incorporates core training\nfor spinal stress improvement in addition to simple and effective\nback training movements. It will help you to build a good\nfoundation of back strength, improve your hunchback and enhance\nyour overall tone.',
                    plan:'Back Training',
                    http:'https://www.youtube.com/watch?v=SOvsUhLCdys',
                    form: user1.email,
                    part: user1.bodypart,
                    bmi: bmi
                })
            }
        }
    })
    } else {
        res.render('index.html');
    }
})


module.exports = router;














