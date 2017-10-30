//以下内容告诉程序，当访问网站根目录时，就根据传入的title
//变量用模板引擎渲染views下面的index.ejs文件生成HTML文件并返回给浏览器
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



//添加其他路由
//app.get和app.post分别处理get和post请求
//app.all对于get和post请求都做处理
//首页
router.get('/', function (req, res, next) {});

//用户个人页
router.get('/u/:user', function (req, res, next) {});

//发言页
router.get('/post', function (req, res, next) {
	res.render('posts', { title: 'post' });
});

//注册页
router.get('/reg', function (req, res, next) {
	res.render('reg', {title: '用户注册'});
});

router.get('/login', checkNotLogin);
//登录页
router.get('/login', function(req, res, next) {
    res.render('login',{title:'用户登入'});
});

//提交登录
router.post('/login', function (req, res, next) {
	res.render('login', { title: 'login' });
});

//登出页
router.get('/logout', function (req, res, next) {
    req.flash('error','登出成功');
    res.redirect('/');
});


module.exports = router;

//确认未登入，已登入不能登入及注册
function checkNotLogin(req,res,next){
    if(req.session.user){
        req.flash('error','已登入');
        res.redirect('/');
    }else{
        next();
    }
}

//确认已登入,未登入不能登出,并且转向登录页面
function checkLogin(req,res,next){
    if(req.session.user){
        next();
    }else{
        req.flash('error','未登入');
        res.redirect('/login');
    }
}