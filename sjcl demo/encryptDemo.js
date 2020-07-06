$(document).ready(function () {



    $('#encrypt').bind('click', function () {
         $(document).trigger('encrypt');
     });
     $('#decrypt').bind('click', function () {
         $(document).trigger('decrypt');
     });
});

$(document).bind('encrypt', function () {
    console.log($('#password').val());
    var content = $('#textLeft').val();
    var pass = $('#password').val();

    var encryptedContent = sjcl.encrypt(pass,content);

    $('#textRight').val(encryptedContent);
    $('#textLeft').val('');
});

$(document).bind('decrypt', function () {
    console.log($('#password').text);
    var encryptedContent = $('#textRight').val();
    var pass = $('#password').val();

    var content = sjcl.decrypt(pass,encryptedContent);

    $('#textLeft').val(content);
    $('#textRight').val('');
});