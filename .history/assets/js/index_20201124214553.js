$(function () {
    let layer = layui.layer
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg("获取用户信息失败！");
            }
            let name = res.data.nickname || res.data.username
            let first = name[0].toUpperCase()
            $('#welcome').text('欢迎' + name)

            if (res.data.user_pic) {
                $('.layui-nav-img').attr('src', res.data.user_pic).siblings('.text-avatar').hide()
            }
        }
    })
})