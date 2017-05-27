<?php

    class indexController{
        public function __construct()
        {
            
        }
        public function login(){
            if(!isset($_POST['submit'])){
				VIEW::display('index/login.html');
			}else if(md5($_POST['verifycode'])==$_SESSION["authcode"]){
				$this->checklogin();
			}else{
                $this->showmessage('验证码错误！','index.php?controller=index&method=login');
            }
        }
        public function index(){
            
            if(!isset($_COOKIE['location'])||empty($_COOKIE['location'])){
                $this->checklocation();
            }else{
                VIEW::display('index/index.html');
            }      
        }
        public function runner(){
            VIEW::display('index/run.html');
        }
        public function personal()
        {
            VIEW::display('index/personal.html');
        }
        public function article(){
            VIEW::display('index/healthy.html');
        }
        public function share(){
            VIEW::display('index/share.html');
        }
        public function runall(){
            VIEW::display('index/run-all.html');
        }
        public function addactivity(){
            $this->checkstate();
            if(!isset($_POST['submit'])){
                VIEW::display("index/run-launch.html");
            }
        }
        public function activitydetail(){
            VIEW::display('index/run-detail.html');
        }
        public function articaldetail(){
            VIEW::display('index/artical-detail.html');
        }
        public function register(){
            if(!isset($_POST['submit'])){
                VIEW::display("index/register.html");
            }else{
                if($_POST['password2']!=$_POST['password']){
                    $this->showmessage('两次输入的密码不一致！','');
                }else{
                $userobj = M('user');
                $result = $userobj->addnewaccount($_POST);
                $user = $userobj->findOne_by_uid($result);
                $mail = "<html>
                        <head>
                          <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
                          <title>PHPMailer Test</title>
                        </head>
                        <body>
                        <div style='width: 640px; font-family: Arial, Helvetica, sans-serif; font-size: 11px;'>
                          <p><strong>Email 地址验证<br/>".$user['username'].",</strong>
                        <pre>
                        这封信是由 慢跑青春 发送的。

                        您收到这封邮件，是由于在 慢跑青春 进行了新用户注册。如果您并没有访问过 慢跑青春，或没有进行上述操作，请忽略这封邮件。您不需要退订或进行其他进一步的操作。


                        ----------------------------------------------------------------------
                        帐号激活说明
                        ----------------------------------------------------------------------


                        如果您是 慢跑青春 的新用户，我们需要对您的地址有效性进行验证以避免垃圾邮件或地址被滥用。

                        您只需点击下面的链接即可激活您的帐号：

                        <a href='http://172.16.108.40/test/index.php?controller=index&method=activa&uid=".$result.
                            "'>http://172.16.108.40/test/index.php?controller=index&method=activa&uid=".$result."</a>
                        (如果上面不是链接形式，请将该地址手工粘贴到浏览器地址栏再访问)

                        感谢您的访问，祝您使用愉快！

                        此致
                        慢跑青春 管理团队.
                        </pre>

                        </p>

                        </div>
                        </body>
                        </html>";
                $t = $this->postmail($user['email'],"[慢跑青春] 邮箱地址验证",$mail);
                if($t = 2)
                    $userobj->updatemail($result);
                }
                $this->showmessage('注册成功！','index.php?controller=index&method=index');
                
            }
        }
        private function checklogin(){
            $accountobj = M('account');
           if($accountobj->loginsubmit()==1) {
               $this->showmessage('登录成功！','index.php?controller=index&method=index');
            }if($accountobj->loginsubmit()==2){
               $this->showmessage('登录失败！,请前往注册邮箱激活账号或联系管理员。','index.php?controller=index&method=login');
            }if($accountobj->loginsubmit()==3){
               $this->showmessage('登录失败！,密码错误。','index.php?controller=index&method=login');
            }if($accountobj->loginsubmit()==4){
               $this->showmessage('登录失败！,账号处于封禁状态,请联系管理员。','index.php?controller=index&method=login');
            }
        }
        public function logout(){
            $accountobj = M('account');
            $accountobj ->logout();
            $this->showmessage('退出成功！','index.php?controller=index&method=index');
        }
        private function showmessage($info, $url){
			echo "<script>alert('$info');window.location.href='$url'</script>";
			exit;
        }
        public function checklocation(){
            if(isset($_POST[location]))
            {
//                echo ($_POST[location]);
                $locationobj = M('location');
                $locationobj -> setlocation($_POST[location]);
                unset($locationobj);
                header("Location:index.php?controller=index&method=index"); 
            }
            VIEW::display('index/location.html');
        }
        public function test()
        {
            $this->postmail('1045968406@qq.com','My subject','test');
                        
        }
        function postmail($to,$subject = '',$body = ''){
            date_default_timezone_set('Asia/Shanghai');//设定时区东八区
            require '/libs/ORG/PHPMailer-master/PHPMailerAutoload.php';
            $mail             = new PHPMailer(); //new一个PHPMailer对象出来
            $body            = eregi_replace("[\]",'',$body); //对邮件内容进行必要的过滤
            $mail->CharSet ="utf-8";//设定邮件编码，默认ISO-8859-1，如果发中文此项必须设置，否则乱码
            $mail->IsSMTP(); // 设定使用SMTP服务
            $mail->SMTPDebug  = 0;                     // 启用SMTP调试功能
            // 1 = errors and messages
            // 2 = messages only
            $mail->SMTPAuth   = true;                  // 启用 SMTP 验证功能
            $mail->SMTPSecure = "ssl";                 // 安全协议，可以注释掉
            $mail->Host       = 'smtp.163.com';      // SMTP 服务器
            $mail->Port       = 465;                   // SMTP服务器的端口号
            $mail->Username   = '18664894928@163.com';  // SMTP服务器用户名，PS：我乱打的
            $mail->Password   = 'ZSG123';            // SMTP服务器密码
            $mail->setFrom('18664894928@163.com', 'First Last');
            $mail->addReplyTo('18664894928@163.com', 'First Last');
            $mail->Subject    = $subject;
            $mail->AltBody    = 'To view the message, please use an HTML compatible email viewer!'; // optional, comment out and test
            $mail->MsgHTML($body);
            $address = $to;
            $mail->AddAddress($address, '');
            if (!$mail->send()) {
                echo 'error';
//                return 1;
            } else {
                echo "susserc";
//                return 2;
            }
        }
        private function checkstate(){
            if(isset($_SESSION['acco'])){
                return true;
            }else{
                $this->showmessage('请于登录后进行该操作。','index.php?controller=index&method=login');
                return false;
            }
        }
    }
?>
