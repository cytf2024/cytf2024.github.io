function updateDays() {
    // 获取今天的日期（使用东八区时间）
    let today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));

    // 指定日期：2023年11月20日的开始时间
    let targetDate = new Date('2023-11-20T00:00:00');

    // 计算距离天数
    let timeDifference = targetDate.getTime() - today.getTime();
    let dayDifference = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24))); // 使用Math.abs确保取正数

    // 将结果显示在id为"d"的HTML元素上
    document.getElementById('d').innerHTML = dayDifference;
}

// 初始执行一次更新
updateDays();

// 定时器，每隔1秒检查是否到达新的一天
setInterval(function () {
    let now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        updateDays();
    }
}, 1000);



// 获取元素
const letterImages = document.querySelectorAll('.letter-image');

// 定义音乐文件的URL
const musicUrl = './music/bg.mp3';

// 创建音频元素
const audio = new Audio(musicUrl);

let isPlay = false

// 遍历元素，并为每个元素添加点击事件监听器
letterImages.forEach(letterImage => {
    letterImage.addEventListener('click', () => {
    
        if (isPlay == false) {
            // 播放音乐
            audio.play();
            isPlay = !isPlay
        }else{
            //停止音乐
            audio.pause();
            isPlay = !isPlay
        }
    });
});
