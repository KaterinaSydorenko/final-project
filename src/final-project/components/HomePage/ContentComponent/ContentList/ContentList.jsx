import * as React from "react";
import './ContentList.scss';


export class ContentList extends React.Component{

    render() {
        return <div>
            <ul className={'content-menu__list'}>
                <li>LATEST</li>
                <li>MOST LIKED</li>
                <li>BEST SELLERS</li>
                <li>PRICE LOW TO HIGH</li>
                <li>PRICE HIGH TO LOW</li>
            </ul>
        </div>
    }
}