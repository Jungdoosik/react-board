export function passwordValidator(pwd) {
  const p = pwd;
  let errMsg = "";

  if (p.length != 0 && p.length < 6) {
    errMsg = "비밀번호는 6자리 이상 입력해주세요.";
    return errMsg;
  }

  return errMsg;
}
