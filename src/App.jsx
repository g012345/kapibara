import React, { useState } from 'react';
import style from './index.module.css';
import LogoName from './logo.jsx';
import LogoPhon from './logophon.jsx';
import LogoPointer from './logopointer.jsx';
import LogoMark from './logomark.jsx';
import LogoWhite from './logowhite.jsx';

//https://clck.ru/39wiBz
const App =()=> {
  const initialFormData = {
    lastName: '',
    firstName: '',
    middleName: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    setFormData(initialFormData);
  };
  return (
    <body>
      <section className={style.center}>
        <header>
          <div className={style.flex}>
            <div className={style.flex}>
              <div className={style.logoname}>
                <LogoName></LogoName>
              </div>
              <div className={style.diagnostics}>
                Современные методики диагностики
              </div>
            </div>
            <div>
              <ul className={style.flex}>
                <li className={style.navbox}><span className={style.navspan}>Лаборатория</span></li>
                <li className={style.navbox}><span className={style.navspan}>Галерея</span></li>
                <li className={style.navbox}><span className={style.navspan}>Оставить заявку</span></li>
              </ul>
            </div>
            <div className={`${style.phonbox} ${style.flex}`}>
              <LogoPhon></LogoPhon>
              <div>
                <div className={style.tell}>+7 123 456 7890</div>
                <div className={style.telltext}>Звонок бесплатный</div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className={style.lab}>
            <div className={style.labbox}>
              <div className={style.infolab}>
                <div className={style.boxlabone}>
                  <span className={style.textlabone}>Точные результаты</span>
                </div>
                <div className={style.boxlabtwo}>
                  <span className={style.textlabtwo}>Точно в срок</span>
                </div>
              </div>
              <img className={style.smartkapi} src={require("./img/smartkapi.png")} alt="smartkapibara" />
            </div>

          </section>
          <section className={style.welcomesection}>
            <p className={style.welcometext}>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</p>
          </section>
          <section className={`${style.gradient} ${style.flex}`}>
            <div className={style.labinfo}>
              <h2 className={style.labheading}>Лаборатория</h2>
              <div>
                <p className={style.labtextone}>Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых 
                  опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, 
                  микробиологических исследованиях, генетической диагностике и многом другом.</p>
                <p className={style.labtexttwo}>Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.</p>
              </div>
              <div className={style.labtp}><span className={`${style.labtpbox} ${style.flex}`}><span className={style.labtptext}>Оставить заявку</span><span  className={style.logopointer}><LogoPointer></LogoPointer></span></span></div>
            </div>
            <img className={style.himkapi} src={require("./img/himkapi.png")} alt="" />
          </section>
          <section className={style.gal}>
            <span className={style.galtext}>Галерея</span>
            <section className={style.galphot}>
              <div className={style.flex}>
                <div className={style.flex}>
                  <img className={style.gal1} src={require('./img/gal/gal1.png')} alt="" />
                </div>
                <div>
                  <img className={style.gal2} src={require('./img/gal/gal2.png')} alt="" />
                  <div>
                    <img className={style.gal3} src={require('./img/gal/gal3.png')} alt="" />
                    <img className={style.gal4} src={require('./img/gal/gal4.png')} alt="" />   
                  </div>
                </div>
              </div>
              <div>
                <img className={style.gal5} src={require('./img/gal/gal5.png')} alt="" />
                <img className={style.gal6} src={require('./img/gal/gal6.png')} alt="" />
                <img className={style.gal7} src={require('./img/gal/gal7.png')} alt="" />
              </div>
            </section>
          </section>
          <section className={style.form}>
            <div className={style.formcont}>
              <span className={style.formhead}>Заявка на диагностику</span>
              <p className={style.forminfo}>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>
              <form className={style.formbox} onSubmit={handleSubmit}>
                <div className={style.flex}>
                  <label>
                    <input className={style.forminput} type="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Фамилия"/>
                  </label>
                  <label>
                    <input className={style.forminput} type="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Имя"/>
                  </label>
                  <label>
                    <input className={style.forminput} type="middleName" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Отчество"/>
                  </label>
                </div>
                <div>
                  <button className={`${style.formbutton} ${style.flex}`} type="submit">
                    <span className={style.formbuttontext}>Отправить</span>
                    <span className={style.logomark}><LogoMark></LogoMark></span>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
        <footer className={style.footer}>
          <div className={`${style.footercont} ${style.flex}`}>
            <div><a href="https://clck.ru/39xKFH" className={style.footertext}>Все права защищены Российской Ассоциацией Капибар</a></div>
            <div className={style.logowhite}><LogoWhite></LogoWhite></div>
          </div>

        </footer>
      </section>
    </body>
  );
}

export default App;
