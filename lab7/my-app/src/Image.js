import { useState } from "react";

function Image() {
  const [imagesCounter, setCounter] = useState(1);
  const [imgWidth, setImgWidth] = useState(1280);

  return (
    <div>
      <div>
        {Array.from({ length: imagesCounter }).map((_, i) => (
          <a
            href="https://budapest.hu/en"
            target="_blank"
            rel="noreferrer"
            class="img"
          >
            <img
              src={process.env.PUBLIC_URL + "budapest.jpg"}
              alt="Будапешт"
              width={imgWidth}
            />
          </a>
        ))}
      </div>
      <div>
        <button onClick={() => setCounter(imagesCounter + 1)}>Додати</button>
        <button onClick={() => setImgWidth(imgWidth + imgWidth * 0.1)}>
          Збільшити
        </button>
        <button onClick={() => setImgWidth(imgWidth - imgWidth * 0.1)}>
          Зменшити
        </button>
        <button onClick={() => setCounter(imagesCounter - 1)}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
