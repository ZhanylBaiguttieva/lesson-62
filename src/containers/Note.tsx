import React from 'react';

const Note = () => {
  return (
    <div>
      <h4 className="m-4 fs-3 fw-normal">Запись на прием к врачу</h4>
      <form onSubmit className="text-start">
        <div className="form-group fw-semibold mt-3">
          <label htmlFor="name">ФИО</label>
          <input
            type="text"
            name="name"
            className="form-control"
          />
        </div>
        <div className="form-group fw-semibold mt-3">
          <label htmlFor="type">Цель приема</label>
          <select
            name="type"
            className="form-select"
          >
            <option value=""></option>
            <option value="first-course">Первичная консультация</option>
            <option value="garnish">Повторная консультация</option>
            <option value="steak">Получить справку</option>
          </select>
        </div>
        <div className="form-group fw-semibold mt-3">
          <label htmlFor="description">Краткая история болезни</label>
          <textarea
            name="description"
            className="form-control"
          />
        </div>
        <div className="form-group fw-semibold mt-3">
          <label htmlFor="price">Время</label>
          <input
            type="datetime-local"
            name="price"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">Отправить</button>
      </form>
    </div>
  );
};

export default Note;