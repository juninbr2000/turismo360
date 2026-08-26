import React from 'react'
import styles from './About.module.css'
import MountainView from '../../../../assets/Montain_View.jpg'

function About() {
  return (
    <section className={styles.container}>
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
        <img src={MountainView} alt='Mountain view' />
    </section>
  )
}

export default About