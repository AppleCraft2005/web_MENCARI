const form = document.getElementById('quizForm');
const inputs = form.getElementsByTagName('input');
const Submit = document.getElementById('Submit');

let correctAnswers = 0;
let wrongAnswers = 0;

Submit.addEventListener('click', function() {
    
    // Loop melalui semua elemen input
    for (let i = 0; i < inputs.length; i++) {
        // Pastikan elemen adalah radio button yang dipilih
        if (inputs[i].type === 'radio' && inputs[i].checked) {
            // Memeriksa nilai jawaban
            if (inputs[i].value === 'right') {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
        }
    }

    tampilWeb(correctAnswers)
    resetRadioBTN();

    const results = document.getElementById('results');
    results.innerHTML = `Total Jawaban Benar: ${correctAnswers} <br> Total Jawaban Salah: ${wrongAnswers}`;
});

function tampilWeb(benar) {
    if(benar == 1) {
        alert('jawaban benar 1, anda masih sangat sehat');
    }
    else if(benar == 2) {
        alert("jawaban beanr 2, anda masih cukup sehat");
    }
    else if(benar == 3) {
        alert("jawaban benar 3, anda masih sehat");
    }
    else if(benar == 4) {
        alert("jawaban benar 4, anda memiliki indikasi ringan mengalami gangguan kecemasan");
    }
    else if(benar == 5) {
        alert("Jawaban benar 5, anda memiliki indikasi mengalami gangguan kecemasan");
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
