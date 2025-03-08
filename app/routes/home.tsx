// @ts-ignore
import type { Route } from './+types/home';
import getCurrentTime from '~/lib/get-current-time';
import {
  useIntervalIdStore,
  useIntervalTimeStore,
  useIsRunningStore,
} from '~/atom/core-atom';
import speechText from '~/lib/speech-text';
import { Link, useNavigate } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Chronoty' },
    { name: 'description', content: 'Grab your precious time.' },
  ];
}

export default function Home() {
  const { intervalId, setIntervalId } = useIntervalIdStore();
  // const [isRunning, setIsRunning] = useState(false);
  const { isRunning, setIsRunning } = useIsRunningStore();
  const { intervalTime } = useIntervalTimeStore(); // default 30
  let navigate = useNavigate();

  const onClickStartBtn = (intervalTime: any) => {
    if (!isRunning) {
      // 다중 입력 방지
      console.log('exec');
      setIsRunning(true);
      const id: any = setInterval(() => {
        console.log('running');

        const date = new Date();
        const seconds = date.getSeconds() + 1;
        // 30초에서 실행되므로 31초에서 실행되는 것과 같다. 즉, 29초에서 실행해야 정확한 결과를 도출가능하다 나는 딱 30초에서 실행하고 싶다.

        if (seconds % intervalTime == 0) {
          // % n 에 따라서 몇 초 마다 울릴 것인지 정함. 15초 마다. 30초 마다.
          console.log('duration running');
          speechText(getCurrentTime());
        }
      }, 1000);

      setIntervalId(id);
    }
  };

  const onClickStopBtn = () => {
    if (isRunning) {
      setIsRunning(false);
      console.log('stop');
      if (intervalId !== null) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      window.speechSynthesis.cancel(); // 현재 발화 중이여도 즉시 중단
    }
  };

  return (
    <div>
      <button onClick={() => onClickStartBtn(10)}>Start</button>
      <br />
      <Link to="/set">Set</Link>
    </div>
  );
}
