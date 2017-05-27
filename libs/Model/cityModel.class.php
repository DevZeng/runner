<?php
    class cityModel{
        public $_table = 'city';
        public function select_by_provices($id){
            $sql = 'select * from '.$this->_table.' where p_id = '.$id;
            return DB::DB_select_all($sql);
        }
        public function addcity($data){
            extract($data);
            if(empty($name)){
                return 0;
            }
            $name = addslashes($name);
            $data = array(
                'name'=>$name,
                'p_id'=>$pid
            );
            
                DB::insert($this->_table,$data);
                return 1;
            
        }
    }
?>