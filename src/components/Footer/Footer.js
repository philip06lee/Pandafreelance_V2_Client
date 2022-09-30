import style from "../Footer/Footer.module.css";
import Link from "next/link";

import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import marketplace from '../../images/marketplace.png';
import Ladypanda from '../../images/Ladypanda.png';
import Malepanda from '../../images/Malepanda.png';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
    
        <h1 className={style.title}>Creative Online Marketplace      
        &nbsp;<img component={Link} to="/" src={marketplace} alt="icon" height="30px" /></h1>
        
        <h1 className={style.linkTitle}>                     
        <span className={style.linkText}>Advertise creatively to sell something you love at a price that will make you happy.</span>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          CONTACT US:&nbsp;&nbsp; 
          <img component={Link} to="/" src={Ladypanda} alt="icon" height="35px" /> 
          <img component={Link} to="/" src={Malepanda} alt="icon" height="35px" /><br /> 
        
        </div>
        <div className={style.cardItem}>
           gogofinest123@gmail.com
          <br /> Singapore
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
      
        <br /> 
        FOLLOW US:
        <br />       
       <Link href='https://www.facebook.com/philip.lee.94009'><a><AiFillFacebook size="2em" fill="rgb(66,103,178)" /></a></Link>&nbsp;
       <Link href='https://www.facebook.com/philip.lee.94009'><a><AiFillTwitterCircle size="2em" fill="rgb(29,161,242)" /></a></Link> 
                      
        </div>
        <div className={style.cardItem}>
          © 2022 CANGOSELL
                   
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;