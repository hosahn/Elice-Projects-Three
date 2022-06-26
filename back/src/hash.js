import bcrypt from "bcrypt";

const encrypted = await bcrypt.hash("비밀번호", 10);

// 암호화된 내용 확인하기
console.log(encrypted);
const passwordOk = await bcrypt.compare("비밀번호", encrypted);
// 비밀번호가 일치하면 true, 일치하지 않으면 false를 반환한다.
console.log("비밀번호 일치 여부 : ", passwordOk);
