$(document).ready(function() {
    console.log("testing");

    $("#submit").on("click", function() {
        window.open("mailto:test@example.com");
    });
});