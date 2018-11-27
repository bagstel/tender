module.exports = () => {
    let input = $('.feedback__form-input');
    let textarea = $('.feedback__form-textarea');
    let placeholder;

    input.on('focus', function () {
        $(this).siblings('.feedback__form-required').css("display", "none");

    });
    input.on('blur', function () {
        if ($(this).val() === '') {
            $(this).siblings('.feedback__form-required').css("display", "block");
        }
    });

    textarea.on('focus', function () {
        placeholder = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    });

    textarea.on('blur', function () {
        if ($(this).val() === '') {
            $(this).attr('placeholder', placeholder);
        }
    });
};