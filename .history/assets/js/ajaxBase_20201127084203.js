$.ajaxPrefilter(function (options) {
    // 在每次jQ发送ajax请求前会执行该函数，通过该函数的形参options可以获取到每次ajax的配置项
    // 来修改每次请求的配置项
    options.url = "http://ajax.frontend.itheima.net" + options.url;

    if (options.url.indexOf("/my/") !== -1) {
        // 有 /my/ ==>  需要在请求头中携带 Authorization 身份认证字段
        options.headers = {
            Authorization: localStorage.getItem("token"),
        };
    }

    // options.complete = function (xhr) {
    //     if (xhr.responseJSON.status !== 0 && xhr.responseJSON.message !== '获取用户基本信息成功') {
    //         localStorage.removeItem('token')
    //         location.href = '/home/login.html'
    //     }
    // }





});