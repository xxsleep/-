$(function () {
    let layer = layui.layer
    $.ajax({
        url: '/my/article/cates',
        success: function (res) {
            console.log(res);

            $('tbody').html(template('model', res))
        }
    })
})