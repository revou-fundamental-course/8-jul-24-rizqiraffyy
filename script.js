// Initialize
const hitungBMI = document.getElementById("hitung-bmi");
const resetButton = document.getElementById("reset");
const form = document.querySelector('.form-container');
const section2 = document.querySelector('#section2');
const beratBadanInput = document.getElementById("berat-badan");
const usiaInput = document.getElementById("usia");
const tinggiBadanInput = document.getElementById("tinggi-badan");
const bmiValue = document.getElementById("bmi-value");
const bmiDescription = document.getElementById("bmi-description");
const bmiRange = document.getElementById("bmi-range");

hitungBMI.addEventListener("click", calculateBMI);
resetButton.addEventListener("click", resetForm);
hitungBMI.addEventListener("click", () => {section2.style.display = 'block';});
resetButton.addEventListener("click", () => {section2.style.display = 'none';});

//Function calculate
function calculateBMI() {
  const beratBadan = parseFloat(beratBadanInput.value);
  const tinggiBadan = parseFloat(tinggiBadanInput.value) / 100; // Convert cm to meter
  const bmi = beratBadan / (tinggiBadan * tinggiBadan);

  bmiValue.textContent = bmi.toFixed(1);
  if (!beratBadan ||!tinggiBadan ||!usia) {
    alert("Tolong isi form terlebih dahulu!");
    section2.style.display = 'none';
    return;
  }

  // Rules
  if (bmi < 18.5) {
    bmiDescription.textContent = "Kekurangan Berat Badan";
    bmiRange.textContent = "BMI kurang dari 18.5";
    articleOutput1.innerHTML = `
    <h3>Konsultasi Ahli Gizi</h3>
    <p>Anda mengalami berat badan kurang, sangat penting untuk berkonsultasi dengan ahli gizi. Ahli gizi dapat membantu Anda merancang pola makan yang tepat dan seimbang untuk meningkatkan berat badan Anda secara sehat. Mereka dapat memberikan saran mengenai makanan yang kaya akan nutrisi penting, seperti protein, vitamin, dan mineral, yang diperlukan tubuh untuk meningkatkan massa otot dan fungsi kekebalan tubuh. Jangan biarkan kekurangan gizi menghambat aktivitas dan kualitas hidup Anda. Segera temui ahli gizi untuk mendapatkan solusi yang efektif dan meningkatkan kesehatan Anda.</p>
    `;
    articleOutput2.innerHTML = `
    <h3>Konsultasi Dokter</h3>
    <p>Konsultasi dengan dokter adalah langkah penting untuk memahami penyebab yang mendasarinya dan mendapatkan perawatan yang tepat. Dokter dapat melakukan pemeriksaan menyeluruh dan tes yang diperlukan untuk mengidentifikasi potensi masalah kesehatan seperti gangguan makan atau penyakit yang mempengaruhi penyerapan nutrisi. Dengan panduan dokter, Anda bisa mendapatkan rencana perawatan yang komprehensif untuk mencapai berat badan sehat dan mencegah komplikasi lebih lanjut. Jangan biarkan berat badan kurang mengganggu kesehatan dan kualitas hidup Anda, temui dokter sekarang.</p>
    `;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiDescription.textContent = "Normal (Ideal)";
    bmiRange.textContent = "BMI diantara 18.5 dan 24.9";
    articleOutput1.innerHTML = `
    <h3>Konsultasi Ahli Gizi</h3>
    <p>Meskipun Anda memiliki berat badan normal, konsultasi dengan ahli gizi tetap bermanfaat untuk menjaga kesehatan dan kebugaran Anda. Ahli gizi dapat membantu memastikan bahwa pola makan Anda seimbang dan mencukupi semua kebutuhan nutrisi tubuh, mencegah potensi masalah kesehatan di masa depan. Mereka juga dapat memberikan saran mengenai gaya hidup sehat, termasuk pilihan makanan yang dapat mendukung energi dan kesehatan jangka panjang. Dengan bantuan ahli gizi, Anda dapat terus menikmati kualitas hidup yang optimal dan mencegah penyakit kronis.</p>
    `;
    articleOutput2.innerHTML = `
    <h3>Konsultasi Dokter</h3>
    <p>Konsultasi rutin dengan dokter sangat penting untuk mempertahankan kesehatan yang optimal. Dokter dapat membantu Anda memantau indikator kesehatan penting seperti tekanan darah, kolesterol, dan kadar gula darah, serta memberikan saran mengenai pencegahan penyakit dan pola hidup sehat. Dengan bimbingan dokter, Anda dapat mendeteksi dini potensi masalah kesehatan dan menjaga keseimbangan yang tepat antara nutrisi dan aktivitas fisik. Pertahankan kesehatan Anda dengan berkonsultasi dengan dokter secara teratur untuk memastikan kualitas hidup yang terbaik.</p>
    `;
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiDescription.textContent = "Kelebihan Berat Badan";
    bmiRange.textContent = "BMI diantara 25.0 dan 29.9";
    articleOutput1.innerHTML = `
    <h3>Konsultasi Ahli Gizi</h3>
    <p>Anda memiliki kelebihan berat badan, konsultasi dengan ahli gizi adalah langkah bijak untuk mengembalikan tubuh Anda ke jalur yang sehat. Ahli gizi dapat membantu Anda merancang rencana makan yang seimbang dan program penurunan berat badan yang efektif, tanpa harus mengorbankan kebutuhan nutrisi tubuh. Mereka juga dapat memberikan dukungan dan motivasi untuk mencapai tujuan kesehatan Anda, mengurangi risiko penyakit kronis, dan meningkatkan kualitas hidup. Jangan biarkan kelebihan berat badan menghambat aktivitas dan kesehatan Anda. Temui ahli gizi sekarang untuk memulai perjalanan menuju tubuh yang lebih sehat.</p>
    `;
    articleOutput2.innerHTML = `
    <h3>Konsultasi Dokter</h3>
    <p>Konsultasi dengan dokter dapat memberikan wawasan berharga mengenai kesehatan Anda dan risiko yang terkait. Dokter dapat membantu Anda memahami bagaimana kelebihan berat badan mempengaruhi tubuh dan memberikan rekomendasi medis untuk penurunan berat badan yang aman dan efektif. Mereka juga dapat meresepkan pemeriksaan kesehatan tambahan dan memberikan saran mengenai diet dan aktivitas fisik yang sesuai. Dengan dukungan dokter, Anda dapat mengurangi risiko penyakit kronis seperti diabetes dan penyakit jantung, serta meningkatkan kualitas hidup secara keseluruhan. Jangan tunda lagi, konsultasikan kesehatan Anda dengan dokter untuk mendapatkan solusi yang tepat.</p>
    `;
  } else if (bmi >= 30) {
    bmiDescription.textContent = "Kegemukan (Obesitas)";
    bmiRange.textContent = "BMI lebih dari 30.0";
    articleOutput1.innerHTML = `
    <h3>Konsultasi Ahli Gizi</h3>
    <p>Obesitas adalah kondisi yang memerlukan perhatian serius, dan berkonsultasi dengan ahli gizi adalah langkah penting untuk mengelolanya. Ahli gizi dapat membantu Anda memahami penyebab obesitas dan merancang program penurunan berat badan yang aman dan efektif. Dengan bimbingan mereka, Anda dapat mempelajari cara membuat pilihan makanan yang lebih sehat, mengatur porsi makan, dan meningkatkan aktivitas fisik. Mengatasi obesitas dengan bantuan ahli gizi dapat secara signifikan mengurangi risiko penyakit serius seperti diabetes, penyakit jantung, dan kanker, serta meningkatkan kualitas hidup Anda secara keseluruhan. Jangan tunda lagi, temui ahli gizi untuk mendapatkan dukungan yang Anda butuhkan!</p>
    `;
    articleOutput2.innerHTML = `
    <h3>Konsultasi Dokter</h3>
    <p>Konsultasi dengan dokter adalah langkah pertama yang penting untuk mengelola obesitas secara efektif. Dokter dapat menilai kondisi kesehatan Anda secara menyeluruh, mengidentifikasi faktor risiko, dan merancang rencana perawatan yang komprehensif termasuk perubahan pola makan, peningkatan aktivitas fisik, dan bila perlu, terapi medis. Dengan bimbingan dan dukungan dokter, Anda dapat mengurangi risiko penyakit serius, meningkatkan kesehatan mental, dan mencapai berat badan yang lebih sehat. Jangan biarkan obesitas mengendalikan hidup Anda, temui dokter untuk mendapatkan perawatan yang diperlukan dan mulai perjalanan menuju kesehatan yang lebih baik!</p>
    `;
  }
}

// reset
function resetForm() {
  beratBadanInput.value = 0;
  usiaInput.value = 0;
  tinggiBadanInput.value = 0;
  bmiValue = 0;
  bmiDescription.textContent = "-";
}
