import React from 'react';
import { getNextSlide, getPreviousSlide } from './slideHelpers.js';

let slides = [
    { id: 1234 },
    { id: 4321 }
];

describe('getNextSlide', () => {
    it('returns the next slide', () => {
        let thisSlide = { id: 1234 };
        let nextSlide = getNextSlide(slides, thisSlide);
        expect(nextSlide).toEqual({ id: 4321 });
    });
    it('returns the first if it is the last slide', () => {
        let thisSlide = { id: 4321 };
        let nextSlide = getNextSlide(slides, thisSlide);
        expect(nextSlide).toEqual({ id: 1234 });
    });
    it('returns the same slide if it cannot find the slide', () => {
        let thisSlide = { id: 1234567 };
        let nextSlide = getNextSlide(slides, thisSlide);
        expect(nextSlide).toEqual({ id: 1234567 });
    });
});

describe('getPreviousSlide', () => {
    it('returns the last slide if it is the first slide', () => {
        let thisSlide = { id: 1234 };
        let prevSlide = getPreviousSlide(slides, thisSlide);
        expect(prevSlide).toEqual({ id: 4321 });
    });
    it('returns the previous slide', () => {
        let thisSlide = { id: 4321 };
        let prevSlide = getPreviousSlide(slides, thisSlide);
        expect(prevSlide).toEqual({ id: 1234 });
    });
    it('returns the same slide if it cannot find the slide', () => {
        let thisSlide = { id: 1234567 };
        let prevSlide = getNextSlide(slides, thisSlide);
        expect(prevSlide).toEqual({ id: 1234567 });
    });
});