function Home(){
    return(
        <div>
            <h1 style={{ color: 'red', fontWeight: 'bold', fontSize: '30px' }}>Welcome to ShopVibe</h1>

            <img src="images/car1.png" alt="ShopVibe" style={{width: "300px", height: "200px", marginRight: "10px"}} />
            <img src="images/car2.png" alt="ShopVibe" style={{width: "300px", height: "200px", marginRight: "10px"}} />
            <img src="images/car3.png" alt="ShopVibe" style={{width: "300px", height: "200px"}} />

            <p>
                Discover quality products for every part of your day at ShopVibe.
                Browse our carefully selected collection, enjoy great value, and find
                something new to love with every visit.
            </p>

            <button>Shop Now</button>

        </div>
    );
}

export default Home;