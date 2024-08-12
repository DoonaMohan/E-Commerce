import React from 'react';
import Carousel from '../carousel/Carousel';
import Offer from '../offers/Offer';
import Banner from '../banner/Banner';


// import styles from '../styles/Home.module.css';

function Home() {
    return (
        <div>
            <div className="container-fluid">
                <Carousel />
            </div>
            <div className="container">
                <div className="d-flex gap-2">
                    <Offer offerName="Best of Electronics" />

                </div>

                <Offer offerName="Beauty,Foods, Toys and More" />
                <div className="d-flex gap-2 justify-content-center">

                    <Banner url="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg?q=20" />
                    <Banner url="https://rukminim2.flixcart.com/www/530/740/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80" />
                    <Banner url="https://rukminim2.flixcart.com/www/1070/730/promos/15/09/2023/9b08f194-51e5-4e6a-a052-f5f91d75b8a0.jpg?q=80" />
                </div>
                <Offer offerName="Monsoon Essentials" />

                <div className="d-flex gap-2 ">
                    <Offer offerName="Sports and Fitness Essentials" />
                    <Banner url="https://rukminim2.flixcart.com/www/530/740/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80" />
                </div>

                <div className="d-flex gap-2">
                    <Banner url="https://rukminim2.flixcart.com/www/1070/730/promos/15/09/2023/9b08f194-51e5-4e6a-a052-f5f91d75b8a0.jpg?q=80" />
                    <Banner url="https://rukminim2.flixcart.com/www/1070/730/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80" />
                    <Banner url="https://tse2.mm.bing.net/th?id=OIP.zV14f2o0JDsOl0ZOlKgHrwHaEQ&pid=Api&P=0&h=220" />
                </div>

                <div className="d-flex gap-2">
                    <Banner url="https://tse1.mm.bing.net/th?id=OIP.6Wpae6wjPCYr76km_7gFeAHaDQ&pid=Api&P=0&h=220" />
                    <Banner url="https://4.bp.blogspot.com/-HX_Lnf6ov1o/VVOXYuDsVQI/AAAAAAAAKJQ/0VPX7xJcB6E/s1600/bazar.jpg" />
                    <Banner url="https://placeit.net/uploads/stage/stage_image/15533/default_stage.jpg" />
                </div>

                <Offer offerName="Best Gadgets and Appliances" />
                <Offer offerName="Sports, Healthcare and More" />
                <Offer offerName="Home Decor and Furnishings" />




            </div>
        </div>
    );
}

export default Home;