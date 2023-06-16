import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={`container ${s.container}`}>
        <div className={s.textWrapper}>
          <h1>Створіть простір своєї мрії з нами! </h1>
          <p>
            Замовте прорахунок меблів вже сьогодні і втілить свої ідеї в
            реальність.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
