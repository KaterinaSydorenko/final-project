import * as React from "react";
import '../../../final-project.scss';
import './DynamicText.scss';

export class DynamicText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, deleniti eaque illum.'
                },
                {
                    id: 2,
                    text: 'Video',
                },
                {
                    id: 3,
                    text: 'Some Text',
                },
                {
                    id: 4,
                    text: 'Delivery',
                },
                {
                    id: 5,
                    text: 'Review',
                },
            ]
        }
    }

    render() {

    }
}