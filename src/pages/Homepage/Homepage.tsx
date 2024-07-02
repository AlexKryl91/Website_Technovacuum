import * as classes from './Homepage.module.scss';
import { useContext } from 'react';
import { LangContext } from '@/context/context';
import imgEjector from '@/assets/img/tv_steam_ejector.png';

import imgAfipka from '@/assets/img/photo_afipskiy_small.jpg';
import imgKrotovka from '@/assets/img/photo_krotovka_small.jpg';

import IconModern from '@/assets/icons/icon_notebook.svg';
import IconScience from '@/assets/icons/icon_science.svg';
import IconExperience from '@/assets/icons/icon_experience.svg';

import imgItem1 from '@/assets/img/homepage_list_item_1.jpg';
import imgItem2 from '@/assets/img/homepage_list_item_2.jpg';
import imgItem3 from '@/assets/img/homepage_list_item_3.jpg';

import ButtonLink from '@/components/UI/ButtonLink';
import HorizontalBar from '@/components/UI/HorizontalBar';
import { Link } from 'react-router-dom';
import ClientsSlider from '@/components/ClientsSlider/ClientsSlider';

import ruTextContent from './ru.json';
import enTextContent from './en.json';

const Homepage = () => {
  const { lang } = useContext(LangContext);

  const content = lang === 'en' ? enTextContent : ruTextContent;

  const { banner, advantage, offer, clients, join, feedback } = content;

  return (
    <main className={classes.main}>
      <section className={classes.banner}>
        <h1 className={classes['visually-hidden']}>{banner.header}</h1>
        <div className={classes['banner-decoration']}>
          <div className={classes.stripes}>
            <div className={classes['stripes-s']}></div>
            <div className={classes['stripes-m']}></div>
            <div className={classes['stripes-xl']}></div>
            <div className={classes['stripes-l']}></div>
          </div>
          <img src={imgEjector} alt={banner.img_alt} />
        </div>
        <div className={classes['banner-body']}>
          <div className={classes['banner-text']}>
            <h2 className={classes.tagline}>
              {banner.tagline.line_1}
              <br />
              {banner.tagline.line_2}
              <br />
              {banner.tagline.line_3}
            </h2>
            <div className={classes['h-line']}></div>
            <p className={classes.description}>{banner.profile}</p>
          </div>
        </div>
      </section>

      <section className={classes.advantage}>
        <h3 className={classes['section-header'] + ` ${classes['dark']}`}>
          {advantage.header}
        </h3>
        <div className={classes['advantage-body']}>
          <div className={classes.illustration}>
            <img src={imgAfipka} alt={advantage.img1_alt} />
            <div className={classes.mark}>
              <p>60+</p>
              <p>{advantage.mark1}</p>
            </div>
            <div className={classes.mark}>
              <p>30+</p>
              <p>{advantage.mark2}</p>
            </div>
            <img src={imgKrotovka} alt={advantage.img2_alt} />
          </div>
          <div className={classes.points}>
            <IconModern />
            <div className={classes['points-description']}>
              <p className={classes.caption}>{advantage.adv1}</p>
              <ButtonLink
                size="small"
                theme="light"
                value={advantage.link_btn}
                path="/products&services"
              />
            </div>
            <IconScience />
            <div className={classes['points-description']}>
              <p className={classes.caption}>{advantage.adv2}</p>
              <ButtonLink
                size="small"
                theme="light"
                value={advantage.link_btn}
                path="/about"
              />
            </div>
            <IconExperience />
            <div className={classes['points-description']}>
              <p className={classes.caption}>{advantage.adv3}</p>
              <ButtonLink
                size="small"
                theme="light"
                value={advantage.link_btn}
                path="/implementations"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.offer}>
        <HorizontalBar spacer={true} />
        <h3 className={classes['section-header']}>{offer.header}</h3>

        <ul className={classes['offer-points']}>
          <li className={classes['point-item']}>
            <div className={classes['item-wrapper']}>
              <img src={imgItem1} alt={offer.li1.img_alt} />
              <div className={classes['item-description']}>
                <p className={classes.caption}>{offer.li1.description}</p>
                <ButtonLink
                  size="small"
                  theme="light"
                  value={offer.link_btn}
                  path="/solutions"
                />
              </div>
            </div>
          </li>
          <li className={classes['point-item']}>
            <div className={classes['item-wrapper']}>
              <img src={imgItem2} alt={offer.li2.img_alt} />
              <div className={classes['item-description']}>
                <p className={classes.caption}>{offer.li2.description}</p>
                <ButtonLink
                  size="small"
                  theme="light"
                  value={offer.link_btn}
                  path="/products&services"
                />
              </div>
            </div>
          </li>
          <li className={classes['point-item']}>
            <div className={classes['item-wrapper']}>
              <img src={imgItem3} alt={offer.li3.img_alt} />
              <div className={classes['item-description']}>
                <p className={classes.caption}>{offer.li3.description}</p>
                <ButtonLink
                  size="small"
                  theme="light"
                  value={offer.link_btn}
                  path="/implementations"
                />
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className={classes.clients}>
        <h3 className={classes['section-header'] + ` ${classes['dark']}`}>
          {clients.header}
        </h3>
        <div className={classes['clients-body']}>
          <ClientsSlider lang={lang} />
          <ClientsSlider lang={lang} />
        </div>
      </section>

      <section className={classes.join}>
        <HorizontalBar spacer={true} />
        <h3 className={classes['section-header']}>{join.header}</h3>
        <div className={classes['text-bar']}>
          <p className={classes['invite-text']}>{join.text}</p>
          <div className={classes['button-wrapper']}>
            <ButtonLink
              size="large"
              theme="dark"
              value={join.link_btn_careers}
              path="/careers"
            />
            <ButtonLink
              size="large"
              theme="dark"
              value={join.link_btn_contacts}
              path="/contacts"
            />
          </div>
        </div>
      </section>

      <section className={classes.feedback}>
        <h3 className={classes['section-header'] + ` ${classes['dark']}`}>
          {feedback.header}
        </h3>

        <p className={classes['feedback-text']}>{feedback.feedback_text}</p>
        <div className={classes['form-field']}>
          <form className={classes['feedback-form']}>
            <input
              type="text"
              name="username"
              placeholder={feedback.input_name}
              required
            />
            <input
              type="text"
              name="organization"
              placeholder={feedback.input_company}
            />
            <input
              type="tel"
              name="telephone"
              placeholder={feedback.imput_tel}
            />
            <input
              type="email"
              name="email"
              placeholder={feedback.input_email}
              required
            />
            <textarea
              name="message"
              placeholder={feedback.input_msg}
            ></textarea>
            <ButtonLink
              size="large"
              theme="dark"
              value={feedback.submit_btn}
              path="/"
            />
          </form>
        </div>
        <div className={classes['call-in']}>
          <p className={classes['call-in-text']}>{feedback.callin_text}</p>
          <p className={classes['end-phrase']}>
            <Link to={'/contacts'}>{feedback.callin_link}</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
