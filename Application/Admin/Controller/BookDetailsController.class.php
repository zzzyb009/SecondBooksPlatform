<?php
namespace Admin\Controller;
use Think\Controller;
class BookDetailsController extends Controller{
	public function bookDetails(){
		//用户是否已经登陆
		if (empty($_SESSION['admin'])) {
			$this -> redirect("Login/login");
		}
		
		$condition['isbn'] = $_GET['isbn'];
		if ($_GET['type'] == 'buy') {
			$buy = M('buy');
			$book = $buy -> where($condition) -> select();
			$this->assign('book',$book);
		}else{
			$sell = M('sell');
			$book = $sell -> where($condition) -> select();
			$this->assign('book',$book);
		}
		$this->display();
	}
	public function deleteBook(){
		if(!empty($_POST['isbn'])){
			$condition['isbn']=$_POST['isbn'];
			if($_POST['type']=='buy'){
				$deleteBuy=M('buy');
				$res=$deleteBuy->where($condition)->delete();
				$this->ajaxReturn($res.'1');
			}else{
				$deleteSell=M('sell');
				$result=$deleteSell->where($condition)->delete();
				$this->ajaxReturn($result.'2');
			}
		}else{
			$this->ajaxReturn('0');
		}
	}
}
