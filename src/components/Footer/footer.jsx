import './footer.scss'
import {tick, flag, dropDown, appImage, line, shine, facebook, linkedIn, twitter} from "./icon";
import {logo} from "../Landing/Nav/icon";


const Footer = () =>{




    return(
        <div className='footer'>
<div className='footerGrid'>
            <div className='firstColumn'>


                {logo}

                <div className='belowLogo'>

                <p>  Support@moneyboxapp.com</p>
                <p>Moneybox 1-2, Hatfields
                    London SE1 9PG</p>

                    <div className='icons'>
                        <div className='facebook'>  {facebook}</div>
                        <div className='linkedIn'>          {linkedIn}</div>
                        <div className='twitter'>             {twitter}</div>


                    </div>

                </div>


            </div>


            <div className='secondColumn'>
                <h4>About us</h4>


                <p>
                    Career

                </p>
                <p>

                    Blog
                </p>
                <p>
                    Press

                </p>
            </div>


            <div className='thirdColumn'>
                <h4>Legal</h4>


                <p>
                    Terms & Condition
                </p>
                <p>
                    Terms of use
                </p>
                <p>
                    Privacy Notice

                </p>

                <p>
                    Cookie Policy
                </p>
            </div>




            <div className='fourthColumn'>
                <h4> ‎</h4>


                <p>
                    Complaint Policy
                </p>   <p>
                    Regulatory
                </p>
                <p>
                    Mortgage advice & terms
                </p>
                <p>
                    FSCS Protection

                </p>


            </div>

</div>



            <div className='registeredTrademark'>
                <p>Moneybox is a registered trade mark of
                Digital Moneybox Limited. Digital Moneybox
                Limited is authorised and regulated by the
                Financial Conduct Authority,
                no. 712935 (and no. 792703 for payment services
                activities), registered in England and Wales,
                    no. 9597755.</p>
            </div>

        </div>
    )


}

export default Footer