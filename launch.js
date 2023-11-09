function showgrey1() {
    document.getElementById("grey1").style.display = "block";
    document.getElementById("grey2").style.display = "none";
}

function showgrey2() {
    document.getElementById("grey1").style.display = "none";
    document.getElementById("grey2").style.display = "block";
}

function confirmCancellation() {
    if (confirm("Are you sure you want to delist this room?")) {
        var topDiv = document.querySelector('.grey1 .top');
        if (topDiv) {
            topDiv.remove();
        }

        var top1Div = document.querySelector('.grey2 .top1');
        if (top1Div) {
            top1Div.remove();
        }
    }
}

function confirmCancellation2() {
    if (confirm("Are you sure you want to delist this room?")) {
        var bottomDiv = document.querySelector('.grey1 .bottom');
        if (bottomDiv) {
            bottomDiv.remove();
        }

        var top1Div = document.querySelector('.grey2 .bottom1');
        if (top1Div) {
            top1Div.remove();
        }
    }
}

