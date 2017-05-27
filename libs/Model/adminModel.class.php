<?php
/**
* 
*/
class adminModel
{
	
	public $_table = 'admin';
	function findOne_by_username($username)
	{
		$sql = 'select * from '.$this->_table.' where username="'.$username.'"';
		return DB::DB_select_one($sql);
	}
    function findAll_orderby_id(){
            $sql = 'select * from '.$this->_table.' order by id desc';
            return DB::DB_select_all($sql);
        }
}
?>