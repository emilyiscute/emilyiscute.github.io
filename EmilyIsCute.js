// Knuth Shuffle (not made by me)

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var messages = ["#message0", "#message1", "#message2", "#message3", "#message4", "#message5",
    "#message6", "#message7", "#message8", "#message9", "#message10", "#message11"];

function hideAll() {
    $("p").hide();
}

function showMessage(message) {
    $(message).show();
}

$(document).ready(function () {

    $("button").click(function () {
        hideAll();
        shuffle(messages);
        showMessage(messages[0]);
    });
});