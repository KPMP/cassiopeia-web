export const downloadSlide = (downloadFileName) => {
    let openseadragon = document.getElementsByClassName("openseadragon")[0];
    let canvasDiv = openseadragon.getElementsByClassName("openseadragon-canvas")[0];
    let canvas = canvasDiv.getElementsByTagName("canvas")[0];

    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
    if (!isIE) {
        let image = canvas.toDataURL("image/jpeg", 1.0);
        let downloadLink = document.getElementById("download");
        downloadLink.setAttribute("download", downloadFileName);
        downloadLink.setAttribute("href", image);

        
        // For some reason, we need to click the button again in firefox for the download to happen
        if (navigator.userAgent.match(/Firefox/g)) {
        	downloadLink.click();
        }
    }

    if (isIE) {
        var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob, downloadFileName);
    }
}

export const noSlidesFound = (selectedPatient) => {
    if (selectedPatient === null || selectedPatient === undefined || Object.keys(selectedPatient.slides).length === 0) {
        window.location.assign("/");
    } 
}

const getSlideIndex = (slideArray, selectedSlide) => {
    return slideArray.findIndex((slide) => {
        return slide.id === selectedSlide.id;
    }, this);
};

export const getNextSlide = (slideArray, selectedSlide) => {
    let slideIndex = getSlideIndex(slideArray, selectedSlide);
    if (slideIndex === -1) {
        return selectedSlide;
    }
    let nextSlideIndex = slideIndex + 1;
    if (nextSlideIndex === slideArray.length) {
        return slideArray[0];
    }
    else {
        return slideArray[nextSlideIndex];
    }
};

export const getPreviousSlide = (slideArray, selectedSlide) => {
    let slideIndex = getSlideIndex(slideArray, selectedSlide);
    if (slideIndex === -1) {
        return selectedSlide;
    }
    let previousSlideIndex = slideIndex - 1;
    if (previousSlideIndex < 0) {
        return slideArray[slideArray.length - 1];
    }
    else {
        return slideArray[previousSlideIndex];
    }
};