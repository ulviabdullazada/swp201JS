$(document).ready(function(){
    $('.accordion').each(() => {
        $(this).click(function(){
            $('.accordion').next().toggleClass('d-none')
        })
    });
})