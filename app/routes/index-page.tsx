// @ts-ignore
import getCurrentTime from '~/lib/get-current-time';
import {
  useIntervalIdStore,
  useIntervalTimeStore,
  useIsRunningStore,
} from '~/atom/app-atom';
import speechText from '~/lib/speech-text';
import { useState } from 'react';
import Home from '~/components/home/home';
import Set from '~/components/set/set';
import Running from '~/components/running/running';
// 시간을 영어/한국어에 따라 다르게 말해야함 (locale 설정하기)
// 스크린 꺼지면 바로 stop하는 기능 추가
// querystring으로 처리하는 방법은 없는가? /running?interval-time=30

export default function IndexPage() {
  const { intervalId, setIntervalId } = useIntervalIdStore();
  // const [isRunning, setIsRunning] = useState(false);
  const { isRunning, setIsRunning } = useIsRunningStore(); // 영구 저장
  const { intervalTime, setIntervalTime } = useIntervalTimeStore(); // 영구 저장
  const [isSetMode, setIsSetMode] = useState(false); // 영구 저장

  const start = (intervalTime: any) => {
    if (!isRunning) {
      // 다중 입력 방지
      console.log('exec');
      setIsRunning(true);
      const id: any = setInterval(() => {
        console.log('running');

        const isClosed = window.closed;
        console.log(isClosed);

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

  const stop = () => {
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
    <>
      {isRunning ? (
        <Running
          reset={() => {
            setIsSetMode(true);
            stop();
          }}
          stop={() => {
            stop();
            setIsSetMode(false);
          }}
        />
      ) : isSetMode ? (
        <Set
          set={(setTime: number) => {
            start(setTime);
            setIsSetMode(false);
          }}
        />
      ) : (
        <Home
          start={() => {
            start(intervalTime);
            setIsSetMode(false);
          }}
          set={() => {
            setIsSetMode(true);
          }}
        />
      )}
    </>
  );
}
