$(document).ready(function () {
    //Show Menu Bar
    $(".navbar-toggler").click(function () {
        $('.offcanvas-end').toggleClass("show-menu");
        $(".modal-backdrop").toggleClass("show disFlex");

        var visibility = $('.offcanvas-end').css('visibility');
        $('.offcanvas-end').css('visibility', visibility === 'visible' ? 'hidden' : 'visible');
    });
});
