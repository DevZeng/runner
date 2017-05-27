<?php /* Smarty version Smarty-3.1-DEV, created on 2016-05-19 13:32:48
         compiled from "tpl\index\register.html" */ ?>
<?php /*%%SmartyHeaderCode:30904573d594b0a7028-10324801%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f289974ee0e804321a42a3f1674f55e65e3c6a51' => 
    array (
      0 => 'tpl\\index\\register.html',
      1 => 1463657343,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '30904573d594b0a7028-10324801',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1-DEV',
  'unifunc' => 'content_573d594b0e40c8_17469332',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_573d594b0e40c8_17469332')) {function content_573d594b0e40c8_17469332($_smarty_tpl) {?><!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="public/index/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/all.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/globel.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/zhuce.css">
    <script src="https://cdn.bootcss.com/jquery/2.2.3/jquery.js"></script>
    <title>用户注册</title>
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
                    <span>注册</span>
                </div>
                <form method="post" action="index.php?controller=index&method=register">
                    <div class="fo-li">
                        <label>用户名</label>
                        <input type="text" name="username">
                    </div>
                    <div class="fo-li">
                        <label>密&nbsp;码</label>
                        <input id="password1" type="password" name="password">
                    </div>
                    <div class="fo-li">
                        <label>确认密码</label>
                        <input id="password2" type="password" name="password2">
                    </div>
                    <div class="fo-li">
                        <label>邮&nbsp;箱</label>
                        <input  type="text" name="email">
                    </div>
                    <div class="b-p">
                        <p>已经注册过？请直接点击<a href="denglu">直接登录</a></p>
                    </div>
                    <input type="submit" id="put" name="submit" value="提交" />
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

            $('#put').click(function(event) {
                if (!($('#password1').val()==$('#password2').val())) {
                    alert('两次密码输入不一致');
                    $('#password1').val('');
                    $('#password2').val('');
                }
            });

       }();

   </script>
</body>
</html>
<?php }} ?>
