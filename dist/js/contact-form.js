var request;
$('#contactForm').submit(function(event) {
    event.preventDefault();

    if (request) {
        request.abort();
    }
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var serializedData = $form.serialize();
    $inputs.prop("disabled", true);

    request = $.ajax({
        url: "http://new.b-soul.cz/scripts/sendmail.php",
        type: "post",
        dataType: 'text',
        contentType: 'application/x-www-form-urlencoded',
        data: serializedData
    });

    request.done(function (response, textStatus, jqXHR){
        console.log("Request is done.", response);
        if(response['success']) {
          showMessage('message-success', response);
        } else {
          showMessage('message-success', response);
        }
    });

    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    request.always(function () {
        $inputs.prop("disabled", false);
    });
});
