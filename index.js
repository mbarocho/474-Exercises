$( document ).ready(function() {
    console.log( "ready!" );

    $('#go').on('click', function (event) {
        event.preventDefault();

        var firstName = $('#fname').val();
        var lastName = $('#lname').val();

        $('#jumbotron h2').text('Hello, ' + firstName + ' ' + lastName);
    });
});