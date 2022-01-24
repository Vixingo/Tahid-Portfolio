import React, { useEffect, useRef, useState } from "react";
// import ReactDOM from 'react-dom';
import "./frontend.css";
import anime from "animejs/lib/anime.es.js";
import { gsap, TweenMax, TimelineLite, Power3, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "../components/useWindowSize";
import { TextPlugin } from "gsap/TextPlugin";
// import DATAPNG from './data.png'

export const Screens = () => {
    const [screen, setScreen] = useState();
    const screenSize = useRef();
    const [state, setstate] = useState(true);
    // console.log("disone",mainWidth);
    // console.log(screen);
    function burger() {
        setstate(false);
        // console.log(state)
    }

    function nav() {
        setstate(true);
        // console.log(state)
    }

    useEffect(() => {
        gsap.to(".responsive-heading-main", {
            // duration: 2,
            scrollTrigger: {
                trigger: ".responsive-heading-main",
                start: "296 0",
                end: "296 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: burger,
                onEnterBack: nav,
                // toggleActions: "reset pause resume reverse",

                //  pinSpacing: 1000,
                //  pinSpacing: false
            },
        });
    }, []);

    // const[screenWidth,screenHeight] = screen()

    // return size;

    // useEffect(() => {
    // setscreen = ([screenSize.current.offsetWidth])
    // console.log(screenSize.current.offsetWidth)

    // },)

    return (
        <div className="devices-main-frame">
            <div ref={screenSize} className="device-frame">
                <div className="mobile-devices">
                    {state ? (
                        <div className="burger-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <div className="screens-nav">
                            <nav>
                                <a
                                    style={{
                                        fontSize:
                                            screenSize.current.offsetWidth *
                                            0.04,
                                    }}
                                >
                                    Home
                                </a>
                                <a
                                    style={{
                                        fontSize:
                                            screenSize.current.offsetWidth *
                                            0.04,
                                    }}
                                >
                                    About
                                </a>
                                <a
                                    style={{
                                        fontSize:
                                            screenSize.current.offsetWidth *
                                            0.04,
                                    }}
                                >
                                    Gallery
                                </a>
                                <a
                                    style={{
                                        fontSize:
                                            screenSize.current.offsetWidth *
                                            0.04,
                                    }}
                                >
                                    Contact
                                </a>
                            </nav>
                        </div>
                    )}
                    <div className="content">
                        <div className="main-heading"></div>
                        <div className="sub-heading"></div>
                        <div className="header"></div>
                        <div className="cards">
                            <div className="card1-main">
                                <div className="card1"></div>
                                <div className="text1">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <div className="card2-main">
                                <div className="card2"></div>
                                <div className="text1">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <div className="card3-main">
                                <div className="card3"></div>
                                <div className="text1">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                            <div className="card3-main">
                                <div className="card3"></div>
                                <div className="text1">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`${state ? "hide" : ""} screen-footer`}
                        ></div>
                    </div>
                </div>
                <div className="switch"></div>
            </div>
            <div className={`${state ? "hide" : ""} stand`}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export const Frontend = () => {
    // THIS COMPONENT WAS NAMED AS RESPONSIVE AND WAS LATER RENAMED AS FRONTEND THAT'S WHY IT'S CLASSES HAI RESPONSIVE WORD IN THEM

    const resp = useRef(null);
    const hTag = useRef(null);
    const [height, width] = useWindowSize();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    function stage1() {
        console.log("stage 1 running");
        anime({
            targets: ".morph",
            d: [
                {
                    value: "M1599.5,226.2c69.8,28.9,101.4,117.4,101.4,157.1s-23.6,125,15.7,135.5c74.3,19.8,61.6,113.9,58.3,166.2	c-7.3,113.5-151.2,256.5-363.1,177c0,0-377.3-126.4-262.1-269.1c87.4-135.5,54.6-233.2,35.3-265.5c-35.4-59.4,83.6-97.5,83.6-97.5 S1424.8,154,1599.5,226.2z",
                },
                {
                    value: "M1646.4,232.9c69.8,28.9,127.3,122.1,127.3,161.8s-10.2,107.7,29.1,118.2c74.3,19.8,37.6,176.4,12.7,223.6 c-52.9,100.6-264.5,261.3-476.4,181.8c0,0-438.6-148.2-323.4-290.9c87.4-135.5-17.4-214.9-36.6-247.3 c-35.4-59.4,226.4-149.1,226.4-149.1S1471.7,160.7,1646.4,232.9z",
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage1Reverse() {
        console.log("stage 1 reverse running");

        anime({
            targets: ".morph",
            d: [
                {
                    value: "M1646.4,232.9c69.8,28.9,127.3,122.1,127.3,161.8s-10.2,107.7,29.1,118.2c74.3,19.8,37.6,176.4,12.7,223.6 c-52.9,100.6-264.5,261.3-476.4,181.8c0,0-438.6-148.2-323.4-290.9c87.4-135.5-17.4-214.9-36.6-247.3 c-35.4-59.4,226.4-149.1,226.4-149.1S1471.7,160.7,1646.4,232.9z",
                },
                {
                    value: "M1599.5,226.2c69.8,28.9,101.4,117.4,101.4,157.1s-23.6,125,15.7,135.5c74.3,19.8,61.6,113.9,58.3,166.2	c-7.3,113.5-151.2,256.5-363.1,177c0,0-377.3-126.4-262.1-269.1c87.4-135.5,54.6-233.2,35.3-265.5c-35.4-59.4,83.6-97.5,83.6-97.5 S1424.8,154,1599.5,226.2z",
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage2() {
        console.log("stage 2 running");

        anime({
            targets: ".morph",
            d: [
                {
                    value: "M1646.4,232.9c69.8,28.9,127.3,122.1,127.3,161.8s-10.2,107.7,29.1,118.2c74.3,19.8,37.6,176.4,12.7,223.6 c-52.9,100.6-264.5,261.3-476.4,181.8c0,0-438.6-148.2-323.4-290.9c87.4-135.5-17.4-214.9-36.6-247.3 c-35.4-59.4,226.4-149.1,226.4-149.1S1471.7,160.7,1646.4,232.9z",
                },
                {
                    value: "M1721.9,80.8c69.8,28.9,156,83.3,156,123s2.8,400.6,42.1,411c74.3,19.8-153.1,426-225.1,465.2 c-99.9,54.3-665.4-96.1-877.3-175.6c0,0-420.1-152.9-304.8-295.6c87.4-135.5-68.3-190.6-72-228c-21-210,583.8-307.2,583.8-307.2 S1547.2,8.5,1721.9,80.8z",
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage2Reverse() {
        console.log("stage 2 running");

        anime({
            targets: ".morph",
            d: [
                {
                    value: "M1721.9,80.8c69.8,28.9,156,83.3,156,123s2.8,400.6,42.1,411c74.3,19.8-153.1,426-225.1,465.2 c-99.9,54.3-665.4-96.1-877.3-175.6c0,0-420.1-152.9-304.8-295.6c87.4-135.5-68.3-190.6-72-228c-21-210,583.8-307.2,583.8-307.2 S1547.2,8.5,1721.9,80.8z",
                },
                {
                    value: "M1646.4,232.9c69.8,28.9,127.3,122.1,127.3,161.8s-10.2,107.7,29.1,118.2c74.3,19.8,37.6,176.4,12.7,223.6 c-52.9,100.6-264.5,261.3-476.4,181.8c0,0-438.6-148.2-323.4-290.9c87.4-135.5-17.4-214.9-36.6-247.3 c-35.4-59.4,226.4-149.1,226.4-149.1S1471.7,160.7,1646.4,232.9z",
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage3() {
        console.log("stage 3 running");

        anime({
            targets: ".morph",
            d: [
                {
                    value: "M1721.9,80.8c69.8,28.9,156,83.3,156,123s2.8,400.6,42.1,411c74.3,19.8-153.1,426-225.1,465.2 c-99.9,54.3-665.4-96.1-877.3-175.6c0,0-420.1-152.9-304.8-295.6c87.4-135.5-68.3-190.6-72-228c-21-210,583.8-307.2,583.8-307.2 S1547.2,8.5,1721.9,80.8z",
                },
                {
                    value: "M1907.1 -300.7c69.8,28.9,350,672.7,222,712.5s5.700000000000003,136.7,45,147.2c74.3,19.8,102.4,500.6,99,518.9 c-7.3,113.5 -2000.3,298.5 -2000.1,219c0,0 -2000.6 -143.7 -2000.3 -500.4c87.4 -200.5,82.19999999999999 -2000.8000000000002,430.3 -2000.8000000000002	c281 -200.7,948.1,51,948.1,51S1733.2 -500.9,2000.1 -400.7z",
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }
    function stage3Reverse() {
        console.log("stage 3 running");

        anime({
            targets: ".morph",
            d: [
                {
                    value: "M1907.1 -300.7c69.8,28.9,350,672.7,222,712.5s5.700000000000003,136.7,45,147.2c74.3,19.8,102.4,500.6,99,518.9 c-7.3,113.5 -2000.3,298.5 -2000.1,219c0,0 -2000.6 -143.7 -2000.3 -500.4c87.4 -200.5,82.19999999999999 -2000.8000000000002,430.3 -2000.8000000000002	c281 -200.7,948.1,51,948.1,51S1733.2 -500.9,2000.1 -400.7z",
                },
                {
                    value: "M1721.9,80.8c69.8,28.9,156,83.3,156,123s2.8,400.6,42.1,411c74.3,19.8-153.1,426-225.1,465.2 c-99.9,54.3-665.4-96.1-877.3-175.6c0,0-420.1-152.9-304.8-295.6c87.4-135.5-68.3-190.6-72-228c-21-210,583.8-307.2,583.8-307.2 S1547.2,8.5,1721.9,80.8z",
                },
            ],
            easing: "easeOutQuad",
            duration: 500,
        });
    }

    useEffect(() => {
        gsap.to(".responsive-heading-main", {
            //  css: {background: 'blue'},
            // duration: 2,
            scrollTrigger: {
                trigger: ".responsive-heading-main",
                start: "top 0",
                end: "175% 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                //  pinSpacing: 1000,
                // pinSpacing: true
            },
            // toggleClass: '.change'
        });

        gsap.to(".svgMain", {
            duration: 2,
            scrollTrigger: {
                trigger: ".svgMain",
                start: "8% 0",
                end: "8% 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: stage1,
                onEnterBack: stage1Reverse,
                // toggleActions: "reset pause resume reverse",

                //  pinSpacing: 1000,
                //  pinSpacing: false
            },
        });

        gsap.to(".svgMain", {
            duration: 2,
            scrollTrigger: {
                trigger: ".svgMain",
                start: "45% 0",
                end: "45% 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                // scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: stage2,
                onEnterBack: stage2Reverse,
                // toggleActions: "reset pause resume reverse",
                //  pinSpacing: 1000,
                //  pinSpacing: false
            },
        });

        gsap.to(".svgMain", {
            duration: 2,
            scrollTrigger: {
                trigger: ".svgMain",
                start: "80% 0",
                end: "80% 0",
                // markers: true,
                // toggleActions: "play pause resume pause",
                scrub: true,
                // toggleClass: "change",
                // duration
                // pin: true,
                onEnter: stage3,
                onEnterBack: stage3Reverse,
                // toggleActions: "reset pause resume reverse",

                //  pinSpacing: 1000,
                //  pinSpacing: false
            },
        });

        // gsap.to('.res-text', {
        //     duration: 2,
        //     scrollTrigger: {
        //         trigger: '.res-text',
        //         start: "top 0",
        //         end: "bottom 0",
        //         // markers: true,
        //         // toggleActions: "play pause resume pause",
        //         scrub: true,
        //         // toggleClass: "change",
        //         // duration
        //         // pin: true,
        //         markers: true,
        //         toggleClass: "resTextAnimate"
        //         // onEnter: stage3,
        //         // onEnterBack: stage3Reverse,
        //         // toggleActions: "reset pause resume reverse",

        //         //  pinSpacing: 1000,
        //         //  pinSpacing: false

        //     }
        // })

        // gsap.to('.h11', {
        //     duration: 2,
        //     scrollTrigger: {
        //         trigger: '.h11',
        //         start: "10 0",
        //         end: "bottom 0",
        //         // markers: true,
        //         // toggleActions: "play pause resume pause",
        //         // scrub: true,
        //         // toggleClass: "change",
        //         // duration
        //         // pin: true,
        //         markers: true,
        //         toggleClass: "h1Animate"
        //         // onEnter: stage3,
        //         // onEnterBack: stage3Reverse,
        //         // toggleActions: "reset pause resume reverse",

        //         //  pinSpacing: 1000,
        //         //  pinSpacing: false

        //     }
        // })

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".responsive-heading-main",
                // markers: true,
                start: "top 0",
                end: "bottom 0",
                pin: true,
                scrub: 0.5,
            },
        });

        width > 600
            ? tl1.to(".device-frame", {
                  css: { width: `${75}%`, height: `${100}%` },
                  duration: 2,
              })
            : tl1.to(".device-frame", {
                  css: { width: `${90}%`, height: `${85}%` },
                  duration: 2,
              });
        width < 600 ? console.log("smol") : console.log("biq");
        // tl1.to('.device-frame', { css: { width: `${75}%`, height: `${100}%` }, duration: 2 })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".h11",
                // markers: true,
                start: "top 0",
                end: "top 0",
                // pin: true,
                scrub: true,
            },
        });

        tl2.to(".h11", { css: { fontSize: "2.5vw" } }).to(".res-text", {
            css: { width: "4vw", marginTop: "1vw" },
            delay: -0.5,
        });

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".h11",
                // markers: true,
                start: "250 top",
                end: "250 top",
                // pin: true,
                scrub: true,
            },
        });

        // tl3.to('.h11', { css: { fontSize: "5rem" }, })
        //     .to('.res-text', { css: { width: "", marginTop: "0" }, delay: -0.5, duration: 2 })

        // resp.current.addEventListener("mouseover", function(){
        //     // hTag.current.style.fontSize = "2rem"

        //     // resp.current.h1.style.width="2rem"
        //     console.log("mouse over")
        // })

        // resp.current.addEventListener("mouseout", function(){
        //     hTag.current.style.fontSize = "5rem"

        //     // resp.current.h1.style.width="2rem"
        // })

        gsap.to(".description", {
            duration: 15,
            scrollTrigger: {
                trigger: ".description",
                // markers: true,
                start: "top 0",
                // end: 'bottom 0',
                // pin: true,
                scrub: 1,
            },
            text: "Fully Responsive, Dynamic and Optimized frontend with sickest web animations.",
            ease: "Circ.out",
        });

        gsap.to(".responsive-heading-main", {
            duration: 15,
            css: { display: "none" },
            scrollTrigger: {
                trigger: ".responsive-heading-main",
                // markers: true,
                start: "100% 0",
                // end: 'bottom 0',
                // pin: true,
                scrub: true,
            },
        });

        // gsap.to(".data-image", {
        //     // left: '40px' ,
        //     duration: 1,
        //     motionPath: {
        //         path: ".data-path",
        //         align: ".data-path",
        //         autoRotate: true,
        //         alignOrigin: [0.5, 0.5],
        //         start: 0,
        //         end: 0.47,
        //         ease: Power3.easeInOut
        // }
        // })
    });

    return (
        <div>
            <div className="responsive-heading-main">
                {/* "Design is so simple, that's why it is so complicated." */}
                <div className="left">
                    <div ref={resp} className="responsive-text">
                        <div className="responsive-text2">
                            <div>
                                <h1>FRO</h1>
                            </div>
                            <div className="res-text">
                                <h1 ref={hTag} className="h11">
                                    N
                                </h1>
                                <h1 ref={hTag} className="h11">
                                    T
                                </h1>
                                <h1 className="h11">E</h1>
                                <h1 className="h11">N</h1>
                            </div>
                            <div>
                                <h1>D</h1>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div className="description"></div>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <Screens />
                        {/* <div className="data-path"> </div>
                        <img className="data-image" src={DATAPNG}></img> */}
                    </div>
                </div>
                {/* <div style={{ width: width, height: height, display: "flex", justifyContent: "center" }} className="svg-container"> */}
                {/* <svg
                    // style={{textAlign: "center", marginRight: 500}}
                    className="svgMain"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox={`0 0 3840 2160`}
                // enableBackground="new 0 0 1366 768"
                // xmlSpace="preserve"
                >
                    <path
                        className="morph"
                        d="M1129.2,161.3c48.2,20.5,69.9,83.3,69.9,111.5c0,28.2-16.3,88.7,10.8,96.2c51.3,14,42.5,80.8,40.2,117.9
                                c-5,80.5-104.3,182.1-250.5,125.6c0,0-260.3-89.7-180.8-191c60.3-96.2,37.6-165.5,24.4-188.5c-24.4-42.2,57.7-69.2,57.7-69.2
                                S1008.6,110,1129.2,161.3z"
                    />
                </svg> */}
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox={`${width < 1367 ? "-50" : "0"} 0 1920 1080`}
                    xmlSpace="preserve"
                    className="svgMain"
                >
                    <path
                        className="morph"
                        d="M1599.5,226.2c69.8,28.9,101.4,117.4,101.4,157.1s-23.6,125,15.7,135.5c74.3,19.8,61.6,113.9,58.3,166.2	c-7.3,113.5-151.2,256.5-363.1,177c0,0-377.3-126.4-262.1-269.1c87.4-135.5,54.6-233.2,35.3-265.5c-35.4-59.4,83.6-97.5,83.6-97.5 S1424.8,154,1599.5,226.2z"
                    />
                </svg>
                {/* </div> */}
            </div>
        </div>
    );
};

// *** THE BACKGROUND SVG BLOB ANIMATION THAT WAS MADE FOR 1366x768 res IS KEPT HERE FOR BACKUP ********* //
// function stage1() {
//     console.log("stage 1 running")
//     anime({
//         targets: ".morph",
//         d: [
//             {
//                 value:
//                     "M1129.2,161.3c48.2,20.5,69.9,83.3,69.9,111.5c0,28.2-16.3,88.7,10.8,96.2c51.3,14,42.5,80.8,40.2,117.9 c-5,80.5-104.3,182.1-250.5,125.6c0,0-260.3-89.7-180.8-191c60.3-96.2,37.6-165.5,24.4-188.5c-24.4-42.2,57.7-69.2,57.7-69.2 S1008.6,110,1129.2,161.3z"
//             },
//             {
//                 value:
//                     "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
//             },
//         ],
//         easing: "easeOutQuad",
//         duration: 500,
//     });
// }
// function stage1Reverse() {
//     console.log("stage 1 reverse running")

//     anime({
//         targets: ".morph",
//         d: [
//             {
//                 value:
//                     "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
//             },
//             {
//                 value:
//                     "M1129.2,161.3c48.2,20.5,69.9,83.3,69.9,111.5c0,28.2-16.3,88.7,10.8,96.2c51.3,14,42.5,80.8,40.2,117.9 c-5,80.5-104.3,182.1-250.5,125.6c0,0-260.3-89.7-180.8-191c60.3-96.2,37.6-165.5,24.4-188.5c-24.4-42.2,57.7-69.2,57.7-69.2 S1008.6,110,1129.2,161.3z"
//             },
//         ],
//         easing: "easeOutQuad",
//         duration: 500,
//     });
// }
// function stage2() {
//     console.log("stage 2 running")

//     anime({
//         targets: ".morph",
//         d: [
//             {
//                 value:
//                     "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
//             },
//             {
//                 value:
//                     "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
//             },
//         ],
//         easing: "easeOutQuad",
//         duration: 500,
//     });

// }
// function stage2Reverse() {
//     console.log("stage 2 running")

//     anime({
//         targets: ".morph",
//         d: [
//             {
//                 value:
//                     "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
//             },
//             {
//                 value:
//                     "M1205,132c48.2,20.5,70,75.8,70,104c0,28.2-49.1,100.5-22,108c51.3,14,60.3,82.9,58,120c-5,80.5-235.8,276.5-382,220 c0,0-301.5-150.7-222-252c60.3-96.2,41.2-163,28-186c-24.4-42.2,174-106.9,174-106.9S1084.4,80.7,1205,132z"
//             },
//         ],
//         easing: "easeOutQuad",
//         duration: 500,
//     });

// }
// function stage3() {
//     console.log("stage 3 running")

//     anime({
//         targets: ".morph",
//         d: [
//             {
//                 value:
//                     "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
//             },
//             {
//                 value:
//                     "M1329.9-100.2c69.2,29,323.8,71.6,318,111c-7.1,48.1-105.2,313.6-78,321c51.3,14,23.3,253.9,21,291 c-5,80.5-1002.9,335.4-849.1,279c0,0-912.5-78.7-833-180c60.3-96.2,10.4-617.1,52.9-732.1c40.5-109.5,669.1-45,669.1-45 S1208.4-121.2,1329.9-70.2z"
//             },
//         ],
//         easing: "easeOutQuad",
//         duration: 500,
//     });

// }

// function stage3Reverse() {
//     console.log("stage 3 running")

//     anime({
//         targets: ".morph",
//         d: [
//             {
//                 value:
//                     "M1329.9-100.2c69.2,29,323.8,71.6,318,111c-7.1,48.1-105.2,313.6-78,321c51.3,14,23.3,253.9,21,291 c-5,80.5-702.9,335.4-849.1,279c0,0-912.5-78.7-833-180c60.3-96.2,10.4-617.1,52.9-732.1c40.5-109.5,669.1-45,669.1-45 S1208.4-121.2,1329.9-70.2z"
//             },
//             {
//                 value:
//                     "M1182.6,33.1c69.2,29,189.2,125.6,183.4,165c-7.1,48.1-47.6,178.5-20.4,185.9c51.3,14,40.8,189.5,38.5,226.6 c-5,80.5-298.7,213.8-444.9,157.4c0,0-650.5-216.6-571-317.9c60.3-96.2-89-119-46.5-234c40.5-109.5,390-180,390-180 S1061.1-17.9,1182.6,33.1z"
//             },
//         ],
//         easing: "easeOutQuad",
//         duration: 500,
//     });
// }
