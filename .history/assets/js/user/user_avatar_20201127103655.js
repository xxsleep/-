$(function () {
    // 1.1 获取裁剪区域的 DOM 元素
    let $image = $('#image')

    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)


    $('#uldBtn').click(function () {
        $('#file').click()
    })

    $('#file').change(function () {
        let file = this.files[0]
        console.log(file);
        let newImgURL = URL.createObjectURL(file)
        console.log(newImgURL);
        $image
            .cropper('destroy') // 销毁旧的裁剪区域
            .attr('src', newImgURL) // 重新设置图片路径
            .cropper(options) // 重新初始化裁剪区域
    })


    $('#sureBtn').click(function () {
        console.log('1');
        // 剪裁得到一张图片（canvas图片）
        let i = $image.cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
            width: 100,
            height: 100
        });
        // 把图片转成base64格式
        let str = i.toDataURL(); // 把canvas图片转成base64格式
        // console.log(str); // base64格式的字符串
        // ajax提交字符串给接口
        $.ajax({
            type: 'POST',
            url: '/my/update/avatar',
            data: {
                avatar: str
            },
            success: function (res) {
                layer.msg(res.message);
                if (res.status === 0) {
                    // 更换成功，调用父页面的 getUserInfo() ，重新渲染头像
                    window.parent.getUserInfo();
                }
            }
        });
    })


})