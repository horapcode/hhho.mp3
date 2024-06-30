window.addEventListener("load", function() {
    const slider = document.querySelector(".option-all__song-slider");
    const sliderMain = document.querySelector(".option-all__song-slider-main");
    const sliderItems = document.querySelectorAll(".option-all__song-slider-img");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderItemsWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let index = 0;
    let postionX = 0;
nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
});

prevBtn.addEventListener("click", function (){
    handleChangeSlide(-1);
});

function handleChangeSlide(direction) {
    if (direction === 1) {

        if (index >= sliderLength - 4){
            index = sliderLength - 4;
            return;
        }
        postionX = postionX - sliderItemsWidth;
        sliderMain.style = `transform: translateX(calc(${postionX}px - 7px))`;
        console.log(index);
            index ++;
    }else if(direction === -1) {
        if (index <=0){
            index = 0;
            return;
        }
        postionX = postionX + sliderItemsWidth;
        sliderMain.style = `transform: translateX(calc(${postionX}px + 7px))`;
        console.log(index);
            index --;
    }
}
});

