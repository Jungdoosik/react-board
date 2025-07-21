import React, { useState } from "react";
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
  form: { display: "flex", flexDirection: "column" },
  input: { padding: 10, marginBottom: 15, fontSize: 16 },
  button: {
    padding: 10,
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  error: { color: "red", marginBottom: 10 },
};

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력하세요.");
      return;
    }

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 실패");
        }
        return response.json();
      })
      .then((data) => {
        console.log("서버 응답:", data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        // 성공하면 메인 페이지로 이동 등
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div style={styles.container}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
