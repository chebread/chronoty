import { Link } from "wouter";
import style from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={style.main}>
      <div className={style.mainWrapper}>
        <div className={style.container}>
          <h1 className={style.title}>404 Not Found</h1>
          <p className={style.notice}>Page not available</p>
          <p className={style.description}>
            <Link to="/">Return to Chronoty</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
