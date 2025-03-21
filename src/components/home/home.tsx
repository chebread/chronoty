import style from './home.module.scss';

export default function Home({ start, set }: { start: any; set: any }) {
  return (
    <main
      className={style.main}
      // onClick={() => getSpeech('')} // 이렇게 해도 ios safari에서 잘 돌아감
    >
      <div className={style.mainWrapper}>
        <header className={style.header}>
          <h1 className={style.title}>Chronoty</h1>
          <p className={style.description}>
            {/* informs you of the current time at a set interval */}
            일정 시간 간격으로 현재 시간을 알려드리는 서비스입니다.
          </p>
          <p className={style.description}>
            {/* Chronoty only works when the screen is on */}
            오직 화면이 켜져 있을 때만 작동합니다.
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
