$(function () {
    let layer = layui.layer
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            let name = res.data.nickname || res.data.username
            let first = name[0].toUpperCase()
        }
    })
})