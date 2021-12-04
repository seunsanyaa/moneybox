
import './blogpost.scss'
import {homeBuying, pigBook,  savingsBlog} from "./icon";


const BlogPost = () =>{




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


               <div className='rightGrid secondRightGrid'>
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

















       <div className='signupCard'>

           <div className='contentGrid'>

               <div className='leftSignupContent'>

                                    <h2>


                                        Sign up for free.
                                    </h2>

                   <h2>


                       Do something nice for your  future.

                   </h2>


               </div>

               <div className='getStartedForm'>

                   <form className='blogForm'>
                       <label className='blogIcon'>
                           <input className='numberInput blogInput'  placeholder='Your Phone Number'/>
                       </label>
                       <button type='submit' className='getStarted getStartedBlog'>
                           Get started

                       </button>

                   </form>
               </div>


           </div>
       </div>








   </div>
    )


}

export default BlogPost