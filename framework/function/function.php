<?php
	function C($name,$method)
	{
		require_once ('/libs/Controller/'.$name.'Controller.class.php');
		$controller = $name.'Controller';
		$obj = new $controller();
		$obj -> $method();
	}
	function M($name)
	{
		require_once ('/libs/Model/'.$name.'Model.class.php');
		$model = $name.'Model';
		$obj = new $model();
		return $obj;
	}
	function V($name)
	{
		require_once ('libs/View/'.$name.'View.class.php');
		$view = $name.'View';
		$obj = new $view();
		return $obj;
	}
	function daddslashes($str)
	{
		return (!get_magic_quotes_gpc())?addslashes($str):$str;
		# code...
	}
	function ORG($path , $name , $params=array())
	{
		require_once ('libs/ORG/'.$path.$name.'.class.php');
		$obj = new $name();
		if (!empty($params)) {
			foreach ($params as $key => $value) {
				$obj->$key = $value;
			}
		}
		return $obj;
	}
    function start_session($expire = 0) 
        { 
            if ($expire == 0) { 
                $expire = ini_get('session.gc_maxlifetime'); 
            } else { 
                ini_set('session.gc_maxlifetime', $expire); 
            } 
            if (empty($_COOKIE['PHPSESSID'])) { 
                session_set_cookie_params($expire); 
                session_start(); 
            } else { 
                session_start(); 
                setcookie('PHPSESSID', session_id(), time() + $expire); 
            } 
        }
?>