const ww = window.innerWidth;
const wh = window.innerHeight;
const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.


console.log(ww, wh, scale)
console.log(window.navigator);

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  


const outPut =  `<ul>
    <li>
        <b>Resulation : </b> ${ww} X ${wh}
    </li>
    <li>
        <b>Device Pixel Ratio : </b> ${scale}
    </li>
    <li>
        <b>Operating System : </b> ${getOS()}
    </li>
</ul>`


document.getElementById("arInfoWrapper").innerHTML =  outPut;