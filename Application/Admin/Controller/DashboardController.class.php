<?php
namespace Admin\Controller;
use Think\Controller;
class DashboardController extends Controller {
	public function dashboard(){

		//用户是否已经登陆
		if (empty($_SESSION['admin'])) {
			$this -> redirect("Login/login");
		}

		// 获取通知
		$getInfo = M('info');
		$info = $getInfo ->select();

		//所有学生
		$countStu = M('user');
		$count = $countStu -> count();

		$this->assign('count',$count);
		$this->assign('info',$info);
		$this -> display();
	}
	public function SendInfo(){

		if(!empty($_POST)){
			$condition['tittle'] = $_POST['tittle'];
			$condition['content'] = $_POST['content'];
			$SendInfo = M('info');
			$res = $SendInfo -> add($condition);
			$this -> ajaxReturn($res);
		}else{
			$this ->ajaxReturn('0');
		}
		
	}
}