<?php
	$config = array(
		'viewconfig' => array(
			'left_delimiter'=>'{%',
			'right_delimiter'=>'%}',
			'template_dir'=>'tpl',
			'compile_dir'=>'template_c',
            'php_handling' => 'SMARTY_PHP_ALLOW'
			),
		'dbconfig' => array(
			'dbhost' =>'localhost',
			'dbuser' =>'root',
			'dbpsw' =>'',
			'dbname' =>'MVC',
			'dbcharset' =>'utf8'
			),
        'mailconfig' => array(
            'SMTPDebug' => 0,
            'Debugoutput' => 'html',
            'Host' => 'smtp.gmail.com',
            'Port' => 587,
            'SMTPSecure' => true,
            'Username' => 'zengshungeng@gmail.com',
            'Password' => '8121938zsg'
        )
		);
?>