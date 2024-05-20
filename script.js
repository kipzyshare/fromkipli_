const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Makasii banyakk atas semua bantuannyaa. Sekarang giliran aku yang bantu kamu. Kalo kamu lelah kamu boleh istirahat, kalo kamu butuh sharing kamu bisa chat diriku, kalo kamu butuh bantuanku, selama aku mampu akan ku bantu. Semangat teruss, i know u can do it clearlyy cause u so gorgeus. ";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/foryou.gif";
    nextBtn.innerHTML = "reply";
    nextClicked = true;
  } else {
    window.location.href = "https://wa.me/081212098328?text=reply%20message%20whatever";
  }
});