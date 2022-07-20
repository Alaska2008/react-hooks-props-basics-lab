import React from "react";

function Links(props){
    return(
        <div id='links'>
            <h3> Links</h3>

            <a href={props.github}> https://github.com/Alaska2008/ </a>
            <a href={props.linkedin}> https://www.linkedin.com/in/atikpo-amen/ </a>
           
        </div>
    );
}
export default Links;