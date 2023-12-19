import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/style.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section class="skills section" id="skills">
      <h2 style={{ fontSize: "45px", fontWeight: 700, textAlign: "center" }}>
        Skills
      </h2>
      <p
        style={{
          fontSize: "18px",
          color: "white",
          letterSpacing: "0.8px",
          lineHeight: "1.5em",
          margin: "14px 0 75px 0",
          textAlign: "center",
        }}
      >
        Expert in diverse programming languages and frameworks. Proficient in
        crafting efficient, scalable code for seamless user experiences.
        <br></br> Committed to staying current with the latest industry trends and
        technologies
      </p>

      <div class="skills__container container grid">
        <div class="skills__content">
          <h3 class="skills__title">Frontend Development</h3>

          <div class="skills__box">
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">HTML</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">CSS</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Javascript</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>
            </div>
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Bootstrap</h3>
                  {/* <span class="skills__level">Intermediate</span> */}
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Git</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">React</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="skills__content">
          <h3 class="skills__title">Backend Development</h3>

          <div class="skills__box">
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Node JS</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Java</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">MySQL</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>
            </div>
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Spring</h3>
                  {/* <span class="skills__level">Intermediate</span> */}
                </div>
              </div>

              {/* <div class="skills__data">
                                <i class='bx bxs-badge-check'></i>

                                <div>
                                    <h3 class="skills__name">Firebase</h3>
                                    <span class="skills__level">Advanced</span>
                                </div>
                            </div> */}

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Mongo DB</h3>
                  {/* <span class="skills__level">Advanced</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
