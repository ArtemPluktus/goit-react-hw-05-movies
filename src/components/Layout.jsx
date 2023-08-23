import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Styles.module.css';

const Layout = () => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="movies" className={css.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>

      <main className={css.main}>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
