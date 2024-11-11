let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slides a');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;

    // 控制左右箭头的显示与隐藏
    if (currentIndex === 0) {
        prevButton.style.display = 'none'; // 第一张时隐藏左箭头
    } else {
        prevButton.style.display = 'block'; // 不是第一张时显示左箭头
    }

    if (currentIndex === totalSlides - 1) {
        nextButton.style.display = 'none'; // 最后一张时隐藏右箭头
    } else {
        nextButton.style.display = 'block'; // 不是最后一张时显示右箭头
    }
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateSlidePosition();
}

// 初始化时设置箭头状态
updateSlidePosition();


// // 获取按钮和容器
// const showCasesBtn_1 = document.getElementById('show-cases-btn_1');
// const caseStudiesContainer_1 = document.getElementById('case-studies-container_1');

// // 给按钮添加点击事件监听器
// showCasesBtn.addEventListener('click', () => {
//     // 切换容器的显示状态
//     if (caseStudiesContainer_1.style.display === 'none') {
//         caseStudiesContainer_1.style.display = 'block';
//         showCasesBtn_1.textContent = 'Hide Content'; // 更新按钮文本
//     } else {
//         caseStudiesContainer_1.style.display = 'none';
//         showCasesBtn_1.textContent = 'Show Content'; // 更新按钮文本
//     }
// });

// 获取按钮和容器-1
const showCasesBtn_1 = document.getElementById('show-cases-btn_1');
const caseStudiesContainer_1 = document.getElementById('case-studies-container_1');

// 给按钮添加点击事件监听器
showCasesBtn_1.addEventListener('click', () => {
    // 切换容器的显示状态
    if (caseStudiesContainer_1.style.display === 'none') {
        caseStudiesContainer_1.style.display = 'block';
        showCasesBtn_1.textContent = 'Hide Content'; // 更新按钮文本
    } else {
        caseStudiesContainer_1.style.display = 'none';
        showCasesBtn_1.textContent = 'Show Content'; // 更新按钮文本
    }
});

// 获取按钮和容器-2
const showCasesBtn_2 = document.getElementById('show-cases-btn_2');
const caseStudiesContainer_2 = document.getElementById('case-studies-container_2');

// 给按钮添加点击事件监听器
showCasesBtn_2.addEventListener('click', () => {
    // 切换容器的显示状态
    if (caseStudiesContainer_2.style.display === 'none') {
        caseStudiesContainer_2.style.display = 'block';
        showCasesBtn_2.textContent = 'Hide Content'; // 更新按钮文本
    } else {
        caseStudiesContainer_2.style.display = 'none';
        showCasesBtn_2.textContent = 'Show Content'; // 更新按钮文本
    }
});


// 第一个轮播
let currentIndex1 = 0;
const slides1 = document.querySelectorAll('#carousel-1 .carousel-slides a');
const totalSlides1 = slides1.length;
const prevButton1 = document.querySelector('#carousel-1 .prev');
const nextButton1 = document.querySelector('#carousel-1 .next');

function updateSlidePosition1() {
    const offset1 = -currentIndex1 * 100;
    document.querySelector('#carousel-1 .carousel-slides').style.transform = `translateX(${offset1}%)`;

    prevButton1.style.display = currentIndex1 === 0 ? 'none' : 'block';
    nextButton1.style.display = currentIndex1 === totalSlides1 - 1 ? 'none' : 'block';
}

function moveSlide1(direction) {
    currentIndex1 = (currentIndex1 + direction + totalSlides1) % totalSlides1;
    updateSlidePosition1();
}

updateSlidePosition1();

// 第二个轮播
let currentIndex2 = 0;
const slides2 = document.querySelectorAll('#carousel-2 .carousel-slides a');
const totalSlides2 = slides2.length;
const prevButton2 = document.querySelector('#carousel-2 .prev');
const nextButton2 = document.querySelector('#carousel-2 .next');

function updateSlidePosition2() {
    const offset2 = -currentIndex2 * 100;
    document.querySelector('#carousel-2 .carousel-slides').style.transform = `translateX(${offset2}%)`;

    prevButton2.style.display = currentIndex2 === 0 ? 'none' : 'block';
    nextButton2.style.display = currentIndex2 === totalSlides2 - 1 ? 'none' : 'block';
}

function moveSlide2(direction) {
    currentIndex2 = (currentIndex2 + direction + totalSlides2) % totalSlides2;
    updateSlidePosition2();
}

updateSlidePosition2();
