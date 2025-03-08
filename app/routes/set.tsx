import { redirect, useNavigate } from 'react-router';
import { useIntervalTimeStore, useIsRunningStore } from '~/atom/core-atom';

export default function Set() {
  const { intervalTime, setIntervalTime } = useIntervalTimeStore(); // default 30
  const { isRunning, setIsRunning } = useIsRunningStore();
  let navigate = useNavigate();

  const onSet = () => {
    console.log('clicked');

    setIntervalTime(5);
    setIsRunning(true); // 실행
    navigate('/running');
  };

  return (
    <div>
      <h1>Set the time interval</h1>
      <button onClick={onSet}>Set</button>
    </div>
  );
}
