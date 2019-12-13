// 展示文章列表
$.ajax({
    type: "get",
    url: "/admin/search",

    success: function(response) {
        console.log(response);
        var html = template('txtTpl', {
            data: response.data
        })
        $("#txtBox").html(html)
        var page = template('pageTpl', response);
        $('#page').html(page);
    }
});
// 删除文章
$("#txtBox").on('click', '.delete', function() {
    var ids = $(this).attr('data-id')
        // console.log(ids);
    $.ajax({
        type: "get",
        url: "/admin/article_delete",
        data: { id: ids },
        success: function(response) {
            location.reload()
        }
    });
})


// 分页-----------------------------------------------
function changePage(page) {
    // 向服务器端发送请求 获取文章列表数据
    $.ajax({
        type: "get",
        url: "/admin/search",
        data: {
            page: page,

        },
        success: function(response) {
            console.log(response);
            var html = template('txtTpl', {
                data: response.data
            })
            $("#txtBox").html(html)
            var page = template('pageTpl', response);
            $('#page').html(page);
        }
    });
}



// 文章分类显示
$.ajax({
    type: "get",
    url: "/admin/category_search",
    success: function(response) {
        console.log();
        var html = template('listTPl', {
            data: response.data
        })
        $("#selCategory").html(html)
    }
});

$('#filterForm').on('submit', function() {
    var formData = $(this).serialize();
    $.ajax({
        type: 'get',
        url: '/admin/search',
        data: formData,
        success: function(response) {
            // 重新渲染文章和分页数据
            var html = template('txtTpl', response);
            console.log(html);

            $('#txtBox').html(html);
            var page = template('pageTpl', response);
            $('#page').html(page);
        }
    });
    // 阻止表单默认提交行为
    return false;
});