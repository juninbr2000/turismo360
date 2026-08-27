import React from 'react'
import styles from './MainDestinations.module.css'
import { MdLocationPin } from 'react-icons/md'

const destinations = [
    {city: 'Paris', country: 'France', imgURL: '/paris.jpg', text: '+15 trips in the last month'},
    {city: 'Iguaçu Falls', country: 'Brazil', imgURL: 'foz.jpg', text: '+12 trips in the last month'},
    {city: 'Athens', country: 'Greece', imgURL: '/athens.jpg', text: '+10 t rips in the last month'},
    {city: 'Dubai', country: 'UAE', imgURL: '/Dubai.jpg', text: '+4 trips in the last month'},
]

function MainDestinations() {
  return (
    <section className={styles.container}>
        <div className={styles.cards_container}>
            {destinations.map((local, index) => (
                <div key={index} style={{backgroundImage: `url(${local.imgURL})`}} className={styles.card}>
                    <div className={styles.location}>
                        <span className={styles.icon}><MdLocationPin /></span>
                        <div>
                            <h3>{local.city}</h3>
                            <p>{local.country}</p>
                        </div>
                    </div>
                    <p className={styles.destiny_info}>{local.text}</p>
                </div>
            ))}
        </div>

        <div className={styles.extra}>
            <h2>To every corner of the world</h2>
            <p className={styles.text}>No matter the destination, we work to make it special and unforgettable, planning everything according to your preferences.</p>
        </div>

    </section>
  )
}

export default MainDestinations