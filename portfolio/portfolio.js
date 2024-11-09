// 获取所有 portfolio-item 元素
const portfolioItems = document.querySelectorAll('.portfolio-item');

// 遍历每个 portfolio-item 元素
portfolioItems.forEach(item => {
  const overlay = item.querySelector('.portfolio-overlay'); // 获取遮罩层
  
  // 鼠标进入时显示遮罩和文字
  item.addEventListener('mouseenter', () => {
    overlay.style.opacity = 1; // 显示遮罩
    overlay.style.backgroundColor = 'rgba(128, 0, 128, 0.3)'; // 显示紫色透明遮罩
  });
  
  // 鼠标离开时隐藏遮罩和文字
  item.addEventListener('mouseleave', () => {
    overlay.style.opacity = 0; // 隐藏遮罩
    overlay.style.backgroundColor = 'rgba(128, 0, 128, 0)'; // 隐藏紫色透明遮罩
  });
  
  // 鼠标点击时跳转到其他页面
  item.addEventListener('click', () => {
    window.location.href = 'https://example.com'; // 修改为目标链接
  });
});
