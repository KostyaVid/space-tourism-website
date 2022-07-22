import { useState } from 'react';

import { Header } from '../../components';
import { planets } from './planet';
import s from './Destination.module.scss';
import stylePages from './../StylePages.module.scss';

const Destination = () => {
  const [planetVisible, setPlanetVisible] = useState(0);

  function clickButton(indexPlanet: number) {
    setPlanetVisible(indexPlanet);
  }

  return (
    <div className={stylePages.page + ' ' + s.destination}>
      <Header />
      <main className={stylePages.hero}>
        <h2 className={stylePages.title}>
          <span>01</span>Pick your destination
        </h2>
        <div className={s.card}>
          <img src={planets[planetVisible].urlImage} alt={planets[planetVisible].name} />

          <div className={s.menuPlanets}>
            <ul>
              {planets.map((planet, index) => (
                <li key={'id' + index}>
                  <button
                    className={index === planetVisible ? s.buttonActive : ''}
                    onClick={() => {
                      clickButton(index);
                    }}>
                    {planet.name}
                  </button>
                </li>
              ))}
            </ul>
            <h1>{planets[planetVisible].name}</h1>
            <p>{planets[planetVisible].about}</p>
            <div className={s.line}></div>
            <div className={s.footerCard}>
              <div className={s.footerCardBlock}>
                <div className={s.blockTitle}>AVG. DISTANCE</div>
                <div className={s.blockNumber}>{planets[planetVisible].distance}</div>
              </div>
              <div className={s.footerCardBlock}>
                <div className={s.blockTitle}>Est. travel time</div>
                <div className={s.blockNumber}>{planets[planetVisible].travelTime}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={s.footer}></footer>
    </div>
  );
};

export default Destination;
