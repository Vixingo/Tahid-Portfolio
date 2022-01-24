import React, { useState, useRef, useEffect } from "react";
import {
    gsap,
    TweenMax,
    TweenLite,
    TimelineLite,
    Power3,
    Power2,
    Circ,
} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "../components/useWindowSize";
import "./personalinfo.css";
import { timeline } from "animejs";

export const Personalinfo = () => {
    gsap.registerPlugin(ScrollTrigger);

    const [height, width] = useWindowSize();

    console.log("widht in personal info", width);
    useEffect(() => {
        gsap.to([".h3-1", ".h3-2", ".h3-3"], {
            y: "20%",
        });

        const t4 = gsap.timeline();
        function onenter() {
            document.querySelector(".bg2").style.width = "95%";
            document.querySelector(".bg2").style.height = "90%";
            setTimeout(() => {
                document.querySelector(".bg1").style.width = "50%";
            }, 0.4);
            t4.to("path", 1, {
                css: {
                    strokeDasharray: 0,
                    strokeDashoffset: 0,
                    // fillOpacity: 1
                },
                ease: Power3.easeOut,
            }).to("path", 1, {
                css: {
                    // strokeDasharray: 0,
                    // strokeDashoffset: 0,
                    fillOpacity: 1,
                },
                ease: Power3.easeOut,
                delay: -0.5,
            });
        }
        const t1 = gsap.timeline({
            scrollTrigger: {
                fastScrollEnd: true,
                preventOverlaps: true,
                trigger: ".bg1",
                start: "bottom 0",
                end: "top 0",
                // markers: true,
                scrub: 0.1,
            },
        });

        t1.to(".h3-1", 1, {
            y: "-20%",
            opacity: 1,
            ease: Power3.easeOut,
        })
            .to(".h3-2", 1, {
                y: "-20%",
                opacity: 1,
                // delay: "3s",
                ease: Power3.easeOut,
            })
            .to(".h3-3", 1, {
                y: "-20%",
                // delay: "6s",
                opacity: 1,
                ease: Power3.easeOut,
            });

        const t2 = gsap.timeline({
            scrollTrigger: {
                fastScrollEnd: true,
                preventOverlaps: true,
                trigger: ".bg1",
                start: "175% 0",
                end: "top 0",
                // markers: true,
                scrub: 0.1,
            },
        });

        t2.to(".h3-1", 1, {
            y: "-40%",
            opacity: 0,
            ease: Power3.easeOut,
        })
            .to(".h3-2", 1, {
                y: "-40%",
                opacity: 0,
                // delay: "3s",
                ease: Power3.easeOut,
            })
            .to(".h3-3", 1, {
                y: "-40%",
                // delay: "6s",
                opacity: 0,
                ease: Power3.easeOut,
            })
            .to(".o-h3-1", 1, {
                y: "-20%",
                opacity: 1,
                ease: Power3.easeOut,
            })
            .to(".o-h3-2", 1, {
                y: "-20%",
                opacity: 1,
                // delay: "3s",
                ease: Power3.easeOut,
            })
            .to(".o-h3-3", 1, {
                y: "-20%",
                // delay: "6s",
                opacity: 1,
                ease: Power3.easeOut,
            });

        const t3 = gsap.timeline({
            scrollTrigger: {
                fastScrollEnd: true,
                preventOverlaps: true,
                trigger: ".bg1",
                start: "275% 0",
                end: "top 0",
                // markers: true,
                scrub: 0.1,
            },
        });

        t3.to(".o-h3-1", 1, {
            y: "-40%",
            opacity: 0,
            ease: Power3.easeOut,
        })
            .to(".o-h3-2", 1, {
                y: "-40%",
                opacity: 0,
                // delay: "3s",
                ease: Power3.easeOut,
            })
            .to(".o-h3-3", 1, {
                y: "-40%",
                // delay: "6s",
                opacity: 0,
                ease: Power3.easeOut,
            })
            .to(".offer", 1, {
                y: "-20%",
                // delay: "6s",
                opacity: 1,
                ease: Power3.easeOut,
            })
            .to(".uil-linkedin", 1, {
                // y: "-20%",
                ease: Power3.easeOut,
                opacity: 1,
            });

        function onenter2() {
            // document.querySelector(".bg2").style.width = "95%";
            // document.querySelector(".bg2").style.height = "90%";
            setTimeout(() => {
                document.querySelector(".bg1").style.width = "100%";
            }, 1);
            gsap.to("#name", 1, {
                x: "25vw",
                ease: Power3.easeOut,
            });
        }
        function onleave2() {
            // document.querySelector(".bg2").style.width = "100%";
            // document.querySelector(".bg2").style.height = "100%";
            setTimeout(() => {
                document.querySelector(".bg1").style.width = "50%";
            }, 0.4);
            gsap.to("#name", 1, {
                x: "0",
                ease: Power3.easeOut,
            });
            // t1.to('.h3-1',{
            //     y: "20%",
            //     opacity: 0,
            //     ease: Power3.easeOut

            // }).to('.h3-2',{
            //     y: "20%",
            //     opacity: 0,
            //     ease: Power3.easeOut

            // }).to('.h3-3',{
            //     y: "20%",
            //     opacity: 0,
            //     ease: Power3.easeOut

            // })
        }

        function onleave() {
            document.querySelector(".bg2").style.width = "100%";
            document.querySelector(".bg2").style.height = "100%";
            setTimeout(() => {
                document.querySelector(".bg1").style.width = "100%";
            }, 0.4);

            // const t5 = gsap.timeline()
            t4.to("path", 1, {
                css: {
                    // strokeDasharray: 0,
                    // strokeDashoffset: 0,
                    fillOpacity: 0,
                },
                ease: Power3.easeOut,
            }).to("path", 1, {
                css: {
                    strokeDasharray: "800px",
                    strokeDashoffset: "800px",
                    // fillOpacity: 0
                },
                ease: Power3.easeOut,
                delay: -0.5,
            });
        }

        gsap.to(".personal-main", {
            scrollTrigger: {
                fastScrollEnd: true,
                preventOverlaps: true,
                trigger: ".personal-main",
                start: "top 0",
                end: "400% 0",
                // markers: true,
                pin: true,
            },
        });

        // const t1 = gsap.timeline({})

        gsap.to(".personal-main", 1, {
            scrollTrigger: {
                fastScrollEnd: true,
                preventOverlaps: true,
                trigger: ".personal-main",
                start: "top 0",
                end: "bottom 0",
                onEnter: onenter,
                onLeaveBack: onleave,
            },
            ease: Power3.easeOut,
        });
        gsap.to(".bg1", 1, {
            scrollTrigger: {
                fastScrollEnd: true,
                preventOverlaps: true,
                trigger: ".bg1",
                start: "bottom 0",
                end: "top 0",
                // markers: true,
                onEnter: onenter2,
                onLeaveBack: onleave2,
            },
            ease: Power3.easeOut,
        });

        // t1.to(".bg2", 1, {
        //     width: "95%",
        //     height: "90%",
        //     ease: Power2.easeOut
        // }).to(".bg1", 1, {
        //     width: "50%"
        // })
    }, []);

    return (
        <div>
            <div className="personal-main">
                <div
                    style={{
                        position: "absolute",
                        width: "100vw",
                        height: "100vh",
                        mixBlendMode: "difference",
                    }}
                >
                    <svg
                        version="1.1"
                        id="name"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1920 1080"
                        enableBackground="new 0 0 1920 1080"
                        xmlSpace="preserve"
                    >
                        <g>
                            <path
                                id="O"
                                fill="#f9f9f9"
                                stroke="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M699.4,484.9C689,495,676.3,500,661.1,500
		c-15.2,0-28-5-38.3-15.1c-10.3-10.1-15.5-22.7-15.5-37.7c0-15.1,5.2-27.6,15.5-37.7c10.3-10.1,23.1-15.1,38.3-15.1
		c15.2,0,28,5,38.3,15.1c10.3,10.1,15.5,22.7,15.5,37.7C714.9,462.2,709.7,474.8,699.4,484.9z M686.7,420.9
		c-7-7.2-15.5-10.8-25.6-10.8c-10.1,0-18.7,3.6-25.6,10.8c-7,7.2-10.4,16-10.4,26.2c0,10.3,3.5,19,10.4,26.2
		c7,7.2,15.5,10.8,25.6,10.8c10.1,0,18.7-3.6,25.6-10.8c7-7.2,10.4-16,10.4-26.2C697.2,436.9,693.7,428.1,686.7,420.9z"
                            />
                            <path
                                id="B"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M781.4,499h-44.7V396.8h39.7c6.9,0,12.9,0.8,17.9,2.5
		c5,1.7,8.7,3.9,11.2,6.7c4.7,5.3,7,11.2,7,17.8c0,8-2.5,13.9-7.6,17.8c-1.9,1.4-3.1,2.2-3.8,2.6c-0.7,0.3-1.9,0.9-3.7,1.7
		c6.3,1.4,11.4,4.2,15.1,8.5c3.7,4.3,5.6,9.7,5.6,16.1c0,7.1-2.4,13.4-7.3,18.9C805.1,495.8,795.3,499,781.4,499z M753.9,439.2h21.9
		c12.5,0,18.7-4.2,18.7-12.7c0-4.9-1.5-8.4-4.5-10.5c-3-2.1-7.7-3.2-14-3.2h-22.1V439.2z M753.9,483h27c6.3,0,11.2-1,14.5-3
		c3.4-2,5-5.8,5-11.3c0-9.1-7.3-13.6-21.8-13.6h-24.8V483z"
                            />
                            <path
                                id="A"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M853.1,475.7L842.9,499h-18.4l45-102.1h18.4l45,102.1
		h-18.4l-10.2-23.2H853.1z M897.2,459.8l-18.6-42.1l-18.6,42.1H897.2z"
                            />
                            <path
                                id="I"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M947.1,396.8h17.2V499h-17.2V396.8z"
                            />
                            <path
                                id="D"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M1070,410.2c9.8,8.9,14.8,21.3,14.8,37.2
		c0,15.9-4.8,28.4-14.3,37.7c-9.5,9.3-24.2,13.9-43.8,13.9h-33.9V396.8h35.1C1046,396.8,1060.1,401.3,1070,410.2z M1067.3,447.8
		c0-23.4-13.4-35.1-40.2-35.1h-17.2v70h19.1c12.4,0,21.8-2.9,28.4-8.8C1064,468,1067.3,459.3,1067.3,447.8z"
                            />
                            <path
                                id="N"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M690.5,537.8h17.2V640H689l-57.9-74.5V640h-17.2V537.8
		h17.2l59.3,76.3V537.8z"
                            />
                            <path
                                id="A2"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M750.5,616.7L740.3,640h-18.4l45-102.1h18.4l45,102.1
		h-18.4l-10.2-23.2H750.5z M794.6,600.8l-18.6-42.1l-18.6,42.1H794.6z"
                            />
                            <path
                                id="D2"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M921.8,551.2c9.8,8.9,14.8,21.3,14.8,37.2
		c0,15.9-4.8,28.4-14.3,37.7c-9.5,9.3-24.2,13.9-43.8,13.9h-33.9V537.8h35.1C897.9,537.8,911.9,542.3,921.8,551.2z M919.2,588.8
		c0-23.4-13.4-35.1-40.2-35.1h-17.2v70h19.1c12.4,0,21.8-2.9,28.4-8.8C915.9,609,919.2,600.3,919.2,588.8z"
                            />
                            <path
                                id="E1"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M1030.5,537.8V554H976v27h49v15.3h-49v27.3h56.3V640
		h-73.5V537.8H1030.5z"
                            />
                            <path
                                id="E2"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M1126.1,537.8V554h-54.5v27h49v15.3h-49v27.3h56.3V640
		h-73.5V537.8H1126.1z"
                            />
                            <path
                                id="M"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M1167.1,640h-17.2V537.8h26.9l30.8,64.2l30.8-64.2h26.7
		V640H1248v-79.8l-35.7,70.9h-9.6l-35.5-70.9V640z"
                            />
                            <path
                                id="fullstop"
                                stroke="#f9f9f9"
                                fill="#f9f9f9"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                d="M1292.2,637.9c-2.1-2.1-3.1-4.7-3.1-7.7
		c0-3,1-5.6,3.1-7.7c2.1-2.1,4.7-3.1,7.7-3.1c3,0,5.6,1,7.7,3.1c2.1,2.1,3.2,4.7,3.2,7.7c0,3-1.1,5.6-3.2,7.7
		c-2.1,2.1-4.7,3.2-7.7,3.2C1296.8,641.1,1294.3,640.1,1292.2,637.9z"
                            />
                        </g>
                    </svg>
                </div>
                <div className="bg2">
                    <div className="bg1">
                        <div
                            style={{
                                position: "absolute",
                                left: "15%",
                                top: `${width < 600 ? 47 : 43}%`,
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                className="h3-1"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                " Creativity is not something
                            </h3>
                            <h3
                                className="h3-2"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {" "}
                                that you learn, it's just{" "}
                            </h3>
                            <h3
                                className="h3-3"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {" "}
                                naturally in you. "{" "}
                            </h3>
                            {/* <h4>~obaid nadeem</h4> */}
                            {/* <h3 style={{color: "#f2f2f2", fontSize:"1.2rem"}}> 
                            Strong animation and designig background helps in creating awesome frontends.
                        </h3> */}
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                left: "15%",
                                top: `${width < 600 ? 47 : 43}%`,
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                className="o-h3-1"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                A design enthusiast &
                            </h3>
                            <h3
                                className="o-h3-2"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                a frontend developer,
                            </h3>
                            <h3
                                className="o-h3-3"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                particularly web animator.
                            </h3>
                            {/* <h4>~obaid nadeem</h4> */}
                            {/* <h3 style={{color: "#f2f2f2", fontSize:"1.2rem"}}> 
                            Strong animation and designig background helps in creating awesome frontends.
                        </h3> */}
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                left: "15%",
                                top: `${width < 600 ? 47 : 43}%`,
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                className="offer"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                What do you get ? <br />{" "}
                                <p
                                    style={{
                                        margin: 0,
                                        fontWeight: "lighter",
                                        fontSize: "1rem",
                                    }}
                                >
                                    {" "}
                                    Keep scrolling{" "}
                                </p>
                            </h3>

                            <div>
                                <a
                                    href="https://www.linkedin.com/in/muhammad-obaid-nadeem-9999751a1/"
                                    target="_blank"
                                >
                                    {" "}
                                    <i
                                        style={{
                                            fontSize: "2rem",
                                            color: "white",
                                            opacity: 0,
                                            transition: "all ease 1000ms",
                                        }}
                                        class="uil uil-linkedin"
                                    ></i>{" "}
                                </a>
                            </div>
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                left: "20%",
                                top: `${width < 600 ? 47 : 43}%`,
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                className="2-h3-1"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Was interested in designing since
                            </h3>
                            <h3
                                className="2-h3-2"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {" "}
                                my childhood. Got an opportunity{" "}
                            </h3>
                            <h3
                                className="2-h3-3"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {" "}
                                and learned graphics designing in 2018.{" "}
                            </h3>
                            {/* <h4>~obaid nadeem</h4> */}
                            {/* <h3 style={{color: "#f2f2f2", fontSize:"1.2rem"}}> 
                            Strong animation and designig background helps in creating awesome frontends.
                        </h3> */}
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                left: "20%",
                                top: `${width < 600 ? 47 : 43}%`,
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                className="3-h3-1"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Continued self learning and
                            </h3>
                            <h3
                                className="3-h3-2"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {" "}
                                enhancing my designing skills. Mostly{" "}
                            </h3>
                            <h3
                                className="3-h3-3"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {" "}
                                logos and brand identities.{" "}
                            </h3>
                            {/* <h4>~obaid nadeem</h4> */}
                            {/* <h3 style={{color: "#f2f2f2", fontSize:"1.2rem"}}> 
                            Strong animation and designig background helps in creating awesome frontends.
                        </h3> */}
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                left: "20%",
                                top: `${width < 600 ? 47 : 43}%`,
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                className="4-h3-1"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Then I started front-end development in 2020.
                            </h3>
                            <h3
                                className="4-h3-2"
                                style={{
                                    opacity: "0",
                                    margin: 0,
                                    color: "#f2f2f2",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {" "}
                                and now in 2021 I started ui design.{" "}
                            </h3>
                            {/* <h3 className="2-h3-3" style={{ opacity: "0", margin: 0, color: "#f2f2f2", fontSize: "1.5rem" }}>   logos and brand identities. </h3> */}
                            {/* <h4>~obaid nadeem</h4> */}
                            {/* <h3 style={{color: "#f2f2f2", fontSize:"1.2rem"}}> 
                            Strong animation and designig background helps in creating awesome frontends.
                        </h3> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
