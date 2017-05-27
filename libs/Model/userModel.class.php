<?php
    class userModel{
        private $md = '@#php';
        public $_table ='user';
        private $user = '';
        public function findOne_by_username($username){
            $sql = 'select * from '.$this->_table.' where username="'.$username.'"';
            return DB::DB_select_one($sql);
        }
        public function findOne_by_uid($id){
            $sql = 'select * from '.$this->_table.' where uid="'.$id.'"';
            return DB::DB_select_one($sql);
        }
        public function addnewaccount($data){
            extract($data);
            if(empty($username)){
                return 0;
            }
            $username = addslashes($username);
            $password = addslashes($password);
            $email = addslashes($email);
            $data = array(
                'username'=>$username,
                'password'=>md5($password),
                'email'=>$email,
            );
            return DB::insert($this->_table,$data);
        }
        public function updatemail($id)
        {
            $data = array('send'=>1);
            DB::update($this->_table,$data,'uid='.$id);
        }
        function findAll_orderby_uid(){
            $sql = 'select * from '.$this->_table.' order by uid desc';
            return DB::DB_select_all($sql);
        }
        function getjoinnumber($id){
            $sql = 'select count(*) from joinlist where uid = '.$id;
            return DB::DB_select_by($sql,0,0);
        }
        function getcreatenumber($id){
            $sql = 'select count(*) from activity where uid = '.$id;
            return DB::DB_select_by($sql,0,0);
        }
        function getcitynumber($id){
            $sql = 'select count(DISTINCT `cid`) from joinlist where uid = '.$id;
            return DB::DB_select_by($sql,0,0);
        }
        function getUserinfo($id){
            $sql = 'select * from userinfo where uid = '.$id;
            return DB::DB_select_one($sql);
        }
    }
?>
