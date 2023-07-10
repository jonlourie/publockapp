import { useContext, useState} from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { useConnect, useAccount} from "wagmi";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";

export default function Footer() {
    return (
        <section className="footer_main mt-1">
        <div className="mt-1 bg-gray-100 -mx-8 px-8 pt-8 justify-center"></div>
        <section>
            <section>
                <section className="portfolioComponent_section" >
                <Link to={'/store'}>
                    Download The App
                </Link>
                </section>
            </section>
        </section>
        </section>
    )
}