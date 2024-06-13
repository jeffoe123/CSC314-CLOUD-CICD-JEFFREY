var picker = new Pikaday({
    field: document.getElementById('expiryDate'),
    format: 'MM/YYYY',
    yearRange: [moment().year(), moment().year() + 15],
    showYearDropdown: true
});

function toggleMenu() {
    var menu = document.querySelector('.checkout-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function togglePopup() {
    var popup = document.getElementById('popupContainer');
    popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
}
