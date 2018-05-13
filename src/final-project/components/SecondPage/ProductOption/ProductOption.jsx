import * as React from 'react';
import './ProductOption.scss';

export class ProductOption extends React.Component {

    render() {
        return <div className={'product-block-1'}>
            <div className={'box1-product'}>
                <div className={'box1-content'}>
                    <div className={'box1-content__element'}>
                        <span><div className={'arrow'}>&#706;</div></span>
                        <span><div className={'arrow'}>&#707;</div></span>
                    </div>
                </div>
            </div>
            <div className={'box2-product'}>
                <h3>AVE CLASSIC SWEATSHIRT</h3>
                <div className={'product-card__info'}>
                    <ul className={'reviews'}>
                        <li>&#9734;</li>
                        <li>&#9734;</li>
                        <li>&#9734;</li>
                        <li>&#9734;</li>
                        <li>&#9734;</li>
                        <li>Review(s)</li>
                    </ul>
                    <span>Add a Review</span>
                    <ul className={'social-share'}>
                        <li>Share:</li>
                        <li><img className={'img1'}/></li>
                        <li><img className={'img2'}/></li>
                        <li><img className={'img3'}/></li>
                        <li><img className={'img4'}/></li>
                        <li><img className={'img5'}/></li>
                        <li><img className={'img6'}/></li>
                    </ul>
                </div>
                <div className={'price'}>
                    <span>&#163;107</span>
                    <span>&#163;89.99</span>
                </div>
                <div className={'product-tab'}>
                    <div>
                        <div className={'product-tab-title'}><h4>AVAILABILITY:</h4><span>In stock</span></div>
                        <div className={'product-tab-title'}><h4>PRODUCT CODE:</h4><span>#499577</span></div>
                        <div className={'product-tab-title'}><h4>TAGS:</h4><span className={'text-color'}>Classic, Casual, V-neck, Loose</span>
                        </div>
                    </div>
                    <div className={'product-description'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur
                            debitis dolorem dolorum ea, expedita, laboriosam maiores, minima mollitia officiis
                            perferendis
                            ratione sequi sit voluptatum. Adipisci aliquam maxime vel!</p>
                        <ul>
                            <li>Elasticated cuffs</li>
                            <li>Casual fit</li>
                            <li>100% Cotton</li>
                            <li>Free shipping with 4 days delivery</li>
                        </ul>
                        <div className={'group-product__select'}>
                            <div className={'product__select'}>
                                <span>COLOR</span>
                                <select className={'options'}>
                                    <option>Select Color</option>
                                    <option>Black</option>
                                    <option>Black</option>
                                    <option>Red</option>
                                    <option>Green</option>
                                </select>
                            </div>
                            <div className={'product__select'}>
                                <span>SIZE</span>
                                <select className={'options'}>
                                    <option>Select Size</option>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                            <div className={'product__select'}>
                                <span>QTY</span>
                                <select className={'options'}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className={'btn'}>
                            <button className={'btn-type small'}>
                                &#128722; ADD TO CART</button>
                            <button className={'btn-type large'}>&#9825; ADD TO LOOKBOOK</button>
                        </div>
                        <div className={'element'}>
                            &#11138; ADD TO COMPARE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}