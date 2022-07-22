import { Link } from 'react-router-dom';
import { Header } from '../../components';
import s from './Home.module.scss';
import stylePages from './../StylePages.module.scss';

const Home = () => {
  return (
    <div className={stylePages.page + ' ' + s.Home}>
      <Header />
      <main className={s.hero}>
        <div className={s.text}>
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className={s.explore}>
          <Link to="/destination" className={s.button}>
            <span>EXPLORE</span>
          </Link>
        </div>
      </main>
      <footer className={s.footer}></footer>
    </div>
  );
};

export default Home;
