const button = document.querySelector(".get-user");
const userContainer = document.querySelector(".users");

button.addEventListener("click", async () => {
  const data = new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        if (!response.ok) {
          return `Error ${response.status}`;
        }
        return response.json();
      })
      .then((json) => resolve(json.results[0]))
      .catch((err) => reject(err));
  });

  try {
    const userData = await data;
    console.log(userData);

    const userBlock = document.createElement("div");
    userBlock.className = "user";

    const userImage = document.createElement("img");
    userImage.src = userData.picture.large;

    const userInfoContainer = document.createElement("div");
    userInfoContainer.className = "user-info";

    const postcode = document.createElement("p");
    const city = document.createElement("p");
    const name = document.createElement("p");
    const email = document.createElement("p");
    postcode.innerHTML = `<b>Postcode:</b> ${userData.location.postcode}`;
    city.innerHTML = `<b>City:</b> ${userData.location.city}`;
    name.innerHTML = `<b>Name:</b> ${userData.name.title} ${userData.name.first} ${userData.name.last}`;
    email.innerHTML = `<b>Email:</b> ${userData.email}`;

    userBlock.insertAdjacentElement("beforeend", userImage);

    userInfoContainer.insertAdjacentElement("beforeend", postcode);
    userInfoContainer.insertAdjacentElement("beforeend", city);
    userInfoContainer.insertAdjacentElement("beforeend", name);
    userInfoContainer.insertAdjacentElement("beforeend", email);

    userBlock.insertAdjacentElement("beforeend", userInfoContainer);

    userContainer.insertAdjacentElement("beforeend", userBlock);
  } catch (err) {
    console.error(err);
  }
});
