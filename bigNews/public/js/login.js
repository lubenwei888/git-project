$('#loginBtn').on('click', function() {
    var username = $('#username').val();
    var password = $('#password').val();
    if (username.trim().length == 0) {
        alert('请输入邮箱')
        return;
    }
    if (password.trim().length == 0) {
        alert('请输入密码');
        return;
    }

    $.ajax({
        type: 'post',
        url: '/admin/login',
        data: {
            username: username,
            password: password
        },
        success: function(response) {
            //             location.href = 'index.html'


            //         },
            //         error: function() {
            //             alert('用户名或者密码错误')
            //         }
            //     })
            // });
            console.log(response);
            if (response.msg === "登录成功") {
                location.href = '/admin/index.html';
            } else {
                alert(response.msg);
            }
        },
        error: function(msg) {
            alert(response.msg);
        }
    })

    return false
});
//当摁下enter时，会执行sendMessage（）方法
document.onkeydown = keyListener;

function keyListener(e) {
    // 当按下回车键，执行我们的代码
    if (e.keyCode == 13) {
        document.getElementById("loginBtn").click();
        event.returnValue = false;
    }
}