<?php /* Smarty version Smarty-3.1-DEV, created on 2016-05-19 08:10:50
         compiled from "tpl\index\location.html" */ ?>
<?php /*%%SmartyHeaderCode:7254573d58ea928db6-04632077%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '09d67981af0314fa2eb614a819421ac557be6c80' => 
    array (
      0 => 'tpl\\index\\location.html',
      1 => 1463232307,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7254573d58ea928db6-04632077',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1-DEV',
  'unifunc' => 'content_573d58ea965e42_39030441',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_573d58ea965e42_39030441')) {function content_573d58ea965e42_39030441($_smarty_tpl) {?><!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="public/index/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/all.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/globel.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/location.css">
    <script src="https://cdn.bootcss.com/jquery/2.2.3/jquery.js"></script>
    <title>关键字输入提示词条</title>
</head>

<body>
    <div class="bg">
        <div>
            <div class="dz">
                <a href="index.php?controller=index&method=register">注册</a>
                <a href="index.php?controller=index&method=login">登录</a>
            </div>
            <div class="container">
                    <div class="title">
                        <img src="public/index/img/w-logo.png" />
                    </div>
                    <div class="inpu">
                        <div class="i-p">
                            <div class="c-place">
                                <ul>
                                    <li><a href="#">广州市</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="c-input">
                                <form method="post" action="index.php?controller=index&method=checklocation">
                                    <input type="text" id="suggestId" placeholder="请输入您的当前地址">
                                    <input type="hidden" id="location" name="location" value="">
                                    <button id="btn" type="submit" style="background: ;">定位</button>
                                </form>
                                <p class="u-tips">热门地址：<span class="hot-place">广州市</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="map">
                        <div id="l-map"></div>
                    </div>
            </div>
        </div>

    </div>

    <!-- <div id="r-result">请输入:<input type="text"  size="20" value="百度" style="width:150px;" /></div> -->
    <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
</body>

</html>

<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=tG51X8Glbto52Rn2QGO4H90ipEn3wess"></script>
<script type="text/javascript">

    !function(){
        var _height = $(window).height(),
            _width = $(window).width;

        $('.bg').width(_width).height(_height);
        console.log($('.bg').height());

    }();

    
</script>

<script type="text/javascript">
    // 百度地图API功能
    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("l-map");
    map.centerAndZoom("广州", 12); // 初始化地图,设置城市和地图级别。
//    map.enableScrollWheelZoom(true);
    map.addEventListener("click", function() {
        map.clearOverlays();
        //map.addOverlay(marker1);
    });
    var ac = new BMap.Autocomplete( //建立一个自动完成的对象
        {
            "input": "suggestId",
            "location": map
        });

    ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
        localStorage.place = _value.city;
    });

    var myValue;
    ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        setPlace();
        $('#location').val(_value.district);
    });

    function setPlace() {
        map.clearOverlays(); //清除地图上所有覆盖物
        function myFun() {
            var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp)); //添加标注
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
        localStorage.place = myValue;
    }

    function showInfo(e) {
        var location = document.getElementById('location');
        var point = new BMap.Point(e.point.lng, e.point.lat);
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function(rs) {
            var addComp = rs.addressComponents;
            $('#suggestId').val(addComp.province + addComp.city + addComp.district + addComp.street);
            $('#location').val(addComp.district);
            localStorage.place = addComp.district;
        });
        var obtn = document.getElementById('btn');
        obtn.style.background = "#3eafab";
    }
    map.addEventListener("click", showInfo);
</script>
<?php }} ?>
