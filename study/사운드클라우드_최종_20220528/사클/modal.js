function modalOpen() {
    document.querySelector('.login_modalwrap').style.display = 'block';
    document.querySelector('.modal_background').style.display = 'block';
}


function modalClose() {
    document.querySelector('.login_modalwrap').style.display = 'none';
    document.querySelector('.modal_background').style.display = 'none';
}

document.querySelector('#modal_btn').addEventListener('click', modalOpen);
document.querySelector('.modal_close').addEventListener('click', modalClose);
