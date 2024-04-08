import React, { useState } from 'react';

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
    <div>
      <section>
        <header>
          <div>
            <div>
              <div>
                <h1>Kapibara<p>Lab</p></h1>
              </div>
              <div>
                Современные методики диагностики
              </div>
            </div>
            <div>
              <div><p>Лаборатория</p></div>
              <div>Галерея</div>
              <div>Оставить заявку</div>
            </div>
            <div>
              <div>{/*лого телефона*/}</div>
              <div>
                <div>+7 123 456 7890</div>
                <div>Звонок бесплатный</div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div>
            <div>
              <div>
                <p>Точные результаты</p>
              </div>
              <div>
                <p>Точно в срок</p>
              </div>
            </div>
            <div>{/*кабибара на умничах*/}</div>
          </div>
          <div>
            <p>Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</p>
          </div>
          <div>
            <div>
              <h2>Лаборатория</h2>
              <div>
                <p>Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых 
                  опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, 
                  микробиологических исследованиях, генетической диагностике и многом другом.</p>
                <p>Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.</p>
              </div>
              <div><span>Оставить заявку</span><span></span></div>
            </div>
            <div>{/*капибара Уолтер*/}</div>
          </div>
          <div>
            <span>Галерея</span>
            <div>
              {/*семь иновэйшен хим лаб*/}
            </div>
          </div>
          <div>
            <span>Заявка на диагностику</span>
            <p>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>
            <form onSubmit={handleSubmit}>
              <label>
                Фамилия:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </label>
              <br />
              <label>
                Имя:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </label>
              <br />
              <label>
                Отчество:
                <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
              </label>
              <br />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </main>
        <footer>
          <div>Все права защищены Российской Ассоциацией Капибар</div>
          <div>{/*лого KapibarLab с колобком в первой b*/}</div>
        </footer>
      </section>
    </div>
  );
}

export default App;
