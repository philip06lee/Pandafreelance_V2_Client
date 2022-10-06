import style from "../Footer/Footer.module.css";
import Link from "next/link";

import Ladypanda from '../../images/Ladypanda.png';
import Malepanda from '../../images/Malepanda.png';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
    
        <h1 className={style.title}>Hire Top Freelancers</h1>
        
        <h1 className={style.linkTitle}>                     
        <span className={style.linkText}>Connect to freelancers with proven track records at a price to make you happy.</span>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          CONTACT US:&nbsp;
          <img component={Link} to="/" src={Ladypanda} alt="icon" height="30px" /> 
          <img component={Link} to="/" src={Malepanda} alt="icon" height="30px" />        
        </div>
        <div className={style.cardItem}>
           gogofinest123@gmail.com
          <br /> Singapore
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
      
        <br />       
                             
        </div>
        <div className={style.cardItem}>
          © 2022 PANDAFREELANCE                   
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
