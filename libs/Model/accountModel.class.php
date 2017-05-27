<?php
    class accountModel{
        private $mdstring = '@RUN#';//加密字符
        private $acco = '';
		public function __construct()
		{
			if (isset($_SESSION['acco'])&&(!empty($_SESSION['acco']))) {
				$this->auth = $_SESSION['acco'];
			}
		}

		public function loginsubmit()
		{
			if (empty($_POST['username'])||empty($_POST['password'])) {
				return false;
			}
			$username = addslashes($_POST['username']);
			$password = addslashes($_POST['password']);
			if ($this->acco = $this->checkuser($username,$password)) {
				if($this->acco['active']==0){
                    return 2;
                }elseif($this->acco['active']==2){
                    return 4;
                }else{
                    $_SESSION['acco'] = $this->acco;
				    return 1;
                }
			}else{
				return 3;
			}
		}
		private function checkuser($username,$password)
		{
			$accountobj = M('user');
			$acco = $accountobj -> findOne_by_username($username);
			if((!empty($acco))&&$acco['password']==md5($password)){
				return $acco;
			}else{
				return false;
			}
		}
		public function getacco()
		{
			return $this->acco;
		}
        public function logout(){
            unset($_SESSION['acco']);
            $this->acco ='';
        }
        
    }
?>