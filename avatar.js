console.log("Avatars Slider 🔥");

let imgs = [];
// Adding the images to imgs
for (let i = 0; i < 6; i++) {
    imgs.push(`/Avatars/${i+1}.png`);

};

let img = document.querySelector("#images");

let i = 0;
function changeImages(){
    img.src = imgs[i];
    if(i<imgs.length-1){
        i++;
    }else{i=0};

    setTimeout('changeImages()',2000)
}

window.onload = changeImages();