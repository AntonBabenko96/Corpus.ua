import styles from './Feedbacks.module.scss';
import Container from '@/app/components/Container/Container';
import Slider from './Slider/Slider';

async function getFeedbacks() {
  const response = await fetch(`https://korpus.onrender.com/api/feedbacks`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

const feedbacks = [
  {
    name: 'Oleg',
    phone: '+380934444444',
    rating: 5,
    comment:
      'Спочатку, я хотів би відзначити якість матеріалів і виконання. Якщо меблі виготовлені з високоякісних матеріалів і мають добре пророблені деталі, це відразу ж привертає мою увагу. Я ціную довговічність і меблі, які здатні прослужити тривалий час без втрати якості.',
  },

  {
    name: 'John',
    phone: '+380937777777',
    rating: 5,
    comment:
      'Спочатку, я хотів би відзначити якість матеріалів і виконання. Якщо меблі виготовлені з високоякісних матеріалів і мають добре пророблені деталі, це відразу ж привертає мою увагу. Я ціную довговічність і меблі, які здатні прослужити тривалий час без втрати якості.',
  },
  {
    name: 'Helga',
    phone: '+380939999999',
    rating: 5,
    comment:
      'Спочатку, я хотів би відзначити якість матеріалів і виконання. Якщо меблі виготовлені з високоякісних матеріалів і мають добре пророблені деталі, це відразу ж привертає мою увагу. Я ціную довговічність і меблі, які здатні прослужити тривалий час без втрати якості.',
  },
];

export default async function Feedbacks() {
  const data = await getFeedbacks();
  return (
    <section className={styles.feedbacks}>
      <Container>
        <h3 className={styles.title}>Відгуки</h3>
        <Slider feedbacks={feedbacks} />
        <button className={styles.feedbacksBtn}>Залишити відгук</button>
      </Container>
    </section>
  );
}
