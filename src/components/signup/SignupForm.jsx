import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // 여기서 회원가입 처리 로직 (API 호출 등)
    alert("회원가입이 완료되었습니다!");
    navigate("/login"); // 가입 후 로그인 페이지로 이동
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>회원가입 페이지</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>아이디:</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
