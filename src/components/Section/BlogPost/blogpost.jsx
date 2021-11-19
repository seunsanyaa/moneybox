
import './blogpost.scss'
import {homeBuying, pigBook, savings, savingsBlog} from "./icon";

// import {SearchMenu} from "./index";
// import {useEffect, useRef, useState} from "react";
// import {gsap, TimelineMax} from "gsap";

const BlogPost = () =>{


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
   <div className='blogPost'>
       <div className='blogPostHeader'>

           <h3>The  Moneybox Blog Post</h3>

       </div>

       <div className='blogGrid'>
                <div className='leftGrid'>
                    {pigBook}


                    <div className="bottom-left">



                        <button className='blogButton'>
                            Investment


                        </button>

                        <h3>What to do with your lockdown savings</h3>


<p className='brushParagraph'>Brush up on your investing knowledge with these five books and invest with confidence.</p>

                  <p className='date'>2nd November 2020</p>

                    </div>
                </div>



           <div className='rightGridContainer'>



               <div className='rightGrid'>
                   {savingsBlog}


                   <div className="bottomleftSavings">



                       <button className='blogButton'>
                      savings


                       </button>

                       <h3>What to do with your lockdown savings</h3>



                       <p className='date'>2nd November 2020</p>

                   </div>
               </div>


               <div className='rightGrid secongRightGrid'>
                   {homeBuying}


                   <div className="bottomleftSavings">



                       <button className='blogButton'>
                           Home-buying


                       </button>

                       <h3>Introducing Moneybox Mortgage Advice</h3>



                       <p className='date'>2nd November 2020</p>

                   </div>
               </div>
           </div>

       </div>
jshjdh
   </div>
    )


}

export default BlogPost