import { motion } from "framer-motion";

export default function Index() {
  return (
    <>
      <div className="transition-image resume-wrapper">
        <motion.div
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.6,
          }}
          exit={{ y: 800, opacity: 0 }}
          className="resume"
        >
          <div className="text-cover">
            <h2 className="name">Kailee Carson Hashimoto</h2>
            <p className="contact">
              <a href="mailto:kchashim@usc.edu">kchashim@usc.edu</a>
              {" | 972-343-8799 | Los Angeles, CA"}
              <br />
              <a href="https://hashimotofilms.com">hashimotofilms.com</a>
              {" | "}
              <a href="https://gondola.cc/Hashimoto_Films">Gondola</a>
            </p>
            <p className="title">Experience</p>
            <div>
              <div className="experience">
                <p className="subtitle">
                  USC Football | Creative Assistant | Apr 2022-Present
                </p>
                <ul>
                  <li className="description">
                    Act as game day videographer for home games and practices
                    using Sony FX3 and A1
                  </li>
                  <li className="description">
                    Produce short-form Live Content during games, amassing over
                    5 million views
                  </li>
                  <li className="description">
                    Work with the Director of Digital Strategy to create
                    sponsored pre-game videos
                  </li>
                  <li className="description">
                    Develop and edit team motivationals to play for the entire
                    team before game time
                  </li>
                </ul>
              </div>
              <div className="experience">
                <p className="subtitle">
                  USC Athletics | Intern Sports Videographer | Jan 2022-Present
                </p>
                <ul>
                  <li className="description">
                    Produce video content including highlights, promotional and
                    hype videos
                  </li>
                  <li className="description">
                    Shoot various sports practices, matches and events using a
                    Sony FX6 and FX3
                  </li>
                  <li className="description">
                    Create high-quality, exciting Live Content – focusing on
                    short-form content for IG Reels
                  </li>
                  <li className="description">
                    Edit appealing and meaningful content, amassing over 1.3
                    million views
                  </li>
                  <li className="description">
                    Shoot primarily for Men’s/Women’s Tennis as well as the
                    other 19 D1 sports
                  </li>
                  <li className="description">
                    Work in collaboration with high-profile companies, such as
                    Nike, and Universal Tennis
                  </li>
                </ul>
              </div>
              <div className="experience">
                <p className="subtitle">
                  School of Cinematic Arts Camera Equipment Center | Support
                  Staff | Sep 2021-Present
                </p>
                <ul>
                  <li className="description">
                    Assist in checking out and returning camera equipment
                  </li>
                  <li className="description">
                    Operate as technical support for renting students and
                    faculty
                  </li>
                  <li className="description">
                    Testing, cleaning and maintaining camera equipment
                  </li>
                </ul>
              </div>
              <div className="experience">
                <p className="subtitle">
                  Birns & Sawyer | Internship | May-Aug 2022
                </p>
                <ul>
                  <li className="description">
                    Assisted in checking out and returning camera and lighting
                    equipment
                  </li>
                  <li className="description">
                    Tested, cleaned and maintained cinema cameras, equipment and
                    lenses
                  </li>
                  <li className="description">
                    Hands on experience with rigging and operating Arri, Red and
                    Sony Cinema Cameras
                  </li>
                </ul>
              </div>
            </div>
            <p className="title">Education</p>
            <div>
              <p className="subtitle">
                University of Southern California | Los Angeles, CA | Expected
                Graduation: May 2024
              </p>
              <p className="description">
                B.F.A. in Film and Television Production, Minor in Business,
                Dean’s List
              </p>
            </div>
            <p className="title">References</p>
            <div>
              <p className="description">
                Radmen Niven - USC Executive Director of Football Marketing and
                Branding
              </p>
              <p className="description">
                Jordan Moore - USC Athletics Chief Creative Officer
              </p>
              <p className="description">
                Juan Reyes - USC Football Director of Digital Content
              </p>
              <p className="description">
                Gage Masterson - USC Athletics Digital Media Producer
              </p>
              <p className="description">
                Gia Larez - USC Athletics Assistant Director of Sports Brands &
                Communications
              </p>
            </div>
            <p className="title">Skills</p>
            <div>
              <p className="description">
                Cameras: Sony, Red, Panasonic, Fujifilm, Canon, Z-Cam,
                Blackmagic, Arri
              </p>
              <p className="description">
                Technical Proficient in: Premiere Pro, Davinci Resolve,
                Lightroom CC, Lightroom Classic, Microsoft Office
              </p>
            </div>
            <p className="title">Interests</p>
            <div>
              <p className="description">
                Photography, Travel, Tennis, Gaming, Movies, Hiking
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
