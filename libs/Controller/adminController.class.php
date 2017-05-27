<?php
/**
* 
*/
class adminController
{
	public $auth ='';
    //构造函数
	public function __construct()
	{
		$authobj = M('auth');
		$this->auth = $authobj->getauth();
		if (empty($this->auth)&&(Launcher::$method!='login')) {
			$this->showmessage('请登录后再操作！','admin.php?controller=admin&method=login');
		}
    }
    //登录
	public function login(){
			if(!isset($_POST['submit'])){
				VIEW::display('admin/login.html');
			}else{
				$this->checklogin();
			}
    }
    //首页
	public function index()
	{  
		$newsobj = M('news');
		$newsnum = $newsobj->count();
		VIEW::assign(array('newsnum'=>$newsnum));
		VIEW::display('admin/index.html');
	}
    //登录验证
	private function checklogin()
	{
		$authobj = M('auth');
		if ($authobj->loginsubmit()) {
			$this->showmessage('登录成功！','admin.php?controller=admin&method=index');
		}else{
			$this->showmessage('登录失败！','admin.php?controller=admin&method=login');
		}
    }
    //退出登录
    public function logout(){
        $authobj = M('auth');
        $authobj->logout();
        $this->showmessage('退出成功！','admin.php?controller=admin&method=login');
    }
    public function addprovinces(){
        if(empty($_POST)){
            if(isset($_GET['id'])){
//                $data = M('news')->getnewsinfo($_GET['id']);
            }else{
                $data = array();
            }
            VIEW::assign(array('data'=>$data));
            VIEW::display('admin/addprovinces.html');
        }else{
            $proobj = M('provinces');
            $proobj->addprovinces($_POST);
        }
    }
    public function addcity(){
        $pid = $_GET['pid'];
        if(empty($_POST)){
            if(isset($_GET['pid'])){
                $data = M('provinces')->select_by_id($_GET['pid']);
                $pid = $_GET['pid'];
            }else{
                $data = array();
            }
            VIEW::assign(array('data'=>$data,'pid'=>$pid));
            VIEW::display('admin/addcity.html');
        }else{
            $cityobj = M('city');
            $cityobj->addcity($_POST);
            $this->showmessage('操作成功！', 'index.php?controller=admin&method=listprovinces');
        }
    }
    public function newslist(){
        $newsobj = M('news');
        $data = $newsobj->findAll_orderby_dateline();
        echo (json_encode($data));
//        VIEW::assign(array('data'=>$data));
//        VIEW::display('admin/newslist.html');
    }
    //
    public function listuser(){
        $userobj = M('user');
        $data = $userobj -> findAll_orderby_uid();
        VIEW::assign(array('data'=>$data));
        VIEW::display('admin/listuser.html');
    }
    public function deladmin(){
        
    }
    public function listadmin(){
        $adminobj = M('admin');
        $data = $adminobj -> findAll_orderby_id();
        VIEW::assign(array('data'=>$data));
        VIEW::display('admin/listadmin.html');
    }
    public function newsdel(){
        if(intval($_GET['id'])){
            $newsobj = M('news');
            $newsobj->del_by_id($_GET['id']);
            $this->showmessage('删除成功！', 'admin.php?controller=admin&method=newslist');
        }
    }
    public function listcity(){
        if(isset($_GET['pid'])){
            $data = M('city')->select_by_provices($_GET['pid']);
            $pid = $_GET['pid'];
        }else{
            $data = array();
        }
        VIEW::assign(array('data'=>$data,'pid'=>$pid));
        VIEW::display('admin/listcity.html');
        
    }
    public function listprovinces(){
        $proobj = M('provinces');
        $data = $proobj->getAll();
//        print_r($data);
        VIEW::assign(array('data'=>$data));
        
        VIEW::display('admin/listprovinces.html');
    }
    private function showmessage($info, $url){
			echo "<script>alert('$info');window.location.href='$url'</script>";
			exit;
	}
    private function newssubmit(){
        $newsobj = M('news');
        $result = $newsobj->newssubmit($_POST);
        if($result ==0){
            $this->showmessage("操作失败！",'admin.php&controller=admin&method=newsadd&id='.$_POST['id']);
        }
        if($result ==1){
            $this->showmessage("添加成功！",'admin.php&controller=admin&method=newslist');
        }
        if($result ==2){
            $this->showmessage("修改成功！",'admin.php&controller=admin&method=newslist');
        }
    }
}
?>