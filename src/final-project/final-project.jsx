import * as React from "react";
import {render} from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import {App} from "./components/App/App.jsx";
import {ProductView} from "./components/SecondPage/ProductView.jsx";


// render(
//     <Router>
//         <div>
//             <Route exact path={'/main'} component={App}/>
//             <Route path={'/product'} component={ProductView}/>
//         </div>
//     </Router>,
//     document.getElementById('root')
// );

render(<App/>, document.getElementById('root'));