<?php
	namespace Admin\Controller;
	use Think\Controller;
	class BuybookController extends Controller{
		public function buyBook(){
			//用户是否已经登陆
			if (empty($_SESSION['admin'])) {
				$this -> redirect("Login/login");
			}
			$BuyBook = M('buy');
			$count = $BuyBook -> count();
			$Page = new \Think\Page($count,6);
			$show = $Page->show();
			$book = $BuyBook ->limit($Page->firstRow.','.$Page->listRows)->select();
			$this->assign('book',$book);
			$this->assign('show',$show);
			$this->display();
		}
	}