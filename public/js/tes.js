const form = document.getElementById('quizForm');
const inputs = form.getElementsByTagName('input');
const Submit = document.getElementById('Submit');

let correctAnswers = 0;

let wrongAnswers = 0;
let TidakPernah = 0;
let Jarang = 0;
let KadangKadang = 0;
let Sering = 0;
let SangatSering = 0;

 Submit.addEventListener('click', function() {
    
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            if (inputs[i].value === 'tidak_pernah') {
                TidakPernah+=0;
            }
            else if(inputs[i].value === 'jarang'){
                Jarang++;
            }
            else if(inputs[i].value === 'kadang-kadang'){
                KadangKadang+=2;
            }
            else if(inputs[i].value === 'sering'){
                Sering+=3;
            }
            else if(inputs[i].value === 'sangat_sering'){
                SangatSering+=4;
            }
        }
    }

    let totalAll = totalPoin(TidakPernah,Jarang,KadangKadang,Sering,SangatSering);
    tampilWeb(totalAll);
    resetRadioBTN();

    const results = document.getElementById('results');
    results.innerHTML = `Total poin peserta: ${totalAll}`;

    showmentalState(totalAll)

});

const Reset = document.getElementById('Reset')
Reset.addEventListener('click', function() {
    location.reload();
})



function totalPoin(a,b,c,d,e) {
    let Total = a+b+c+d+e;
    return Total;
}

function showmentalState(total) {
    const GoodMental = document.querySelector('.goodMental');
    const AverageMental = document.querySelector('.averageMental');
    const BadMental = document.querySelector('.badMental');

    if(total >= 0 && total <= 10) {
        GoodMental.classList.remove('hidden')
    }
    else if(total >= 11 && total <= 15){
        AverageMental.classList.remove('hidden')
    }
    else if(total >= 16 && total <= 20){
        BadMental.classList.remove('hidden')
    }
}

function tampilWeb(total) {
    if(total >= 0 && total <= 10) {
        alert('total poin anda adalah '+ total +' anda masih sangat sehat');
    }
    else if(total >= 11 && total <= 20) {
        alert('total poin anda adalah '+ total +' anda masih cukup sehat');
    }
    else if(total >= 21 && total <= 30) {
        alert("total poin anda adalah "+ total +" anda masih sehat");
    }
    else if(total >= 31 && total <= 40) {
        alert("total poin anda adalah "+ total +" anda memiliki indikasi ringan mengalami gangguan kecemasan");
    }
    else if(total >= 41 && total <= 50) {
        alert("total poin anda adalah "+ total +" anda memiliki indikasi mengalami gangguan kecemasan");
    }
    else {
        alert("jawaban tidak valid")
    }
 };

 function resetRadioBTN() {
    const radioBTN = form.querySelectorAll('input[type="radio"]')
    radioBTN.forEach(btn => {
        btn.checked = false;
    })

 }

// Menghitung jawaban benar dan salah

// Menampilkan hasil
