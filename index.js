const btnUp = document.querySelector('.scrollBtnUp button').addEventListener('click', function() {
 document.documentElement.scrollTop = 0;
})

const btnDown = document.querySelector('.scrollBtnDown button').addEventListener('click', function() {
  document.documentElement.scrollTop = 840;
});

const contactBtn = document.querySelector('#contact').addEventListener('click', function() {
  document.documentElement.scrollIntoView(false);
})