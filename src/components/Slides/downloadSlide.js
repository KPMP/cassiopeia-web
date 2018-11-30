export const downloadSlide = (downloadFileName) => { 
	let openseadragon = document.getElementsByClassName("openseadragon")[0];
	let canvasDiv = openseadragon.getElementsByClassName("openseadragon-canvas")[0];
	let canvas = canvasDiv.getElementsByTagName("canvas")[0];
	let image = canvas.toDataURL("image/jpeg");

	var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
	if (!isIE) {
		let downloadLink = document.getElementById("download");
		downloadLink.setAttribute("href", image);
		downloadLink.setAttribute("download", downloadFileName);
	}

	if (isIE) {
		var blob = new Blob([image], { type: "image/jpeg" });
		window.navigator.msSaveOrOpenBlob(blob, downloadFileName);
	}
}