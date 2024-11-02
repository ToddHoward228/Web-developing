'use strict';

function UpdateState(number) {

    switch (number) {
        case 0:
            $('#login').fadeOut();
            $('body').css("overflow", "initial");
            $('#join_menu').fadeOut(500);
            $('#signup').fadeOut(500);
            $('#login').fadeOut(500);

            break;
        case 1:
            $('body').css("overflow", "hidden");
            $('#signup').fadeOut(500);
            $('#login').fadeOut(500)            
            $('#join_menu').fadeIn(500);

            break;
        case 2:
            $('body').css("overflow", "hidden");
            $('#join_menu').fadeOut(500);            
            $('#login').fadeOut(500);
            $('#signup').delay(300).fadeIn(500)


            break;
        case 3:
            $('body').css("overflow", "hidden");
            $('#join_menu').fadeOut(500);
            $('#signup').fadeOut(500);
            $('#login').delay(300).fadeIn(500);


            break;
        default:
            console.log("Error, form state is undefined");
    }
}
$.validator.setDefaults({
    errorClass: 'has-error',
    highlight: function (element) {
        $(element).addClass('form_error');
    },
    unhighlight: function (element) {
        $(element).removeClass('form_error');
    },
    errorPlacement: function (error, element) {
        if (element.prop('type') === 'checkbox') {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});
$.validator.addMethod("StrongPassword", function (value, element) {
    return /\d/.test(value) && /\w/.test(value) && /[!@#$%^&*()]/.test(value);
});

$('#login').validate({
        
    rules: {
        username: {
            nowhitespace: true,
            required: true
        },
        email: {
            email: true,
            required: true
        },
        password: {
            StrongPassword: true,
            minlength: 6,
            required: true
        }
    },
    messages: {
        username: {
            nowhitespace: "No whitespace"
        },
        email: {
            email: "Enter an <b>email</b>",
            required: "Field shouldn`t to be empty"
        },
        password: {
            StrongPassword: "Your password must contain at least one number, one digit and one special char",
            minlength: "your passwort must be at least 6 characters long"
        }
    }

});

$('#signup').validate({

    rules: {
        username: {
            nowhitespace: true,
            required: true
        },
        email: {
            email: true,
            required: true
        },
        password: {
            StrongPassword: true,
            minlength: 6,
            required: true
        },
        password_confirm: {
            equalTo: '#password1',
            required: true
        }
    },
    messages: {
        username: {
            nowhitespace: "No whitespace"
        },
        email: {
            email: "Enter an <b>email</b>",
            required: "Field shouldn`t to be empty"
        },
        password: {
            StrongPassword: "Your password must contain at least one number and one digit",
            minlength: "your passwort must be at least 6 characters long"
        }
    }

});

$('#feedback').validate({
    rules: {
        username: {
            nowhitespace: true
        },
        email: {
            email: true
        },
        topic: {
            required: true
        },
        textarea_fdb: {
            required: true,
            minlength: 10
        }
    },
    messages: {
        username: {
            nowhitespace: "No whitespace"
        },
        textarea_fdb: {
            minlength: "Будь ласка опишіть проблему детальніше"
        }
    }
});


$("#feedback_button").on('click', () => {
    $("#feedback").fadeIn(1000);
});