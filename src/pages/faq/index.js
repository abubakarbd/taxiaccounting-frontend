import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Pricing from '../home/Pricing';
function Faq() {
    const [selectedTaxi, setSelectedTaxi] = useState("town taxis");
    return (
        <Layout className="px-20 py-5 bg-white ">
            <Pricing/>
        </Layout>
    );
}

export default Faq;