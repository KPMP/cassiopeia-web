import findIndex from 'lodash/findIndex';
import bind from 'lodash/bind';

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

