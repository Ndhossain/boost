const inputs = document.getElementsByClassName('editable-inputs');

$('#edit-profile').click(function () {
    $('#edit-profile').addClass('d-none');
    $('#update-profile').removeClass('d-none');
    for (let input of inputs) {
        input.removeAttribute('disabled');
    };
});

$('#update-profile').click(function () {
    $('#edit-profile').removeClass('d-none');
    $('#update-profile').addClass('d-none');
    for (let input of inputs) {
        input.setAttribute('disabled', 'true')
    };
})
