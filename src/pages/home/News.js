import react from 'react';
// import '@brainhubeu/react-carousel/lib/style.css';
// import 'pure-react-carousel/dist/react-carousel.es.css';

function News() {
    return (
        <div className="px-24 text-black py-10">
            <h2 className="text-center text-2xl pt-5 font-bold font-sans">News</h2>
            <div className="md:flex w-full">
                <div className="w-full md:w-1/2">
                    <img src="https://static.remove.bg/remove-bg-web/a72f919da581145bc8a52ac0c5d21f5c4741f367/assets/inspirations/persons/02-791af8fdab16cf642300da3207ce73f71862747e935cb70eec7fbb0bdfb7ce5b.png" className="w-full h-full" alt="" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="mt-24">
                        <p className="leading-8 text-price">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi veniam ipsum eveniet quaerat cumque sequi? Doloribus ea, ipsum dolor autem nostrum distinctio deleniti hic quae dicta nisi aliquam, quasi dolorum quod iure, eaque labore. Dignissimos tenetur ipsam, reiciendis nesciunt dolor non iste odit soluta minus est? Obcaecati, consequuntur nobis.</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default News;