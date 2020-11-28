$(function () {
    let form = layui.form
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
        // console.log($("#addForm").html());
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
                    return layer.msg("新增文章分类失败！" + res.message);
                }

                layer.close(index)
                layer.msg("新增文章分类成功！")
                getCate()
            }
        })
    })

    let editIndex
    $('tbody').on('click', '#editBtn', (function () {
        console.log($("#editForm").html());
        let id = $(this).attr('data_id')
        editIndex = layer.open({
            type: 1,
            title: '修改文章分类',
            area: '500px',
            content: $("#editForm").html(),
        });
        $.ajax({
            url: '/my/article/cates/' + id,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("获取文章分类数据失败！" + res.message);
                }
                form.val("editForm", res.data);
            }
        })
    }))


    $('body').on('submit', '#editform', function (e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: '/my/article/updatecate',
            data,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("更新分类信息失败！" + res.message)
                }
                layer.close(editIndex);
                layer.msg("更新分类信息成功！");
                getCate()
            }
        })
    })
    $('tbody').on('click', '#delBtn', (function () {
        let id = $(this).attr('data_id')
        layer.confirm('是否确认删除', {
            icon: 3,
            title: '提示'
        }, function (index) {
            //do something

            layer.close(index);
            $.ajax({
                url: '/my/article/deletecate/' + id,
                success: function (res) {
                    if (res.status !== 0) {
                        return layer.msg("删除文章分类失败！" + res.message);
                    }
                    layer.msg("删除成功！")
                    getCate()
                }
            })
        });
    }))




})