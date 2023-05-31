import React, { useEffect, useRef } from 'react'

import { AiOutlineHeart } from 'react-icons/ai'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import wallppr from '../assets/home2.jpg'


gsap.registerPlugin(ScrollTrigger)


const Home = () => {

    useEffect(() => {
        /*INTRO*/
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content p',
                start: 'top 90%',
                //markers:true
            }
        });
        tl3.fromTo('.content p', { y: 100, opacity: 0, duration: 1.5 }, { y: 0, opacity: 1, duration: 1.5 })

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content h1',
                start: 'top 80%',
                //markers:true    

            }
        })
        tl4.fromTo('.content h1', { x: 50, opacity: 0, duration: 1.5 }, { x: 0, opacity: 1, duration: 1.5 })
        /*CONTAINER1*/
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.img1',
                //markers: true,
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl.fromTo(".img1", { width: '0%', opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content1 h1", { x: '-100%', opacity: 0, duration: 2 }, { x: 0, opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content1 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        /*CONTAINER2*/
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.img2',
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl2.fromTo(".img2", { width: 0, opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content2 h1", { x: '18%', opacity: 0, duration: 2 }, { x: '-10%', opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content2 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        /**/

    }, [])

    return (
        <section>
                <main>
                    <div className='wall-home'>

                   
                            <img src={wallppr} alt="img" />

                            <div className='title'>
                                <span className='t1'>Eat Healthy & </span>
                                <span className='t2'>be Nutrition Wealthy,</span>
                                <br />
                                <span className='t3'>is what we offer</span>
                            </div>
                      
                            <div className='container-title'>
                                <img src="./src/assets/img3.jpg" alt="intro" />
                                <div className='content'>
                                    <h1>We are HealthyMe!</h1>
                                    <p>Our mission is to make a nourishing plant-based lifestyle accessible to everyone. <br /> We serve healthy & nutrition rich meals directly at your doorsteps. We also make you feel excited and supported in introducing more plant-based foods into your meals, snacks, desserts, and everything in-between! </p>
                                    <Link to='/about'>
                                        <button onClick={() => { console.log('you clicked learn-more') }}>Learn more <AiOutlineHeart /> </button>
                                    </Link>
                                </div>
                            </div>
                       

                            <div className='container1'>
                                <div className='content1'>
                                    <h1>To eat is a necessity, but to eat intelligently is an art.</h1>
                                    <p>Eat the best, leave the rest.</p>
                                </div>
                                <img className='img1' src="./src/assets/img1.jpg" alt="img1" />
                            </div>
                       
                            <div className='container2'>
                                <img className='img2' src="./src/assets/img4.jpg" alt="img2" />
                                <div className='content2'>
                                    <h1>Our Goal Is to Help Everyone Live a Healthier Lifestyle.</h1>
                                    <p>No artificial colors or flavors</p>
                                </div>
                            </div>
                        

                    </div>
                </main>
        </section >
    )
}

export default Home
