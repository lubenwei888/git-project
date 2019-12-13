// 当文件域发生改变时
$('#exampleInputFile').on('change', function() {
    // 获取选择的文件
    var file = this.files[0];
    // iframe获取图片的路径
    var imgURL = URL.createObjectURL(file);
    // console.log(file);
    // 给图片的src添加路径，实现图片预览功能
    $('#preview').prop('src', imgURL);
})

// 给表单注册submit事件
$('#userForm').on('submit', function() {
    //  创建formData表单对象
    var formData = new FormData(this);
    // 发送ajax请求调用修改接口
    $.ajax({
        type: 'post',
        url: '/admin/user/edit',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            alert('用户信息修改成功~~~')
                // 成功，重新加载页面
            console.log(response);
            location.reload();
        }
    })
    return false;
})

// 发送ajax请求，获取用户信息
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/user/detail',
    success: function(response) {
        console.log(response.data);
        // 给表单元素的value值添加数据
        $('#inputEmail1').val(response.data.username);
        $('#inputEmail2').val(response.data.nickname);
        $('#inputEmail3').val(response.data.email);
        $('#inputEmail4').val(response.data.password);
        $('#preview').prop('src', response.data.user_pic)
    }
})