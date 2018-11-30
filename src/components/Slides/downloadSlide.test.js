import { downloadSlide } from './downloadSlide';

describe("downloadSlide", () => {
	beforeEach(() => {
		document.body.innerHTML = 
			 '<a id="download" download={downloadFileName}><FontAwesomeIcon icon={faDownload} size="2x" className="clickable"/></a>' +
			 '<div class="openseadragon"><div class="openseadragon-canvas">' +
				'<canvas id="myCanvas" width="500" height="500"></canvas>'+
			 '</div></div><div class="openseadragon">second one for navigator pane</div>';
		const window = document.defaultView;

	});
	
	it("replaces the href on the a tag with 'stuff'", () => {
		mockCanvas(window, 'stuff');
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext('2d');
		
		downloadSlide();

		let result = document.getElementById("download");
		expect(result.href).toEqual('http://localhost/stuff');
	});
});

const mockCanvas = (window, toDataUrlReturn) => {
    window.HTMLCanvasElement.prototype.getContext = function () {
        return {
            fillRect: function() {},
            clearRect: function(){},
            getImageData: function(x, y, w, h) {
                return  {
                    data: new Array(w*h*4)
                };
            },
            putImageData: function() {},
            createImageData: function(){ return []},
            setTransform: function(){},
            drawImage: function(){},
            save: function(){},
            fillText: function(){},
            restore: function(){},
            beginPath: function(){},
            moveTo: function(){},
            lineTo: function(){},
            closePath: function(){},
            stroke: function(){},
            translate: function(){},
            scale: function(){},
            rotate: function(){},
            arc: function(){},
            fill: function(){},
            measureText: function(){
                return { width: 0 };
            },
            transform: function(){},
            rect: function(){},
            clip: function(){},
        };
    }

    window.HTMLCanvasElement.prototype.toDataURL = function () {
        return toDataUrlReturn;
    }
}