import React, { useEffect, useRef, useState } from "react";
import "./Landingmain.css";
import "./cube.css";
import "../../node_modules/animate.css/animate.css";
import { gsap, TweenMax, TweenLite, TimelineLite, Power3, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "../components/useWindowSize";
import { ContactForm } from "../components/ContactForm";
// import { Blending } from "three";
// import { TextAnimation } from '../TextAnimation/TextAnimation'
import { StaggerTextChange } from "stagger-text-reveal-animation";

export const Landingmain = () => {
    const [firsto, setFirsto] = useState("Harun Tahid");
    useEffect(() => {
        const timer = setTimeout(() => {
            setFirsto("Just Scroll !");
        }, 3000);
    });
    const [height, width] = useWindowSize();
    gsap.registerPlugin(ScrollTrigger);

    // const ref = useRef(initialValue)
    // const [loading, setloading] = useState(true)
    function randomNumber(min = 2, max = 4) {
        return Math.random() * (max - min) + min;
    }

    const [load, setload] = useState(false);
    const [textAnimation, settextAnimation] = useState(false);
    const [change, setchange] = useState(false);

    // window.onload = () => {
    //     setload(true);
    //     console.log("loaded");
    // }

    useEffect(() => {
        setload(true);
        console.log("loaded");
    }, []);
    console.log(load);

    function animateText() {
        settextAnimation(true);
    }

    useEffect(() => {
        console.log(load);

        gsap.to(".Design-Heading", 0, {
            opacity: 0,
        });
        // window.onload = () => {

        // TweenLite.to('.loading1', {
        //     y: -height,
        //     ease: Power3.easeIn
        // })

        setTimeout(() => {
            gsap.to(".uil-envelope-add", 3, {
                css: {
                    // position:"fixed",
                    bottom: `${width < 600 ? 8 : 6}%`,
                    left: `${width < 600 ? 93 : 95}%`,
                    fontSize: `${width < 600 ? 2 : 1.7}rem`,
                    // backgroundColor: "#f9f9f9",
                    // border: "1px solid #f9f9f9",
                    // padding:"0.15rem",
                    // borderRadius: "10%"

                    // transition: "all ease 1600ms"
                    // fill:"white",
                },
                scrollTrigger: {
                    trigger: ".uil-envelope-add",
                    start: "top 0",
                    end: "top 0",
                    // markers: true,
                    scrub: true,
                    fastScrollEnd: true,
                    preventOverlaps: true,
                },
            });

            const t3 = gsap.timeline();

            t3.to([".cube", ".cube2", ".cubes"], 0.5, {
                opacity: "0",
            })
                .to([".cube", ".cube2", ".cubes"], 0, {
                    display: "none",
                })
                .add(function () {
                    animateText();
                })
                .to(".cover", 0.5, {
                    height: "3.2rem",
                    ease: Power3.easeInOut,
                    delay: 0.7,
                })
                .to(".cover", 1, {
                    x: "0px",
                    ease: Power3.easeInOut,
                })
                .add(function () {
                    setchange(true);
                })
                .to(".cover", 1, {
                    x: "26rem",
                    ease: Power3.easeInOut,
                    // delay: 1
                })
                .to(".cover", 0.5, {
                    height: "0rem",
                    ease: Power3.easeInOut,
                })
                .to(".loading3", 1, {
                    y: `${-100}vh`,
                    // delay: 4,
                    ease: Power3.easeIn,
                })
                .to(".loading2", 1, {
                    y: `${-100}vh`,
                    delay: -0.95,
                    ease: Power3.easeIn,
                })
                .to(".loading1", 1, {
                    y: `${-100}vh`,
                    delay: -0.95,
                    ease: Power3.easeIn,
                })
                .to("html", 0, {
                    css: {
                        overflowY: "scroll",
                        // overflowX: "hidden"
                    },
                })
                .add(function () {
                    settextAnimation(false);
                })
                .from(".design-heading", 1, {
                    x: "5.2em",
                    opacity: 1,
                    // delay: -1,
                })
                .from(".code-heading", 1, {
                    x: "-4em",
                    // delay: 1
                })
                .to(".intro1", 1, {
                    opacity: 1,
                })
                .to(".intro2", 1, {
                    opacity: 1,
                });

            TweenLite.to(".landingmainmain", {
                opacity: 1,
                ease: Power3.easeIn,
            });

            const t1 = gsap.timeline({
                // yoyo: true,
                repeat: -1,
            });

            // t1.("")
            // TweenMax.
            t1.from(".scroll-circle1", 0.5, {
                opacity: 0,
                // yoyo: true,
                // repeat: -1
            })
                .from(".scroll-circle2", 0.5, {
                    opacity: 0,
                })
                .from(".scroll-moon", 0.5, {
                    opacity: 0,
                })
                .to(".scroll-circle1", 0.5, {
                    opacity: 0,
                    // yoyo: true,
                    // repeat: -1
                })
                .to(".scroll-circle2", 0.5, {
                    opacity: 0,
                    // yoyo: true,
                    // repeat: -1
                })
                .to(".scroll-moon", 0.5, {
                    opacity: 0,
                    // yoyo: true,
                    // repeat: -1
                });

            const t2 = gsap.timeline();

            // t2
            // .to(".cube1", 3, {
            //     y: `-${height / 2.3}px`,
            //     opacity: 1,
            //     delay: -1
            // }).to(".cube2", 2.5, {
            //     y: `-${height / 2.7}px`,
            //     opacity: 1,
            //     delay: -2
            // }).to(".cube3", 4, {
            //     y: `-${height / 2.2}px`,
            //     opacity: 1,
            //     delay: -3
            // }).to(".cube4", 4, {
            //     y: `-${height / 1.9}px`,
            //     // opacity: 1,
            //     delay: -4
            // }).to(".cube5", 4, {
            //     y: `-${height / 1.25}px`,
            //     // opacity: 1,
            //     delay: -5
            // }).to(".cube6", 4, {
            //     y: `-${height / 9}px`,
            //     // opacity: 1,
            //     delay: -3
            // }).to(".cube7", 4, {
            //     y: `-${height / 9.5}px`,
            //     // opacity: 1,
            //     delay: -3
            // }).to(".cube8", 4, {
            //     y: `-${height / 1.4}px`,
            //     // opacity: 1,
            //     delay: -8
            // })

            // cubes animation

            // gsap.to(".master-cube", {
            //     y: `${height - 20}px`,
            //     opacity: 1
            // })
            // gsap.to(".master-cube", 3,

            //     {
            //         y: `-${height / 2}px`,
            //         delay: 2,
            //         opacity: 1,
            //         // repeat: -1,
            //         ease: Power3.easeOut,

            //     })
            // TweenMax.to('.boxes', {
            //     css: {
            //         size: "20rem"
            //     }
            // })

            // TweenLite.to([".cube1", ".cube2", ".cube3", ".cube4", ".cube5", ".cube6", ".cube7", ".cube8"], {
            //     y: `${height - 20}px`,
            //     // opacity: 0
            // })
        }, 500);

        // }
        gsap.to(".contact-form-landing", {
            display: "none",
        });
    }, []);
    function copyToClipboard() {
        navigator.clipboard.writeText("obaidnadeem4@gmail.com");
        window.alert("Email copied!");
    }
    const t4 = gsap.timeline();
    function contact() {
        t4.to(".loading3", 1.5, {
            y: `100vh`,
            // delay: -0.7,
            ease: Power3.easeOut,
        })
            .to(".loading2", 1.5, {
                y: `100vh`,
                delay: -1.3,
                ease: Power3.easeOut,
            })
            .to(".loading1", 1.5, {
                y: `100vh`,
                delay: -1.3,
                ease: Power3.easeOut,
            })
            .to(".contact-form-landing", {
                display: "block",
                delay: -1.3,
            });
    }
    function contactBack() {
        t4.to(".loading3", 1.5, {
            y: `-100vh`,
            // delay: -0.7,
            ease: Power3.easeOut,
        })
            .to(".loading2", 1.5, {
                y: `-100vh`,
                delay: -1.3,
                ease: Power3.easeOut,
            })
            .to(".loading1", 1.5, {
                y: `-100vh`,
                delay: -1.3,
                ease: Power3.easeOut,
            })
            .to(".contact-form-landing", {
                display: "none",
                delay: -1.8,
            });
    }
    // contact()
    //     window.onload = () => {
    //         setloading(false)

    //             // setloading(false)
    //             // console.log(loading)
    //             // console.log(loading)

    //             // setTimeout(() => {
    //         //     setloading(false)
    //         //     console.log(loading)
    //         // }, 8000);

    //         const t1 = gsap.timeline({
    //             // yoyo: true,
    //             repeat: -1
    //         })

    //         // t1.("")
    //         // TweenMax.
    //         t1.from(".scroll-circle1", 0.5, {
    //             opacity: 0,
    //             // yoyo: true,
    //             // repeat: -1
    //         }).from(".scroll-circle2", 0.5, {
    //             opacity: 0
    //         }).from(".scroll-moon", 0.5, {
    //             opacity: 0
    //         }).to(".scroll-circle1", 0.5, {
    //             opacity: 0,
    //             // yoyo: true,
    //             // repeat: -1
    //         }).to(".scroll-circle2", 0.5, {
    //             opacity: 0,
    //             // yoyo: true,
    //             // repeat: -1
    //         }).to(".scroll-moon", 0.5, {
    //             opacity: 0,
    //             // yoyo: true,
    //             // repeat: -1
    //         })

    //         const t2 = gsap.timeline()

    //         t2.from(".design-heading", 1, {
    //             x: "310px",
    //             delay: 1
    //         }).from(".code-heading", 1, {
    //             x: "-216px",
    //             // delay: 1
    //         })

    // }

    return (
        <div
            className="landing-main-root"
            style={{
                fontFamily: "font-family: 'Montserrat', sans-serif;",
                color: "#282828",
            }}
        >
            <div className="contact-form-landing">
                <div
                    onClick={contactBack}
                    style={{ width: "1.5rem", height: "0.2rem" }}
                >
                    <div className="back-cross"></div>
                </div>
                <ContactForm />
            </div>

            <div className="loading1"></div>
            <div className="loading2"></div>
            <div className="loading3">
                <h1
                    className="animate__animated animate__fadeInLeft"
                    style={{
                        color: "#fff",
                        fontSize: "50px",
                    }}
                >
                    {firsto}
                </h1>

                <div className="cover"></div>
                <div className="cubes">
                    <div className="cube">
                        <div className="boxes">
                            <div className="box">
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="cube2">
                        <div className="boxes">
                            <div className="box">
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        "-webkit-box-pack": "center",
                                        "-webkit-justify-content": "center",
                                        "-ms-flex-pack": "center",
                                        "justify-content": "center",
                                        "-webkit-align-items": "center",
                                        "-webkit-box-align": "center",
                                        "-ms-flex-align": "center",
                                        "align-items": "center",
                                        "font-size": "7px",
                                        color: "#f9f9f9",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landingmainmain">
                <nav style={{ height: "10vh", zIndex: 999 }}>
                    <h3
                        style={{
                            fontSize: `${width < 600 ? 1.8 : 1.2}rem`,
                            fontWeight: "lighter",
                        }}
                    >
                        &lt;Tahid /&gt;
                    </h3>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            onClick={() => contact()}
                            style={{
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "baseline",
                                width: `${width < 600 ? 9 : 7.5}rem`,
                                justifyContent: "space-between",
                            }}
                        >
                            <h3
                                className="letstalk"
                                style={{
                                    textAlign: "center",
                                    color: "#f2f2f2",
                                    borderRadius: `${width < 600 ? 5 : 10}px`,
                                    padding: "0.5rem",
                                    zIndex: 999,
                                    fontSize: `${width < 600 ? 1.3 : 0.8}rem`,
                                    fontWeight: "bolder",
                                    cursor: "pointer",
                                    margin: 0,
                                    width: `${width < 600 ? 7 : 4}rem`,
                                }}
                            >
                                Let's talk{" "}
                            </h3>
                            <i class="uil uil-envelope-add"></i>
                        </div>
                    </div>
                    {/* <div onClick={() => contact()} style={{ cursor: "pointer", display: "flex", alignItems: "baseline", width: "7.5rem", justifyContent: "space-between", }}> */}
                    {/* <h3 className="letstalk" style={{textAlign:"center" ,color:"#f2f2f2",borderRadius:"10px" , backgroundColor: "#1c0d2b",padding:"0.5rem" , zIndex: 999, fontSize: '0.8rem', fontWeight: "bolder", cursor: "pointer", margin: 0,width:"4rem" }} >Resume </h3> */}
                    {/* <i class="uil uil-envelope-add"></i> */}
                    {/* </div> */}
                </nav>

                {/* <div style={{ width: `${width}px`, height: `${height}px`, position: "absolute", top: 0, left: 0, overflow: "hidden", zIndex: 10 }}>
                    <div className="cube1">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube2">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube3">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube4">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube5">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube6">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube7">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube8">
                        <div className="boxes">
                            <div className="box">
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                                <div style={{ "display": "flex", "-webkit-box-pack": "center", "-webkit-justify-content": "center", "-ms-flex-pack": "center", "justify-content": "center", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", "align-items": "center", "font-size": "7px", "color": "#f9f9f9" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="middle" style={{}}>
                    <div style={{ color: "#f2f2f2" }}>some</div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div class="designxcode">
                            <h1 className="design-heading" style={{}}>
                                DESIGN
                            </h1>
                            <h1 className="code-heading" style={{}}>
                                CODE
                            </h1>
                            <div className="block1"></div>
                            <div className="block2"></div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <p
                                className="intro1"
                                style={{
                                    margin: 0,
                                    marginBottom: "0.2rem",
                                    fontSize: "1.3rem",
                                }}
                            >
                                Animator, Designer turned Developer.
                            </p>
                            <p
                                className="intro2"
                                style={{ margin: 0, fontSize: "1.3rem" }}
                            >
                                I Design, Code and do some Web Animation stuff.
                            </p>
                        </div>
                    </div>
                    {/* 
                            <div>
                                <div class="workshowcase-platforms">
                                    <i class="uil uil-github"></i>
                                    <i class="uil uil-behance"></i>
                                    <i class="uil uil-dribbble"></i>
                                </div>
                            </div> */}

                    <div style={{ zIndex: 999 }} class="workshowcase-platforms">
                        {/* <a href="https://github.com/ObaidNadeem" target="_blank"> <i style={{ color: "#282828" }} class="uil uil-stackoverflow"></i> </a> */}
                        <a
                            href="https://github.com/ObaidNadeem"
                            target="_blank"
                        >
                            {" "}
                            <i
                                style={{ color: "#282828" }}
                                class="uil uil-github"
                            ></i>{" "}
                        </a>
                        <a
                            href="https://dribbble.com/obaidnadeem"
                            target="_blank"
                        >
                            {" "}
                            <i
                                style={{ color: "#e75480" }}
                                class="uil uil-dribbble"
                            ></i>{" "}
                        </a>
                        <a
                            href="https://www.behance.net/obaidnadeem"
                            target="_blank"
                        >
                            {" "}
                            <i
                                style={{ color: "#053EFF" }}
                                class="uil uil-behance"
                            ></i>{" "}
                        </a>
                    </div>
                </div>

                <div
                    style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* scroll */}
                    <p
                        style={{
                            margin: "0",
                            padding: "0",
                            fontSize: "0.7rem",
                            color: " #282828",
                        }}
                    >
                        scroll
                    </p>
                    <div
                        className="scroll-circle1"
                        style={{
                            marginBottom: "0.25rem",
                            width: "0.5rem",
                            height: "0.5rem",
                            backgroundColor: "#282828",
                            borderRadius: "100%",
                        }}
                    ></div>
                    <div
                        className="scroll-circle2"
                        style={{
                            zIndex: "999",
                            width: "0.625rem",
                            height: "0.625rem",
                            backgroundColor: "#282828",
                            borderRadius: "100%",
                        }}
                    ></div>
                    <div className="scroll-moon"></div>
                </div>
            </div>

            {/* } */}
        </div>
    );
};

