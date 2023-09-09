var newImg, showImg;

function loadImg(event){
    showImg = document.getElementById("showImg");
    showImg.src = URL.createObjectURL(event.target.files[0]);
    newImg = document.createElement("img");
    newImg.src = URL.createObjectURL(event.target.files[0]);

    showImg.onload = function(){
        URL.revokeObjectURL(showImg.src)
    }
}

function pdfDown(){
    var doc = new jsPDF();
    doc.addImage(newImg,10,10)
    doc.save("imgToPDF.pdf");
}
