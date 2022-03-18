document.addEventListener("DOMContentLoaded", function(event) {
    const form = $('.form-container')
    $('#contact-link, #contact-button').on('click', function(){
        form.addClass('active')
    })

    $(document).on('scroll', function(){
        if(form.hasClass('active')
        && $('#mail').val() === ''
        && $('#message').val() === '') {
         form.removeClass('active')
        }
    })

    $('#close-form').on('click', function(){
        form.removeClass('active')
    })
});