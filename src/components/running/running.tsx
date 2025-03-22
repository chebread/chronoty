import { useEffect, useState } from 'react';
import { useIntervalTimeStore } from '../../atom/app-atom';
import getCurrentTime from '../../lib/get-current-time';
import style from './running.module.scss';
import clsx from 'clsx';

export default function Running({ reset, stop }: { reset: any; stop: any }) {
  const { intervalTime } = useIntervalTimeStore();
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [execed, setExeced] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(getCurrentTime());

      const date = new Date();
      const seconds = date.getSeconds() + 1;

      if (seconds % intervalTime == 0) {
        setExeced(true);
        setTimeout(() => {
          // 배경색이 변한후 1초후에 배경색을 원래의 색으로 되돌림
          setExeced(false);
        }, 1000);
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main
      className={clsx([
        style.main,
        {
          [style.execWrapper]: execed,
        },
      ])}
    >
      <div className={style.mainWrapper}>
        <header className={style.header}>
          <h1 className={style.title}>
            {/* Running */}
            <span title="Running">Running</span>
          </h1>
        </header>
        <div className={style.info}>
          <div className={style.infoItem}>
            <p className={style.infoTitle}>
              {/* Current Time */}
              <span title="현재 시간">현재 시간</span>
            </p>
            <p className={style.infoTime} id="time_is_link">
              {currentTime}
            </p>
          </div>
          <div className={style.infoItem}>
            <p className={style.infoTitle}>
              {/* Time Interval */}
              <span title="시간 간격">시간 간격</span>
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
