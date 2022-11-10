var circle = document.querySelector('.circle-random');
var btnStart = document.querySelector('.btn');
var listUser = document.querySelector('.list-user');
var btnAdd = document.querySelector('.add-btn');
var overlay = document.querySelector('.overlay');
var btnClose = document.querySelector('.bx.bx-x');
var form = document.querySelector('.main-form');
var mainForm = document.querySelector('.form-add');
var usernameValue = document.querySelector('input[name="username"]');
var addUser = document.querySelector('button[name="btn-add-user"]');
var audio = document.querySelector('.audio');

var random = 720;

function opentt() {
    mainForm.style.zIndex = '10';
    overlay.style.display = 'block';
    form.style.transform = 'translateY(0%)';
}
function closess() {
    mainForm.style.zIndex = '-1';
    overlay.style.display = 'none';
    form.style.transform = 'translateY(-500%)';
    usernameValue.style.border = '1px solid #ccc'
    usernameValue.value = '';
}


function addNewUser() {
    if (usernameValue.value.length == 0) {
        usernameValue.style.border = '2px solid red';
    } else {
        listUser.innerHTML += `
        <div class="item-user" onclick="deleteItem(this)"><span class="minus"><i class='bx bx-user-minus'></i></span><span class="name-item">${usernameValue.value}</span></div>
        `;
        displayCircle();
        closess();
    }
}

function deleteItem(e){
    e.remove();
    displayCircle();
}

function displayCircle(){
    //  cần lấy user từ mảng
    var arrUser = document.querySelectorAll('.item-user');
    // xóa dữ liệu cũ
    circle.innerHTML = ` `;
    for (let index = 0; index < arrUser.length; index++) {
        circle.innerHTML += `
            <span class="username">${arrUser[index].innerText}</span>
            <div class="item"></div>
    `;
    }

    var arrItem = document.querySelectorAll('.item');
    var usernameCircle = document.querySelectorAll('.username');

    var count = 360 / (arrItem.length);
    for (let index = 0; index < arrItem.length; index++) {
        arrItem[index].style.transform = 'rotate(calc(' + index + ' * ' + count + 'deg))';
        usernameCircle[index].style.transform = 'rotate(calc(' + index + ' * ' + count + 'deg)) translateX(70px)';
    }
}

function startGame() {
    random += 720;
    random += Math.round(Math.random() * 360);
    circle.style.transform = 'rotate(' + random + 'deg)';
    audio.play();
}


btnStart.addEventListener('click', startGame);
addUser.addEventListener('click', addNewUser);
overlay.addEventListener('click', closess);
btnClose.addEventListener('click', closess);
btnAdd.addEventListener('click', opentt);

