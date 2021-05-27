import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Countdown from 'react-countdown';

class SessionTimeoutModal extends Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
         this.props.restartTimer();
    }

    renderer = ({hours, minutes, seconds, completed}) => {
        if (completed) {
            this.props.sessionTimedOut(false);
            window.location='https://dev-mydata.kpmp.org/Shibboleth.sso/Logout?return=https://login.dev-mydata.kpmp.org/idp/profile/Logout'
        } else {
            return <span>[:{seconds}]</span>;
        }
    }

    render() {
        let countdown = <Countdown date={Date.now() + 60000} renderer={this.renderer}/>
        return(
        <Modal zIndex={9999} isOpen={this.props.sessionIsTimedOut} >
            <ModalHeader>Session timeout</ModalHeader>
            <ModalBody>
                For security reasons, your connection times out after you've been inactive for awhile.
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => window.location='https://dev-mydata.kpmp.org/Shibboleth.sso/Logout?return=https://login.dev-mydata.kpmp.org/idp/profile/Logout'}>SIGN OUT</Button>{' '}
                <Button color="primary" onClick={() => this.toggle()}>KEEP ME SIGNED IN {countdown}</Button>
            </ModalFooter>
        </Modal>
        );
    }

}

export default SessionTimeoutModal;
