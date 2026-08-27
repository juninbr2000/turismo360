import { MdArrowForward, MdClose, MdStar } from 'react-icons/md'
import styles from './Header.module.css'
import Button from '../../../../Components/Button/Button'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        
        <span className='destaque'>Explore the world</span>
        <h1 className={styles.header_title}>Your next adventure starts here.</h1>

        <p className={styles.text_content}>Your only concern is choosing your next destination, and we take care of everything to turn it into the best trip of your life.</p>

        <div className={styles.review_data}>
          <div className={styles.star_container}>
            {Array(5).fill(1).map((_, index) => (
              <MdStar key={index} />
            ))}
          </div>
          <p className={styles.review_text}><span>+2k</span> Excellent reviews</p>
        </div>

        <div className={styles.links_container}>
          <Button text='Explore Destinations' variant='orange' icon={<MdArrowForward />} action={() => { }} />
          <a href="#" className={styles.action_secondary}>
            <span></span>
            <p>How it work?</p>
          </a>
        </div>

      </div>

      <div className={styles.floating_card}>
        <div className={styles.close}>
          <MdClose />
        </div>
        <div>
          <p className={styles.field}>Destination</p>
          <p className='text_orange destaque'>Your Dream</p>
        </div>
        <div>
          <p className={styles.field}>Departure</p>
          <p className='text_orange destaque'>Now</p>
        </div>
      </div>
    </header>
  )
}

export default Header