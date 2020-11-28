$(function () {
    let form = layui.form
    let layer = layui.layer

    let query = {
        pagenum: 1, // 页码值, 默认加载第一页的数据
        pagesize: 2, // 每页显示多少条数据
        cate_id: "", // 文章分类的 Id
        state: "", // 文章的状态，可选值有：已发布、草稿
    };

    getList()

    function getList() {
        $.ajax({
            url: '/my/article/list',
            data: query,
            success: function (res) {
                console.log(res);
                console.log(template('trTpl', res));
                $('tbody').html(template('trTpl', res))

            }
        })
    }



})