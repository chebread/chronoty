// 현재 시간을 문자열로 반환하는 함수
// 참고: 29초에서 실행해야 정확한 결과를 도출가능하다. 그래서 임의로 초는 +1 로 돌렸다. 감안해야 한다.
const getCurrentTime = () => {
  const date = new Date();
  const hours_12 = date.getHours() % 12;
  const hours = hours_12 ? hours_12 : 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds() + 1;
  if (seconds == 60) {
    if (minutes + 1 == 60) {
      return `${hours + 1}시 0분 0초`;
    } else {
      return `${hours}시 ${minutes + 1}분 0초`;
    }
  } else {
    return `${hours}시 ${minutes}분 ${seconds}초`;
  }
  // 9시 16분 60초 문제가 발생함 => 해결됨
  // 9시 59분 60초 에서는 또 9시 60분 0초라고 나올 것임 => 해결됨
};

export default getCurrentTime;
