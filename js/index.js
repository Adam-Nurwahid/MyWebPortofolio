const texts = ["Android Devloper", "Website Devloper", "Fotografer", "Videografer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let isIntroComplete = false;

function type() {
    const introElement = document.getElementById("intro-text");
    const textElement = document.getElementById("animated-text");
    const currentText = texts[index];

    if (!isIntroComplete) {
        // Menampilkan "Hello I am" terlebih dahulu
        introElement.textContent = "Hello I am ";
        isIntroComplete = true;
        setTimeout(type, 500); // Delay sebelum mulai mengetik animasi berikutnya
        return;
    }

    // Animasi teks berikutnya
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
    }

    if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Delay sebelum mulai menghapus
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Loop teks
        setTimeout(type, 500); // Delay sebelum mengetik teks berikutnya
    } else {
        setTimeout(type, isDeleting ? 100 : 150); // Kecepatan mengetik dan menghapus
    }
}

type();
