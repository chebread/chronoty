// @ts-ignore
import { useState } from "react";
import type { Route } from "./+types/home";
import getCurrentTime from "~/lib/getCurrentTime";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chronoty" },
    { name: "description", content: "Grab your precious time." },
  ];
}

export default function Home() {
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const ttsTime = () => {
    const utter = new SpeechSynthesisUtterance(getCurrentTime());
    utter.lang = "ko-KR";
    utter.pitch = 1;
    utter.rate = 1;
    utter.volume = 1;
    window.speechSynthesis.speak(utter);
  };

  const onClickStartBtn = () => {
    if (!isRunning) {
      // 다중 입력 방지
      console.log("exec");
      setIsRunning(true);
      const id: any = setInterval(() => {
        console.log("running");
        console.log(isRunning);

        const date = new Date();
        const seconds = date.getSeconds() + 1;
        // 30초에서 실행되므로 31초에서 실행되는 것과 같다. 즉, 29초에서 실행해야 정확한 결과를 도출가능하다 나는 딱 30초에서 실행하고 싶다.

        if (seconds % 30 == 0) {
          console.log("duration running");
          ttsTime();
          ttsTime();
        }
      }, 1000);

      setIntervalId(id);
    }
  };

  const onClickStopBtn = () => {
    if (isRunning) {
      setIsRunning(false);
      console.log("stop");
      if (intervalId !== null) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      window.speechSynthesis.cancel(); // 현재 발화 중이여도 즉시 중단
    }
  };

  return (
    <div>
      <button onClick={onClickStartBtn}>TTS 시작</button>
      <br />
      <button onClick={onClickStopBtn}>TTS 종료</button>
    </div>
  );
}
