import React, {useState} from "react";
import Header from "../components/layout/Header.js";
import Menu from "./Menu.js";
import Aside from "./Aside";

export default function Main() {
    const [showSidebar, setShowSidebar] = useState(false);

    function onClickSidebar(prop){
        prop ?
            setShowSidebar(true)
            :
            setShowSidebar(!showSidebar)
    }

    return (
        <>
            <Header onClick={() => onClickSidebar()}/>
            <main>
                <Menu showSidebar={showSidebar} setShowSidebar={setShowSidebar} openSidebar={(prop) => onClickSidebar(prop)}/>
            </main>
        </>
    );
}