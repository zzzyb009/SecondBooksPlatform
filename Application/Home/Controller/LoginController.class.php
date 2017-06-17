<?php
namespace Home\Controller;
use Think\Controller;

class LoginController extends Controller{
	public function login(){
		if (!empty($_POST['username'])) {
			$userid = $_POST['username'];
			if (!empty($_POST['password'])) {
				$user = M('user');
				$userInfo = $user->where("userid='$userid'")->field("username,password")->select();
				if ($userInfo['0']['password']==$_POST['password']) {
					session('[start]');
					session('expire',10);
					session('username',$userInfo['0']['username']);
					$this->redirect('Index/index');
				}else{
					$this->redirect('Index/index');
				}
			}else{
				$this->redirect('Index/index');
			}
		}else{
			$this->redirect('Index/index');
		}
	}
	public function checkLogin(){
		if (!empty($_SESSION['username'])) {
			echo "Y";
		}else{
			echo "N";
		}
	}
}