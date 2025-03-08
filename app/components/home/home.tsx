//@ts-ignore
export default function Home({ start, set }) {
  return (
    <div>
      <h1>Chronoty</h1>
      <p>informs you of the current time at a set interval</p>
      <p>Chronoty only works when the screen is on</p>
      <button onClick={start}>Start</button>
      <br />
      <button onClick={set}>Set</button>
    </div>
  );
}

// 스크린 꺼지면 바로 stop하는 기능 추가
