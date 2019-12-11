

$('#exampleInputFile').on('change', function () {
    var file = this.files[0];
    var imgURL = URL.createObjectURL(file);
    $('#preview').prop('src', imgURL);
    $('#hiddenImg').val(imgURL);
})

$.ajax({
    type: 'get',
    url: '/admin/userinfo_get',
    success: function (response) {
        // console.log(response.data);       
        var html = template('usermodifyTpl', response.data);
        $('#userBox').html(html);
    }
})
$('#userForm').on('submit', function () {
    var formData = new FormData(this);
    $.ajax({
        type: 'post',
        url: '/admin/userInfo_edit',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            // location.reload();                 
        }
    })
    return false;
})

