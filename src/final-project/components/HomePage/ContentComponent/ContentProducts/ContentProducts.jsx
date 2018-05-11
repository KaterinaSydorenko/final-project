import * as React from "react";
import '../../../../final-project.scss'
import './ContentProducts.scss';

export class ContentProducts extends React.Component {

    render() {
        return <div className={'content'}>
            <div className={'block-1'}>
                <div className={"box1 block-content"}> </div>
            </div>
            <div className={'block-1'}>
                <div className={"box2 block-content"}> </div>
            </div>
            <div className={'block-2'}>
                <div className={"box3 block-content"}>
                    <div className={'text-content'}>
                    <h2>JANE'S LOOKBOOK</h2>
                    <p>GET THE LOOK FOR UNDER 200$!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.</p>
                        <p>Tempora ullam voluptatem! At dolores enim in ut
                        voluptatibus. Numquam, odit!</p>
                    </div>
                    <button className={'btn'}>VIEW NOW</button>
                </div>
            </div>
            <div className={'block-1'}>
                <div className={"box4 block-content"}> </div>
            </div>
            <div className={'block-1'}>
                <div className={"box5 block-content"}> </div>
            </div>
            <div className={'block-1'}>
                <div className={"box6 block-content"}> </div>
            </div>
            <div className={'block-1'}>
                <div className={"box7 block-content"}> </div>
            </div>
            <div className={'block-3'}>
                <div className={"box8 block-content"}>
                    <div className={'text-content'}>
                        <h2>WIN A NEW LOOK</h2>
                        <p>ADD LOOKS OR ITEMS TO YOUR LOOKBOOR FOR A CHANCE OF WINNING</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.</p>
                        <p>Tempora ullam voluptatem! At dolores enim in ut
                            voluptatibus. Numquam, odit!</p>
                    </div>
                    <button className={'btn'}>SHOP NOW</button>
                </div>
            </div>
            <div className={'block-1'}>
                <div className={"box9 block-content"}> </div>
            </div>
        </div>
    }
}
