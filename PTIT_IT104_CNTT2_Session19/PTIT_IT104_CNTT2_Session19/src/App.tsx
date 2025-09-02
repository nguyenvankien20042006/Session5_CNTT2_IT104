import ShoppingCart from "./bai1/ShoppingCart";
import Content from "./bai2/Content";
import Header from "./bai2/Header";
import ThemeProvider from "./bai2/ThemeProvider";
import RenderCounter from "./bai3/RenderCounter";
import RegisterForm from "./bai4/RegisterForm";
import RandomQuote from "./bai5/RandomQuote";
import KeyTracker from "./bai6/KeyTracker";
import ScrollToSection from "./bai7/ScrollToSection";
import LoginForm from "./bai8/LoginForm";


export default function App() {
  return (
    <div>
      <ShoppingCart />
      <hr />
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
      <hr />
      <RenderCounter />
      <hr />
      <RegisterForm />
      <hr />
      <RandomQuote />
      <hr />
      <KeyTracker />
      <hr />
      <ScrollToSection />
      <hr />
      <LoginForm />
    </div>
  )
}
