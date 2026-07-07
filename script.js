const app = document.getElementById("app");

// =======================
// LOADING
// =======================

let persen = 0;

const loading = setInterval(() => {

    persen++;

    document.getElementById("fill").style.width = persen + "%";
    document.getElementById("percent").innerHTML = persen + "%";

    if (persen >= 100) {

        clearInterval(loading);

        setTimeout(openingPage,500);

    }

},30);


// =======================
// OPENING
// =======================

function openingPage(){

app.innerHTML=`

<div class="opening fade">

<h1 class="title">ForYou ❤️</h1>

<p class="subtitle">
A Special Gift Made With Love
</p>

<button class="btn" onclick="welcomePage()">
Open Gift
</button>

</div>

`;

}


// =======================
// WELCOME
// =======================

function welcomePage(){

app.innerHTML=`

<div class="welcome fade">

<div class="bigHeart">
❤️
</div>

<h1>Welcome</h1>

<p>

Terima kasih sudah membuka website ini.

Aku sudah menyiapkan sesuatu.

</p>

<button class="btn" onclick="flowerPage()">

Continue

</button>

</div>

`;

}


// =======================
// FLOWER PAGE
// =======================

function flowerPage(){

app.innerHTML=`

<div class="flower fade">

<div class="flowerEmoji">

🌸 🌺 🌷 🌼

</div>

<h1>For You</h1>

<p>

Klik amplop di bawah ya ❤️

</p>

<div class="envelope" onclick="openEnvelope()">

<div class="cover" id="cover"></div>

<div class="paper" id="paper">

💌

</div>

</div>

</div>

`;

}


// =======================
// OPEN ENVELOPE
// =======================

function openEnvelope(){

document.getElementById("cover").style.transform="rotateX(180deg)";

document.getElementById("paper").style.transform="translateY(-80px)";

setTimeout(letterPage,900);

}


// =======================
// LETTER PAGE
// =======================

function letterPage(){

app.innerHTML=`

<div class="welcome fade">

<h1>💌</h1>

<h2>Untuk Kamu</h2>

<p id="typing"></p>

</div>

`;

const text=`Hai...

Terima kasih sudah hadir.

Website kecil ini aku buat khusus untuk seseorang yang spesial.

Semoga kamu selalu bahagia.

❤️`;

let i=0;

function ketik(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(ketik,35);

}else{

setTimeout(galleryPage,1500);

}

}

ketik();

}


// =======================
// GALLERY (sementara)
// =======================

function galleryPage(){

app.innerHTML=`

<div class="welcome fade">

<h1>📷</h1>

<h2>Gallery</h2>

<p>

Bagian galeri akan kita buat berikutnya.

</p>

<button class="btn">

Coming Soon

</button>

</div>

`;

}
