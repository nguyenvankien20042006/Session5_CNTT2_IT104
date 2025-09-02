import React, { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateName = (value: string) => {
    if (!value.trim()) {
      setNameError("Trường này là bắt buộc");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError("Trường này là bắt buộc");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Email không hợp lệ");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);

    if (!nameError && !emailError && name && email) {
      alert("Gửi thành công!");
    }
  };

  const isFormValid = !nameError && !emailError && name && email;

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">📝 Đăng ký thông tin</h2>

      <div className="form-group">
        <label>Họ tên</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateName(e.target.value);
          }}
          placeholder="Nhập họ tên..."
        />
        {nameError && <p className="error-text">⚠️ {nameError}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          placeholder="example@gmail.com"
        />
        {emailError && <p className="error-text">⚠️ {emailError}</p>}
      </div>

      <button type="submit" disabled={!isFormValid} className="submit-btn">
        Gửi
      </button>
    </form>
  );
}

export default RegisterForm;
