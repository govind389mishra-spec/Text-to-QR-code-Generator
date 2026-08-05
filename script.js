let text = document.getElementById("text");
let qr = document.getElementById("qr");

function generateQR(){

    if(text.value == ""){
        alert("Enter some text");
        return;
    }

    qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + text.value;
    qr.style.display = "block";
}
