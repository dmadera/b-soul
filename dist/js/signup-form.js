var request;
$('#signupForm').submit(function(event) {
    event.preventDefault();

    if (request) {
        request.abort();
    }

    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var serializedData = $form.serialize();
    $inputs.prop("disabled", true);

    request = $.ajax({
        url: "http://new.b-soul.cz/scripts/signup-form.php",
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
          showMessage('signup-success', response);
        } else {
          showMessage('signup-failure', response);
        }
    });

    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        showMessage('signup-failure', errorThrown);
    });

    request.always(function () {
        $inputs.prop("disabled", false);
    });
});


