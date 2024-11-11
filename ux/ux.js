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


// 获取按钮和容器
const showCasesBtn = document.getElementById('show-cases-btn');
const caseStudiesContainer = document.getElementById('case-studies-container');

// 给按钮添加点击事件监听器
showCasesBtn.addEventListener('click', () => {
    // 切换容器的显示状态
    if (caseStudiesContainer.style.display === 'none') {
        caseStudiesContainer.style.display = 'block';
        showCasesBtn.textContent = 'Hide Content'; // 更新按钮文本
    } else {
        caseStudiesContainer.style.display = 'none';
        showCasesBtn.textContent = 'Show Content'; // 更新按钮文本
    }
});