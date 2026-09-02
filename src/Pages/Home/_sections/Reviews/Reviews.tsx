import React from 'react'
import styles from './Reviews.module.css'
import { MdStar } from 'react-icons/md'

const userReviews = [
    {name: 'Fernanda souza', country: 'Brazil', comment: 'Simply Perfect! The trip was entirely planned by UniTour and we were able to enjoy every moment'},
    {name: 'Noah Boucher', country: 'Canada', comment: "It was the best family experience we've ever had! Amazing itinerary with cultural tours and relaxing moments."},
    {name: 'Camille Rivière', country: 'France', comment: 'We were impressed with the organization and care from the team'}
]

function Reviews() {
  return (
    <div className={styles.container}>
        <h2 className={styles.section_title}>Our customers' reviews</h2>
        <div className={styles.card_container}>
            {userReviews && userReviews.map((rev, index) => (
                <div key={index} className={styles.card}>
                    <p className={styles.review}>{rev.comment}</p>
                    <div>
                        <div className={styles.stars}>
                            {Array(5).fill(1).map((_, index) => (
                                <MdStar key={index} />
                            ))}
                        </div>
                        <h3 className={styles.name}>{rev.name}</h3>
                        <p className={styles.country}>{rev.country}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews