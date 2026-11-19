const birthDate = document.getElementById("birth-date");
const education = document.querySelector(".education");
const imgButtons = document.querySelector(".img-buttons");
const imgContainer = document.querySelector(".img-container");
const img = document.querySelector(".img");

let prevTextColor = "";
let prevBackground = "";
let isChanged = false;

birthDate.addEventListener("click", (e) => {
  const el = e.currentTarget;

  if (!isChanged) {
    prevTextColor = el.style.color;
    prevBackground = el.style.backgroundColor;

    el.style.color = "white";
    el.style.backgroundColor = "red";
  } else {
    el.style.color = prevTextColor;
    el.style.backgroundColor = prevBackground;
  }

  isChanged = !isChanged;
});

let prevEdTextColor = "";
let prevEdBackground = "";
let isEdChanged = false;

education.addEventListener("click", (e) => {
  const el = e.currentTarget;

  if (!isEdChanged) {
    prevEdTextColor = el.style.color;
    prevEdBackground = el.style.backgroundColor;

    el.style.color = "red";
    el.style.backgroundColor = "pink";
  } else {
    el.style.color = prevEdTextColor;
    el.style.backgroundColor = prevEdBackground;
  }

  isEdChanged = !isEdChanged;
});

const increaseImage = () => {
  const images = document.querySelectorAll(".img");
  for (const img of images) {
    const image = img.querySelector("img");
    const width = image.offsetWidth;
    image.style.width = width * 0.1 + width + "px";
    image.style.height = "auto";
  }
};

const reduceImage = () => {
  const images = document.querySelectorAll(".img");
  for (const img of images) {
    const image = img.querySelector("img");
    const width = image.offsetWidth;
    image.style.width = width - width * 0.1 + "px";
    image.style.height = "auto";
  }
};

const duplicateImage = () => {
  imgContainer.insertAdjacentElement("beforeend", img.cloneNode(true));
};

const deleteImage = () => {
  const images = document.querySelectorAll(".img");
  images[images.length - 1].remove();
};

const actions = {
  add: duplicateImage,
  increase: increaseImage,
  reduce: reduceImage,
  delete: deleteImage,
};

imgButtons.addEventListener("click", (e) => {
  const target = e.target;
  const targetClass = target.className;
  const action = targetClass.replace("button-", "");
  actions[action]();
});
