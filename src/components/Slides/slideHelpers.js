export const downloadSlide = (downloadFileName) => { 
	let openseadragon = document.getElementsByClassName("openseadragon")[0];
	let canvasDiv = openseadragon.getElementsByClassName("openseadragon-canvas")[0];
	let canvas = canvasDiv.getElementsByTagName("canvas")[0];

	var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
	if (!isIE) {
		let image = canvas.toDataURL("image/jpeg");
		let downloadLink = document.getElementById("download");
		downloadLink.setAttribute("href", image);
		downloadLink.setAttribute("download", downloadFileName);
	}

	if (isIE) {
		var blob = canvas.msToBlob();
		window.navigator.msSaveBlob(blob, downloadFileName);
	}
}

export const noSlidesFound = (selectedPatient) => {
	if (selectedPatient === null || selectedPatient === undefined) {
		return true;
	} else {
		return Object.keys(selectedPatient.slides).length === 0;
	}
}