$(function () {
    $('#gotoRg').click(function () {
        $(this).parents('.lgbox').hide().siblings('.rgbox').show()
    })
    $('#gotoLg').click(function () {
        $(this).parents('.rgbox').hide().siblings('.lgbox').show()
    })
})