<?php /* Smarty version Smarty-3.1-DEV, created on 2016-05-19 08:10:08
         compiled from "tpl\index\run-launch.html" */ ?>
<?php /*%%SmartyHeaderCode:29489573d58c095d7e7-11313470%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3d3ff3494b7966ade07aed3f4f70688e9a29a23d' => 
    array (
      0 => 'tpl\\index\\run-launch.html',
      1 => 1463637004,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '29489573d58c095d7e7-11313470',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1-DEV',
  'unifunc' => 'content_573d58c09d7925_69791583',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_573d58c09d7925_69791583')) {function content_573d58c09d7925_69791583($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <!-- 声明字符编码 -->
    <meta charset="UTF-8">
    <!-- 优先使用 IE 最新版本和 Chrome -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- 国产浏览器默认极速模式渲染 -->
    <meta name="renderer" content="webkit">
    <!-- 禁止百度转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <!-- 开启手机端浏览缩放 -->
    <meta name="viewport" content="width=device-width,user-scalable=no">
    <script src="public/index/js/react.js"></script>
    <script src="https://cdn.bootcss.com/jquery/2.2.3/jquery.js"></script>
    <script type="text/javascript" charset="utf-8" src="public/index/js/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="public/index/js/ueditor.all.min.js"> </script>
    <!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
    <!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
    <script type="text/javascript" charset="utf-8" src="public/index/js/zh-cn.js"></script>
      <!-- bxSlider Javascript file -->
      <!-- bxSlider CSS file -->
      <link href="public/index/css/jquery.bxslider.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="public/index/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/all.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/globel.css">
    <link rel="stylesheet" type="text/css" href="public/index/css/run-launch.css">
    <title>约跑</title>
  </head>
  <body>
    <div id="header">

    </div>
    <div class="container run-launch">
        <div class="left-form">
            <form>
                <div class="form-title form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">活动名称</label>
                        <div class="col-sm-10"><input type="text" class="form-control" id="" placeholder="请输入活动名称" /></div>
                    </div>
                </div>
                <div class="form-ctr">
                    <div class="form-horizontal form-itd">
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">活动地点</label>
                            <div class="col-sm-4 ">
                                <input type="" class="form-control" id="" placeholder="" />
                            </div>
                            <label class="col-sm-2 control-label min-label">区</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="" placeholder="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">活动时间</label>
                            <div class="col-sm-4 input-append date" data-date="12-02-2012" data-date-format="dd-mm-yyyy">
                                <input type="text" class="form-control" id="" placeholder="格式: 2016-01-22" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">报名时间</label>
                            <div class="col-sm-4">
                                <input type="" class="form-control" id="" placeholder="格式: 2016-01-22" />
                            </div>
                            <label class="col-sm-2 control-label min-label">至</label>
                            <div class="col-sm-4">
                                <input type="" class="form-control" id="" placeholder="格式: 2016-01-22"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">集合地点</label>
                            <div class="col-sm-4">
                                <input type="" class="form-control" id="" placeholder="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">人数限制</label>
                            <div class="col-sm-4">
                                <input type="" class="form-control" id="" placeholder="" />
                            </div>
                            <label class="col-sm-2 control-label min-label">人数</label>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">总里程</label>
                            <div class="col-sm-4">
                                <input type="" class="form-control" id="" placeholder="" />
                            </div>
                            <label class="col-sm-2 control-label min-label">公里</label>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">活动奖励</label>
                            <div class="col-sm-10">
                                <input type="" class="form-control" id="" placeholder="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-sm-2 control-label">封面图</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="right-edit">
            <script id="editor" type="text/plain" style="width:100%;height:100%;"></script>
        </div>
    </div>
    <div id="footer">

    </div>

    <script src="public/index/js/bootstrap-datetimepicker.min.js"></script>
    <script src="public/index/js/jqc.js"></script>
    <script src="public/index/js/globel.js"></script>
    <script src="public/index/js/page/run-launch.js"></script>
    <script type="text/javascript">

    //实例化编辑器
    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
    var ue = UE.getEditor('editor');


    function isFocus(e){
        alert(UE.getEditor('editor').isFocus());
        UE.dom.domUtils.preventDefault(e)
    }
    function setblur(e){
        UE.getEditor('editor').blur();
        UE.dom.domUtils.preventDefault(e)
    }
    function insertHtml() {
        var value = prompt('插入html代码', '');
        UE.getEditor('editor').execCommand('insertHtml', value)
    }
    function createEditor() {
        enableBtn();
        UE.getEditor('editor');
    }
    function getAllHtml() {
        alert(UE.getEditor('editor').getAllHtml())
    }
    function getContent() {
        var arr = [];
        arr.push("使用editor.getContent()方法可以获得编辑器的内容");
        arr.push("内容为：");
        arr.push(UE.getEditor('editor').getContent());
        alert(arr.join("\n"));
    }
    function getPlainTxt() {
        var arr = [];
        arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
        arr.push("内容为：");
        arr.push(UE.getEditor('editor').getPlainTxt());
        alert(arr.join('\n'))
    }
    function setContent(isAppendTo) {
        var arr = [];
        arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
        UE.getEditor('editor').setContent('欢迎使用ueditor', isAppendTo);
        alert(arr.join("\n"));
    }
    function setDisabled() {
        UE.getEditor('editor').setDisabled('fullscreen');
        disableBtn("enable");
    }

    function setEnabled() {
        UE.getEditor('editor').setEnabled();
        enableBtn();
    }

    function getText() {
        //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
        var range = UE.getEditor('editor').selection.getRange();
        range.select();
        var txt = UE.getEditor('editor').selection.getText();
        alert(txt)
    }

    function getContentTxt() {
        var arr = [];
        arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
        arr.push("编辑器的纯文本内容为：");
        arr.push(UE.getEditor('editor').getContentTxt());
        alert(arr.join("\n"));
    }
    function hasContent() {
        var arr = [];
        arr.push("使用editor.hasContents()方法判断编辑器里是否有内容");
        arr.push("判断结果为：");
        arr.push(UE.getEditor('editor').hasContents());
        alert(arr.join("\n"));
    }
    function setFocus() {
        UE.getEditor('editor').focus();
    }
    function deleteEditor() {
        disableBtn();
        UE.getEditor('editor').destroy();
    }
    function disableBtn(str) {
        var div = document.getElementById('btns');
        var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
        for (var i = 0, btn; btn = btns[i++];) {
            if (btn.id == str) {
                UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
            } else {
                btn.setAttribute("disabled", "true");
            }
        }
    }
    function enableBtn() {
        var div = document.getElementById('btns');
        var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
        for (var i = 0, btn; btn = btns[i++];) {
            UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
        }
    }

    function getLocalData () {
        alert(UE.getEditor('editor').execCommand( "getlocaldata" ));
    }

    function clearLocalData () {
        UE.getEditor('editor').execCommand( "clearlocaldata" );
        alert("已清空草稿箱")
    }
    </script>
 </body>
</html>
<?php }} ?>
