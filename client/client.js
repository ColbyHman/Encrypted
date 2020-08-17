var client={
    connection:null,
    http_bind:"http://3.129.13.151:5280/http",
    name:null
}

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
    console.log('login fired');
    client.name=data.jid;
    client.connection = new Strophe.Connection(client.http_bind);
    client.connection.connect(data.jid, data.password, function (status) {
        if(status===Strophe.Status.CONNECTED) {
            $(document).trigger('connected');
        } else if (status === Strophe.Status.DISCONNECTED){
            $(document).trigger('disconnected');
        }

    });
});

$(document).on('connected', function () {
    console.log('connected fired');
    alert('good job ' + client.name +', you logged in');
    client.connection.disconnect();
});


$(document).on('disconnected', function () {
    console.log('dc fired')
    alert('disconnected');
});
