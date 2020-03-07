/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

const PortfolioCardDetail = (props) => {
    const { portfolio, modal, toggle, className } = props;
    return (
        <div>
            <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
                <ModalBody>
                    <p><b>Description :</b> {portfolio.description}</p>
                    <p><b>Location :</b> {portfolio.location}</p>
                    <p><b>Company :</b> {portfolio.company}</p>
                    <p><b>Position :</b> {portfolio.position}</p>
                    <p><b>StartDate :</b> {moment(portfolio.startDate).format("MMMM YYYY")}</p>
                    <p><b>endDate :</b> {portfolio.endDate ? moment(portfolio.endDate).format("MMMM YYYY") : 'Still Working Here'}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default PortfolioCardDetail;