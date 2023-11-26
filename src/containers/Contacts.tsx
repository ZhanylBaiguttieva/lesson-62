import React from 'react';

const Contacts:React.FC = () => {
  return (
    <div>
      <h1 className="m-4 fs-3 fw-normal">Наши филиалы</h1>
      <div className="m-5">Режим работы
        пн-пт 7.30 - 19.00 сб 9.00 - 15.00</div>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            ул. Исанова, 15
            т. 41-19-66
            т. 43-82-56 по вопросам Covid-19 (122)
          </div>
          <div className="col">
            ул. Логвиненко, 89
            т. 41-19-66
            т. 43-82-56 по вопросам Covid-19 (122)
          </div>
          <div className="col">
            10 мкр 33
            т. 43-67-96
            т. 43-84-92 по вопросам Covid-19 (122)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;