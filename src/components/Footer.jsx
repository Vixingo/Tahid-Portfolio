import React, { useEffect, useRef, useState } from "react";
import { gsap, TweenMax, TweenLite, TimelineLite, Power3, Circ } from "gsap";
import "./Footer.css";
import { useWindowSize } from "../components/useWindowSize";
// import ObaidNadeemResume from '../Landing-main/Obaid Nadeem Resume.pdf'

export const Footer = () => {
    const [height, width] = useWindowSize();

    // const t4 = gsap.timeline();

    const t4 = gsap.timeline();
    function contact() {
        t4.to(".loading3", 1.5, {
            y: `${height}px`,
            // delay: -0.7,
            ease: Power3.easeOut,
        })
            .to(".loading2", 1.5, {
                y: `${height}px`,
                delay: -1.3,
                ease: Power3.easeOut,
            })
            .to(".loading1", 1.5, {
                y: `${height}px`,
                delay: -1.3,
                ease: Power3.easeOut,
            })
            .to(".contact-form-landing", {
                display: "block",
                delay: -1.3,
            });
    }

    return (
        <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
            <div
                style={{
                    width: "100vw",
                    height: "70vh",
                    backgroundColor: "#f2f2f2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <h1 style={{ fontWeight: "lighter" }}>
                    Hey! I know you want a website like this?
                </h1>
                <h1
                    className="footer_talk"
                    onClick={contact}
                    style={{ zIndex: "10", cursor: "pointer", margin: 0 }}
                >
                    Let's talk <i class="uit uit-arrow-circle-right"></i>
                </h1>
                <h1 style={{ fontWeight: "lighter" }}>
                    about your <i>project</i> or let's just have a{" "}
                    <i>cup to coffee together!</i>
                </h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: `${width < 600 ? 50 : 30}%`,
                    }}
                >
                    {/* <i style={{ fontSize: `${width < 600 ? 3 : 2}rem`, color: "#f2f2f2" }} class="uil uil-facebook"></i> */}
                    {/* <i style={{ fontSize: `${width < 600 ? 3 : 2}rem`, color: "#f2f2f2" }} class="uil uil-instagram-alt"></i> */}
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/obaidnadeem/"
                    >
                        {" "}
                        <i
                            style={{
                                fontSize: `${width < 600 ? 3 : 2}rem`,
                                color: "#282828",
                                transform: "none",
                            }}
                            class="uil uil-linkedin"
                        ></i>{" "}
                    </a>
                    <a target="_blank" href="https://github.com/ObaidNadeem">
                        {" "}
                        <i
                            style={{
                                fontSize: `${width < 600 ? 3 : 2}rem`,
                                color: "#282828",
                            }}
                            class="uil uil-github"
                        ></i>{" "}
                    </a>
                    <a
                        target="_blank"
                        href="https://www.behance.net/obaidnadeem"
                    >
                        {" "}
                        <i
                            style={{
                                fontSize: `${width < 600 ? 3 : 2}rem`,
                                color: "#282828",
                            }}
                            class="uil uil-behance"
                        ></i>{" "}
                    </a>
                    <a target="_blank" href="https://dribbble.com/obaidnadeem">
                        {" "}
                        <i
                            style={{
                                fontSize: `${width < 600 ? 3 : 2}rem`,
                                color: "#282828",
                            }}
                            class="uil uil-dribbble"
                        ></i>{" "}
                    </a>
                </div>
                <p style={{ color: "#282828" }}> reach.obaidnadeem@gmail.com</p>
                {/* <h3>If you are in Karachi then let's have a Cup of Coffee!</h3> */}
                {/* <div style={{display:"flex",alignItems:"center",fontSize: "1.5rem",}}>
                    <a style={{ cursor: "pointer", textDecoration: "none", color: "#282828", zIndex: "999",  margin: "0", padding: "0",marginRight:"0.5rem" }} href={ObaidNadeemResume} download  ><h3>Resume</h3> 
                    </a>
                    <i class="uit uit-download-alt"></i>
                </div> */}
            </div>
            <div
                style={{
                    width: "100vw",
                    height: "30vh",
                    backgroundColor: "#1c0d2b",
                    position: "fixed",
                    bottom: 0,
                    zIndex: -1,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h4
                    style={{
                        fontWeight: "lighter",
                        color: "white",
                        margin: 0,
                        color: "#f2f2f2",
                    }}
                >
                    Ⓒ Obaid Nadeem 2021-2022
                </h4>
                {/* <h3 style={{ color: "#f2f2f2", fontSize: `${width < 600 ? 2 : ""}rem` }}>CONNECT WITH ME</h3> */}
                <p style={{ fontWeight: "lighter", color: "#f2f2f2" }}>
                    *for feedbacks or any improvements on this website{" "}
                    <i>email me</i> or leave a message for me on <i>LinkedIn</i>
                </p>
                {/* <h4 style={{fontWeight:"lighter",color:"#f2f2f2"}}>Created Using : React JS, Green Stock Animation Platform, Anime Js, Scalar Vector Graphics,CSS animations</h4> */}
            </div>
        </div>
    );
};
