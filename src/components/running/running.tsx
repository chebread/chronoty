import { useEffect, useState } from 'react';
import { useIntervalTimeStore } from '../../atom/app-atom';
import getCurrentTime from '../../lib/get-current-time';
import style from './running.module.scss';

export default function Running({ reset, stop }: { reset: any; stop: any }) {
  const { intervalTime, setIntervalTime } = useIntervalTimeStore();
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className={style.main}>
      <div className={style.mainWrapper}>
        <header className={style.header}>
          <h1 className={style.title}>
            {/* Running */}
            Running
          </h1>
        </header>
        <div className={style.info}>
          <div className={style.infoItem}>
            <p className={style.infoTitle}>
              {/* Current Time */}
              현재 시간
            </p>
            <p className={style.infoTime} id="time_is_link">
              {currentTime}
            </p>
          </div>
          <div className={style.infoItem}>
            <p className={style.infoTitle}>
              {/* Time Interval */}
              시간 간격
            </p>
            <p className={style.infoTime}>
              {intervalTime > 59
                ? `${Math.floor(intervalTime / 60)}m ${intervalTime % 60}s`
                : `${intervalTime}s`}
            </p>
          </div>
        </div>
        <footer className={style.footer}>
          <button className={style.stopButton} onClick={stop}>
            Stop
          </button>
          <button className={style.resetButton} onClick={reset}>
            Reset
          </button>
        </footer>
      </div>
    </main>
  );
}
