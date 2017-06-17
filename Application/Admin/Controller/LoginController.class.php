<?php
namespace Admin\Controller;
use Think\Controller;
class LoginController extends Controller{
	public function login(){
		$this -> display();
	}
	public function checkLogin(){
		if (!empty($_POST['username'])) {
			$admin = M('admin');
			$userInfo = $admin -> where($condition) -> select();
			if($userInfo['0']['password']==$_POST['password']){
				session('[start]');
				session('expire',10);
				session('admin',$userInfo['0']['admin']);
				$this -> ajaxReturn('1');
			}else{
				$this -> ajaxReturn('2');
			}
		}else{
			$this -> ajaxReturn('0');
		}
	}
	public function logout(){
		session('username',null);
		header("Location:Login/login");
	}
}