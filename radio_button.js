// let radio = document.getElementsByName('prim');
// let button = document.getElementById('one');

// for (let i = 0; i < radio.length; i++) {
//     radio[i].onchange = testRadio;
// }

// function testRadio() {
//     console.log(this.value);
// }

// document.getElementById('one').onclick = checkRadio;

// function checkRadio() {
//     let m = document.getElementsByName('prim')
//     for (let i = 0; i < m.length; i++) {
//         if (m[i].checked) {
//             alert(m[i].value);
//             break;
//         }
//     }
// }

document.onwheel = function (even) {
    console.log(even)
    if (even.deltaY > 0) {
        document.getElementById('line').innerHTML = 'вниз'
    } else {
        document.getElementById('line').innerHTML = 'вверх'
    }

    let speed = even.deltaY;
    speed = Math.abs(speed);

    if (speed < 45) {
        document.getElementById('speed').innerHTML = 'низкая'
    } else if (speed < 130) {
        document.getElementById('speed').innerHTML = 'средняя'
    } else if (speed < 190) {
        document.getElementById('speed').innerHTML = 'высокая'
    } else {
        document.getElementById('speed').innerHTML = 'Капец высокая'
    }
}

// let test1 = document.getElementById('test1');
// let test2 = document.getElementById('test2');

let left = 290;

document.getElementById('test1').onwheel = function (event) {
    let line = event.deltaY;
    left = left + 0.2*line;
    document.getElementById('test2').style.left = left + 'px';
    return false;
}