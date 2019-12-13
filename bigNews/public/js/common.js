$.ajax({
    type: "get",
    url: "/admin/search",
    data: "data",
    dataType: "dataType",
    success: function(response) {

    }
});

// 获取到搜索表单 并为其添加表单提交事件
$('#search_form').on('submit', function() {
    // 获取到用户在表单中输入的搜索关键字
    var keys = $(this).find('#search').val();
    // 跳转到搜索结果页面 并且将用户输入的搜索关键字传递到搜索结果页面
    location.href = "/admin/search.html?key=" + keys
        // 阻止表单默认提交行为
    return false;
});