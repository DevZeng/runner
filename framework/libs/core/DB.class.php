<?php
/**
* 数据库工厂类
*/
class DB
{
	public static $db;
	public static function init($dbtype,$config)
	{
		self::$db = new $dbtype;
		self::$db->connent($config);
	}
	public static function query($sql)
	{
		return self::$db->query($sql);
	}
	public static function DB_select_all($sql)
	{
		$query = self::$db->query($sql);
		return self::$db->DB_select_all($query);
	}
	public static function DB_select_one($sql)
	{
		$query = self::$db->query($sql);
		return self::$db->DB_select_one($query);
	}
	public static function DB_select_by($sql,$row = 0,$field = 0)
	{
		$query = self::$db->query($sql);
		return self::$db->DB_select_by($query,$row,$field);
	}
	public static function insert($table,$arr)
	{
		return self::$db->insert($table,$arr);
	}
	public static function update($table,$arr,$where)
	{
		return self::$db->update($table,$arr,$where);
	}
	public static function del($table,$where)
	{
		return self::$db->del($table,$where);
	}
}
?>