

const Home = () => {
  return (
    <div>
      <h1 className="fs-2 m-2 fw-normal">О нас</h1>
      <div className="information">
        Уважаемые пациенты
        Мы приветствуем Вас на официальном сайте Бишкекской городской поликлиники №11
        Уже более 20 лет наше учреждение оказывает медицинскую помощь учащейся молодежи г. Бишкек
        Для нас важно, чтобы каждый человек остался доволен полноценным обследованием и лечением в поликлинике.
        На нашем сайте вы можете получить актуальную информацию о режиме работы поликлиники и женской консультации, уточнить к какому врачебному участку относится ваш адрес проживания или учебное учреждение, учебная группа, а также вы можете задать интересующие вас вопросы. Мы будем рады, если наш сайт окажется интересным и полезным для Вас.
        Каждый день мы стараемся повышать свой профессионализм, потому что здоровье и жизнь пациента и особенно студентов и учащихся г. Бишкек - наша работа!
        Здоровый студент - эффективный специалист!
        Мы всегда открыты для общения.
      </div>
      <h2 className="m-3 fs-2 fw-normal ">Наши врачи</h2>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Маркилова Айжан</h5>
              <p className="card-text">Хирург. 20 лет опыта. Доктор медицинских наук</p>
              <a href="#" className="btn btn-primary">Посмотреть профиль</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Джумабекова Бегимай</h5>
              <p className="card-text">Терапевт. 10 лет опыта. Кандидат медицинских наук </p>
              <a href="#" className="btn btn-primary">Посмотреть профиль</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Орлова Ольга</h5>
              <p className="card-text">Эндокринолог. 10 лет опыта. Кандидат медицинских наук</p>
              <a href="#" className="btn btn-primary">Посмотреть профиль</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Югай Лариса</h5>
              <p className="card-text">Офтальмолог. 13 лет опыта. Кандидат медиицнских наук</p>
              <a href="#" className="btn btn-primary">Посмотреть профиль</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;