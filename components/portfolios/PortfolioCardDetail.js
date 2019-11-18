import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";

class PortfolioCardDetail extends React.Component {
  render() {
    const { isOpen, toggle, portfolio } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p>
              <b>Languages: </b>
              {portfolio.company}
            </p>
            <p>
              <b>Link: </b>
              {portfolio.location}
            </p>
            <p>
              <b>Description: </b>
              {portfolio.description}
            </p>
            <p>
              <b>Future Plans: </b>
              {portfolio.position}
            </p>
            {/* <p><b>Started On: </b>{moment(portfolio.startDate).format('MMMM YYYY')}</p>
            <p><b>Finished On: </b>{portfolio.endDate ? moment(portfolio.endDate).format('MMMM YYYY') : 'Still Working'}</p> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;
