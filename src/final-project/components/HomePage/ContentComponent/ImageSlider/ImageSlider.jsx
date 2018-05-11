import * as React from "react";
import '../../../../final-project.scss';
import './ImageSlider.scss';

export class ImageSlider extends React.Component {

    render() {
        return <div className={'template-content'}>
                <div className={'container'}>
                    <div className={'template-1 container-content'}>
                        <div className={'text-content'}>
                            <h1>JANE'S LOOKBOOK</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque
                                illum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque
                                illum</p>

                        <button className={'btn'}>VIEW NOW</button>
                        </div>
                    </div>
                <div className={'template-2 container-content'}>
                    <div className={'text-content'}>
                        <h1>WOMEN LOOKBOOK</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque
                            illum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque
                            illum</p>
                    <button className={'btn'}>VIEW NOW</button>
                    </div>
                </div>
                <div className={'template-3 container-content'}>
                    <div className={'text-content'}>
                        <h1>YOUR LOOKBOOK</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque
                            illum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque
                            illum</p>

                    <button className={'btn'}>VIEW NOW</button>
                    </div>
                </div>
            </div>
        </div>

    }
}