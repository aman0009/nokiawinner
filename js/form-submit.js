$(document).ready(
    $('form[id^=newsletter-form]').on('beforeSubmit', function (event, jqXHR, settings) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            type: 'post',
            data: new FormData(this),//form.serialize(),
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData: false,        // To send DOMDocument or non processed data file it is set to false
            success: function () {
                $('form[id^=newsletter-form]').fadeOut();
            },
            error: function () {
                alert("Something went wrong");
            }
        });

        return false;
    }).on('submit', function (e) {
        e.preventDefault();
    }),
    $('form[id^=feedback-form]').on('beforeSubmit', function (event, jqXHR, settings) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            type: 'post',
            data: new FormData(this),//form.serialize(),
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData: false,        // To send DOMDocument or non processed data file it is set to false
            success: function () {
                    $(".form_wrapp").addClass('form_hide');
                    $(".thx").addClass('thx_active');
            },
            error: function () {
                alert("Something went wrong");
            }
        });

        return false;
    }).on('submit', function (e) {
        e.preventDefault();
    })
);
