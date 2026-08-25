import React, { useRef } from 'react'
import Button from '../../Components/Button/Button'
import { MdClose, MdDownload, MdMenu } from 'react-icons/md'
import styles from './Navbar.module.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const navItems = [
    {name: 'home', page: '/'},
    {name: 'destinations', page: '/'},
    {name: 'services', page: '/'},
    {name: 'reviews', page: '/'},
    {name: 'contact us', page: '/'}
]

function Navbar() {
    const [active, setActive] = React.useState(false)

    const menuRef = useRef<HTMLUListElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        if (!menuRef.current) return

        const items = gsap.utils.toArray<HTMLElement>(
            menuRef.current.children
        )

        tl.current = gsap.timeline({ paused: true })

        tl.current
        .from(menuRef.current, {
            opacity: 0,
            x: -100,
            duration: 0.4,
            ease: "power2.out",
        })
        .from(
            items,
            {
                opacity: 0,
                x: -30,
                duration: 0.4,
                stagger: 0.06,
                ease: "power2.out",
            },
            "-=0.2"
        )
    }, { scope: menuRef })

    const toggleMenu = () => {
        if (!tl.current) return

        if (!active) {
            setActive(true)
            tl.current.play()
        } else {
            tl.current.reverse()

            tl.current.eventCallback("onReverseComplete", () => {
                setActive(false)
            })
        }
    }


  return (
    <nav className={styles.navbar}>
        <a className={styles.logo} href='/'><span>Uni</span>Tour</a>

        <button className={styles.menu_btn} onClick={toggleMenu}>{active ? <MdClose /> : <MdMenu/>}</button>

        <ul className={`${styles.items_menu} ${active ? styles.open : ''}`} ref={menuRef}>
            {navItems.map((item) => (
                <li key={item.name} className={styles.list_item}><a href={item.page}>{item.name}</a></li>
            ))}
        </ul>
        
        <div className={styles.app}>
            <Button text='Get our app' icon={<MdDownload />} variant='dark' action={() => {}} />

        </div>
    </nav>
  )
}

export default Navbar