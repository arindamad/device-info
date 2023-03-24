const ww = window.innerWidth;
const wh = window.innerHeight;
const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.


console.log(ww, wh, scale)
console.log(window.navigator);

const outPut =  `<ul>
    <li>
        <b>Resulation : </b> ${ww} X ${wh}
    </li>
    <li>
        <b>Device Pixel Ratio : </b> ${scale}
    </li>
    <li>
        <b>Platform : </b> ${navigator.platform}
    </li>
</ul>`


document.getElementById("arInfoWrapper").innerHTML =  outPut;