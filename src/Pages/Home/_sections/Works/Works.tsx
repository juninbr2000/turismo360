
import { BsClipboardCheck } from 'react-icons/bs'
import { IoAirplaneOutline, IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'
import image from '../../../../assets/track.png'

import styles from './Works.module.css'

function Works() {
    return (
        <div className={styles.container}>
            <div className={styles.media_side}>
                <div className={styles.float}>
                    <img src={image} /> 
                    <div className={styles.items}>
                        <p>Choose</p>
                        <p>Plan</p>
                        <p>Itinerary</p>
                        <p>Experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.info_content}>
                <h2 className={styles.section_title}>How it works?</h2>
                <p className={styles.sub_text}>Plan your next adventure.</p>

                <div className={styles.card_container}>
                    <div className={styles.card_item}>
                        <span className={styles.icon}><IoLocationOutline /></span>
                        <h3 className={styles.card_title}>Choose</h3>
                        <p className={styles.card_text}>Choose where you want to start from and where you want to go.</p>

                    </div>
                    <div className={styles.card_item}>
                        <span className={styles.icon}><IoCalendarOutline /></span>
                        <h3 className={styles.card_title}>Plan</h3>
                        <p className={styles.card_text}>Let us know the best date for you to go and how many days you plan to stay.</p>

                    </div>
                    <div className={styles.card_item}>
                        <span className={styles.icon}><BsClipboardCheck /></span>
                        <h3 className={styles.card_title}>travel itinerary</h3>

                        <p className={styles.card_text}>We send you various options based on your preferences, and you choose the one that appeals to you most.</p>
                    </div>
                    <div className={styles.card_item}>
                        <span className={styles.icon}><IoAirplaneOutline /></span>
                        <h3 className={styles.card_title}>Experience</h3>

                        <p className={styles.card_text}>After that, just enjoy everything we've planned for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works