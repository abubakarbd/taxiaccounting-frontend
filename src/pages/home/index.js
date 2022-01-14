import React from "react";
import Layout from '../../components/Layout';
import About from "./Aboutus";
import ContactUs from "./ContactUs";
import HeaderSlider from "./HeaderSlider";
import Pricing from "./Pricing";
import PricingServices from "./PricingServices";
import ScrollUp from "./ScrollUp";
function Home() {
    return (
        <Layout className="text-2xl">
            <HeaderSlider />
            <About />
            <Pricing />
            <PricingServices />
            {/* <News /> */}
            <ContactUs />
            {/* <DownloadApp />     */}
            {/* <TaxiAdverttising /> */}
            <ScrollUp />
        </Layout>
    );
}

export default Home;