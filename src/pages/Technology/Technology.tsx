import { useState, useEffect } from 'react';
import { Header } from '../../components';
import stylePages from './../StylePages.module.scss';
import { techs } from './tech';
import s from './Technology.module.scss';

const Technology = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function resize() {
      if (window.screen.width <= 768) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    }
    resize();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  function clickPagination(index: number) {
    setActiveTech(index);
  }
  return (
    <div className={stylePages.page + ' ' + s.Technology}>
      <Header />
      <main className={stylePages.hero + ' ' + s.main}>
        <h2 className={stylePages.title + ' ' + s.title}>
          <span>03</span>SPACE LAUNCH 101
        </h2>
        <div className={s.cardContent}>
          <div className={s.pagination}>
            {techs.map((elem, index) => (
              <div key={'id' + index}>
                <button
                  className={[s.button, activeTech === index ? s.buttonActive : ''].join(' ')}
                  onClick={() => {
                    clickPagination(index);
                  }}>
                  <div>{index + 1}</div>
                </button>
              </div>
            ))}
          </div>
          <div className={s.text}>
            <h2>THE TERMINOLOGY…</h2>
            <h1>{techs[activeTech].name}</h1>
            <p>{techs[activeTech].about}</p>
          </div>
          <img
            src={mobileMode ? techs[activeTech].imageUrlLand : techs[activeTech].imageUrlPort}
            alt={techs[activeTech].name}
            loading="lazy"
          />
        </div>
      </main>
      <footer className={s.footer}></footer>
    </div>
  );
};

export default Technology;
