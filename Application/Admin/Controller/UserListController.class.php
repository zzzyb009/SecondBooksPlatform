<?php
namespace Admin\Controller;
use Think\Controller;
class UserListController extends Controller{
	public function UserList(){
		//用户是否已经登陆
		if (empty($_SESSION['admin'])) {
			$this -> redirect("Login/login");
		}
		
		$UserList=M('user');
		$count = $UserList -> count();
		$Page = new \Think\Page($count,6);
		$show = $Page->show();
		$user = $UserList ->limit($Page->firstRow.','.$Page->listRows)->select();
		$this->assign('user',$user);
		$this->assign('show',$show);
		$this->display();
	}
	public function changePassword(){
		if(!empty($_POST['userid'])){
			$condition['userid']=$_POST['userid'];
			$data['password']=$_POST['NewPassword'];
			$UserList = M('user');
			$res = $UserList ->where($condition) ->save($data);
			$this->ajaxReturn($res);
		}else{
			$this->ajaxReturn('0');
		}
	}
}