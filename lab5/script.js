const form = document.querySelector("form");
const button = document.querySelector(".form-button");
const input = document.querySelectorAll("input");
const output = document.querySelector(".inserted-data");
const table = document.querySelector(".table");
const colorPicker = document.querySelector(".color-picker");

const layouts = {
  nameLayout: /^[А-ЯІЇЄҐ][а-яіїєґ'ʼ-]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
  phoneLayout: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
  facultyLayout: /^[А-ЯІЇЄҐ]{4}/,
  cardLayout: /^([А-ЯІЇЄҐ]{2} №\d{6}|\d{9})$/,
  birthLayout: /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
};

const formClassPattern = /^form-[a-z]+$/;

const formatPhone = (value) => {
  if (value.length === 1 && value.split("(").length - 1 === 0)
    return `(${value}`;
  if (value.length === 4 && value.split(")").length - 1 === 0)
    return `${value})-`;
  if (value.length === 9 && value.split("-").length - 1 === 1)
    return `${value}-`;
  if (value.length === 12 && value.split("-").length - 1 === 2)
    return `${value}-`;
  return value;
};

const formatDate = (value) => {
  if (value.length === 2 && value.split(".").length - 1 === 0)
    return `${value}.`;
  if (value.length === 5 && value.split(".").length - 1 === 1)
    return `${value}.`;
  return value;
};

const validateInput = (e) => {
  const targetClass = [...e.target.classList].find((el) =>
    formClassPattern.test(el),
  );

  const targetValue = e.target.value;

  console.log(targetClass);
  if (targetValue.trim() === "") {
    e.target.classList.remove("invalid");
    e.target.classList.remove("valid");
  }

  const fieldName = targetClass.split("-")[1];

  if (fieldName === "phone" && targetClass === "form-phone") {
    e.target.value = formatPhone(targetValue);
  }

  if (fieldName === "birth" && targetClass === "form-birth") {
    e.target.value = formatDate(targetValue);
  }

  const layout = layouts[`${fieldName}Layout`];

  if (layout.test(targetValue)) {
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }

  if ([...input].every((el) => el.classList.contains("valid"))) {
    button.disabled = false;
    button.classList.remove("invalid");
  } else {
    button.disabled = true;
    button.classList.add("invalid");
  }
};

form.querySelectorAll("input").forEach((el) => {
  el.addEventListener("input", (e) => {
    validateInput(e);
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector(".form-name").value;
  const phone = document.querySelector(".form-phone").value;
  const faculty = document.querySelector(".form-faculty").value;
  const idCard = document.querySelector(".form-card").value;
  const birth = document.querySelector(".form-birth").value;

  output.classList.remove("hidden");
  output.querySelectorAll("p").forEach((el) => el.remove());
  output.insertAdjacentHTML(
    "beforeend",
    `<p class="name"><b>ПІБ:</b> ${name}</p>`,
  );
  output.insertAdjacentHTML(
    "beforeend",
    `<p class="name"><b>Номер телефону:</b> ${phone}</p>`,
  );
  output.insertAdjacentHTML(
    "beforeend",
    `<p class="name"><b>ID card:</b> ${idCard}</p>`,
  );
  output.insertAdjacentHTML(
    "beforeend",
    `<p class="name"><b>Факультет:</b> ${faculty}</p>`,
  );
  output.insertAdjacentHTML(
    "beforeend",
    `<p class="name"><b>Дата народження:</b> ${birth}</p>`,
  );

  console.log(name, phone, faculty, idCard, birth);
});

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

const changeDiagonalColor = () => {
  const color = colorPicker.value;
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = color;
  }
};

table.querySelectorAll("td").forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    if (e.currentTarget.textContent.trim() === "3") {
      e.currentTarget.style.backgroundColor = getRandomHexColor();
      e.currentTarget.style.color = getRandomHexColor();
    }
  });

  el.addEventListener("dblclick", (e) => {
    changeDiagonalColor();
  });
});

colorPicker.addEventListener("input", (e) => {
  e.target.parentElement.style.backgroundColor = e.target.value;
});
