<?php
namespace Admin\Controller;
use Think\Controller;
class SellBookController extends Controller{
	public function SellBook(){
		//用户是否已经登陆
		if (empty($_SESSION['admin'])) {
			$this -> redirect("Login/login");
		}
		
		$SellBook = M('sell');
		$count = $SellBook -> count();
		$Page = new \Think\Page($count,6);
		$show = $Page->show();
		$book = $SellBook ->limit($Page->firstRow.','.$Page->listRows)->select();
		$this->assign('book',$book);
		$this->assign('show',$show);
		$this->display();
	}
}