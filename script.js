'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

const openModel = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModel);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
    // function () {
    //   modal.classList.add('hidden');
    //   overlay.classList.add('hidden');
    // });
// function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

*/
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape'&& !modal.classList.contains('hidden')) {
            closeModal();
    }
})