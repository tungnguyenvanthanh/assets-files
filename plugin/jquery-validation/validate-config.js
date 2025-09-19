// Cấu hình mặc định cho tất cả form theo CSS mặc định của Bootstrap 5.3
$.validator.setDefaults({
    errorClass: "is-invalid",   // class khi input sai
    validClass: "is-valid",     // class khi input đúng
    errorElement: "div",        // thẻ chứa message
    errorPlacement: function (error, element) {
        error.addClass("invalid-feedback"); // message style Bootstrap
        if (element.parent(".input-group").length) {
            error.insertAfter(element.parent());
        } else if (element.is(":checkbox")) {
            error.insertAfter(element.next("label")); // cho checkbox
        } else {
            error.insertAfter(element);
        }
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
    }
});