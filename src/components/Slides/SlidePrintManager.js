// https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
class SlidePrintManager {

    static instance;

    static getInstance() {
        if(this.instance == null) {
            this.instance = new SlidePrintManager();

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
        this.printContainer = container;
        document.body.appendChild(container);
    }

    destroyPrintContainer() {
        document.body.removeChild(this.printContainer);
        this.printContainer = null;
    }

    isPrinting() {
        return this.printContainer != null;
    }

    isSlideViewer() {
        let matches =  window.location.href.match(/slides/);
        return matches != null && matches.length;
    }

    beforePrint() {
        let spm = SlidePrintManager.getInstance();

        if(spm.isPrinting()) {
            return;
        }

        if(!spm.isSlideViewer()) {
            return;
        }

        if(spm.getReduxStore() == null) {
            return;
        }

        let slideTitleText = spm.getReduxStore().getState().selectedPatient.selectedSlide.slideName;
        let slideTypeText = spm.getReduxStore().getState().selectedPatient.selectedSlide.stain.title;

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
    }

    afterPrint() {
        let spm = SlidePrintManager.getInstance();
        if(spm.isPrinting()) {
            spm.destroyPrintContainer();
        }
    };
}

export default SlidePrintManager;