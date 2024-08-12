function Carousel() {
    return (
        <div>
            <div id="DMBazarCarousel" className="carousel slide w-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/58190a4e8f9f0d10.jpg?q=20" className="d-block w-100" alt="Carousel Pic" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7409480987a9a093.jpg?q=20" className="d-block w-100" alt="Carousel Pic" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20" className="d-block w-100" alt="Carousel Pic" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7409480987a9a093.jpg?q=20" className="d-block w-100" alt="Carousel Pic" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c3c66cab3b900dd8.jpg?q=20" className="d-block w-100" alt="Carousel Pic" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#DMBazarCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"> </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#DMBazarCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
}

export default Carousel;