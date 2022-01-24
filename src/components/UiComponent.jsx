import React, { useEffect } from "react";
import { gsap, TweenMax, TimelineLite, Power3, Circ } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useWindowSize } from "../components/useWindowSize";
import "./UiComponent.css";
import layer1 from "./layer1-03.svg";
import layer2 from "./layer2-03.svg";
import layer3 from "./layer3-03.svg";
import layer4 from "./layer4-03.svg";
import layer5 from "./layer5-03.svg";
// import { stagger } from "animejs";

export const Ui = () => {
    const [height, width] = useWindowSize();
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    useEffect(() => {
        // 3d layer animation
        gsap.to(".layer1", {
            scrollTrigger: {
                trigger: ".ui-main",
                start: "top 0",
                end: "175% 0",
                toggleClass: { targets: ".layer1", className: "layer1active" },
                stagger: true,
            },
        });
        gsap.to(".layer2", {
            scrollTrigger: {
                trigger: ".ui-main",
                start: "top 0",
                end: "175% 0",
                toggleClass: { targets: ".layer2", className: "layer2active" },
                stagger: true,
            },
        });
        gsap.to(".layer3", {
            scrollTrigger: {
                trigger: ".ui-main",
                start: "top 0",
                end: "175% 0",
                toggleClass: { targets: ".layer3", className: "layer3active" },
                stagger: true,
            },
        });
        gsap.to(".layer4", {
            scrollTrigger: {
                trigger: ".ui-main",
                start: "top 0",
                end: "175% 0",
                toggleClass: { targets: ".layer4", className: "layer4active" },
                stagger: true,
            },
        });
        gsap.to(".layer5", {
            scrollTrigger: {
                trigger: ".ui-main",
                start: "top 0",
                end: "175% 0",
                toggleClass: { targets: ".layer5", className: "layer5active" },
                stagger: true,
            },
        });

        gsap.to(".ui-main", {
            scrollTrigger: {
                trigger: ".ui-main",
                start: "top 0",
                end: "175% 0",
                pin: true,
            },
        });

        gsap.to(".ui-description", {
            duration: 15,
            scrollTrigger: {
                trigger: ".ui-description",
                start: "top 0",
                end: "bottom 0",
                scrub: 1,
            },
            text: "Interactive animations that'll make users stick to your web and increace engagments.",
            ease: "Circ.out",
        });

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".ui-main",
                start: "top 0",
                end: "top 0",
                // pin: true,
                scrub: true,
            },
        });

        t1.to(".ui-heading-u", 1, {
            rotateZ: 180,
            // css:{
            //    transform: "rotateZ(180deg)"
            // },
        }).to(".eye", {
            css: {
                opacity: 1,
            },
        });
    }, []);

    return (
        <div>
            <div className="ui-main">
                <div className="ui-content">
                    <div className="ui-left">
                        <div
                            style={{
                                marginLeft: "3vw",
                                marginTop: "3vh",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    transform: "translateX(-3vw)",
                                }}
                            >
                                <div style={{ display: "flex" }}>
                                    <div class="eye"></div>
                                    <div class="eye"></div>
                                    <h1 className="ui-heading-u">I</h1>
                                </div>
                                <h1 className="ui-heading">nteractive web</h1>
                            </div>
                            <div className="ui-description"></div>
                        </div>
                    </div>
                    <div className="ui-right">
                        <div className="ui-svg-main">
                            {/* <svg className="ui-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 420 720" enableBackground="new 0 0 420 720" xmlSpace="preserve">
                <g className="layer most-bottom">
                  <rect x="140.9" y={221} fill="#282828" width="138.2" height="260.5" />
                  <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="150.2508" y1="237.0123" x2="268.9644" y2="453.0561">
                    <stop offset={0} style={{ "stop-color": "#3ABFEF" }} />
                    <stop offset={1} style={{ "stop-color": "#007AA0" }} />
                  </linearGradient>
                  <rect x="149.7" y="235.6" fill="url(#SVGID_1_)" width="120.6" height="220.4" />
                  <ellipse fill="#FFFFFF" cx="210.3" cy="468.8" rx="4.9" ry="5.3" />
                  <path fill="#FFFFFF" d="M195.7,471.2H183c-1.3,0-2.3-1-2.3-2.3l0,0c0-1.3,1-2.3,2.3-2.3h12.7c1.3,0,2.3,1,2.3,2.3l0,0
		C198,470.1,196.9,471.2,195.7,471.2z" />
                  <path fill="#FFFFFF" d="M236.6,471.2h-12.7c-1.3,0-2.3-1-2.3-2.3l0,0c0-1.3,1-2.3,2.3-2.3h12.7c1.3,0,2.3,1,2.3,2.3l0,0
		C238.9,470.1,237.9,471.2,236.6,471.2z" />
                </g>
                <g className="layer bottom">
                  <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="150.0051" y1="237.1187" x2="268.7186" y2="453.1626">
                    <stop offset={0} style={{ "stop-color": "#3ABFEF" }} />
                    <stop offset={1} style={{ "stop-color": "#007AA0" }} />
                  </linearGradient>
                  <rect x="149.5" y="235.7" fill="url(#SVGID_2_)" width="120.6" height="220.4" />
                  <rect x="167.2" y={437} fill="#F37655" width="84.1" height="10.3" />
                  <line fill="none" stroke="#293687" strokeMiterlimit={10} x1="149.5" y1="335.1" x2="270.1" y2="335.1" />
                  <line fill="none" stroke="#293687" strokeMiterlimit={10} x1="149.5" y1="366.1" x2="270.1" y2="366.1" />
                  <line fill="none" stroke="#293687" strokeMiterlimit={10} x1="270.1" y1="304.6" x2="149.5" y2="304.6" />
                  <rect x="149.7" y={274} opacity="0.45" fill="#293687" width="120.6" height="30.5" />
                  <g id="menu_5_">
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.7" y1={243} x2="166.8" y2={243} />
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.7" y1="246.6" x2="166.8" y2="246.6" />
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.7" y1="249.9" x2="166.8" y2="249.9" />
                  </g>
                  <circle fill="#F37655" cx="162.3" cy="289.2" r="5.5" />
                  <circle fill="#FFFFFF" cx="162.3" cy="320.2" r="5.5" />
                  <circle fill="#FFFFFF" cx="162.3" cy="351.3" r="5.5" />
                  <rect x="173.3" y="347.7" fill="#293687" width="31.3" height="3.2" />
                  <rect x="173.3" y="353.1" fill="#293687" width="54.9" height="1.8" />
                  <rect x="173.3" y="316.5" fill="#293687" width="31.3" height="3.2" />
                  <rect x="173.3" y={322} fill="#293687" width="54.9" height="1.8" />
                  <rect x="172.8" y="285.6" fill="#293687" width="31.3" height="3.2" />
                  <rect x="172.8" y={291} fill="#293687" width="54.9" height="1.8" />
                  <polyline fill="none" stroke="#FFFFFF" strokeMiterlimit={10} points="158.5,289.4 160.9,291.7 165.9,287.5 	" />
                </g>
                <g className="layer center">
                  <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="150.1279" y1="237.1187" x2="268.8414" y2="453.1625">
                    <stop offset={0} style={{ "stop-color": "#3ABFEF" }} />
                    <stop offset={1} style={{ "stop-color": "#007AA0" }} />
                  </linearGradient>
                  <rect x="149.6" y="235.7" fill="url(#SVGID_3_)" width="120.6" height="220.4" />
                  <path fill="#F37655" d="M227.5,371h-35.3c-2.9,0-5.2-2.3-5.2-5.2v0c0-2.9,2.3-5.2,5.2-5.2h35.3c2.9,0,5.2,2.3,5.2,5.2v0
		C232.7,368.7,230.4,371,227.5,371z" />
                  <g id="menu_1_">
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.8" y1={243} x2="166.9" y2={243} />
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.8" y1="246.6" x2="166.9" y2="246.6" />
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.8" y1="249.9" x2="166.9" y2="249.9" />
                  </g>
                  <rect x="188.8" y="269.1" fill="#FFFFFF" width="39.9" height="4.1" />
                  <rect x="163.9" y="299.3" fill="#FFFFFF" width="38.2" height="4.1" />
                  <rect x="159.9" y="293.6" fill="#FFFFFF" width="99.3" height="15.5" />
                  <rect x="159.9" y="316.5" fill="#FFFFFF" width="99.3" height="15.5" />
                  <rect x="163.9" y="299.3" fill="#848484" width="38.2" height="4.1" />
                  <rect x="163.9" y="322.2" fill="#848484" width="38.2" height="4.1" />
                </g>
                <g className="layer top">
                  <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="150.1279" y1="237.1188" x2="268.8414" y2="453.1626">
                    <stop offset={0} style={{ "stop-color": "#3ABFEF" }} />
                    <stop offset={1} style={{ "stop-color": "#007AA0" }} />
                  </linearGradient>
                  <rect x="149.6" y="235.7" fill="url(#SVGID_4_)" width="120.6" height="220.4" />
                  <g id="menu_3_">
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.8" y1={243} x2="166.9" y2={243} />
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.8" y1="246.6" x2="166.9" y2="246.6" />
                    <line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1="156.8" y1="249.9" x2="166.9" y2="249.9" />
                  </g>
                  <rect x="189.9" y="352.9" fill="#FFFFFF" width="39.9" height="4.1" />
                  <rect x="189.9" y={362} fill="#FFFFFF" width="39.9" height="4.1" />
                  <circle opacity="0.4" fill="#FFFFFF" cx="209.9" cy="290.9" r="29.9" />
                </g>
                <g className="layer topmost">
                  <g>
                    <path fill="#FFFFFF" d="M239.7,290.9c0-16.5-13.4-29.9-29.9-29.9S180,274.4,180,290.9c0,9.4,4.3,17.8,11.1,23.2
			c1.9-5.2,6.5-9.5,12.3-10.8c1.3-0.3,2.6-0.4,3.9-0.4c2.4,0,4.9-0.1,7.3,0.2c6.3,0.6,11.8,5.1,14,11.1
			C235.4,308.7,239.7,300.3,239.7,290.9z M209.8,301.4c-6.3,0-11.3-5.1-11.3-11.4c0-6.3,5.1-11.3,11.3-11.3
			c6.3,0,11.3,5.1,11.3,11.4C221.2,296.4,216.1,301.5,209.8,301.4z" />
                    <path fill="#FFFFFF" d="M214.6,303.1c-2.4-0.2-4.9-0.2-7.3-0.2c-1.3,0-2.6,0.1-3.9,0.4c-5.8,1.3-10.4,5.5-12.3,10.8
			c5.1,4.1,11.7,6.6,18.8,6.6c7.1,0,13.6-2.5,18.8-6.6C226.5,308.2,221,303.7,214.6,303.1z" />
                    <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="211.0058" y1="319.9952" x2="203.8057" y2="282.7147">
                      <stop offset={0} style={{ "stop-color": "#3ABFEF" }} />
                      <stop offset={1} style={{ "stop-color": "#007AA0" }} />
                    </linearGradient>
                    <path fill="url(#SVGID_5_)" d="M214.6,303.1c-2.4-0.2-4.9-0.2-7.3-0.2c-1.3,0-2.6,0.1-3.9,0.4c-5.8,1.3-10.4,5.5-12.3,10.8
			c5.1,4.1,11.7,6.6,18.8,6.6c7.1,0,13.6-2.5,18.8-6.6C226.5,308.2,221,303.7,214.6,303.1z" />
                    <path fill="#FFFFFF" d="M209.9,278.8c-6.3,0-11.3,5-11.3,11.3c0,6.3,5,11.3,11.3,11.4c6.2,0,11.3-5,11.3-11.3
			C221.2,283.8,216.2,278.8,209.9,278.8z" />
                    <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="215.4837" y1="319.1304" x2="208.2836" y2="281.8499">
                      <stop offset={0} style={{ "stop-color": "#3ABFEF" }} />
                      <stop offset={1} style={{ "stop-color": "#007AA0" }} />
                    </linearGradient>
                    <path fill="url(#SVGID_6_)" d="M209.9,278.8c-6.3,0-11.3,5-11.3,11.3c0,6.3,5,11.3,11.3,11.4c6.2,0,11.3-5,11.3-11.3
			C221.2,283.8,216.2,278.8,209.9,278.8z" />
                  </g>
                </g>


              </svg>

              <p className="hover-heading">HOVER</p> */}

                            <img className="layer layer5" src={layer5} />
                            <img className="layer layer4" src={layer4} />
                            <img className="layer layer3" src={layer3} />
                            <img className="layer layer2" src={layer2} />
                            <img className="layer layer1" src={layer1} />
                            {/* <p className="hover-heading">HOVER</p>  */}
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

// .ui-main {
//   width: 100vw;
//   height: 100vh;
//   background-color: #f2f2f2;
// }

// .ui-main .ui-content {
//   width: 100%;
//   height: 100%;
//   display: flex;
// }

// .ui-main .ui-content .ui-left {
//   width: 50%;
//   height: 100%;
// }

// .ui-main .ui-content .ui-left .ui-heading {
//   font-size: 6vw;
//   margin: 0px;
//   padding: 0px;
// }

// .ui-main .ui-content .ui-left .ui-description {
//   width: 50vw;
//   height: 80vh;
//   font-weight: bolder;
//   font-size: 4vw;
//   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
//   /* text-indent: ; */
//   word-spacing: 1vw;
//   /* letter-spacing: 10px; */
//   line-height: 10vh;
//   margin-top: 5vh;
// }

// .ui-right {
//   width: 50%;
//   height: 100%;
// }

// .hover-heading {
//   transition: all ease 1600ms;
//   position: absolute;
//   color: #282828;
//   font-family: sans-serif;
//   font: message-box;
//   font-weight: bolder;
//   opacity: 0.3;
//   left: 75vw;
//   top: 80vh;
// }

// .ui-right:hover .hover-heading {
//   transition: all ease 1600ms;
//   opacity: 0;
// }

// .ui-svg-main {
//   width: 50vw;
//   height: 100vh;
// }

// .ui-svg {
//   width: 50vw;
//   height: 100vh;
//   position: relative;
//   transition: all ease 1600ms;
// }

// .layer {
//   position: absolute;
//   transform-style: preserve-3d;
//   transform: perspective(600px) rotateX(0) rotateY(0deg) rotateZ(0) translateX(35px) translateY(0px) translateZ(0);
//   transition: all ease 1600ms;
// }
// .rect {
//     transition: all ease 1600ms;
// }

// .ui-right:hover .topmost {
//   transform: perspective(600px) rotateX(0) rotateY(2deg) rotateZ(0) translateX(0) translateY(0px) translateZ(150px) !important;
//   /* perspective: 600px; */
//   transform-style: preserve-3d;
//   transition: all ease 1600ms;
//   /* backface-visibility: hidden; */

// }

// <div className="ui-mobile-main" style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <div className="ui-mobile">

//                 <div className="most-bottom" >
//                   <div style={{ width: "8rem", height: "15rem", flexDirection: "column", backgroundColor: "#282828", display: "flex", alignItems: "center" }}>
//                     <div className="rect"  ></div>
//                     <div style={{ width: "50%", height: "10%", display: 'flex', alignItems: 'center', justifyContent: "space-around" }}>
//                       <div style={{ width: "1rem", height: "0.3rem", backgroundColor: "#f9f9f9", borderRadius: "25px" }}></div>
//                       <div style={{ width: "0.7rem", height: "0.7rem", backgroundColor: "#f9f9f9", borderRadius: "100%" }}></div>
//                       <div style={{ width: "1rem", height: "0.3rem", backgroundColor: "#f9f9f9", borderRadius: "25px" }}></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bottom" style={{ position: "absolute", top: "13.33rem" }} >
//                   <div style={{ width: "8rem", height: "15rem", flexDirection: "column", display: "flex", alignItems: "center" }}>
//                     <div className="rect" style={{ position: "absolute", top: "-3%" }} >
//                     </div>
//                     <div style={{width:""}}>
//                       <div style={{ marginTop: "0.1rem", marginLeft: '0.2rem', width: "0.8rem", height: "0.15rem", backgroundColor: "#f9f9f9", borderRadius: "25px" }}></div>
//                       <div style={{ marginTop: "0.1rem", marginLeft: '0.2rem', width: "0.8rem", height: "0.15rem", backgroundColor: "#f9f9f9", borderRadius: "25px" }}></div>
//                       <div style={{ marginTop: "0.1rem", marginLeft: '0.2rem', width: "0.8rem", height: "0.15rem", backgroundColor: "#f9f9f9", borderRadius: "25px" }}></div>
//                       <div style={{ zIndex: "9", width: "90%", height: "70%" }}>

//                         <div style={{ width: "98%", height: "20%", background: "rgb(0, 100, 109)", border: "1px solid rgb(0, 100, 50)" }}>
//                           <div style={{ width: "1rem", height: "1rem", backgroundColor: "orange", borderRadius: "100%" }}></div>
//                           <div>
//                             <div style={{ width: "2rem", height: "0.5rem", backgroundColor: "blueviolet" }}></div>
//                             <div style={{ width: "4rem", height: "0.2rem", backgroundColor: "blueviolet" }}></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
