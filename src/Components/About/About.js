import "./About.css"
const About = () => {
    return (<>
        <div className="section2" id="about">
            <div className="education1">
                <div className="education2">
                    <h2>Education </h2>
                    <div>
                        Profit Development Company
                        Course of JavaScript -
                        2021-2022
                    </div>
                    <div>
                        International Scientific-Educational Center Of  NAS  <br />
                        Armenian Language and Literature,
                        Philology <br />
                        Master Degree  -
                        2011-2013
                    </div>
                    <div>
                        Armenian StatePedagogical University Af.  Kh.
                        Abovyan    <br />
                        Pedagogy, Teacher     <br />
                        Armenian language and literature<br />
                        Bachelor degree -
                        2007-2011
                    </div>
                </div>
            </div>
            <div className="work1">
                <div className="work2">
                    <h2>Work Experience</h2>
                    <div>
                        French College In Armenia<br />
                        Lecturer of the Armenian language-2014-2016
                    </div>
                    <div>
                        Secondary school of Vardenut v., Aragacotn region <br />
                        Teacher of Armenian language and literature - 2011-1019
                    </div>

                </div>
            </div>
            <div className="skills">
                <div>
                    <button className="butt1">
                        Professional skills
                    </button>

                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javascript, oop</li>

                        <li>react.js</li>
                        <li>redux</li>
                        <li>node.js, express</li>
                        <li>mysql</li>
                    </ul>

                </div>
                <div>
                    <button className="butt2">
                        SOFT SKILLS
                    </button>
                    <ul>
                        <li>Communication</li>
                        <li>Organisation</li>
                        <li>Analytical thinking</li>
                        <li>Creativity and innovation</li>
                        <li>Accountability</li>
                    </ul>
                </div>
            </div>
            <div className="lang">


                <h1> Languages</h1>
                <p> Armenian, Russian, French</p>


            </div>
        </div>
    </>)

}
export default About