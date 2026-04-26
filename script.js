function toggleSidebar() {
    document.getElementById("mySidebar").classList.toggle("active");
}

async function translateText() {
    const text = document.getElementById('inputText').value.trim();
    const resultBox = document.getElementById('resultBox');
    const outputText = document.getElementById('outputText');
    const loader = document.getElementById('loader');

    if(!text) return alert("Tafadhali andika maneno ya Kiswahili!");

    loader.style.display = 'block';
    resultBox.style.display = 'none';

    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=sw|en`);
        const data = await res.json();
        
        outputText.innerText = data.responseData.translatedText;
        loader.style.display = 'none';
        resultBox.style.display = 'block';
    } catch (error) {
        alert("Kuna tatizo la mtandao!");
        loader.style.display = 'none';
    }
}

function copyText() {
    const text = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(text);
    alert("Imekopiwa!");
}

