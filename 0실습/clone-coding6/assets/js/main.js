
// hover 시 메뉴 효과 (대상: 메뉴바)
const menuList = document.querySelector('#nav-menu-list');
const menuItem = document.querySelectorAll('.nav-menu');

menuList.addEventListener('mouseover', e => {
    document.querySelector('.curtain').style.display = 'block'; // 화면 어둡게
    document.querySelector('.sub-back').style.display = 'block'; // 서브메뉴 바탕
    // console.log(e.currentTarget)
})

// hover 시 서브메뉴 시각화 (대상: 각 메뉴)
Array.from(menuItem).forEach(v => {
  v.addEventListener('mouseover', e => {
    Array
    .from(document.querySelectorAll('.sub-menu'))
    .forEach(v2 => {v2.style.display = 'none'});
    e.currentTarget.querySelector('.sub-menu').style.display = 'block';
  })
})

document.querySelector('.sub-back').addEventListener('mouseout', e => {
    document.querySelector('.curtain').style.display = 'none';
    document.querySelector('.sub-back').style.display = 'none';
    document.querySelector('.sub-menu').style.display = 'none';
})


// 타이틀 페이지 카운터
const current = document.querySelector('#current-page');
const pages = document.querySelector('#page-all');
let count = 1;
current.innerHTML = count;

const btnBack = document.querySelector('#btn-back');
const btnForward = document.querySelector('#btn-forward');

const changeTit = async (item, method) => {
  if (method === 'prev') {
    let prevlist = item.previousElementSibling;
    if (!prevlist) prevlist = item.parentElement.lastElementChild;
    prevlist.classList.add('active');
    item.classList.remove('active');
  } else if (method === 'next') {
    let nextlist = item.nextElementSibling;
    if (!nextlist) nextlist = item.parentElement.firstElementChild;
    nextlist.classList.add('active');
    item.classList.remove('active');
  }

  if(count === 1 || count === 2 || count === 0) {
    item.parentElement.style.color = "white"
  } else {
    item.parentElement.style.color = "black"
  }
}

btnBack.addEventListener('click', e => {
  count = (--count + 5) % 5;

  // 타이틀 이미지 변경
  let slideLeft = document.querySelector('.title-slide-l').querySelector('.active');
  let slideRight = document.querySelector('.title-slide-r').querySelector('.active');
  let slideTit = document.querySelector('.title-txt').querySelector('.active');
  const changeEle = [slideLeft, slideRight, slideTit];

  changeEle.forEach(v => changeTit(v, 'prev'))

  // 페이지 수 변경
  Math.abs(count) === 0 ? current.innerHTML = 5 : current.innerHTML = Math.abs(count);
});

btnForward.addEventListener('click', e => {
  count = (++count) % 5;
  console.log(count);

  // 타이틀 이미지 변경
  let slideLeft = document.querySelector('.title-slide-l').querySelector('.active');
  let slideRight = document.querySelector('.title-slide-r').querySelector('.active');
  let slideTit = document.querySelector('.title-txt').querySelector('.active');
  const changeEle = [slideLeft, slideRight, slideTit];

  changeEle.forEach(v => {
    let nextlist = v.nextElementSibling;
    if (!nextlist) nextlist = v.parentElement.firstElementChild;
    nextlist.classList.add('active');
    v.classList.remove('active');
  })

  // 페이지 수 변경
  Math.abs(count) === 0 ? current.innerHTML = 5 : current.innerHTML = Math.abs(count);
});