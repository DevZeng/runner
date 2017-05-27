<?php /* Smarty version Smarty-3.1-DEV, created on 2016-05-24 08:37:54
         compiled from "tpl\index\login.html" */ ?>
<?php /*%%SmartyHeaderCode:23756573d58cf0cb1d4-06598062%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f7dea4051e0d5d15959a6c9a9f4df1170c7ad745' => 
    array (
      0 => 'tpl\\index\\login.html',
      1 => 1464071800,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '23756573d58cf0cb1d4-06598062',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1-DEV',
  'unifunc' => 'content_573d58cf108273_19216686',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_573d58cf108273_19216686')) {function content_573d58cf108273_19216686($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="public/index/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/all.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/globel.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/login.css">
    <script src="https://cdn.bootcss.com/jquery/2.2.3/jquery.js"></script>
</head>
<body>
    <div class="bg">
     <div>
        <div class="dz">
             <a href="index.php?controller=index&method=register">注册</a>
             <a href="index.php?controller=index&method=login">登录</a>
             <a href="index.php">首页</a>
         </div>

         <div class="container">
             <div class="title">
                 <img src="public/index/img/w-logo.png" />
             </div>
             <div class="ba">
                 <div class="zc">
                     <span>登陆</span>
                 </div>
                <form class="login-form">
                    <div class="zc-line row">
                        <div class="col-md-2">
                            <img src="public/index/img/yonghu.png">
                        </div>
                        <div class="fo-li col-md-10">
                            <input type="text" id="user" placeholder="请输入用户名">
                        </div>
                    </div>
                    <div class="zc-line row">
                        <div class="col-md-2">
                            <img src="public/index/img/mima.png">
                        </div>
                        <div class="fo-li col-md-10">
                            <input type="text" id="pwd" placeholder="请输入密码">
                        </div>
                    </div>

                    <div class="zc-line row">
                        <div class="fo-li col-md-8 col-md-offset-2 clear">
                            <input class="code" id="code" type="text" placeholder="验证码" />
                            <img class="code-img" id="Img" src="libs/ORG/authcode.inc.php" />
                        </div>
                        <div class="col-md-2" id="reset"><img src="public/index/img/shuaxin.png"></div>
                    </div>

                    <div class="b-t text-center">
                        <a class="b-t-l" href="index.php?controller=index&method=register">新用户注册</a>
                        <a class="b-t-r" href="#">忘记密码</a>
                    </div>
                    <a href="javascript:;" id="put">登陆</a>

                </form>


                <div class="b-lian">
                    <p>可使用以下账号直接登录</p>
                </div>
                <div class="b-i">
                    <img src="public/index/img/lianjie.png">
                </div>

            </div>

        </div>

    </div>

   </div>

   <script type="text/javascript">

       !function(){
           var _height = $(window).height(),
               _width = $(window).width;

           $('.bg').width(_width).height(_height);
           console.log($('.bg').height());

       }();

       $('#put').click(function(event) {
            // if ( $('#username').val('') || $('#password1').val('') || $('#password1').val('') || $('#email').val('') ) {
            //     alert('请把信息填写完整');
            // }else{
                
            //     SendInfo();
            // }
            var info = {
                username: $('#user').val(),
                password : $('#pwd').val(),
                code : $('#code').val(),
            };
            SendInfo(info);
        });

       $('#reset').click(function(){
            reImg();
       })

        function SendInfo(info){
            $.ajax({
              type: 'POST',
              url: 'index.php?controller=api&method=login',
              // data to be added to query string:
              data: info,
              // type of data we are expecting in return:
              dataType: 'json',
              timeout: 300,
              success: function(data,status){
               console.log(data);
               console.log(info);
                  if(data['type']=='success'){
                      alert("登录成功！");
                      location.href="index.php";
                  }else{
                      alert (data['message']);
                  }
              },
              error: function(xhr, type){
                 console.log('服务器繁忙');
                 reImg();
              }
            })
        }

        function reImg(){  
            var img = document.getElementById("Img");  
            img.src = "libs/ORG/authcode.inc.php";  
        } 

   </script>

</body>
</html>
<?php }} ?>
