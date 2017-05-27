<?php
    header("Access-Control-Allow-Origin: *");
	header("Content-type:text/html;charset=utf-8");
	require_once ('config.php');
	require_once ('framework/launcher.php');
    start_session(600);
	Launcher::run($config);
?>