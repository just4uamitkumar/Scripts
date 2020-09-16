import React from 'react';
import {Container,  Row} from 'reactstrap';

const JavaScript = () => {
    const pageTitle = 'JavaScript'

    return(
        <div className="pageCont">
                <div className="pageHeader">
                    <Container>
                        <h1>{pageTitle}</h1>
                    </Container>                
                </div>
                <div className="content">
                    <Container> 
                        <div className="contentWraper">                       
                                                    
                        </div>
                    </Container>                
                </div>
            </div>
    )
}

export default JavaScript;

