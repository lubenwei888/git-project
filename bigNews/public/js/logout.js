$("#logout").on('click', function() {
    var isConfirm = confirm('您真的要退出吗?');
    if (isConfirm) {
        //用户点击了确定按钮，进行网络请求
        $.ajax({
            type: 'post',
            url: '/admin/logout',
            success: data => {
                //接口文档返回的数据是：{"message": "退出成功"}；退出成功，跳转到登录页面
                location.href = 'login.html';
            },
            error: () => {
                alert('退出失败')
            }
        })
    }
});