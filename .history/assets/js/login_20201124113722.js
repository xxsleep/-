$(function () {
    $('#gotoRg').click(function () {
        $(this).parents('.lgbox').hide().siblings('.rgbox').show()
    })

    $('#gotoLg').click(function () {
        $(this).parents('.rgbox').hide().siblings('.lgbox').show()
    })


    let form = layui.form
    let layer = layui.layer
    form.verify({
        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        pass: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],

        // 再次确认密码的校验 需要和密码框的内容保持一致 ==> 函数写法
        repass: function (value, item) {
            // value：表单的值、item：表单的DOM对象
            // console.log(value, item);

            // 注册表单中密码框的内容 ==> 坑，获取密码框需要精确，得是注册表单中的密码框
            let pwd = $(".rgbox input[name=password]").val();
            // console.log(pwd);

            // 判断密码框内容是否和确认密码框的内容是否一致
            if (value !== pwd) {
                // return 后面的内容就是提示文字
                return "两次输入的密码不一致!";
            }
        },
    });
    // form.verify({
    //     username: function (value, item) { //value：表单的值、item：表单的DOM对象
    //         if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
    //             return '用户名不能有特殊字符';
    //         }
    //         if (/(^\_)|(\__)|(\_+$)/.test(value)) {
    //             return '用户名首尾不能出现下划线\'_\'';
    //         }
    //         if (/^\d+\d+\d$/.test(value)) {
    //             return '用户名不能全为数字';
    //         }
    //     },
    //     pass: [
    //         /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
    //     ],
    //     repass: function (value, item) {
    //         let pwd = $('.rgbox input[name=password]').val()

    //         if (pwd !== value) {
    //             return '两次输入的密码不一致'
    //         }
    //     }
    // });

    $('#lgBox').on('submit', function (e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: "POST",
            url: "/api/login",
            data,
            success: function (res) {
                console.log(res);

                if (res.status !== 0) {
                    return layer.msg("登录失败！");
                }

                localStorage.setItem("token", res.token);
                layer.msg(
                    "登录成功，即将去后台主页", {
                        time: 2000
                    },
                    function () {
                        location.href = "index.html";
                    }
                );
            }
        })
    })

    $('#rgBox').on('submit', function (e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: '/api/reguser',
            data,
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg('注册失败，' + res.message)
                }

                layer.msg('注册成功')
            }

        })
    })
})