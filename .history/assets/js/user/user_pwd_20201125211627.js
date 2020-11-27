$(function () {
    let layer = layui.layer
    let form = layui.form
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        oldPwd: function (value, item) {

        }
    });
})