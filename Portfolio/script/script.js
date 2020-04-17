// JavaScript som skapar en hover-effekt på id:t "musikLink"
// Denna funktion sätter bakgrundfärgen till "lightgrey".
function mOver() {
    document.getElementById('musikLink').style.background = "lightblue";
}

// Denna funktion sätter tillbaka bakgrundsfärgen till det ärvda värdet (inherit) från föräldraelementet, 
//i detta specifika fall <ul>
function mOut() {
    document.getElementById('musikLink').style.background = "inherit";
}

// Detta är två sammanlänkade funktioner där första ledet (document.getElementById) hittar id:t 
// och nästa led (addEventListener) väntar på att någon ska föra muspekaren över det hittade elementet 
//för att då köra funktionen "mOver".
document.getElementById('musikLink').addEventListener("mouseover", mOver);
//Detta led aktiveras när elementet inte längre har muspekaren över sig. 
document.getElementById('musikLink').addEventListener("mouseout", mOut);

// ----------------------------------------------------------------

// jquery som skapar en hover-effekt på id:t "solLink"
$(document).ready(function() {
    $("#solLink").hover(function() {
            $(this).css("background-color", "lightyellow")
        },
        function() {
            $(this).css("background-color", "inherit")
        }
    );
});
