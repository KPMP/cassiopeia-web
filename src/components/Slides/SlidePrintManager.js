// https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
class SlidePrintManager {

    static instance;

    static getInstance() {
        if(this.instance == null) {
            this.instance = new SlidePrintManager();
            console.log('+++ Instancing SlidePrintManager');

            if (window.matchMedia) {
                let mediaQueryList = window.matchMedia('print');
                mediaQueryList.addListener(this.mediaQueryListener);
            }

            window.onbeforeprint = this.instance.beforePrint;
            window.onafterprint = this.instance.afterPrint;
        }

        return this.instance;
    }

    static mediaQueryListener(mql) {
        let spm = SlidePrintManager.getInstance();
        if (mql.matches) {
            spm.beforePrint();
        } else {
            spm.afterPrint();
        }
    }

    setReduxStore(reduxStore) {
        this.reduxStore = reduxStore;
    }

    getReduxStore() {
        return this.reduxStore;
    }

    appendPrintContainer(container) {
        //let spm = SlidePrintManager.getInstance();
        this.printContainer = container;
        document.body.appendChild(container);
    }

    destroyPrintContainer() {
        //let spm = SlidePrintManager.getInstance();
        document.body.removeChild(this.printContainer);
        this.printContainer = null;
    }

    isPrinting() {
        return this.printContainer != null;
    }

    isSlideViewer() {
        //TODO check to see if this is the slide viewer page
        let matches =  window.location.href.match(/slides/);
        return matches != null && matches.length;
    }

    beforePrint() {
        let spm = SlidePrintManager.getInstance();

        if(spm.isPrinting()) {
            console.log('In mid-print; returning');
            return;
        }

        if(!spm.isSlideViewer()) {
            console.log('Not prepping to print a non-slideviewer page');
            return;
        }

        if(spm.getReduxStore() == null) {
            console.log('Not able to access redux store');
            return;
        }

        console.log('+++ Printing');

        let slideTitleText = spm.getReduxStore().getState().selectedPatient.selectedSlide.slideName;
        let slideTypeText = spm.getReduxStore().getState().selectedPatient.selectedSlide.stain;

        let openseadragon = document.getElementsByClassName('openseadragon')[0];
        let canvasDiv = openseadragon.getElementsByClassName('openseadragon-canvas')[0];
        let canvas = canvasDiv.getElementsByTagName('canvas')[0];
        let printContainer = document.createElement('div');
        let imageContainer = document.createElement('img');
        let textContainer = document.createElement('div');
        let slideTitle = document.createElement('h3');
        let slideType = document.createElement ('h2');

        spm.appendPrintContainer(printContainer);

        slideTitle.setAttribute('id', 'print-slide-title');
        slideTitle.innerHTML = slideTitleText;
        slideType.setAttribute('id', 'print-slide-type');
        slideType.innerHTML = slideTypeText;
        textContainer.setAttribute('id', 'print-slide-text');
        textContainer.appendChild(slideType);
        textContainer.appendChild(slideTitle);
        imageContainer.setAttribute('id', 'print-slide-image');
        imageContainer.setAttribute('src', canvas.toDataURL('image/jpeg'));
        printContainer.setAttribute('id', 'print-container');
        printContainer.appendChild(imageContainer);
        printContainer.appendChild(textContainer);

        console.log('+++ Printing all ready');
    }

    afterPrint() {
        let spm = SlidePrintManager.getInstance();
        if(spm.isPrinting()) {
            spm.destroyPrintContainer();
        }
    };
}

export default SlidePrintManager;