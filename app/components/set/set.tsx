import { useIntervalTimeStore } from '~/atom/app-atom';

//@ts-ignore
export default function Set({ set }) {
  const { intervalTime, setIntervalTime } = useIntervalTimeStore(); // default 30

  return (
    <div>
      <h1>Set the time interval</h1>
      <button onClick={() => set(intervalTime)}>Set</button>
      {/* interval 새로 설정한 값 */}
    </div>
  );
}
