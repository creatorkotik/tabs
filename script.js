// let item1 = document.querySelector("#item-1");
// let item2 = document.querySelector("#item-2");
// let item3 = document.querySelector("#item-3");
// let item4 = document.querySelector("#item-4");
let items = document.querySelectorAll(".tab__item");

let contents = document.querySelectorAll(".tab__content");
// let content1 = document.querySelector("#content-1");
// let content2 = document.querySelector("#content-2");
// let content3 = document.querySelector("#content-3");
// let content4 = document.querySelector("#content-4");
for (let i = 0; i < items.length; i = i + 1) {
  items[i].onclick = function () {
    cleare();
    items[i].classList.add("item-active");
    contents[i].classList.add("content-active");
  };
}
function cleare() {
  for (let i = 0; i < items.length; i = i + 1) {
    items[i].classList.remove("item-active");
    contents[i].classList.remove("content-active");
  }
}
// item2.onclick = changeitem2;
// function changeitem2() {
//   item2.classList.add("item-active");
//   item1.classList.remove("item-active");
//   content2.classList.add("content-active");
//   content1.classList.remove("content-active");
//   item3.classList.remove("item-active");
//   content3.classList.remove("content-active");
//   item4.classList.remove("item-active");
//   content4.classList.remove("content-active");
// }
// item1.onclick = changeitem1;
// function changeitem1() {
//   item1.classList.add("item-active");
//   item2.classList.remove("item-active");
//   content1.classList.add("content-active");
//   content2.classList.remove("content-active");
//   item3.classList.remove("item-active");
//   content3.classList.remove("content-active");
//   item4.classList.remove("item-active");
//   content4.classList.remove("content-active");
// }

// item3.onclick = changeitem3;
// function changeitem3() {
//   item3.classList.add("item-active");
//   item1.classList.remove("item-active");
//   content3.classList.add("content-active");
//   content1.classList.remove("content-active");
//   item2.classList.remove("item-active");
//   content2.classList.remove("content-active");
//   item4.classList.remove("item-active");
//   content4.classList.remove("content-active");
// }

// item4.onclick = changeitem4;
// function changeitem4() {
//   item4.classList.add("item-active");
//   item1.classList.remove("item-active");
//   content4.classList.add("content-active");
//   content1.classList.remove("content-active");
//   item3.classList.remove("item-active");
//   content3.classList.remove("content-active");
//   item2.classList.remove("item-active");
//   content2.classList.remove("content-active");
// }
