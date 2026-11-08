import { Component } from "react";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edBgColor: "",
      edColor: "black",
      birthBgColor: "",
      birthColor: "black",
    };
  }

  setBirthColor() {
    this.setState({
      birthColor: this.state.birthColor === "black" ? "white" : "black",
    });
  }

  setBirthBgColor() {
    this.setState({
      birthBgColor: this.state.birthBgColor === "" ? "red" : "",
    });
  }

  setEdColor() {
    this.setState({
      edColor: this.state.edColor === "black" ? "red" : "black",
    });
  }

  setEdBgColor() {
    this.setState({ edBgColor: this.state.edBgColor === "" ? "pink" : "" });
  }

  render() {
    return (
      <div>
        <p
          onClick={() => {
            this.setBirthColor();
            this.setBirthBgColor();
          }}
          style={{
            color: this.state.birthColor,
            backgroundColor: this.state.birthBgColor,
          }}
        >
          Дата народження: 1 грудня 2006 року. Місце народження: м. Київ
        </p>
        <p
          onClick={() => {
            this.setEdColor();
            this.setEdBgColor();
          }}
          style={{
            color: this.state.edColor,
            backgroundColor: this.state.edBgColor,
          }}
        >
          Освіта: Ліцей №230 м.Київ, Національний технічний університет України
          «Київський політехнічний інститут імені Ігоря Сікорського»
        </p>
        <p>Мої хобі:</p>
        <ul>
          <li>Програмування</li>
          <li>Вивчення іноземних мов</li>
          <li>Музика</li>
          <li>Подорожі</li>
        </ul>
        <p>Мої улюблені фільми:</p>
        <ol>
          <li>«Інтерстеллар»</li>
          <li>«Людина-павук»</li>
          <li>«Сам удома»</li>
        </ol>
        <p>
          Моє улюблене місто, де я бувала, — Будапешт. Це столиця Угорщини, яка
          розташована на берегах мальовничої річки Дунай. Місто справило на мене
          дуже приємне враження завдяки своїй красивій архітектурі, затишним
          вуличкам та особливій атмосфері. У Будапешті можна побачити багато
          історичних будівель, старовинних мостів і цікавих пам'яток. Особливо
          мені сподобався угорський парламент, який дуже красиво виглядає з боку
          Дунаю. Також вражають Будайська фортеця, Рибальський бастіон та
          Ланцюговий міст. Мені сподобалося гуляти містом, милуватися краєвидами
          та фотографувати красиві місця. Увечері Будапешт стає особливо гарним,
          адже будівлі та мости підсвічуються. Це місто поєднує в собі історію,
          сучасність, культуру та красиву природу. Саме тому Будапешт залишив у
          мене багато приємних спогадів, і я хотіла б ще раз побувати там.
        </p>
      </div>
    );
  }
}

export default Content;
