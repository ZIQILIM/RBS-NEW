grey1 = document.querySelector(".grey1"); 
grey2 = document.querySelector(".grey2")

function showgrey1() {
    grey1.style.display = "block";
    grey2.style.display = "none";
}

function showgrey2() {
    grey1.style.display = "none";
    grey2.style.display = "block";
}

function confirmCancellation() {
    var confirmation = confirm("Are you sure you want to cancel this booking?");
    
    if (confirmation) {
        // User confirmed the cancellation, so remove "img1," "<h1>Room 1</h1><p>18/9/2023</p><p>12.30pm - 3.30pm</p>," and "button1"
        var img1 = document.querySelector(".img1");
        var roomInfo = document.querySelector(".ingrey1");
        
        if (img1) {
            img1.parentNode.removeChild(img1);
        }
        if (roomInfo) {
            roomInfo.parentNode.removeChild(roomInfo);
        }
    }
}

function confirmCancellation() {
    var confirmation = confirm("Are you sure you want to cancel this booking?");
    
    if (confirmation) {
        // User confirmed the cancellation, so remove "img1," "<h1>Room 1</h1><p>18/9/2023</p><p>12.30pm - 3.30pm</p>," and "button1"
        var img1 = document.querySelector(".img1");
        var roomInfo = document.querySelector(".top");
        
        if (img1) {
            img1.parentNode.removeChild(img1);
        }
        if (roomInfo) {
            roomInfo.parentNode.removeChild(roomInfo);
        }
    }
}

function confirmCancellation2() {
    var confirmation = confirm("Are you sure you want to cancel this booking?");

    if (confirmation) {
        var img2 = document.querySelector(".img2");
        var name1 = document.querySelector(".name1");
        var button2 = document.querySelector(".button2");
        var cancel2 = document.querySelector(".cancel2");

        if (img2) {
            img2.parentNode.removeChild(img2);
        }
        if (name1) {
            name1.parentNode.removeChild(name1);
        }
        if (button2) {
            button2.parentNode.removeChild(button2);
        }
        if (cancel2) {
            cancel2.parentNode.removeChild(cancel2);
        }
    }
}

function showConfirmation() {
    if (confirm("Are you sure you want to book again?")) {
       
        window.location.href = "student-booking-detail.html";
    }
}






