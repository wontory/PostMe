$(document).ready(function(){
    $("#capture").on("click",function(){
        html2canvas($('#capture_area')[0]).then(function(canvas){
            var img = document.createElement("a");
            img.download = "image.png";
            img.href=canvas.toDataURL();
            document.body.appendChild(img);
            img.click();    
        });
    });
})
