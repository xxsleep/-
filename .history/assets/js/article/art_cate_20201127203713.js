$(function () {
    let layer = layui.layer

    function getCate() {
        $.ajax({
            url: '/my/article/cates',
            success: function (res) {
                console.log(res);

                $('tbody').html(template('model', res))
            }
        })
    }

    $('#upBtn').click(function () {
        var index = layer.open({
            content: 'test'
        });
    })
})