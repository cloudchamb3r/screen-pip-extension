navigator.mediaDevices.getDisplayMedia().then(stream => {
    const presenter = document.createElement('video');
    presenter.style.cssText = 'display:none;';
    presenter.autoplay = true;
    document.getElementsByTagName('body')[0].appendChild(presenter);
    presenter.addEventListener('loadedmetadata', () => {
        presenter.requestPictureInPicture();
    });
    presenter.srcObject = stream;
})