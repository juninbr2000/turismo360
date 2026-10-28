import { MdArrowForward, MdClose, MdStar } from 'react-icons/md'
import styles from './Header.module.css'
import Button from '../../../../Components/Button/Button'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText)

function Header() {
  const containerRef = useRef(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const starsTextRef = useRef(null)
  const destinationRef = useRef(null)
  const departureRef = useRef(null)
  const subtitleRef = useRef(null)
  
  useGSAP(() => {
    if(!containerRef.current || !starsRef.current || !starsTextRef.current || !destinationRef.current || !departureRef.current || !subtitleRef.current ) {
      return
    }

    const departuresChars = SplitText.create(departureRef.current, {type: 'word, chars'})
    const destinationChars = SplitText.create(destinationRef.current, {type: 'word, chars'})

    const tl = gsap.timeline()

    tl.from(subtitleRef.current, {
      y: 10,
      duration: 0.7,
      opacity: 0,
      ease: 'power3.out'
    })
    .from(starsRef.current.children, {
      y: 15,
      opacity: 0,
      stagger: 0.08,
      duration: .6,
      ease: 'power4.out'
    }, '-=0.3')
    .from(starsTextRef.current, {
      y: 15,
      opacity: 0,
      duration: .4,
      ease: 'power3.out'
    }, '-=0.2')
    .from(destinationChars.chars, {
      y: 15,
      opacity: 0,
      duration: .6,
      stagger: 0.08,
      ease: 'power3.out'
    })
    .from(departuresChars.chars, {
      y: 15,
      opacity: 0,
      duration: .6,
      stagger: 0.08,
      ease: 'power3.out'
    })

    return () => {
      destinationChars.revert()
      departuresChars.revert()
    }

  }, {scope: containerRef})
  
  return (
    <header className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        
        <span className='destaque' ref={subtitleRef}>Explore the world</span>
        <h1 className={styles.header_title}>Your next adventure starts here.</h1>

        <p className={styles.text_content}>Your only concern is choosing your next destination, and we take care of everything to turn it into the best trip of your life.</p>

        <div className={styles.review_data}>
          <div className={styles.star_container} ref={starsRef}>
            {Array(5).fill(1).map((_, index) => (
              <MdStar key={index} />
            ))}
          </div>
          <p className={styles.review_text} ref={starsTextRef}><span>+2k</span> Excellent reviews</p>
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
          <p className='text_orange destaque' ref={destinationRef}>Your Dream</p>
        </div>
        <div>
          <p className={styles.field}>Departure</p>
          <p className='text_orange destaque' ref={departureRef}>Now</p>
        </div>
      </div>
    </header>
  )
}

export default Header