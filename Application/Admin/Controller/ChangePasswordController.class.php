<?php
namespace Admin\Controller;
use Think\Controller;
class ChangePasswordController extends Controller{
	public function changepassword(){
		//用户是否已经登陆
		if (empty($_SESSION['admin'])) {
			$this -> redirect("Login/login");
		}
		$this->display();
	}
	public function newPassword(){
		if(!empty($_POST)){
			$admin = M('admin');
			$data['password'] = $_POST['NewPassword'];
			$condition['admin'] = $_SESSION['admin'];
			$adminInfo = $admin -> where($condition) -> select();
			if ($_POST['oldPassword'] == $adminInfo['0']['password']) {
				$res = $admin -> where($condition) -> save($data);
				$this -> ajaxReturn($res);
			}else{
				$this->ajaxReturn('2');
			}
		}else{
			$this -> ajaxReturn('0');
		}
	}
}