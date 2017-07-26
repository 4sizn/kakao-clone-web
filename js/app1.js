$(document).ready(function() {
    // whatever
    var $actionBtn = $("#actionBtn"),
        $iconBtn = $("#actionBtn .fa"),
        $lockBtn = $("#addfriendBtn");

    $actionBtn.click(function() {
        $iconBtn.toggleClass("fa-times fa-user-plus");
        $lockBtn.toggleClass("showing-button");
    });
});

