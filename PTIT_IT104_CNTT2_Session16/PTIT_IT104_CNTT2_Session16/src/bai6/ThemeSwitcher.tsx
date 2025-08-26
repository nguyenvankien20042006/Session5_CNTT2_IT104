import { Component } from "react";

interface ThemeSwitcherState {
  isDarkMode: boolean;
}

export default class ThemeSwitcher extends Component<object, ThemeSwitcherState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    const themeStyles = {
      backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      transition: "all 0.3s ease",
    };

    return (
      <div style={themeStyles}>
        <h1>
          {isDarkMode
            ? "🌙 Chế độ Tối đang bật"
            : "☀️ Chế độ Sáng đang bật"}
        </h1>
        <button
          onClick={this.toggleTheme}
          style={{
            padding: "10px 20px",
            border: isDarkMode ? "1px solid white" : "none",
            borderRadius: "8px",
            backgroundColor: isDarkMode ? "transparent" : "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Chuyển theme
        </button>
      </div>
    );
  }
}
