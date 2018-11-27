import React from 'react';
import patientSelectSorter from './patientSelectSorter';

const patient = {
    "_id":"5bfc010c784ef63ae4514403",
    "kpmp_id":"18-139",
    "slides":
        [
            {
                "_id":"013b70db-38a5-402b-88b0-fdc6fbd6d851",
                "slideName":"18-139-2",
                "stain":"Periodic Acid-Schiff"
            },
            {
                "_id":"4a047935-9c75-4db5-ae67-0609e5fc5298",
                "slideName":"18-139-1",
                "stain":"Periodic Acid-Schiff"
            },
            {
                "_id":"06d20c61-f2bc-41dd-aa5b-eeeeaba9fc73",
                "slideName":"18-139-3",
                "stain":"Periodic Acid-Schiff"
            },
            {
                "_id":"be4d9ac9-71f5-45d8-bd80-d792c7c6e507",
                "slideName":"18-139-5",
                "stain":"Periodic Acid-Schiff"
            },
            {
                "_id":"9716cbd8-485a-4de2-b6e1-75f9ae641132",
                "slideName":"18-139-4",
                "stain":"Periodic Acid-Schiff"
            }
        ]
    };

describe('patientSelectSorter', () => {
    it('should sort the slides array by default on slideName', () => {
        let sortedSlides = patientSelectSorter(patient.slides);
        expect(sortedSlides).toBeDefined();
        expect(sortedSlides[0].slideName).toEqual('18-139-1');
        expect(sortedSlides[1].slideName).toEqual('18-139-2');
        expect(sortedSlides[2].slideName).toEqual('18-139-3');
        expect(sortedSlides[3].slideName).toEqual('18-139-4');
        expect(sortedSlides[4].slideName).toEqual('18-139-5');
    });
});
