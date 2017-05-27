<?php
    class bannerModel{
        private _table = 'banner';
        
        function count(){
            $sql = 'select count(*) from '.$this->_table;
            return DB::DB_select_by(sql,0,0);
        }
        function getall_orderby_id()
        {
            $sql = 'select * from '.$this->_table.' order by id desc';
            return DB::DB_select_all($sql);
        }
        function getbannerbyid($id){
            if(empty($id)){
                return array();
            }else{
                $id = intval($id);
                $sql = 'select * from '.$this->_table.' where id = '.$id;
                return DB::DB_select_one($sql);
            }
        }
        function del_by_id($id){
            $id = intval($id);
            return DB::del($this->_table,'id='.$id);
        }
        function addbanner($data){
            extract($data);
        }
    }
?>