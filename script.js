// -----------------------homepage---------------------------

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var sideMenu = document.getElementById('side-menu');
    var btnClose = document.querySelector('.btn-close');

    // 切换侧边菜单显示的函数
    function toggleMenu() {
        // 检查侧边菜单的宽度并相应地调整
        sideMenu.style.width = sideMenu.style.width === '250px' ? '0' : '250px';
        // 更新菜单切换按钮的文本

    }

    // 点击菜单切换按钮时打开或关闭侧边菜单
    menuToggle.addEventListener('click', function() {
        toggleMenu();
    });

    // 点击关闭按钮时关闭侧边菜单
    btnClose.addEventListener('click', function() {
        toggleMenu();
    });

    // 点击侧边菜单外的任何地方时关闭侧边菜单
    window.addEventListener('click', function(event) {
        if (sideMenu.style.width === '250px' && !sideMenu.contains(event.target) && event.target !== menuToggle) {
            toggleMenu();
        }
    });

    // 更新日期和时间的函数
    function updateDateTime() {
        var now = new Date();
        var dateTime = now.toLocaleString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        });
        // 添加地点到日期时间字符串
        dateTime += ' | Ann Arbor, Michigan';
        document.getElementById('date-time').textContent = dateTime;
    }

    // 每秒钟更新一次日期和时间
    setInterval(updateDateTime, 1000);
    updateDateTime();
});




// -------------------------Movie---------------------------


document.addEventListener('DOMContentLoaded', function() {
    function closeDetails() {
      document.querySelectorAll('.movie-details').forEach(function(detail) {
        detail.style.display = 'none';
      });
    }
    
    // Event listener for 'Learn More' buttons
    document.querySelectorAll('.learn-more-btn').forEach(function(button) {
      button.addEventListener('click', function() {
        var details = this.nextElementSibling; // Assuming .movie-details is right after the button
        details.style.display = 'block';
      });
    });
  
    // Event listener for clicking outside the details box
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.learn-more-btn')) {
        closeDetails();
      }
    });
  });
  

// -----------------------------photos--------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    document.querySelector('.right-arrow').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length; // Move to next slide, loop around if at the end
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
    });

    document.querySelector('.left-arrow').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to previous slide, loop around if at the beginning
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
    });
});

// --------aboutme-----

function toggleVideo() {
    var video = document.getElementById('portraitVideo');
    var image = video.previousElementSibling; // 获取图像元素

    if (video.style.display === 'none') {
        video.style.display = 'block'; // 显示视频
        video.play(); // 播放视频
        image.style.display = 'none'; // 隐藏图片
    } else {
        video.style.display = 'none'; // 隐藏视频
        video.pause(); // 暂停视频
        video.currentTime = 0; // 重置视频到开始
        image.style.display = 'block'; // 显示图片
    }
}











// document.addEventListener('DOMContentLoaded', function() {
//     var menuToggle = document.getElementById('menu-toggle');
//     var sideMenu = document.getElementById('side-menu');
//     var btnClose = document.querySelector('.btn-close');

//     menuToggle.addEventListener('click', function() {
//         sideMenu.style.width = sideMenu.style.width === '250px' ? '0' : '250px';
//     });

//     btnClose.addEventListener('click', function() {
//         sideMenu.style.width = '0';
//         menuToggle.textContent = '☰';
//     });
//     window.addEventListener('click', function(event) {
//         if (sideMenu.style.width === '250px' && !sideMenu.contains(event.target) && event.target !== menuToggle) {
//             toggleMenu();
//         }
//     });

//     function updateDateTime() {
//         var now = new Date();
//         var dateTime = now.toLocaleString('en-US', { 
//             weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
//             hour: 'numeric', minute: 'numeric', second: 'numeric' 
//         });
//         // 添加地点到日期时间字符串
//         dateTime += ' | Ann Arbor, Michigan';
//         document.getElementById('date-time').textContent = dateTime;
//     }

//     setInterval(updateDateTime, 1000);
//     updateDateTime();
// });
