import React, { useState, useRef, useEffect } from "react";
// import { Navbar } from "../../component/nav/Navbar";
import { Landing } from "../components/Landing";
import { Frontend } from "../components/frontend";
// import { Ui } from '../../component/Ui/Ui'
import { Ui } from "../components/UiComponent";
// import { Screens } from "../../component/frontend";
import { Landingmain } from "../components/Landingmain";
import { Personalinfo } from "../components/personalinfo";
// import { GraphicDesign } from "../../component/GraphicDesign/GraphicDesign";
// import { Cuberto } from "../Cuberto";
// import { ContactForm } from "../../component/ContactForm/ContactForm";
// import { WebAnimations } from "../../component/WebAnimations/WebAnimations";
import { Footer } from "../components/Footer";
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
