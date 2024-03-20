const tooltip = document.querySelector('.tooltip');
const gorod = document.querySelectorAll('.gorod');
const popupBg = document.querySelector('.info_bg')
const pupup = document.querySelector('.info')

gorod.forEach(gorod => {
gorod.addEventListener('click', function(){
pupup.querySelector('.info_photo').setAttribute('src', this.dataset.photo)
pupup.querySelector('.info_tittle').innerHTML = this.dataset.tittle;
pupup.querySelector('.info_text').innerHTML = this.dataset.description;
popupBg.classList.add('active')
})


   gorod.addEventListener('mousemove', function(e)   {
    tooltip.innerText = this.dataset.tittle;
    tooltip.style.top = (e.y + 20) + 'px';
    tooltip.style.left = (e.x + 20) + 'px';
   });

gorod.addEventListener('mouseenter', function(){
tooltip.style.display = 'block';
});

gorod.addEventListener('mouseleave', function(){
    tooltip.style.display = 'none';
    });

});

document.addEventListener('click', (e) =>{
    if (e.target === popupBg){
        popupBg.classList.remove('active');
    }
})


// let scrollTopBtn = document.getElementById("scrollTop");

// window.onscroll = function() {
// if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
// scrollTopBtn.style.display = "block";
// } else {
// scrollTopBtn.style.display = "none";
// }
// };

// scrollTopBtn.onclick = function() {
// document.body.scrollTop = 0;
// document.documentElement.scrollTop = 0;
// };



// const smoothLinks = document.querySelectorAll('a[href^="wanderers.html"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };

const btnUp = {
    el: document.querySelector('.isShowBtn'),
    show() {
      // удалим у кнопки класс isShowBtn_hide
      this.el.classList.remove('isShowBtn_hide');
    },
    hide() {
      // добавим к кнопке класс isShowBtn_hide
      this.el.classList.add('isShowBtn_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .isShowBtn
      document.querySelector('.isShowBtn').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  btnUp.addEventListener();