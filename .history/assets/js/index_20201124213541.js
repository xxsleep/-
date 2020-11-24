$(function () {
    let layer = layui.layer
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg("获取用户信息失败！");
            }
            let name = res.data.nickname || res.data.username
            let first = name[0].toUpperCase()
            console.log(name[0].toUpperCase());
        }
    })
})