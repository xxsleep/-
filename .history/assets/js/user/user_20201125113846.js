$(function () {
    let form = layui.form

    function getUser() {
        $.ajax({
            url: '/my/userinfo',
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg("获取用户基本信息失败！");
                }
                let id = res.data.id
                console.log(id);

                form.val('form', res.data)
            }
        })
    }
    getUser()

    $('#reBtn').click(function (e) {
        e.preventDefault()
        getUser()
    })


    $('#smBtn').click(function () {
        let data = form.val("form")
        console.log(data);
        $.ajax({
            type: 'POST',
            url: '/my/userinfo',
            data: {
                id: 24540,
                nickname: "aaa",
                email: 'aa@qq.com'
            },
            success: function (res) {
                if (res.status !== 0) {
                    return lay.msg("修改用户信息失败！")
                }
                getUser()
            }
        })
    })
})