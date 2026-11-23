//link to css file

import './Contact.css';

function Contact() {
    return(
        <div>
            <h1>Contact Us</h1>
            <p>
                We value your feedback and are here to assist you with any inquiries or concerns. Please reach out to us through the following channels: 
                we are committed to providing prompt and helpful responses to ensure your experience with ShopVibe is positive. Staying connected with our customers is a top priority, and we look forward to hearing from you.
                Don't hesitate to contact us via email, phone, or our social media platforms. Our dedicated support team is ready to help you with any questions you may have about our products, services, or your shopping experience.
            </p>
            
            <table className='table table-bordered'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Accomodtaion</th>
                    <th>Payment</th>
                </tr>

                <tr>
                    <td>Samuel Tod</td>
                    <td>Samuel@gmail.com</td>
                    <td>0708998888</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>
                <tr>
                    <td>Naomi Williams</td>
                    <td>naomi@gmail.com</td>
                    <td>0708998878</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>
                <tr>
                    <td>Cate Jackson</td>
                    <td>catejack@gmail.com</td>
                    <td>0708998867</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>
                <tr>
                    <td>Brain Brian</td>
                    <td>brain@gmail.com</td>
                    <td>0708998859</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>
                <tr>
                    <td>Ruth Jik</td>
                    <td>ruthk@gmail.com</td>
                    <td>0708998854</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>
            </table>
            
        </div>
    );
}

export default Contact;