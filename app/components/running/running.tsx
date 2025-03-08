// @ts-ignore
export default function Running({ reset, stop }) {
  return (
    <>
      <h1>Running...</h1>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={stop}>Stop</button>
    </>
  );
}
