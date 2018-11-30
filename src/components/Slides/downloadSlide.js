export const downloadSlide = () => { 
	let openseadragon = document.getElementsByClassName("openseadragon")[0];
	let canvasDiv = openseadragon.getElementsByClassName("openseadragon-canvas")[0];
	let canvas = canvasDiv.getElementsByTagName("canvas")[0];
	
	let downloadLink = document.getElementById("download");
	let image = canvas.toDataURL("image/jpeg");
	downloadLink.setAttribute("href", image);
	
}