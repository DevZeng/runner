<?php
    class provincesModel{
        public $_table ='provinces';
        public function getAll(){
            $sql = 'select * from '.$this->_table.' order by id desc';
            return DB::DB_select_all($sql);
        }
        public function del_by_id($id){
            return DB::del($this->_table,'id='.$id);
        }
        public function select_by_id($id){
            $sql ='select `name` from '.$this->_table.' where id = '.$id;
            return DB::DB_select_by($sql,0,0);
        }
        public function addprovinces($data){
            extract($data);
            if(empty($name)){
                return 0;
            }
            $name = addslashes($name);
            $data = array(
                'name'=>$name 
            );
            if($_POST['id']!=''){
                DB::update($this->_table,$data,'id='.$id);
                return 2;
            }else{
                DB::insert($this->_table,$data);
                return 1;
            }
        }
    }
?>