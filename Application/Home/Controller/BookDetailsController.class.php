<?php
namespace Home\Controller;
use Think\Controller;

class BookDetailsController extends Controller{
	public function bookDetails(){
		// dump($_GET);
		//选出标号为isbn的书
		if (!empty($_GET)) {
			$condition['isbn'] = $_GET['isbn'];
			if($_GET['type']=="sell"){
				$book = M("sell");
				$book = $book -> where($condition) -> select();
			}else{
				$book = M("buy");
				$book = $book -> where($condition) -> select();
			}
		} else {
			$condition['isbn'] = rand(1,21);
			if ($condition['isbn']<10) {
				$condition['isbn'] = "000000000000".$condition['isbn'];
			}else{
				$condition['isbn'] = "00000000000".$condition['isbn'];
			}
		}
		$this->assign('book',$book);
		$this->display();
	}
	public function getUserInfo(){
		// dump($userInfo['0']['phone']);
		if($_POST['type']=='sell'){
			$sell=M('sell');
			$condition['isbn']=$_POST['isbn'];
			$BookInfo=$sell->where($condition)->select();
			$ownerName['username']=$BookInfo['0']['username'];
			$getInfo=M('user');
			$getInfo=$getInfo->where($ownerName)->select();
			$phone=$getInfo['0']['phone'];
			$name=$getInfo['0']['username'];
		}else{
			$sell=M('buy');
			$condition['isbn']=$_POST['isbn'];
			$BookInfo=$sell->where($condition)->select();
			$ownerName['username']=$BookInfo['0']['username'];
			$getInfo=M('user');
			$getInfo=$getInfo->where($ownerName)->select();
			$phone=$getInfo['0']['phone'];
			$name=$getInfo['0']['username'];
		}
		$this->ajaxReturn($name." ".$phone);
		// $this->ajaxReturn($userInfo['0']['username']."手机号码:".$userInfo['0']['phone']);
	}
	public function addCollect(){
		$condition['isbn'] = $_POST['isbn'];
		$data['isbn'] = $_POST['isbn'];
		$data['type'] = $_POST['type'];
		$data['username'] = $_SESSION['username'];
		$collect = M('collect');
		$book = $collect -> where($condition) -> select();
		if($book == null){
			$res = $collect -> data($data) -> add();
			$this ->ajaxReturn($res);
		}else{
			$this -> ajaxReturn('1');
		}
	}
}
