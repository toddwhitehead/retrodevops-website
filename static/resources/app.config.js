$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()

    getAvailableDiskImages();
});


// Set Toast options
toastr.options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

var keyboardScreenMap = 
[
    "key_9",    // CTRL
    "key_27",   // Run/Stop
    "key_162",  // Commodore
    "key_32",   // Space bar
    "key_13",   // Return
    "key_112",  // F1
    "key_114",  // F3
    "key_116",  // F5
    "key_118"   // F7

]

var joystickScreenMap = [
    "joy_38",   // Up
    "joy_37",   // Left
    "joy_17",   // Fire
    "joy_39",   // Right
    "joy_40",   // Down
]
