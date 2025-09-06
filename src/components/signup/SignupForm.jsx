import React, { useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    maxWidth: 400,
    margin: "100px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 4,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  form: { display: "flex", flexDirection: "column", width: 400 },
  input: { padding: 10, marginBottom: 15, fontSize: 16 },
  button: {
    padding: 10,
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  button2: {
    width: "100%",
    padding: 10,
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    marginTop: 5,
  },
  error: { color: "red", marginBottom: 10 },
};

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const inputUsername = useRef(null);
  const inputpassword = useRef(null);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username) {
      setError("아이디를 입력하세요.");
      inputUsername.current.focus();
      return;
    }

    if (!password) {
      setError("비밀번호를 입력하세요.");
      inputpassword.current.focus();
      return;
    }

    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("회원가입 실패");
        }
        return response.json();
      })
      .then((data) => {
        console.log("서버 응답:", data);
        alert("회원가입이 완료되었습니다!");
        navigate("/login"); // 가입 후 로그인 페이지로 이동
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>회원가입</h1>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          ref={inputUsername}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          ref={inputpassword}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="이메일"
          value={password}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="phone"
          placeholder="휴대폰번호"
          value={password}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>
          가입
        </button>
      </form>
    </div>
  );
}

export default Signup;
