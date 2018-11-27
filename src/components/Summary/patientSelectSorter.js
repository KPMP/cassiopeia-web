import orderBy from 'lodash/orderBy';

function patientSelectSorter(slides, orderFields = ['slideName'], orderByFields = ['asc'] ) {
    return orderBy(slides, orderFields, orderByFields);
}

export default patientSelectSorter;