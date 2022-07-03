import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import UnrealEngineIcon from './../../assets/images/UnrealEngineIcon.png';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Waterloo Computer Science 3A 
                </p>
                <p>
                    Constantly learning things from the ground up. 
                    I'm passionate about connecting with others. Whether that be through
                    building video games, or interactive websites.
                </p>
                <p>
                    Sept 2021 - Dec 2021 | Behaviour Interactive | Support Systems Team Programmer

                </p>
                <p>
                    May 2022 - Aug 2022 | Behaviour Interactive | Gameplay Programmer

                </p>
            </div>
            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faUnity} color="#1B1212" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
                    </div>
                    <div className='face6'>
                        <img src={UnrealEngineIcon} alt="UnrealIcon" color="#1B1212" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;