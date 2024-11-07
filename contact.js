AOS.init({
    duration: 1500, // 全局动画持续时间
    easing: 'ease-in-out', // 动画效果
    once: true // 动画只触发一次
});

/* contact form require function */
// Example of Bootstrap validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('form')
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()
