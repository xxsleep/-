$(function () {
    let layer = layui.layer
    let form = layui.form
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        newPwd: function (value, item) {
            let op = $('[name=oldPwd]').val()
            if (value === op) {
                return "新密码不能和原密码一样！"
            }
        },

        rePwd: function (value, item) {
            let np = $('[name=newPwd]').val()
            if (value !== np) {
                return '两次输入的新密码不一致！'
            }
        }
    });

    $('#subBtn').submit(function (e) {
        e.preventDefault()
        let data = form.val("pwdform")
        $.ajax({
            type: 'POST',
            url: '/my/updatepwd',
            data,
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return '密码修改失败，' + res.message
                }
                $('#subBtn').reset()
            }
        })
    })
})