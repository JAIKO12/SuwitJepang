// membuat computer lalu pakai fungsi math.random 
// untuk mencari nilai secara random
function getPilihanComputer() {
    const comp = Math.random ();
    if (comp < 0.34) return 'gunting';
    if (comp >= 0.34 && comp <= 0.67) return  'batu';
        return 'kertas';
}

// membuat function hasil 
function getHasil(comp,player) {

    if (player == comp) return 'SERI!';
    if ( player == 'batu') return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    if (player == 'kertas')  return (comp == 'gunting' ) ? 'KALAH!' : 'MENANG!';
    if (player == 'gunting') return (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
}
// membuat function putar ketika kita memilih 
// maka gambar computer akan mengacak secara random
// menggunakan fungsi setInterval
function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['kertas', 'gunting', 'batu'];
    let i =0;
    const waktuMulai = new Date().getTime();
    setInterval(function () { 
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] +'.jpg' );
        if (i == gambar.length) i=0;
    },100);
}



// memangil seluruh gambar yang terdapat pada li
// menjalankan fungsi ketika kita klik suatu gambar 
const gambar = document.querySelectorAll('li img');
gambar.forEach(function(img){
    img.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
            const pilihanPlayer = img.className;
            const hasil = getHasil(pilihanComputer,pilihanPlayer);
            putar();
            setTimeout(function () {
                const imgComputer = document.querySelector('.img-computer');
                imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg' );
    
                const info = document.querySelector('.info');
                info.innerHTML = hasil;
            },1000)

    })
})



// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click' , function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pKertas.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg' );
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })




