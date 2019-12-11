// 分类列表展示
$.ajax({
    type: "get",
    url: "/admin/category_search",
    success: function(response) {
        // console.log(response.data);
        var html = template('categoryTpl', {
            data: response.data
        })
        $("#categoryBox").html(html)
    }
});
// 上传图片--------------
$('#exampleInputFile').on('change', function() {
    var file = this.files[0];
    var imgURL = URL.createObjectURL(file)
    $("#hiddencover").val(imgURL)
});

// 文章上传-------------------------
$("#releaseBox").on('submit', function() {
    var formData = new FormData(this);
    $.ajax({
        type: "post",
        url: "/admin/article_publish",
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
        },
        error: function(params) {
            console.log(params);
        }
    });
    return false;
})