$(function () {
    $('.nav-btn').on('click' , function() {
        $(this).toggleClass('open');
    });
    
    var currentIndex = 0;
    var $backgroundImage = $(".image-infinite-bg");
    var images = $backgroundImage.data('images');

    function changeBackgroundImage() {
        // Mengubah gambar latar belakang dengan indeks berikutnya dalam array
        currentIndex = (currentIndex + 1) % images.length;
        var imagePath =  images[currentIndex];
        $backgroundImage.css("background-image", "url('" + imagePath + "')");
    }

    // Panggil fungsi untuk pertama kali
    changeBackgroundImage();

    // Set interval untuk memanggil fungsi perubahan gambar dengan waktu yang ditentukan
    setInterval(changeBackgroundImage, 5000); // 10 detik (sesuaikan dengan waktu animasi CSS di atas)

    var swiper = new Swiper('.swiper-container', {
        autoplay : {
            delay: 500
        },
        speed : 1000,
        slidesPerView: 4 ,
        slidesPerGroup : 1,
        spaceBetween : 0,
        loop: true, 
        breakpoints: {
            // when window width is >= 360px
            360: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            }
          },
        pagination : {
            enabled : false
        }
      });

});