import { Header } from '../../components';
import stylePages from './../StylePages.module.scss';
import { Pagination, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { pilots } from './pilots';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/lazy';
import s from './Crew.module.scss';

const Crew = () => {
  return (
    <div className={stylePages.page + ' ' + s.Crew}>
      <Header />
      <main className={stylePages.hero + ' ' + s.main}>
        <h2 className={stylePages.title}>
          <span>02</span>Meet your crew
        </h2>
        <Swiper
          modules={[Pagination, Lazy]}
          pagination={{ clickable: true }}
          spaceBetween={200}
          slidesPerView={1}
          mousewheel={true}
          lazy={true}
          className={s.swiper}>
          {pilots.map((pilot, index) => (
            <SwiperSlide key={'id' + index}>
              <div className={s.card}>
                <div className={s.text}>
                  <h2>{pilot.jobTitle}</h2>
                  <h1>{pilot.name}</h1>
                  <p>{pilot.about}</p>
                </div>
                <img data-src={pilot.imageUrl} className="swiper-lazy" />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <footer className={s.footer}></footer>
    </div>
  );
};

export default Crew;
