let images = ['goat', 'area', 'km'];
let headers = ['yellow click&pick']

headers.push('שטחי מסחר פז סנטר');
headers.push('טיפז');

let index = 0;
let len = images.length;
const imgElement = document.querySelector('#cng-img');
const headElement = document.querySelector('#cng-head');

function change() {
   imgElement.src = images[index]+".jpg";
   headElement.innerText = headers[index];
   index > (len-2) ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 4000);
};
