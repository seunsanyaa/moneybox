// import {NavBar} from "./index";
import './section.scss'
import {BlogPost} from "./index";
import {appImage, line} from "../Landing/icon";
import {investImage, linkarrow, users} from "./icon";
// import {tick,flag,dropDown,appImage} from "./icon";
// import {SearchMenu} from "./index";
// import {useEffect, useRef, useState} from "react";
// import {gsap, TimelineMax} from "gsap";

const Section = () =>{



    return(
        <div className='section'>
            <div className='userNumbers'>
                <div className='userNumbersLeft box' >

                    <p className='userNumbersParagraph'>
                        It is believed by over 700,000 users

                    </p>
                    {line}
                    <div className='infoParagraph'>

                        <p className='smallParagraph'>
                            Moneybox is helping hundreds of thousands of people save and invest for their future. Our award-winning app makes it easy to get started, offers products to suit every need, encourages people to make the right decisions throughout their lives and brings everything together in a service which is simple and enjoyable to use.
                        </p>



                    </div>


                </div>


                <div className='box rightSideUsers'>
                    {users}

                </div>
            </div>


            <div className='investment'>



                <div className='box investmentLeft'>
                    {investImage}

                </div>


                <div className='investmentRight box' >

                    <button className='investmentParagraph'>
                        Investment

                    </button>
                    <h3 className='investmentHeader'>Investing made easy</h3>

                    <div className='infoParagraph'>

                        <p className='investmentsmallParagraph'>
                            Invest in leading companies such as Nettflix ,Tesla & Apple via tracker funds. Choose from three simple starting options - cautious, balanced and adventurous - we’ll take care of the rest!
                        </p>

                        <p className='findOutMore'><a href='/' >FIND OUT MORE <span className='arrowSpan'>{linkarrow}</span></a></p>



                    </div>



                </div>
            </div>



            <BlogPost/>
        </div>
    )


}

export default Section