// ******* EZAN WALA DESIGN *****

// return (
//     <div className="landingmainmain">

//         <div>
//             <nav>

//                 <div style={{ alignItems: "flex-start" }}>
//                     Obaid
//                 </div>

//                 <div style={{ display: "flex", justifyContent: 'space-between', width: "10rem" }}>
//                     <div>
//                         Serivces
//                     </div>
//                     <div>
//                         About Me
//                     </div>
//                 </div>

//                 <div className="socials">
//                     <i class="uil uil-facebook-f"></i>
//                     <i class="uil uil-linkedin-alt"></i>
//                     <i class="uil uil-github"></i>
//                     <i class="uil uil-behance"></i>

//                 </div>

//             </nav>
//         </div>

//         <div className="center-content">

//             <div>
//                 <h1 style={{ fontFamily: "Montserrat-Regular", fontSize: "5rem", fontWeight: "lighter" }}>
//                     I
//                 </h1>
//             </div>

//             <div className="svg-outlines">
//                 <svg className="design-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 465 130" enableBackground="new 0 0 465 105" xmlSpace="preserve">
//                     <text transform="matrix(1 0 0 1 -7.4995 94.47)" stroke="#000000" strokeWidth={1.5} strokeMiterlimit={10} fontFamily="'Montserrat-Regular'" fontSize={120}>Design</text>
//                 </svg>
//                 <h1>X</h1>
//                 <svg className="code-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 130" enableBackground="new 0 0 480 105" xmlSpace="preserve">
//                     <text transform="matrix(1 0 0 1 -7.4995 94.47)" stroke="#000000" strokeWidth={1.5} strokeMiterlimit={10} fontFamily="'Montserrat-Regular'" fontSize={120}>Develop</text>
//                 </svg>

