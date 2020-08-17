

$(document).ready(function () {

    //We bind the loging button to fire the login event.
    //The login event code can be found further down in the file.
    //Using events helps to keep things more organized by compartmentalizing the code.
    $('#loginButton').click(function () {
        $(document).trigger('login',{
            jid: $("#jid").val(),
            password: $("#password").val()
        });
    });

});

//This is the code that is called when the login event is fired.
//the data object has everything we stored in the previous code up above
$(document).on('login', function (event, data) {
    alert('good job' + data.jid +', you logged in');
});
