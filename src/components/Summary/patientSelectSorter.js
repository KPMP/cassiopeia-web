import orderBy from 'lodash/orderBy';

function patientSelectSorter(slides, orderFields = ['slideName'], orderByFields = ['asc'] ) {
	if (slides.length > 0) {
		return orderBy(slides, orderFields, orderByFields);
	}
	return slides;
}

export default patientSelectSorter;