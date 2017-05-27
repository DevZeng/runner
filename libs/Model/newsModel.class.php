<?php
/**
* 
*/
class newsModel
{
	public $_table = 'news';
	function count()
	{
		$sql ='select count(*) from '.$this->_table;
		return DB::DB_select_by($sql,0,0);
	}
    public function getnewsinfo($id){
        if(empty($id)){
            return array();
        }else{
            $id = intval($id);
            $sql = 'select * from '.$this->_table.' where id = '.$id;
            return DB::DB_select_one($sql);
        }
    }
    function newssubmit($data){
        extract($data);
        if(empty($title)||empty($content)){
            return 0;
        }
        $title = addslashes($title);
        $content = stripslashes($content);
        $author = addslashes($author);
        $from = addslashes($from);
        $data = array(
            'title'=>$title,
            'content'=>$content,
            'author'=>$author,
            'from'=>$from,
            'dateline'=>time()
        );
        if($_POST['id']!=''){
            DB::update($this->_table,$data,'id='.$id);
            return 2;
        }else{
            DB::insert($this->_table,$data);
            return 1;
        }
    }
    function findAll_orderby_dateline(){
        $sql = 'select * from '.$this->_table.' order by dateline desc';
        return DB::DB_select_all($sql);
    }
    function del_by_id($id){
        return DB::del($this->_table,'id='.$id);
    }
    function addbanner($data){
        extract($data);
        
    }
    
}
?>