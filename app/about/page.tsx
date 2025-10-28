
// import AnimatedImageEffect from '../component/AnimatedImageEffect'
import AnimatedService from '../component/AnimatedService'
// import Card from '../component/Card'
import ParallaxHeroSection from '../component/ParallaxHeroSection'
import PerfumeBannerSection from '../component/PerfumeBannerSection'
// import Testimonials from '../component/Testimonial'
// import TextFill from '../component/TextFill'
import TextSection from '../component/TextSection'
import ThemeFeatures from '../component/ThemeFeatures'

const AboutPage = () => {
    return (
        <div className='primaryBg'>

            <div>
                <TextSection />
            </div>


            <div>
                <ParallaxHeroSection />
            </div>

            <div>
                <ThemeFeatures />
            </div>
            {/* 
            <div>
                <TextFill />
            </div> */}
            <div>
                <AnimatedService />
            </div>





            {/* <div>
                <AnimatedImageEffect />
            </div> */}

            {/* <div>
                <Testimonials />
            </div> */}
            <div>
                <PerfumeBannerSection />
            </div>

            {/* <div>
                <Card />
            </div> */}
        </div>
    )
}

export default AboutPage
