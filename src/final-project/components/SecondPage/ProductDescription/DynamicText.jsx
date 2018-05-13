import * as React from "react";

import {ProductDescription} from "./ProductDescription.jsx";


export class DescriptionOn extends React.Component {

    render() {
        return  <div className={'description-text'}>
                <ProductDescription/>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci architecto, corporis cumque,
                deleniti labore modi molestiae necessitatibus nemo repellendus totam velit. Amet commodi distinctio
                ducimus error iste molestias tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                cum eius eveniet iure, laborum libero molestias placeat quo. Aliquid architecto asperiores
                consectetur debitis dignissimos et magni minus repellendus? Facilis, reiciendis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda consequuntur distinctio
                ducimus ea illo iusto, magnam magni nemo nihil odio perspiciatis sint velit veritatis vero? Illo
                iusto molestias perferendis?</p>
        </div>
    }
}