// ---------------------------文章分类添加----------------------
// 给添加分类框的表单添加提交事件
$('#addCategory').on('submit', function () {
    // 获取表单的数据
    var formData = $(this).serialize();
    // 发送ajax请求，调用接口
    $.ajax({
        type: 'post',
        url: '/admin/category_add',
        data: formData,
        success: function (response) {
            console.log(response);
            
            location.reload();
        }
    })
    // 阻止表单的默认提交
    return false;
})

// --------------------发送ajax请求,展示分类数据-------------
$.ajax({
    type: 'get',
    url: '/admin/category_search',
    success: function (response) {
        // 将服务器端返回的数据和HTML模板进行拼接
        var html = template('categoryListTpl', response);
        // 将拼接好的内容放到页面中
        $('#categoryBox').html(html);
    }
});


// -----------------------修改文章分类--------------------
$('#categoryBox').on('click', '.edit', function () {
    // 获取要修改的分类数据的id
    var ids = $(this).attr('data-id');
    // 发送ajax请求，获取分类信息
    $.ajax({
        type: 'get',
        url: '/admin/category_search',
        data: { id: ids },
        success: function (response) {
            // console.log(response.data);
            // 由于response返回值是所有的文章分类，所以作出筛选选出当前点击的分类
            let message = response.data.filter(function (item) {
                return item.id == ids
            })
            // 筛选到的分类结果对象保存在一个数组message当中
            console.log(message[0]);
            
            var html = template('modifyCategoryTpl', message[0])
            // 拼接模板字符串，渲染到页面中
            $('#formBox').html(html)
        }
    })
})

//  利用事件委托，给tbody书册表单事件
$('#formBox').on('submit', '#modifyCategory', function () {
    // 分别获取分类的id name slug 
    var id = $(this).attr('data-id');
    var name = $('#recipient-name').val();
    var slug = $('#recipient-oname').val();
    // 发送ajax请求，调用文章修改接口
    $.ajax({
        type: 'post',
        url: '/admin/category_edit',
        data: { id: id, name: name, slug: slug },
        success: function () {
            // 成功，重新加载页面
            location.reload();
        }
    })
    // 阻止表单的默认提交
    return false;
})



// -----------------------文章分类删除------------------
$('#categoryBox').on('click', '.delete', function () {
    // 确认用户是否删除
    if (confirm('你真的要删除嘛~')) {
        // 获取要删除的id
        var ids = $(this).attr('data-id')
        // 发送ajax请求，调用删除接口
        $.ajax({
            type: 'post',
            data: { id: ids },
            url: '/admin/category_delete',
            success: function () {
                // 删除成功，重新加载页面
                location.reload();
            }
        })
    }

})
