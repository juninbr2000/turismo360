import { useRef } from 'react'
import styles from './About.module.css'
import MountainView from '../../../../assets/Montain_View.jpg'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function About() {
    const sectionRef = useRef(null)
    const imgRef = useRef(null)

    useGSAP(() => {
        
        const mm = gsap.matchMedia()

        mm.add('(max-width: 1480px)', () => {
            if(!imgRef.current || !sectionRef.current) return

            gsap.from(imgRef.current, {
                borderRadius: 30,
                scale: 0.9,
                scrollTrigger: {
                    trigger: imgRef.current,
                    markers: false,
                    start: 'top 90%',
                    end: 'center 75%',
                    scrub: 0.8
                }
            })
        })

        return () => mm.revert()
    }, {scope: sectionRef})

  return (
    <section className={styles.container} ref={sectionRef}>
        <div className={styles.content}>
            <div>
                <h2 className={styles.section_title}>Travel isn't<br/>just about<br />the destination.</h2>
            </div>
            <div className={styles.texts}>
                <p>At UniTour, we believe the best memories are made with family. We are a travel agency specializing in creating unique, safe, and personalized experiences for all ages.</p>
                <p>We take care of every detail of your trip—from planning to selecting hotels and tours—offering support throughout the entire journey.</p>
                <p>With a team passionate about travel, UniTour offers comprehensive packages, domestic and international destinations, and tailor-made itineraries to turn every trip into an unforgettable story.</p>
            </div>
        </div>
        <img src={MountainView} alt='Mountain view' ref={imgRef} />
    </section>
  )
}

export default About