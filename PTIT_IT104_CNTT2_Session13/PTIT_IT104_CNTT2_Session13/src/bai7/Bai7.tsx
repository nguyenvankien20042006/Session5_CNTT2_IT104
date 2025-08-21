import { Component } from "react";

export default class Bai7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      language: "vietnamese",
    };
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === "light" ? "dark" : "light" });
  };

  toggleLanguage = () => {
    this.setState({
      language: this.state.language === "english" ? "vietnamese" : "english",
    });
  };

  render() {
    const { theme, language } = this.state;

    const texts = {
      light: {
        english: { theme: "Light", language: "English" },
        vietnamese: { theme: "Sáng", language: "Tiếng Việt" },
      },
      dark: {
        english: { theme: "Dark", language: "English" },
        vietnamese: { theme: "Tối", language: "Tiếng Việt" },
      },
    };

    const currentText = texts[theme][language];

    return (
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          padding: "20px",
          minHeight: "200px",
        }}
      >
        <h2>
          Nền: {currentText.theme} <br />
          Ngôn ngữ: {currentText.language}
        </h2>
        <button onClick={this.toggleTheme}>Đổi theme</button>
        <button onClick={this.toggleLanguage} style={{ marginLeft: "10px" }}>
          Đổi ngôn ngữ
        </button>
      </div>
    );
  }
}
