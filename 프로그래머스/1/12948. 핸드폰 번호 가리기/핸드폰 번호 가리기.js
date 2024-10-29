function solution(phone_number) {
  let number = "";
  let result = phone_number.length - 4;
  for (let i = 0; i < phone_number.length; i++) {
    number = i < result ? number += "*" : number += phone_number[i];
  }
  return number;
}