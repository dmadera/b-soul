var request;
$('#contactForm').submit(function(event) {
    var form = $(this);
    event.preventDefault();

    if (request) {
        request.abort();
    }
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var serializedData = $form.serialize();
    $inputs.prop("disabled", true);

    request = $.ajax({
        url: "scripts/contact-form.php",
        type: "post",
        dataType: 'text',
        contentType: 'application/x-www-form-urlencoded',
        data: serializedData
    });

    request.done(function (response, textStatus, jqXHR){
        response = JSON.parse(response);
        console.log("Request", response);
        if(response.success) {
          form[0].reset();
          showMessage('message-success', response);
        } else {
          showMessage('message-failure', response);
        }
    });

    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        showMessage('message-failure', errorThrown);
    });

    request.always(function () {
        $inputs.prop("disabled", false);
    });
});
