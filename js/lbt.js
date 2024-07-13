// 1. 获取元素
const carousel = document.querySelector("#banner");
const carouselImages = document.querySelector(".images");
const carouselPrevButton = document.querySelector(".carousel-prev");
const carouselNextButton = document.querySelector(".carousel-next");
// 获取carousel元素的计算样式
const carouselComputedStyle = window.getComputedStyle(carousel);
// 从计算样式中获取宽度，并转换为整数
let width = parseInt(carouselComputedStyle.width, 10);

// 2. 设置状态
let currentIndex = 0;
const imagesCount = carouselImages.children.length;

// 3. 切换图片函数
function switchImage(index) {
  currentIndex = index;
  carouselImages.style.transform = `translateX(${-currentIndex * 1180}px)`; // 根据图片宽度调整translateX的值
}

// 4. 绑定事件
carouselPrevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imagesCount - 1; // 循环到最后一张图片
  }
  switchImage(currentIndex);
});

carouselNextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= imagesCount) {
    currentIndex = 0; // 循环到第一张图片
  }
  switchImage(currentIndex);
});

// 在 lbt.js 文件末尾添加以下代码实现自动播放功能

// 5. 自动播放
let autoPlayInterval = setInterval(() => {
  currentIndex++;
  if (currentIndex >= imagesCount) {
    currentIndex = 0; // 如果超出图片数量，重置为第一张
  }
  switchImage(currentIndex);
}, 3000); // 设置轮播间隔为3000毫秒（3秒）
