import * as React from "react";
import '../../final-project.scss'
import './FooterComponent.scss';

export class FooterComponent extends React.Component {

    render() {
        return <div className={'footer'}>
            <div className={'footer-content'}>
                <ul>
                    <li>INFORMATION</li>
                    <li><a href="#">The brand</a></li>
                    <li><a href="#">Local stores</a></li>
                    <li><a href="#">Customer service</a></li>
                    <li><a href="#">Privacy&cookies</a></li>
                    <li><a href="#">Site map</a></li>
                </ul>
                <ul>
                    <li>WHY BUY FROM US</li>
                    <li><a href="#">Shipping and returns</a></li>
                    <li><a href="#">Secure shopping</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Award winning</a></li>
                    <li><a href="#">Ethical trading</a></li>
                </ul>
                <ul>
                    <li>YOUR ACCOUNT</li>
                    <li><a href="#">Sign in</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">View cart</a></li>
                    <li><a href="#">View your lookbook</a></li>
                    <li><a href="#">Track an order</a></li>
                    <li><a href="#">Update information</a></li>
                </ul>
                <ul>
                    <li>LOOKBOOK</li>
                    <li><a href="#">Latest posts</a></li>
                    <li><a href="#">Men's lookbook</a></li>
                    <li><a href="#">Women's lookbook</a></li>
                    <li><a href="#">Lookbook RSS feed</a></li>
                    <li><a href="#">View your lookbook</a></li>
                    <li><a href="#">Delete your lookbook</a></li>
                </ul>
                <ul>
                    <li>CONTACT DETAILS</li>
                    <li><a href="#">Head Office Avenue Fashion
                        <pre>180-182 Regent Street London</pre></a></li>
                    <li><a href="#">Telephone: 0123-456-789</a></li>
                    <li><a href="#">Email: support@yourwebsite.com</a></li>
                </ul>
            </div>
            <div className={'footer-block'}>
                <div className={'footer-block__info'}>
                    <h1>AWARD WINNER</h1>
                    <h2>FASHION AWARDS 20016</h2>
                </div>
                <ul className={'footer-social'}>
                    <li><a href="#">
                        <img className={'social-facebook'} alt=""/>
                    </a></li>
                    <li><a href="#">
                        <img  className={'social-twitter'} alt=""/>
                   </a></li>
                    <li><a href="#">
                        <img  className={'social-instagram'} alt=""/>
                    </a></li>
                    <li><a href="#">
                        <img  className={'social-pinterest'} alt=""/>
                    </a>
                    </li>
                </ul>
                <ul className={'mobile-footer__info disactive'}>
                        <li>INFORMATION</li>
                        <li>WHY BUY FROM US</li>
                        <li>YOUR ACCOUNT</li>
                        <li>LOOKBOOK</li>
                        <li>CONTACT DETAILS</li>
                </ul>
            </div>
        </div>

    }
}