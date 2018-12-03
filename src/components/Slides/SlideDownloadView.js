import React, { Component } from 'react';

class SlideDownloadView extends Component {

    constructor(props) {
        super(props);

        this.slideDataURL = this.slideDataURL.bind(this);
    }

    slideDataURL() {
        let canvas = document.querySelector('.openseadragon-canvas canvas');
        return canvas.toDataURL();
    }

    render() {
        return (
            <iframe id="slide-download-view">
                    <img src={this.slideDataURL} />
            </iframe>
        );
    }

}

export default SlideDownloadView;