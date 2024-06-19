function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].id === pageName) {
            tabcontent[i].style.display = "block";
            elmnt.style.backgroundColor = color;
        } else {
            tabcontent[i].style.display = "none";
        }
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        if (tablinks[i] !== elmnt) {
            tablinks[i].style.backgroundColor = "white"; // Reset background color to gray
        }
    }
}
