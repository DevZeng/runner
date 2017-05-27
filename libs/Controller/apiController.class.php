<?php
    header("Content-type:application/json");
    class apiController {
        public function getAccount(){
            if(isset($_SESSION['acco'])){
                $data = array('username'=>$_SESSION['acco']['username']);
            }else{
                $data = array('username'=>'游客');
            }
            echo json_encode($data);
        }
        public function login(){
            if(md5($_POST['code'])!=$_SESSION["authcode"]){
                echo json_encode(array('type'=>'error','message'=>'验证码错误'));
            }
            else{
                $accoobj = M('account');
                $state = $accoobj->loginsubmit();
                switch($state)
                {
                    case 1:
                        echo json_encode(array('type'=>'success','id'=>$_SESSION['acco']['uid']));
                        break;
                    case 2:
                        echo json_encode(array('type'=>'error','message'=>'账户未激活！,请前往注册邮箱激活账号或联系管理员。'));
                        break;
                    case 3:
                        echo json_encode(array('type'=>'error','message'=>'登录失败！,密码错误。'));
                        break;
                    case 4:
                        echo json_encode(array('type'=>'error','message'=>'登录失败！,账号处于封禁状态,请联系管理员。'));
                        break;
                }
            }      
        }
        public function getNumber(){
            if(isset($_SESSION['acco'])){
                $userobj = M('user');
                $join = $userobj->getjoinnumber($_SESSION['acco']['uid']);
                $create = $userobj->getcreatenumber($_SESSION['acco']['uid']);
                $city = $userobj->getcitynumber($_SESSION['acco']['uid']);
                echo json_encode(array('type'=>'user','username'=>$_SESSION['acco']['username'],'data'=>array('join'=>$join,'create'=>$create,'city'=>$city)));
            }else{
               echo json_encode(array('username'=>'visitor'));
            }
            
        }
        public function getAllactivity(){
            $actiobj = M('activity');
            $all = 0;
            if($data = $actiobj->findAll()){
                $num = count($data);
                for($i=0;$i<$num;$i++)
                {
                    $all = $actiobj->getJoincount($data[$i]['aid']);
                    array_push($data[$i], intval($data[$i]['numbers'])-$all, $all );
                }
                echo json_encode(array('type'=>'success','message'=>'获取成功','data'=>$data));
            }else{
                echo json_encode(array('type'=>'warning','message'=>'获取失败'));
            }
        }
        public function getActivity(){
            if(isset($_GET['aid'])){
                $actiobj = M('activity');
                if($data = $actiobj->getActivity($_GET[aid])){
                    echo json_encode(array('type'=>'success','message'=>'获取成功','data'=>$data));
                }else{
                    echo json_encode(array('type'=>'warning','message'=>'没有找到该活动'));
                }
            }else{
                echo json_encode(array('type'=>'warning','message'=>'获取失败'));
            }
        }
        public function getUserinfo(){
            if(isset($_SESSION['acco'])){
                $userobj = M('user');
                $data = $userobj->getUserinfo($_SESSION['acco']['uid']);
                echo json_encode(array('type'=>'success','message'=>'获取成功','data'=>array(
                    'area' => $data['area'],
                    'nickname' => $data['nickname'],
                    'realname' => $data['realname'],
                    'sex' => $data['sex'],
                    'emotion' => $data['emotion'],
                    'birthday' => $data['birthday'],
                    'blood' => $data['blood'],
                    'blog' => $data['blog'],
                    'Introduction' => $data['Introduction'],
                    'email' => $_SESSION['acco']['email'],
                    'QQ' =>$data['QQ'],
                    'MSN' => $data['MSN'],
                    'profession' => $data['profession'],
                    'education'=>$data['education']
                    
                )));
            }else{
                echo json_encode(array('type'=>'warning','message'=>'获取失败'));
            }
        }
        public function getArtical(){
            $articalobj = M('artical');
            if($data = $articalobj->getArtical($_GET['id'])){
                echo json_encode(array('type'=>'success','message'=>'获取成功','data'=>$data));
            }else{
                echo json_encode(array('type'=>'warning','message'=>'没有找到该文章'));
            }
        }
        public function getArticallist(){
            if(isset($_SESSION['acco'])){
                $articalobj = M('artical');
                $newslist = $articalobj->getAllactical(1,0);
                $userlist = $articalobj->getAllactical(2,0);
                $mylist = $articalobj->getAll($_SESSION['acco']['uid']);
                echo json_encode(array('type'=>'success','message'=>'获取成功','newslist'=>$newslist,'userlist'=>$userlist,'mylist'=>$mylist));
            }
        }
        public function register(){
            if ($_POST['password']!=$_POST['password2']) {
                echo json_encode(array('type'=>'error','message'=>'两次输入的密码不一致！'));
            }else{
                $userobj = M('user');
                if($userobj->addnewaccount($_POST)){
                    echo json_encode(array('type'=>'success','message'=>'注册成功！'));
                }else{
                    echo json_encode(array('type'=>'error','message'=>'注册失败！'));
                }
            }
        }
    }
?>