//                 {/* <svg className="code-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 358 105" enableBackground="new 0 0 358 105" xmlSpace="preserve">
//                 <text transform="matrix(1 0 0 1 -1.0389 94.4697)" stroke="#000000" strokeWidth={1.5} strokeMiterlimit={10} fontFamily="'Montserrat-Regular'" fontSize={120}>Code</text>
//             </svg> */}
//                 {/* </div> */}

//                 {/* <div> */}

//             </div>

//         </div>

//         <div className="obaidnadeem-tag">
//             <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" enableBackground="new 0 0 480 480" xmlSpace="preserve">
//                 <g>
//                     <path d="M99.2,105.1c0.3,3.9-1,7.5-3.7,10.6c-2.7,3.2-4.56,4.9-10,5.3c-3.9,0.3-7.5-0.8-10.6-3.5c-3.1-2.7-4.8-6-5.1-9.9
// 	c-0.3-3.9,1-7.5,3.7-10.6c2.7-3.2,6-4.9,10-5.3c3.9-0.3,7.5,0.8,10.6,3.5C94.5.3,97.9,98.9,101.2,99.2,105.1z M83.7,96.4
// 	c-2.7,0.2-5,1.3-6.8,3.4c-1.8,2.1-2.6,4.5-2.3,7.3c0.3,2.7,1.5,5,3.6,6.8c2.1,1.8,4.6,2.7,7.3,2.5c2.7-0.2,5-1.3,6.8-3.4
// 	c1.8-2.1,2.6-4.5,2.3-7.3c-0.3-2.7-1.5-5-3.6-6.8C88.8,97,86.4,96.2,83.7,96.4z" />
//                     <path d="M170.8,62.2l-11.4,4.5l-10.4-26l10.1-4c1.8-0.7,3.4-1.1,4.8-1.2c1.4-0.1,2.6,0.1,3.5,0.6c1.7,0.9,2.9,2.1,3.6,3.8
// 	c0.8,2,0.8,3.8-0.1,5.3c-0.3,0.5-0.6,0.9-0.7,1c-0.1,0.2-0.4,0.4-0.8,0.8c1.7-0.3,3.3-0.1,4.7,0.6c1.4,0.7,2.4,1.9,3.1,3.5
// 	c0.7,1.8,0.7,3.7,0.1,5.5C176.5,58.9,174.3,60.8,170.8,62.2z M157.7,49.8l5.6-2.2c3.2-1.3,4.3-3,3.5-5.1c-0.5-1.2-1.2-2-2.2-2.2
// 	c-1-0.2-2.3,0-3.9,0.6L155,43L157.7,49.8z M162.2,60.9l6.9-2.7c1.6-0.6,2.7-1.4,3.4-2.2c0.7-0.8,0.7-2,0.1-3.4
// 	c-0.9-2.3-3.2-2.7-6.9-1.2l-6.3,2.5L162.2,60.9z" />
//                     <path d="M250.2,42.9l-3.3,6.1l-5-0.4l14.7-26.8l5,0.4l9.8,28.9l-5-0.4l-2.2-6.6L250.2,42.9z M262.7,39.6l-4.1-11.9l-6.1,11
// 	L262.7,39.6z" />
//                     <path d="M346,48.6l4.1,2.3l-13.8,24.3l-4.1-2.3L346,48.6z" />
//                     <path d="M420.5,122.5c-0.4,3.6-2.4,6.7-5.9,9.2c-3.5,2.5-7.1,3.5-10.7,2.8c-3.6-0.7-6.9-3.2-10.1-7.5l-5.4-7.5l22.7-16.3l5.6,7.8
// 	C419.7,115.1,420.9,118.9,420.5,122.5z M411.7,127.9c5.2-3.7,5.7-8.6,1.4-14.5l-2.7-3.8l-15.6,11.2l3,4.3c2,2.8,4.1,4.4,6.5,4.9
// 	S409.1,129.8,411.7,127.9z" />
//                     <path d="M435.2,339.1l-2,4.3l-25.4-11.7l2.2-4.6l25.2-5.8l-18.5-8.6l2-4.3l25.4,11.7l-2,4.3l-25.8,6L435.2,339.1z" />
//                     <path d="M365.8,392l-1.7-6.7l4-3.1l7.3,29.7l-4,3.1l-26.8-14.6l4-3.1l6.1,3.3L365.8,392z M358.9,402.9l11.1,6l-3-12.2L358.9,402.9z
// 	" />
//                     <path d="M269,453.3c-3.1-1.9-5-5-5.8-9.3c-0.8-4.3-0.1-7.9,2-10.9s5.8-4.9,11.1-5.9l9.1-1.7l5,27.5l-9.4,1.7
// 	C276.1,455.8,272.1,455.3,269,453.3z M267.9,443.1c1.1,6.3,5.3,8.8,12.5,7.5l4.6-0.8l-3.4-18.9l-5.2,0.9c-3.3,0.6-5.7,1.9-7.2,3.8
// 	C267.8,437.5,267.3,440,267.9,443.1z" />
//                     <path d="M167.6,446.7l1.3-4.3l14.3,4.3l2.1-7.1l-12.8-3.8l1.2-4l12.8,3.8l2.1-7.2l-14.8-4.4l1.3-4.3l19.3,5.8l-8,26.8L167.6,446.7z
// 	" />
//                     <path d="M84.2,393.9l3-3.3l11,10.1l5-5.4l-9.9-9.1l2.8-3.1l9.9,9.1l5.1-5.5l-11.3-10.4l3-3.3l14.8,13.6l-18.9,20.6L84.2,393.9z" />
//                     <path d="M63.7,313.8l1.6,4.5l-26.4,9.3l-2.4-6.9l13.8-13.8l-19.4-2.2l-2.4-6.9l26.4-9.3l1.6,4.5l-20.6,7.2l21.5,2.8l0.9,2.5
// 	L43.1,321L63.7,313.8z" />
//                 </g>
//             </svg>

//         </div>
// </div>
// )
