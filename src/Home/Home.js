import React, { useState, useRef, useEffect } from "react";
// import { Navbar } from "../../component/nav/Navbar";
import { Landing } from "../component/Landing";
import { Frontend } from "../component/frontend";
// import { Ui } from '../../component/Ui/Ui'
import { Ui } from "../component/UiComponent";
// import { Screens } from "../../component/frontend";
import { Landingmain } from "../component/Landingmain";
import { Personalinfo } from "../component/personalinfo";
// import { GraphicDesign } from "../../component/GraphicDesign/GraphicDesign";
// import { Cuberto } from "../Cuberto";
// import { ContactForm } from "../../component/ContactForm/ContactForm";
// import { WebAnimations } from "../../component/WebAnimations/WebAnimations";
import { Footer } from "../component/Footer";
// import { Endorsements } from "../../component/Endorsements/Endorsements";
// import { Explain } from "../../component/Explain/Explain";
export const Home = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            {/* <Navbar />                    */}
            {/* <div className="mock-div"></div> */}
            {/* <div className="mock-div"></div> */}
            {/* <div className="mock-div"></div> */}
            {/* <div className="mock-div"></div> */}
            {/* <div className="mock-div"></div> */}
            {/* <div className="mock-div"></div> */}

            {/* To be uncomment */}
            <Landingmain />
            <Personalinfo />
            <Frontend />
            <Ui />
            {/* <Explain /> */}
            {/* <Endorsements /> */}
            {/* <GraphicDesign /> */}
            <Landing />
            <Footer />

            {/* <h1>running</h1> */}
            {/* <WebAnimations /> */}
            {/* <div className="mock-div"></div> */}
            {/* <ContactForm /> */}

            {/* <Cuberto /> */}
        </div>
    );
};
