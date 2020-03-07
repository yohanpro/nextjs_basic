import React, { useState } from 'react';
import PortfolioCardDetail from './PortfolioCardDetail';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';

// class PortfolioCard extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         const { portfolio, children } = this.props;
//         return (
//             <span onClick="">
//                 <PortfolioCardDetail />
//                 <Card className="portfolio-card">
//                     <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
//                     <CardBody>
//                         <p className="portfolio-card-city"> {portfolio.location} </p>
//                         <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
//                         <CardText className="portfolio-card-text">{portfolio.description}</CardText>
//                         <div className="readMore">
//                             {children}
//                         </div>
//                     </CardBody>
//                 </Card>
//             </span>


//         );
//     }
// }
const PortfolioCard = props => {
    const { portfolio, children } = props;

    const [modal, handleToogle] = useState(false);

    const toggle = () => handleToogle(!modal);
    return (
        <span onClick={() => toggle()}>
            <PortfolioCardDetail portfolio={portfolio} modal={modal} toggle={toggle} />
            <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                <CardBody>
                    <p className="portfolio-card-city"> {portfolio.location} </p>
                    <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                    <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                    <div className="readMore">
                        {children}
                    </div>
                </CardBody>
            </Card>
        </span>
    );
};
export default PortfolioCard;