<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
  <title>管理员中心</title>
  <link href="/Application/Public/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="/Application/Public/lib/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="/Application/Public/css/base.css" />
  <link href="/Application/Public/css/admin.css" rel="stylesheet" />
  <style>
  .hide {
    display: none;
  }
  
  table {
    position: relative;
  }
  
/*   input[type="submit"] {
    position: absolute;
    margin-left: 2px;
  } */
  </style>
  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>

<body>
  <!-- 头部开始 -->
  <header id="gdin-header">
    <div class="container">
      <div class="pull-left">
        <p class="welcome"><i class="icon-book"></i>您好，欢迎来到广师二手书交易平台!</p>
      </div>
      <div class="pull-right">
        <p class="pull-left" style="margin-right:4px">欢迎您，<?php echo (session('admin')); ?></p>
      </div>
    </div>
  </header>
  <!-- 头部结束 -->
  <section id="main">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-9 ">
          <h3>所有学生 <span class="label label-danger">新：5</span></h3>
          <div class="hr-div">
            <hr />
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>学号</th>
                  <th>类型</th>
                  <th>姓名</th>
                  <th>长号</th>
                  <th>QQ</th>
                  <th>微信</th>
                  <th>修改密码</th>
                </tr>
              </thead>
              <tbody>
              <?php if(is_array($user)): foreach($user as $key=>$v): ?><tr>
                  <td><?php echo ($v["userid"]); ?></td>
                  <td> <i class="fa fa-user"></i> <span class="label label-danger">New</span></td>
                  <td><?php echo ($v["username"]); ?></td>
                  <td><span class="label label-info"><?php echo ($v["phone"]); ?></span></td>
                  <td><span class="label label-success"><?php echo ($v["qq"]); ?></span></td>
                  <td><span class="label label-danger"><?php echo ($v["wechat"]); ?></span></td>
                  <td>
                    <form action="<?php echo U('UserList/changePassword');?>" method="post" id="ChangeForm">
                    <input type="hidden" name="userid" value="<?php echo ($v["userid"]); ?>">
                      <input type="text" name="NewPassword" />
                      <input type="submit" value="确认" class="hide" />
                    </form>
                  </td>
                </tr><?php endforeach; endif; ?>
              </tbody>
            </table>
          </div>
          <?php echo ($show); ?>
          <ul class="pagination">
            <li class="disabled"><a href="#">&laquo;</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3">
          <a href="index.html" class=" label label-danger"><strong>登出</strong> </a>
          <div class="list-group">
            <p class="list-group-item list-group-item-danger">快速导航栏</p>
            <a href="<?php echo U('Dashboard/dashboard');?>" class="list-group-item">管理员首页</a>
            <a href="<?php echo U('SellBook/sellBook');?>" class="list-group-item">新发布书籍</a>
            <a href="<?php echo U('BuyBook/buyBook');?>" class="list-group-item">新求购书籍</a>
            <a href="<?php echo U('UserList/userList');?>" class="list-group-item active">所有用户</a>
            <a href="<?php echo U('ChangePassword/changePassword');?>" class="list-group-item">修改密码</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 页脚开始 -->
  <footer id="gdin-footer">
    <div class="container">
      <div class="footer">
        <table>
          <tr>
            <td><a href="javascript;">关于我们</a></td>
            <td><a href="javascript;">用户协议</a></td>
            <td><a href="javascript;">建议/反馈</a></td>
            <td><a href="javascript;">一起合作</a></td>
            <td><a href="javascript;">隐私保护</a></td>
          </tr>
        </table>
        <p>Copyright &copy; 2016-2017 www.seaweedsweb.com All Rights Reserved</p>
      </div>
    </div>
  </footer>
  <!-- 页脚结束 -->
  <!--  Jquery Core Script -->
  <script src="/Application/Public/lib/jquery/jquery-3.1.1.min.js"></script>
  <!--  Core Bootstrap Script -->
  <script src="/Application/Public/lib/bootstrap/dist/js/bootstrap.min.js"></script>
  <script>
  var input = $("#main input[type='text']");
  console.log(input)
  input.each(function(i, el) {
    $(this).blur(function(event) {
      if ($(this).val() != '') {
        $('#main input[type="submit"]').eq(i).removeClass('hide');
      } else {

        $('#main input[type="submit"]').eq(i).addClass('hide');
      }
    });
  });
  
  let url = "<?php echo U('UserList/changePassword');?>";
  </script>
  <script type="text/javascript" src="/Application/Admin/Public/js/userList.js"></script>
</body>

</html>