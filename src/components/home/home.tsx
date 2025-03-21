import style from './home.module.scss';

export default function Home({
  start,
  set,
}: {
  start: () => void;
  set: () => void;
}) {
  return (
    <main className={style.main}>
      <div className={style.mainWrapper}>
        <header className={style.header}>
          <h1 className={style.title}>Chronoty</h1>
          <p className={style.description}>
            informs you of the current time at a set interval
          </p>
          <p className={style.notice}>
            Chronoty only works when the screen is on
          </p>
        </header>
        <footer className={style.footer}>
          <button className={style.startButton} onClick={start}>
            Start
          </button>
          <button className={style.setButton} onClick={set}>
            Set
          </button>
        </footer>
      </div>
    </main>
  );
}
