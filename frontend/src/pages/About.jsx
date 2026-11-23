function About(){

    //internal styling should be passed in a variable before return

    const headingStyle ={
        color: "red",
        fontWeight: "bold",
        fontSize: "30px"
    }

    const imageStyle = {
        width: "300px",
        height: "200px",
        marginRight: "10px"
    }

    return(
        <div>
            <marquee behavior="" direction=""><h1 style={headingStyle}>About ShopVibe</h1></marquee>

            <img src="images/car1.png" alt="ShopVibe" style={imageStyle} />
            
            <p>ShopVibe is a leading online marketplace that connects buyers and sellers from around the world. Our mission is to provide a seamless shopping experience, offering a wide range of products at competitive prices. We are committed to customer satisfaction and strive to deliver exceptional service.
                We believe in the power of technology to transform the way people shop, and we continuously innovate to enhance our platform. Our team is dedicated to ensuring that every transaction is secure, efficient, and enjoyable for our users.
            </p>

        </div>
    );
}

export default About;