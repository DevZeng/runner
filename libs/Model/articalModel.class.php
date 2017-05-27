<?php
    class articalModel{
        public $_table = 'artical';
        public function getAllactical($type,$tid){
            $sql = 'select * from '.$this->_table.' where type = '.$type.' and tid = '.$tid;
            return DB::DB_select_all($sql);
        }
        public function getArtical($id){
            $sql = 'select * from '.$this->_table.' where id = '.$id;
            return DB::DB_select_one($sql);
        }
        public function getAll($uid){
            $sql = 'select * from '.$this->_table.' where uid = '.$uid;
            return DB::DB_select_all($sql);
        }
    }
?>
