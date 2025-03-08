// //#### LAB 6 - DOM MANIPULATION ####
// //PART 2: MYSTERY BOX
// LISTEN FOR load EVENT
window.onload = pageLoaded;

// 'WRAPPER' FUNCTION FOR DOM LOGIC
function pageLoaded() {
    // GET DOM ELEMENTS WE'LL NEED
    var mystery_Box1 = document.getElementById("mysteryBox");
    var button_Box = document.getElementById("buttonBox");

    mystery_Box1.onmouseover = mystery_message;
    button_Box.onclick = box_switch;

    // FUNCTION TO ASK USER
    function mystery_message() {
        if (confirm('Do you want to see something?')) {
            mystery_Box1.style.display = 'none';
            button_Box.style.display = 'block';
        }
    }

    // FUNCTION TO CHANGE buttonBox
    function box_switch() {
        button_Box.innerHTML = '<h2> SURPRISE!!</h2>';
        button_Box.style.width = '600px';
        button_Box.style.backgroundColor = 'orange';
    }
}

// // When the Button Box is clicked
// //END onload FUNCTION
