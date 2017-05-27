<script language="javascript">  
  if(window.ActiveXObject) //如果是window声明一个函数   
  {   
  function XMLHttpRequest() //这个函数firefox已带不用声明   
  {   
  try  
  {   
    //返回对象句柄   
    return new ActiveXObject("MSXML2.XMLHTTP");   
    return new ActiveXObject("Microsoft.XMLHTTP");   
  }   
  catch (err)  
  {   
    alert("XMLHttpRequest error");   
  }   
  }   
  }   
  function ajax(reqtype,url,asynch,respHandle) //声明一个ajax函数这个是ajax入口  
  {   
  $ajax=new XMLHttpRequest(); //new 一个xmlhttp 注意这个函数 还有前要不要带var 表示全局变量   
  if($ajax) //检查下是否new 成功   
  { //查看下是什么类型提交   
  if(reqtype.toLowerCase()!='post')  
  {   
    initReq(reqtype,url,asynch,respHandle); //调用一个初始化函数   
  }  
  else   
  {   
    var args=arguments[4]; //如果是post应该还要取一个参数   
    if(args!=null&&args.length>0)   
    {   
    initReq(reqtype,url,asynch,respHandle,args); //调用一个初始化函数   
    }   
  }   
  }  
  else   
  {   
  alert('ajax new error');   
  }   
  }   
  function initReq(reqType,url,bool,respHandle)  
  {   
  try  
  {   
  $ajax.onreadystatechange=respHandle; //设置如果提交成功调用那个函数 注意这个是变量   
  $ajax.open(reqType,url,bool); //打开地址   
  if(reqType.toLowerCase()=="post")  
  { //如果是post 还要发送类型   
    $ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");   
    $ajax.send(arguments[4]); //发送post数据   
  }  
  else   
  {   
    $ajax.send(null); //如果是get就不用了   
  }   
  }   
  catch(errv)   
  {   
  alert('the server at the monent');   
  }   
  }   
  function handleResponse()  
  {   
  if($ajax.readyState==4)  
  { //检查状态是否成功请求   
  if($ajax.status==200)  
  { //返回是否正确完整   
    //alert($ajax.responseText);//可以测试下数据   
    document.getElementById("sendit").innerHTML=$ajax.responseText;   
  }  
  else  
  {   
    alert("$alax error");   
  }   
  }   
  }  
  function send_id()   
  {  
  //组装下数据   
  var _url="ajax1.php";   
  var _data="id="+document.getElementById("id").value;   
  ajax("POST",_url,true,handleResponse,_data);   
  }  
  function send_password()   
  {   
  //组装下数据   
  var _url="ajax1.php";   
  var _data="id="+document.getElementById("id").value+"password="+document.getElementById("password").value;   
  ajax("POST",_url,true,handleResponse,_data);   
  }   
  function send_passwordagain()   
  {   
  //组装下数据   
  var _url="ajax1.php";   
  var _data="id="+document.getElementById("id").value+"password="+document.getElementById("password").value+"&passwordagain="+document.getElementById("passwordagain").value;   
  ajax("POST",_url,true,handleResponse,_data);   
  }  
  function submit_form()  
  {  
  var _url="ajax1.php";  
  var _data="id="+document.getElementById("id").value+"&password="+document.getElementById("password").value+"&passwordagain="+document.getElementById("passwordagain").value+"submit=1";  
  ajax("POST",_url,true,handleResponse,_data);  
  }  
</script>   