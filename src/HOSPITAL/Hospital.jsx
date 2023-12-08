import React from 'react'
import './Hospital.css'
import Bg from './image/hospital.jpg'
import Cg from './image/about.jpg'
import Dg from './image/images-1.jpg'
import Eg from './image/images-2.jpg'
import Fg from './image/images-3.jpg'
import Gg from './image/images-4.jpg'
import Hg from './image/images-5.jpg'
import Ig from './image/images-6.jpg'
import Jg from './image/images-book.jpg'
import Kg from './image/images-rev1.jpg'
import Lg from './image/images-rev2.jpg'
import Mg from './image/images-rev3.jpg'
import Ng from './image/blog1.jpg'
import Og from './image/blog2.jpg'
import Pg from './image/blog3.jpg'
function Hospital() {
  return (
    <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
         {/* <!-- header section starts --> */}
    <header class="header">
        <a href="#" class="logo"><i class="fas fa-heartbeat"></i>medcare.</a>
        <nav class="navbar">
            <a href="#home">home</a>
            <a href="#services">services</a>
            <a href="#about">about</a>
            <a href="#doctors">doctors</a>
            <a href="#book">book</a>
            <a href="#review">review</a>
            <a href="#blogs">blogs</a>
        </nav>
        <div id="menu-btn" class="fas fa-bars"></div>
    </header>
    {/* <!-- header section ends -->

    <!-- home section starts --> */}
    <section class="home" id="home">
        <div class="image">
            <img src={Bg} />
        </div>
        <div class="content">
            <h3>Best Super Speciality Hospital</h3>
            <p> 1352, Home Science College Rd, near Ashish Hospital, Napier Town, Jabalpur, Madhya Pradesh 482001</p>
            <a href="#" class="btn">contact us<span class="fas fa-chevron-right"></span></a>
        </div>
    </section>
    {/* <!-- home section ends -->

    <!-- icons section starts  --> */}
    <section class="icons-container">
        <div class="icons">
            <i class="fas fa-user-md"></i>
            <h3>140+</h3>
            <p>doctors at work</p>
        </div>
        <div class="icons">
            <i class="fas fa-users"></i>
            <h3>1040+</h3>
            <p>satisfied patients</p>
        </div>
        <div class="icons">
            <i class="fas fa-procedures"></i>
            <h3>500+</h3>
            <p>bed facility</p>
        </div>
        <div class="icons">
            <i class="fas fa-hospital"></i>
            <h3>80+</h3>
            <p>available hospitals</p>
        </div>
    </section>
    {/* <!-- icons section ends  -->

    <!-- Services section starts --> */}
    <section class="services" id="services">
        <h1 class="heading">our <span>services</span></h1>
        <div class="box-container">
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Free Checkups</h3>
                <p>Some organizations and hospitals organize health fairs where they provide free health screenings and checkups to the community. Keep an eye on local event listings for such opportunities.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
            </div>
            <div class="box">
                <i class="fas fa-ambulance"></i>
                <h3>24/7 Ambulance</h3>
                <p>Find out about the local ambulance services in your area. They may operate 24/7, and their contact information should be available through local directories, online searches, or by contacting your local health department.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
            </div>
            <div class="box">
                <i class="fas fa-user-md"></i>
                <h3>Expert Doctors</h3>
                <ul>
                    <li>Cardiologist: Specializes in the diagnosis and treatment of heart-related conditions.
                    </li>
                    <li>Oncologist: Focuses on the diagnosis and treatment of cancer.</li>
                    <li>Neurologist: Specializes in disorders of the nervous system, including the brain and spinal cord.</li>
                    <li>Orthopedic Surgeon: Deals with conditions and injuries affecting the musculoskeletal system, including bones and joints.</li>
                    <li>Gastroenterologist: Specializes in the digestive system and related disorders.</li>
                </ul>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
            </div>
            <div class="box">
                <i class="fas fa-pills"></i>
                <h3>Medicines</h3>
                <ul>
                    <li>Prescription Medications: These are medications that require a prescription from a licensed healthcare provider. They are typically used to treat specific medical conditions and should be taken under the guidance of a healthcare professional.</li>
                    <li> Over-the-Counter (OTC) Medications: These are medications that can be purchased without a prescription. They are generally used to relieve common symptoms such as pain, fever, allergies, and cold symptoms. It's important to follow
                        the instructions on the label and consult with a pharmacist if you have any questions.</li>
                </ul>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
            </div>
            <div class="box">
                <i class="fas fa-procedures"></i>
                <h3>Bed Facility</h3>
                <ul>
                    <li>Use Customer Service Channels: If the facility has a customer service department, contact them to express your concerns. Many businesses have customer feedback systems in place to address issues and improve services.</li>
                    <li>Check for Regulatory Agencies: Depending on the type of facility, there may be regulatory agencies overseeing its operations. Research whether there are government or industry-specific bodies responsible for monitoring and regulating
                        the facility.</li>
                </ul>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
            </div>
            <div class="box">
                <i class="fas fa-heartbeat"></i>
                <h3>Total Care</h3>
                <ul>
                    <li>Healthcare Care: In a healthcare context, "total care" may refer to a comprehensive approach to patient well-being. This includes preventive care, ongoing management of chronic conditions, and addressing acute health Custome.
                    </li>
                    <li>Service Care: In a business or customer service context, "total care" might denote a commitment to providing comprehensive support to customers. This could involve addressing customer inquiries, resolving issues, and ensuring a positive
                        overall experience. </li>
                    <li>Elderly or Patient Care: "Total care" can also refer to the complete support and assistance provided to individuals who may require help with activities of daily living. This often applies to the elderly or those with chronic illnesses,
                        and it involves addressing physical, emotional, and social needs.</li>
                </ul>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
            </div>
        </div>
    </section>
    {/* <!-- Services section ends -->

    <!-- About section starts --> */}
    <section class="about" id="about">
        <h1 class="heading"><span>about</span> us</h1>
        <div class="row">
            <div class="image">
                <img src={Cg}/>
            </div>
            <div class="content">
                <h1>We take care of your healthy life</h1>
                <p>Facilities and Services: Overview of the hospital's facilities, including the number of beds, specialized units (e.g., emergency care, maternity, surgical), and the range of medical services provided.</p>
                <p> Accreditations and Certifications: Highlights of the hospital's accreditations, certifications, and affiliations with relevant healthcare organizations, indicating compliance with quality and safety standards.</p>
                <a href="#" class="btn">learn more<span class="fas fa-chevron-right"></span></a>
            </div>
        </div>
    </section>
    {/* <!-- About section ends -->

    <!-- Doctors section starts  --> */}
    <section class="doctors" id="doctors">
        <h1 class="heading">our <span>doctors</span></h1>
        <div class="box-container">
            <div class="box">
                <img src={Dg}/>
                <h3>dr. vivek tiwari</h3>
                <span>Cardiologist expert</span>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="box">
                <img src={Eg}/>
                <h3>dr. neelesh mishra</h3>
                <span>Oncologist expert</span>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="box">
                <img src={Fg}/>
                <h3>dr. anupam shayni</h3>
                <span>Neurologist expert</span>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="box">
                <img src={Gg}/>
                <h3>dr. pradeep chauhan</h3>
                <span>Orthopedic Surgeon expert</span>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="box">
                <img src={Hg}/>
                <h3>dr. ravi kumar</h3>
                <span>Gastroenterologist expert</span>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="box">
                <img src={Ig}/>
                <h3>dr. peeyush tripathi</h3>
                <span>Ophthalmologist expert</span>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Doctors section ends  -->

    <!-- booking section starts --> */}
    <section class="book" id="book">
        <h1 class="heading"><span>book</span> now</h1>
        <div class="row">
            <div class="image">
                <img src={Jg}/>
            </div>
            <form action="">
                <h3>book appointment</h3>
                <input type="text" placeholder="your name" class="box" />
                <input type="number" placeholder="your number" class="box" />
                <input type="email" placeholder="your email" class="box" />
                <input type="date" class="box" />
                <input type="submit" value="book now" class="btn" />
            </form>
        </div>
    </section>
    {/* <!-- booking section ends -->

    <!-- Review section starts --> */}
    <section class="review" id="review">
        <h1 class="heading">client's <span>review</span></h1>
        <div class="box-container">
            <div class="box">
                <img src={Kg}/>
                <h3>peeyush tripathi</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="text">Websites dedicated to healthcare reviews, such as Healthgrades or RateMDs, can provide a platform for patients to share their opinions about hospitals and healthcare providers.</p>
            </div>
            <div class="box">
                <img src={Lg}/>
                <h3>sjeet yadav</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="text">Some local community forums or discussion boards may have threads discussing the experiences of community members with healthcare facilities.</p>
            </div>
            <div class="box">
                <img src={Mg}/>
                <h3>anuj yadav</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="text">Check social media platforms like Facebook or Twitter. Hospitals and healthcare providers may have official pages where patients share their experiences.</p>
            </div>
        </div>
    </section>
    {/* <!-- Review section ends -->

    <!-- blogs section starts --> */}
    <section class="blogs" id="blogs">
        <h1 class="heading">our<span> blogs</span></h1>
        <div class="box-container">
            <div class="box">
                <div class="image">
                    <img src={Ng}/>
                </div>
                <div class="content">
                    <div class="icon">
                        <a href="#"><i class="fas fa-calender">1st may ,2023</i></a>
                        <a href="#"><i class="fas fa-user"></i>by admin</a>
                    </div>
                    <h3>heart cardiology blog</h3>
                    <p>If you're looking for information on a specific cardiology blog, I recommend using a search engine to find the most recent and relevant results. You can enter the blog's name directly into a search engine to locate its official website
                        or other sources that provide details about the blog, its authors, and the topics it covers. </p>
                    <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src={Og}/>
                </div>
                <div class="content">
                    <div class="icon">
                        <a href="#"><i class="fas fa-calender">1st may ,2023</i></a>
                        <a href="#"><i class="fas fa-user"></i>by admin</a>
                    </div>
                    <h3>bed faicility blog</h3>
                    <p>I recommend using a search engine to look for the most recent and relevant information. You can enter the blog's name directly into a search engine to find its official website or other sources that provide details about the blog,
                        its authors, and the topics it covers. </p>
                    <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src={Pg}/>
                </div>
                <div class="content">
                    <div class="icon">
                        <a href="#"><i class="fas fa-calender">1st may ,2023</i></a>
                        <a href="#"><i class="fas fa-user"></i>by admin</a>
                    </div>
                    <h3> account section blog</h3>
                    <p>As of my last knowledge update in January 2022, I don't have specific information about a blog named "Account Section Blog." It's possible that the blog is relatively new, not widely recognized, or that it was created after my last
                        update. </p>
                    <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- blogs section ends -->

    <!-- footer section starts --> */}
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>quick links</h3>
                <a href="#"><i class="fas fa-chevron-right"></i>Home</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Services</a>
                <a href="#"><i class="fas fa-chevron-right"></i>About</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Doctors</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Book</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Review</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Blogs</a>
            </div>
            <div class="box">
                <h3>our services</h3>
                <a href="#"><i class="fas fa-chevron-right"></i>dental care</a>
                <a href="#"><i class="fas fa-chevron-right"></i>message therapy</a>
                <a href="#"><i class="fas fa-chevron-right"></i>cardioloty</a>
                <a href="#"><i class="fas fa-chevron-right"></i>diagnosis</a>
                <a href="#"><i class="fas fa-chevron-right"></i>ambulance services</a>
            </div>
            <div class="box">
                <h3>contact info</h3>
                <a href="#"><i class="fas fa-phone"></i>+123-456-7890</a>
                <a href="#"><i class="fas fa-phone"></i>+111-222-3333</a>
                <a href="#"><i class="fas fa-envelope"></i>peeyush2002@gmail.com</a>
                <a href="#"><i class="fas fa-envelope"></i>priya2003@gmail.custom</a>
                <a href="#"><i class="fas fa-map-marker-alt"></i>Bhopal,India-402022</a>
            </div>
            <div class="box">
                <h3>follow us</h3>
                <a href="#"><i class="fas fa-facebook"></i>facebook</a>
                <a href="#"><i class="fas fa-twitter"></i>twitter</a>
                <a href="#"><i class="fas fa-instagram"></i>instagram</a>
                <a href="#"><i class="fas fa-linkedin"></i>fa-linkedin</a>
                <a href="#"><i class="fas fa-map-whatsApp"></i>whatsApp</a>
            </div>
        </div>
        <div class="credit">Created By <span>Mr. Peeyush Tripathi Web Designer</span> All Rights Reserved</div>
    </section>
    {/* <!-- footer section ends --> */}
    </div>
  )
}
export default Hospital