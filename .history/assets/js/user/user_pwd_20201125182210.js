$(function () {
    let layer = layui.layer
    let form = layui.form
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repass: function (value, item) {
            let pwd = $('.rgbox input[name=password]').val()

            if (pwd !== value) {
                return '两次输入的密码不一致'
            }
        }
    });
})