import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_nj8tuxk',
            'template_kbtnjs4',
            refForm.current,
            '02wCWyLBzKwX-jlH-'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['S', 'a', 'y', ' ', 'h', 'e', 'l', 'l', 'o']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Shoot me an email. Need anything? Ask! I'm always interested in job opportunities, who isn't?
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" placeholder="Subject"  name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Diyar Yasin,
                    <br />
                    Ontario, Canada,
                    <br />
                    Waterloo
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[ 43.471845851128805, -80.53306244351411 ]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[ 43.471845851128805, -80.53306244351411 ]}>
                            <Popup>Close to the university!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;