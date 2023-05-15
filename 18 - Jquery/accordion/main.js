$(document).ready(function(){
    $('.accordion').each(() => {
        $(this).click(function(){
            $(this).next().toggleClass('d-none')
        })
    });
})