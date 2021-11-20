import {NavBar} from "./index";
import './landing.scss'
import {tick,flag,dropDown,appImage,line,shine} from "./icon";
// import {SearchMenu} from "./index";
// import {useEffect, useRef, useState} from "react";
// import {gsap, TimelineMax} from "gsap";

const LandingPage = () =>{


    // const el = useRef();
    // const q = gsap.utils.selector(el);
    // // eslint-disable-next-line no-undef
    // const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    // useEffect(() => {
    //
    //     function init() {
    //         //all my GSAP here, for all pages
    //
    //         // Target ALL descendants with the class of .box
    //         tl.from(q(".leftSide"), { y: 22,autoAlpha: 0 ,duration:0.5,delay:2.2});
    //         tl.fromTo(q(".rightSide"), {scale:0,autoAlpha:0.05},{scale:1,autoAlpha:1,duration:0.5,delay:0.2});
    //
    //
    //     }
    //
    //
    //     window.addEventListener("load", function(event) {
    //         init();
    //     });
    //
    //
    // });


    return(
        <div className='landingPage'>
            <NavBar/>
<div className='landingPageSection'>
            <div className='container landingPageGrid' >

                <div className='leftSide box' >
<div className='bigParagraphAndLine'>
                    <p className='bigParagraph'>
                        SAVE AND INVEST FOR YOUR FUTURE<span className='shine'>{shine}</span>


                    </p>
    {line}
</div>
<div className='infoParagraph'>
                    <p className='smallParagraph'>
                        {tick}<span> Sign up in minutes with just £1
                       </span>
                    </p>
                    <p className='smallParagraph'>
                        {tick} <span>Choose from a range of savings or investment accounts
                        </span>
                    </p>


                    <p className='smallParagraph'>
                        {tick}  <span>Join more than 700,000 customers
                    </span>
                    </p>
</div>

                    <div className='getStartedForm'>

                        <form className='landingForm'>
                            <label>
                            <input className='numberInput' placeholder='Your Phone Number'/>
                            </label>
                    <button type='submit' className='getStarted'>
                        Get started

                    </button>

                        </form>
                </div>
                </div>


                <div className='box rightSide'>
                    {appImage}

                </div>

            </div>


        </div>
        </div>
    )


}

export default LandingPage