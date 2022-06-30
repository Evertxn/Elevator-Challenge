// A Few variables containing our Elevator HTML elements
var directionUp = $('.going-up');
var directionDown = $('.going-down');
var currentFloorIndicator = $('#currentFloorIndicator');
var floorOne = $('#floorOne');
var floorTwo = $('#floorTwo');
var floorThree = $('#floorThree');
var floorFour = $('#floorFour');
var lastScrollTop = 0;
var st;


$(document).ready(function () {
    // Disable scrolling so that we're only focused on the Elevator panel
    let body = $('html, body')
    body.css('overflow', 'hidden');

    // If the user clicks number 1 on the panel:
    $('#elevatorBtn1').click(function () {
        // First, turn the selected button active by adding a css class.
        $(this).addClass('active')
        // Then, animate the elevator floor movment by scrolling to the top of this specific floor div. (5 second animation)
        body.animate({
            scrollTop: $("#floorOne").offset().top
        }, 5000, function () {
            // Finally, the animation has completed so remove the 'active' css class that was added earlier
            // Also remove the active classes from the directional indicators
            // And add the current floor indication to the Display panel
            $('#elevatorBtn1').removeClass('active')
            directionUp.removeClass('going-up-activated')
            directionDown.removeClass('going-down-activated')
            currentFloorIndicator.text('1')
            // Simulate the elevator stopping for a second before moving onto the next floor
        }).delay(1000)
    })

    $('#elevatorBtn2').click(function () {
        $(this).addClass('active')
        body.animate({
            scrollTop: $("#floorTwo").offset().top
        }, 5000, function () {
            // animation complete
            $('#elevatorBtn2').removeClass('active')
            directionUp.removeClass('going-up-activated')
            directionDown.removeClass('going-down-activated')
            currentFloorIndicator.text('2')
        }).delay(1000)
    })

    $('#elevatorBtn3').click(function () {
        $(this).addClass('active')
        body.animate({
            scrollTop: $("#floorThree").offset().top
        }, 5000, function () {
            // animation complete
            $('#elevatorBtn3').removeClass('active')
            directionUp.removeClass('going-up-activated')
            directionDown.removeClass('going-down-activated')
            currentFloorIndicator.text('3')
        }).delay(1000)
    })

    $('#elevatorBtn4').click(function () {
        $(this).addClass('active')
        body.animate({
            scrollTop: $("#floorFour").offset().top
        }, 5000, function () {
            // animation complete
            $('#elevatorBtn4').removeClass('active')
            directionUp.removeClass('going-up-activated')
            directionDown.removeClass('going-down-activated')
            currentFloorIndicator.text('4')
        }).delay(1000)
    })

    // A Button Example where an alert is thrown if the current floor is in view.


    // $('#elevatorBtn2').click(function () {
    //     if (floorTwo.isInViewport()) {
    //         $(this).removeClass('active')
    //         directionUp.removeClass('going-up-activated')
    //         directionDown.removeClass('going-down-activated')
    //         alert("Hey! You're already on this floor.")
    //     } else {
    //         $(this).addClass('active')
    //         body.animate({
    //             scrollTop: $("#floorTwo").offset().top
    //         }, 5000, function(){
    //             // animation complete
    //             $('#elevatorBtn2').removeClass('active')
    //             directionUp.removeClass('going-up-activated')
    //             directionDown.removeClass('going-down-activated')
    //             currentFloorIndicator.text('2')
    //         }).delay(1000)
    //     }
    // })



    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // The window is scrolling down - the down directional indicator should be activated, but also turn off the up indicator too.
            console.log('The elevator is currently headed down.')
            directionDown.addClass('going-down-activated');
            directionUp.removeClass('going-up-activated');
        } else {
            // The window is scrolling up - the up directional indicator should be activated, but also turn off the down indicator too.
            console.log('The elevator is currently headed up.')
            directionDown.removeClass('going-down-activated');
            directionUp.addClass('going-up-activated');
        }
        lastScrollTop = st;
    });


    // Detect the Top and Bottom of our Viewport And Floor Elements
    $.fn.isInViewport = function () {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + window.innerHeight;
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

});