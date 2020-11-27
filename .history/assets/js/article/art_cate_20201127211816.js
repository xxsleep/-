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

    $('body').on('submit', '#addform', function (e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: '/my/article/addcates',
            data,
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg("新增文章分类失败！");
                }

                layer.msg("新增文章分类成功！")
                layer.close(index)
                getCate()
            }
        })
    })

    let editindex
    $('tbody').on('click', '#editBtn'(function () {
        console.log('1');
        editindex = layer.open({
            type: 1,
            title: '添加文章分类',
            area: '500px',
            content: $("#editForm").html(),
        });
    }))


})