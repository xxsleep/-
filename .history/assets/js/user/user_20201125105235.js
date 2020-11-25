$(function () {
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            console.log(res);
        }
    })
})