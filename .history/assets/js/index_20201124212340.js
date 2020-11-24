$(function () {
    let layer = layui.layer
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            console.log(res);
        }
    })
})