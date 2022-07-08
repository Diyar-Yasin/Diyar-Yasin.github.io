import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
    <>
    <div className="container projects-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}
                />
            </h1>
            <p>
                Just click on a project to learn more!
            </p>
        </div>
        <div className='project-card-container'>
            <div className="project-card">
                <a href="https://diyar-yasin.github.io/BookReviewWebsite/" className="project-card-cover cover-1">
                    <h2>Diyar's Book Reviews</h2>
                </a>
            </div>
            <div className="project-card">
                <a href="https://github.com/Diyar-Yasin/SpaceCadet_Unity" className="project-card-cover cover-2">
                    <h2>Space Cadet</h2>
                </a>
            </div>
            <div className="project-card">
                <a href="https://github.com/Diyar-Yasin/Asteroid_Unity" className="project-card-cover cover-3">
                    <h2>Cracked Asteroids</h2>
                </a>
            </div>
            <div className="project-card">
                <a href="https://github.com/KwanYoon/waterloo-reviewers" className="project-card-cover cover-4">
                    <h2>Waterloo Reviewers</h2>
                </a> 
            </div>
            <div className="project-card">
                <a href="https://commondiyar.itch.io/somesquidscantpaint" className="project-card-cover cover-5">
                    <h2>Some Squids Can't Paint</h2>
                </a>
            </div>
        </div>
        <div className='project-card-info-container'>
            <p className='project-info-1'>
                Lorem ipsum
            </p>
            <p className='project-info-2'>
                Lorem ipsum
            </p>
            <p className='project-info-3'>
                Lorem ipsum
            </p>
            <p className='project-info-4'>
                Lorem ipsum
            </p>
             <p className='project-info-5'>
                A game jam game made in under 48 hours. 
                You play as a squid who attacks his fellow squids because it is angry it can't paint. 
                Shooting ink balls gradually loses accuracy but can be replenished with pickups!
            </p>

        </div>
    </div>
    <Loader type="pacman" />
    </>
    );
}

export default Projects;