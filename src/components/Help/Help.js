import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ReactPlayer from 'react-player';
import AfterBiopsy from './AfterBiopsy';
import WhatIsStaining from './WhatIsStaining';
import WhatSeen from './WhatSeen';
import CanIShare from './CanIShare';
import MakeRecommendation from './MakeRecommendation';
import PasswordIssues from './PasswordIssues';
import { default as ReactGA4 } from 'react-ga4';

class Help extends Component {

    constructor(props) {
        super(props);
        this.state = { indexOpen: 0 };
    }

    componentDidMount() {
        document.body.classList.remove('slide-viewer-body');
        let label = 'Help';
        if (this.props.slides === undefined || this.props.slides.length === 0) {
            label = 'No Slides'
        }
        ReactGA4.event({
			category: 'Participant Portal',
			action:'Navigation',
            label: label
		});
    }

    toggle = (toggleEvent) => {
        let event = toggleEvent.target.dataset.event;
        this.setState({ indexOpen: this.state.indexOpen === Number(event) ? 0 : Number(event) });
    }

    render() {
        let slideMessage = "";
        if (this.props.slides === undefined || this.props.slides.length === 0) {
            slideMessage = <Row><Col xs-12><div class="alert alert-primary">No images or data have been processed from your biopsy
    		sample yet. Keep checking back.<br />If you have questions or need help, please contact your study coordinator.</div></Col></Row>;
        }

        return (
            <div id="summary-page">
                <div id="summary-content-wrapper">
                    {slideMessage}
                    <Row>
                        <Col xs='12' className='pb-3'><h2>How to use the Participant Portal</h2></Col>
                    </Row>
                    <Row className='pb-3'>
                        <Col lg='4' xs='12' className='pb-3'>
                            <p>Watch the video for an overview of the Participant Portal and how to navigate its features.</p>
                            <p><a target='_blank' href='https://youtu.be/SPJVMtA4qWI' >Mira el video en espa&#241;ol.</a></p>
                        </Col>
                        <Col lg='8' xs='12'>
                            <div className='player-wrapper'>
                                <ReactPlayer className='react-player' width='100%' height='100%' url='https://youtu.be/Ik9RCT_dR60' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' className='pb-3'><h3>Navigation controls:</h3></Col>
                    </Row>
                    <Row>
                        <Col xs='12'><img src='img/help/figure_viewer-controls.png' alt='' className='img-fluid' /></Col>
                    </Row>
                    <Row>
                        <Col xs='12' className='py-3'><h2>Frequently Asked Questions</h2></Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                            <AfterBiopsy toggle={this.toggle} isOpen={this.state.indexOpen === 1} indexNumber='1' />
                            <WhatIsStaining toggle={this.toggle} isOpen={this.state.indexOpen === 2} indexNumber='2' />
                            <WhatSeen toggle={this.toggle} isOpen={this.state.indexOpen === 3} indexNumber='3' />
                            <CanIShare toggle={this.toggle} isOpen={this.state.indexOpen === 4} indexNumber='4' />
                            <MakeRecommendation toggle={this.toggle} isOpen={this.state.indexOpen === 5} indexNumber='5' />
                            <PasswordIssues toggle={this.toggle} isOpen={this.state.indexOpen === 6} indexNumber='6' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' className='py-3'><h2>If you still need help...</h2></Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                            <p>Click on your study site below to email your research coordinator with any
                            other technical or clinical questions you may have.</p>
                            <ul className='no-bullets'>
                                <li><b>Study sites:</b></li>
                                <li><a href='mailto:kpmprc-bmc@uw.edu?subject=Question from Participant Portal'>Brigham & Women's Hospital / Boston Medical Center</a></li>
                                <li><a href='mailto:kpmprc-ccf@uw.edu?subject=Question from Participant Portal'>Cleveland Clinic</a></li>
                                <li><a href='mailto:kpmprc-columbia@uw.edu?subject=Question from Participant Portal'>Columbia University</a></li>
                                <li><a href='mailto:kpmprc-jhmi@uw.edu?subject=Question from Participant Portal'>Johns Hopkins University</a></li>
                                <li><a href='mailto:kpmprc-joslin@uw.edu?subject=Question from Participant Portal'>Joslin/Beth Isreal Deaconess</a></li>
                                <li><a href='mailto:kpmprc-mssm@uw.edu?subject=Question from Participant Portal'>Mount Sinai</a></li>
                                <li><a href='mailto:kpmprc-arizona@uw.edu?subject=Question from Participant Portal'>University of Arizona</a></li>
                                <li><a href='mailto:kpmprc-uic@uw.edu?subject=Question from Participant Portal'>University of Illinois Chicago</a></li>
                                <li><a href='mailto:kpmprc-umn@uw.edu?subject=Question from Participant Portal'>University of Minnesota</a></li>
                                <li><a href='mailto:kpmprc-unc@uw.edu?subject=Question from Participant Portal'>University of North Carolina</a></li>
                                <li><a href='mailto:kpmprc-upmc@uw.edu?subject=Question from Participant Portal'>University of Pittsburgh</a></li>
                                <li><a href='mailto:kpmprc-utsw@uw.edu?subject=Question from Participant Portal'>UT Southwestern</a></li>
                                <li><a href='mailto:kpmprc-yale@uw.edu?subject=Question from Participant Portal'>Yale University</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Help;
