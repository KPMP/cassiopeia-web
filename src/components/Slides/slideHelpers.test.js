import { noSlidesFound, downloadSlide, getNextSlide, getPreviousSlide } from './slideHelpers';

describe("noSlidesFound", () => {
	beforeEach(() => {
		const window = document.defaultView;
		window.location.assign = jest.fn();
	})
	
	it("should redirect when the object contains an empty array", () => {
		noSlidesFound({ slides: [] });
		expect(window.location.assign).toHaveBeenCalledTimes(1);
		expect(window.location.assign).toHaveBeenCalledWith("/");
	});

	it("should redirect when the object passed in is null", () => {
		noSlidesFound(null);
		expect(window.location.assign).toHaveBeenCalledTimes(1);
		expect(window.location.assign).toHaveBeenCalledWith("/");
	});

	it("should redirect when the object passed in is undefined", () => {
		noSlidesFound(undefined);
		expect(window.location.assign).toHaveBeenCalledTimes(1);
		expect(window.location.assign).toHaveBeenCalledWith("/");
	});

	it("should do nothing when the object passed in has items in the array", () => {
		noSlidesFound( { slides: [ {key: "value" }]});
		expect(window.location.assign).toHaveBeenCalledTimes(0);
	});

});

describe("downloadSlide", () => {
	beforeEach(() => {
		document.body.innerHTML =
			 '<a id="download" download={downloadFileName}><FontAwesomeIcon icon={faDownload} size="2x" className="clickable"/></a>' +
			 '<div class="openseadragon"><div class="openseadragon-canvas">' +
				'<canvas id="myCanvas" width="500" height="500"></canvas>'+
			 '</div></div><div class="openseadragon">second one for navigator pane</div>';
		const window = document.defaultView;

	});

	it("sets the href and download attributes on the a tag with 'stuff' in non-IE browser", () => {
		mockCanvas(window, 'stuff');
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext('2d');

		downloadSlide('slideName');

		let result = document.getElementById("download");
		expect(result.href).toEqual('http://localhost/stuff');
		expect(result.download).toEqual('slideName');
	});

	it('uses msSaveOrOpenBlob in IE browser', () => {
		navigator.__defineGetter__('userAgent', function() {
			return 'MSIE';
		});
		let ieSave = jest.fn();
		window.navigator.msSaveBlob = ieSave;
		mockCanvas(window, 'stuff');
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext('2d');

		downloadSlide('slideName');

		expect(ieSave).toHaveBeenCalledTimes(1);
		var blob = canvas.msToBlob();
		expect(ieSave).toHaveBeenCalledWith(blob, 'slideName');
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

    window.HTMLCanvasElement.prototype.msToBlob = function () {
        return toDataUrlReturn;
    }
}

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
