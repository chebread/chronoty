import style from './home.module.scss';

export default function Home({ start, set }: { start: any; set: any }) {
  return (
    <main
      className={style.main}
      // onClick={() => getSpeech('')} // 이렇게 해도 ios safari에서 잘 작동하는 것을 확인함. 그러나 비효율 적임.
    >
      <div className={style.mainWrapper}>
        <header className={style.header}>
          <h1 className={style.title}>
            <span title="Chronoty">Chronoty</span>
          </h1>
          <p className={style.description}>
            {/* informs you of the current time at a set interval */}
            <span title="일정 시간 간격으로 현재 시간을 알려드리는 서비스입니다.">
              일정 시간 간격으로 현재 시간을 알려드리는 서비스입니다.
            </span>
          </p>
          <p className={style.description}>
            {/* Chronoty only works when the screen is on */}
            <span title="오직 화면이 켜져 있을 때만 작동합니다.">
              해당 서비스는 화면이 켜져 있을 때만 작동합니다.
            </span>
          </p>
        </header>
        <footer className={style.footer}>
          <button className={style.startButton} onClick={start}>
            {/* Start */}
            Start
          </button>
          <button className={style.setButton} onClick={set}>
            {/* Set */}
            Set
          </button>
        </footer>
      </div>
    </main>
  );
}
