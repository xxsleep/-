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
        }
    });
})