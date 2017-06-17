<?php
namespace Home\Controller;
use Think\controller;
class PersonalController extends Controller{
	public function personalZone(){
		$condition['username'] = $_SESSION['username'];
		// 出售
		$mySell = M('sell');
		$mySell = $mySell -> where($condition) -> order('id desc') -> limit(5) -> select();
		// 求购
		$myBuy = M('buy');
		$myBuy = $myBuy -> where($condition)-> order('id desc')-> limit(5)->select();
		// 收藏
		$myCollec = M('collect');
		$condition['username'] = $_SESSION['username'];
		$myCollec = $myCollec-> where($condition) -> order('id desc')-> limit(5)->select();
		foreach ($myCollec as $key => $value) {
			if($value['type'] == "buy"){
				$con['isbn'] = $value['isbn']; 
				$buy = M('buy');
				$book[$key] = $buy ->where($con) ->select();
			}else{
				$con['isbn'] = $value['isbn']; 
				$sell = M('sell');
				$book[$key] = $sell ->where($con) ->select();
			}
		}

		$this->assign('mySell',$mySell);
		$this->assign('myBuy',$myBuy);
		$this->assign('book',$book);
		$this->display();
	}
	public function changePassword(){
		$username=$_SESSION['username'];
		$user=M('user');
		$data['password']=$_POST['newPassword'];
		$password=$user->where("username='$username'")->field('password')->select();
		$password=$password[0]['password'];
		// dump($password);
		if ($_POST['oldPassword'] == $password) {
			$user->where("username='$username'")->save($data);
			echo '1';
		}else{
			echo "0";
		}
	}
	public function changeContact(){
		$username=$_SESSION['username'];
		$User=M('user');
		$data=$_POST;
		$User->where("username='$username'")->save($data);
		echo '1';
	}
	public function sellBook(){
		// dump($_FILES['pic']);
		if (!empty($_SESSION['username'])) {
			if(is_uploaded_file($_FILES['pic']['tmp_name'])){
					//设置文件目录
					//上传时的目录
					$uploaded_file=$_FILES['pic']['tmp_name'];
					//保存的目录
					$move_to_file="D:/books/Application/Public/images/".$_SESSION['username'].time().$_FILES['pic']['name'];
					// echo $uploaded_file."||".$move_to_file;
				if(move_uploaded_file($uploaded_file,iconv("utf-8","gb2312",$move_to_file))){
					echo $_FILES['pic']['name'].time()."上传ok！";
				}else{
					echo "上传失败！";
				}
			}else{
				echo "上传失败！";
			}
			// dump($_POST);
			$data = $_POST;
			$data['pic']=$_SESSION['username'].time().$_FILES['pic']['name'];
			$data['username']=$_SESSION['username'];
			$sellBook=M('sell');
			$res=$sellBook->add($data);
			// dump($res);
			$this->success('操作成功','personalZone',1);
		}else{
			$this->error('操作失败','personalZone',1);
		}
	}
	public function buyBook(){
		if (!empty($_SESSION['username'])) {
			// dump($_FILES['pic']);
			if(is_uploaded_file($_FILES['pic']['tmp_name'])){
					//设置文件目录
					//上传时的目录
					$uploaded_file=$_FILES['pic']['tmp_name'];
					//保存的目录
					$move_to_file="D:/books/Application/Public/images/".$_SESSION['username'].time().$_FILES['pic']['name'];
					// echo $uploaded_file."||".$move_to_file;
				if(move_uploaded_file($uploaded_file,iconv("utf-8","gb2312",$move_to_file))){
					echo $_FILES['pic']['name']."上传ok！";
				}else{
					echo "上传失败！";
				}
			}else{
				echo "上传失败！";
			}
			// dump($_POST);
			$data = $_POST;
			$data['pic']=$_SESSION['username'].time().$_FILES['pic']['name'];
			$data['username']=$_SESSION['username'];
			// $data['time']=time();
			// dump(time());
			$buyBook=M('buy');
			$buyBook->add($data);
			echo "1";
			// $this->redirect("Home/Personal/personalZone?a=1");
			$this->success('操作成功','personalZone',1);
		}else{
			// $this->redirect("Home/Personal/personalZone?a=0");
			$this->error('操作失败','personalZone',1);
		}
	}
}