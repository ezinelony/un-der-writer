import React from 'react'
import {Link} from 'react-router';

export class App extends React.Component {

    render() {
    
        return (
            <div className={"header-link"} key={`nav_wrapper_0`}>
                <ol className={"inline-nav clearfix"} key={`nav_parent__1`}>
                    
                    <li className={"link"} key={"link_parent_0"}>
                        <Link  to={"/all-submissions"}>
                           All Submission By
                        </Link>
                    </li>
                    <li className={"link"} key={"link_parent_1"}>
                        <Link  to={"/submissions/rejected_by/Colin%20Dowd"}>
                            All Rejected Submission By Colin Dowd (Just dummy)
                        </Link>
                    </li>
             
                </ol>
                {this.props.children}
            </div>
            
        );
    }
}