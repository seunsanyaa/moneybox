import {NavBar} from "./index";
import './landing.scss'
import {tick,appImage,line,shine} from "./icon";


const LandingPage = () =>{


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
<div className='LandinginfoParagraph'>
                    <p className='smallParagraph'>
                        {tick}<span> Sign up in minutes with just £1
                       </span>
                    </p>
                    <p className='smallParagraph'>
                        {tick} <span>Choose from a range of savings or investment accounts</span>
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