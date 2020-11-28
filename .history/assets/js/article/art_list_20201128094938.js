$(function () {
    let form = layui.form
    let layer = layui.layer

    // getList()

    // function getList() {
    $.ajax({
        url: '/my/article/list',
        success: function (res) {
            console.log(res);
            console.log(template('trTpl', res.data));
            // $('tbody').html(template('trTpl', res.data))
        }
    })
    // }

})