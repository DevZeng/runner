<?php
	/**
	* 
	*/
	class testController 
	{
		
		public function show()
		{
			global $view;
			$testModel = M('test');
			$data = $testModel->get();
			// $testView = V('test');
			// $testView->display($data);
			$view ->assign('str','哈哈哈哈');
			$view ->display('test.html');
		}
	}
?>