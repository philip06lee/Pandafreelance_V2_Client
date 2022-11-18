import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer">
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">Everyone has talent but not everyone uses it. Connect with top freelance talent and support independent sellers today. There is something for every budget.</section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__contact">
            <Link to="/About" style={{ color: '#FFFFFF', textDecoration: 'None' }}>ABOUT US</Link>
          </section>
        </section>

        <section className="footer-info-center">
          <section className="footer-info__contact">
            <Link to="/Privacy" style={{ color: '#FFFFFF', textDecoration: 'None' }}>PRIVACY POLICY</Link>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__terms">Contact Us: <a href="mailto:admin@pandafreelance.com" style={{ color: '#FFFFFF', textDecoration: 'None' }}>admin@pandafreelance.com</a>
            <br />
            ©2022 PANDAFREELANCE   All Rights Reserved
          </section>
        </section>
      </section>
    </section>
  );
}
export default Footer;
