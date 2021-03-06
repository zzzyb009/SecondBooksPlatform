<?php
namespace Home\Controller;
use Think\controller;
class SellController extends Controller{
	public function sell(){
		$books = M('sell');
		$count = $books -> count();
		$Page = new \Think\Page($count,4);
		$show = $Page->show();
		$books = $books ->limit($Page->firstRow.','.$Page->listRows)->select();
		// dump($books);
		$classify=M("classify");
      	$menuA1=$classify->where("classify_type=1 AND muen_type='A'")->select();
        $menuA2=$classify->where("classify_type=2 AND muen_type='A'")->select();
        $menuA3=$classify->where("classify_type=3 AND muen_type='A'")->select();
        $menuB1=$classify->where("classify_type=1 AND muen_type='B'")->select();
        $menuB2=$classify->where("classify_type=2 AND muen_type='B'")->select();
        $menuB3=$classify->where("classify_type=3 AND muen_type='B'")->select();
        $menuC1=$classify->where("classify_type=1 AND muen_type='C'")->select();
        $menuC2=$classify->where("classify_type=2 AND muen_type='C'")->select();
        $menuC3=$classify->where("classify_type=3 AND muen_type='C'")->select();
        $menuD1=$classify->where("classify_type=1 AND muen_type='D'")->select();
        $menuD2=$classify->where("classify_type=2 AND muen_type='D'")->select();
        $menuD3=$classify->where("classify_type=3 AND muen_type='D'")->select();
        $menuE1=$classify->where("classify_type=1 AND muen_type='E'")->select();
        $menuE2=$classify->where("classify_type=2 AND muen_type='E'")->select();
        $menuE3=$classify->where("classify_type=3 AND muen_type='E'")->select();
        $this->assign('menuA1',$menuA1);
        $this->assign('menuA2',$menuA2);
        $this->assign('menuA3',$menuA3);
        $this->assign('menuB1',$menuB1);
        $this->assign('menuB2',$menuB2);
        $this->assign('menuB3',$menuB3);
        $this->assign('menuC1',$menuC1);
        $this->assign('menuC2',$menuC2);
        $this->assign('menuC3',$menuC3);
        $this->assign('menuD1',$menuD1);
        $this->assign('menuD2',$menuD2);
        $this->assign('menuD3',$menuD3);
        $this->assign('menuE1',$menuE1);
        $this->assign('menuE2',$menuE2);
        $this->assign('menuE3',$menuE3);
    
		$this->assign('show',$show);
		$this->assign('books',$books);
		$this->display();
	}
}