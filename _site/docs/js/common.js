$(document).ready(function() {

    $.get("common", function(data) {
        console.log("Content loaded successfully:", data);
        $(".Nav").replaceWith($(data).filter(".fixed-navbar"));
        $(".Footer").replaceWith($(data).filter(".contact"));
    }).fail(function(xhr, status, error) {
        console.log("Error loading common.html:", error);
    });

});

function arrayContainsArray(superset, subset) {
    return subset.every(function(value) {
        return (superset.indexOf(value) >= 0);
    });
}