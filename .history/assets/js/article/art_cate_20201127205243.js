$(function () {
    let layer = layui.layer
    getCate()

    function getCate() {
        $.ajax({
            url: '/my/article/cates',
            success: function (res) {
                console.log(res);

                $('tbody').html(template('model', res))
            }
        })
    }
    let index
    $('#upBtn').click(function () {
        index = layer.open({
            type: 1,
            title: '添加文章分类',
            area: '500px',
            content: $("#form").html(),
        });
    })

    $('body').on('submit', '#form', function () {

    })
})