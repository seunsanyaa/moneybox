
import './industries.scss'


import {advisor, altsImage, bestBuy, bizInsider, consumerInvest, moneyFactsImage, thetimes, thisIsMoney} from "./icon";

const Industries = () =>{




    return(
   <div className='industries'>


            <div className='industriesHeader'>

                <h3>Recognised by the industry and our customers.</h3>

            </div>



       <div className='industriesGrid'>

           <div className='industryContainer'>

               <div className='inner'>
                   {moneyFactsImage}

               </div>


           </div>
           <div className='industryContainer'>

               <div className='inner'>
                   {altsImage}

               </div>
           </div>
           <div className='industryContainer'>

               <div className='inner'>
                   {consumerInvest}

               </div>
           </div>

           <div className='industryContainer'>

               <div className='inner'>
                   {bestBuy}

               </div>
           </div>

           <div className='industryContainer'>

               <div className='inner'>
                   {advisor}

               </div>
           </div>

           <div className='industryContainer'>

               <div className='inner'>
                   {thetimes}

               </div>
           </div>
           <div className='industryContainer'>

               <div className='inner'>
                   {bizInsider}

               </div>
           </div>
           <div className='industryContainer'>

               <div className='inner'>
                   {thisIsMoney}

               </div>

           </div>
       </div>


   </div>
    )


}

export default Industries