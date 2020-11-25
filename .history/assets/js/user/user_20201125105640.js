$(function () {
    let form = layui.form
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg("获取用户基本信息失败！");
            }
        }
    })
})