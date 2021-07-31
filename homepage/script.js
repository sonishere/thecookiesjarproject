// function showPage(page) {
//     document.querySelectorAll('div').forEach(div => {
//         div.style.display = 'none';
//     })
    
//     document.querySelectorAll('#${page}').style.display = 'block';
// }

// const id = document.getElementById('sub-content-opening') ;

// document.addEventListener('DOMContentLoaded', () => {
//     showPage(id.dataset);
// })

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sub-content-input').style.display = 'none';
    document.getElementById('sub-content-create').style.display = 'none';

})

function inputPage() {
    document.getElementById('sub-content-opening').style.display = 'none';
    document.getElementById('sub-content-input').style.display = 'block';
}

function createPage() {
    document.getElementById('sub-content-input').style.display = 'none';
    document.getElementById('sub-content-create').style.display = 'block';
    document.getElementById('sub-content-opening').style.display = 'none';
}