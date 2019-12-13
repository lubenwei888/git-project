// 分类列表展示
$.ajax({
    type: "get",
    url: "/admin/category_search",
    success: function(response) {
        //返回分类
        console.log(response.data);
        var html = template('categoryTpl', {
            data: response.data
        })
        $("#categoryBox").html(html)
            // 
    }
});
// 上传图片--------------
$('#exampleInputFile').on('change', function() {
    var file = this.files[0];
    var imgURL = URL.createObjectURL(file)
    $("#hiddencover").val(imgURL)
});
// 文章上传-------------------------
var state;

function getState(data) {
    return state = data;
}
$("#releaseBox").on('submit', function() {
    var formData = new FormData(this);
    formData.append("state", state);
    $.ajax({
        type: "post",
        url: "/admin/article_publish",
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
        },
        error: function(params) {}
    });
    return false;
})