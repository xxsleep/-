$(function () {
    let layer = layui.layer
    getCate()

    function getCate() {
        $.ajax({
            url: '/my/article/cates',
            success: function (res) {

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
            content: $("#addForm").html(),
        });
    })

    $('body').on('submit', '#form', function (e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: '/my/article/addcates',
            data,
            success: function (res) {
                console.log(res);
                getCate()
            }
        })
    })
})