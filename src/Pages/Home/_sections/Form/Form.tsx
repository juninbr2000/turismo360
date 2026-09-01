import { useState } from 'react'
import InputComponent from '../../../../Components/InputComponent/InputComponent'
import styles from './Form.module.css'
import Button from '../../../../Components/Button/Button'
import { FaArrowRight } from 'react-icons/fa'

function Form() {
    const [data, setData] = useState({
        from: '',
        to: '',
        name: '',
        dateStart: '',
        dateEnd: '',
        email: ''
    })
  return (
    <div className={styles.container}>
        <div className={styles.form_container}>
            <h2>Where are you going next?</h2>

            <div className={styles.inputs}>
                <div className={styles.shared}>
                    <InputComponent label='where from' placeholder='Chicago, IL - USA' type='text' value={data.from} onchange={(event) => setData(prev => ({...prev, from: event.target.value}))} />
                    <InputComponent label='where to' placeholder='Paris - FRA' type='text' value={data.to} onchange={(event) => setData(prev => ({...prev, to: event.target.value}))} />
                </div>
                <InputComponent label='Name' placeholder='Ex.: Jhonny Albon' type='text' value={data.name} onchange={(event) => setData(prev => ({...prev, name: event.target.value}))} />
                
                <div className={styles.shared}>
                    <InputComponent label='start date' placeholder='10/10/2027' type='date' value={data.dateStart} onchange={(event) => setData(prev => ({...prev, dateStart: event.target.value}))} />
                    <InputComponent label='end date' placeholder='10/20/2027' type='date' value={data.dateEnd} onchange={(event) => setData(prev => ({...prev, dateEnd: event.target.value}))} />

                </div>
                <InputComponent label='email' placeholder='your@email.com' type='email' value={data.email} onchange={(event) => setData(prev => ({...prev, email: event.target.value}))} />
            </div>
            <div className={styles.shared}>
                <Button text='Request contact' variant='transparent' action={() => {}}/>
                <Button text='Talk With Us' icon={<FaArrowRight />} variant='orange' action={() => {}}/>
            </div>
        </div>
    </div>
  )
}

export default Form