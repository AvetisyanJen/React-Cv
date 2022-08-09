import './Home.css'
import { motion } from 'framer-motion';
import jen from "./jen.jpg";
const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0.2,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.4 },
    }),
}
const Home = () => {

    return (<>
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="section1" id="home">
            <div className="imgWrapper">
                <img src={jen}/>
                <div className="dateBirth">14.05.2014</div>
            </div>
            <div className="homeInfo">
                <motion.h1 custom={1} variants={textAnimation} className='title1'>Hi! </motion.h1>
                <motion.h1 custom={2} variants={textAnimation} className='title2'> I'm a JavaScript Developer</motion.h1>

            </div>

        </motion.div>
    </>)
}
export default Home