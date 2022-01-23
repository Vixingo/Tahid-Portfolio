import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, TweenMax, TweenLite, TimelineLite, Power3, Circ } from "gsap";
import { Home } from "./Home/Home";
// import { Navbar } from "./component/nav/Navbar";
import { useWindowSize } from "./component/useWindowSize";
// import { Test } from "./Test/Test.jsx";
// import { TextAnimation } from "./component/TextAnimation/TextAnimation";
import LogRocket from "logrocket";
import ReactGA from "react-ga";

function App() {
    useEffect(() => {
        LogRocket.init("hagieh/personal-web");

        ReactGA.initialize("G-Z5417T19B7");
        ReactGA.pageview("/");
    }, []);

    const [State, setState] = useState(false);
    const [height, width] = useWindowSize();

    console.log(height);
    console.log(width);

    gsap.registerPlugin(ScrollTrigger);
    // const container = useRef(null)

    // useEffect(() => {
    //   function setHeight() {
    //     let height = container.current.clientHeight;
    //     document.body.style.height = height + "px";
    //   }
    //   ScrollTrigger.addEventListener("refreshInit", setHeight);
    //   gsap.to(container.current, {
    //     y: () => -(container.current.getBoundingClientRect().height - document.documentElement.clientHeight),
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger:'main-app',
    //       start: "top top",
    //       end: "bottom bottom",
    //       scrub:2,
    //       pinSpacing: false
    //       // invalidateOnRefresh: true
    //     }
    //   });
    //   // if(ref){
    //   //   new LocomotiveScroll({
    //   //     el: ref.current,
    //   //     smooth: true,
    //   //     muliplier: 0.1
    //   //   })
    //   // }

    //   // gsap.to(".main-app", 2,{
    //   //   y: -10,
    //   //   scrollTrigger: {
    //   //     trigger: '.main-app',
    //   //     start: "top 20",
    //   //     end: "bottom 0",
    //   //     // scrub: 1,
    //   //     markers: true
    //   //   }
    //   // })

    // }, [])

    console.log(window.innerHeight);
    // function change() {
    // setState(true)
    // }

    // console.log(State)
    return (
        <div className="main-app" data-scroll-container>
            {/* the height is {height} */}
            {/* the width is {width} */}
            {/* {width > 350 ? <Home /> : <p>please view on pc devices</p>} */}

            {/* <Test /> */}

            {/* { width < 550 ? <div style={{
      width:"100vw",
      height:"100vh",
      background: "purple",
      margin: 0,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      justifyContent:"center"
    }}> <h1 style={{margin:0,color:"white",width:"50vw",textAlign:"center"}}> MOBILE VIEW WILL BE RELEASED IN A WEEK, TILL THEN ENDORSE THE PC VIEW</h1> </div> : <Home /> } */}

            <Home />

            {/* <TextAnimation name={ "OBAID NADEEM" } /> */}

            {/* <home /> */}
            {/* <UiCode /> */}
        </div>
    );
}

export default App;
