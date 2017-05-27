<?php
    class activityModel{
        public $_table = 'activity';
        function findAll(){
            $sql = 'select aid , title , numbers ,images from '.$this->_table.' order by aid desc';
            return DB::DB_select_all($sql);
        }
        function getJoincount($aid){
            $sql = 'select count(*) from joinlist where aid = '.$aid;
            return DB::DB_select_by($sql,0,0);
        }
        function getActivity($id){
            $sql = 'select * from '.$this->_table.' where aid = '.$id;
            return DB::DB_select_one($sql);
        }
    }
?>