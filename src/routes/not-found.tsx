import { Link } from 'wouter';
import style from './not-found.module.scss';

export default function NotFound() {
  return (
    <main className={style.main}>
      <div className={style.mainWrapper}>
        <div className={style.container}>
          <h1 className={style.title}>
            <span title="404 Not Found">404 Not Found</span>
          </h1>
          <p className={style.description}>
            <span title="Page not available">Page not available</span>
          </p>
          <p className={style.description}>
            <Link to="/">
              <span title="Return to Chronoty">Return to home</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
