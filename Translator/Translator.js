const btn = document.querySelector(".btn");



// Function to translate text using the Google Translate API

async function translateText(inputText, inputLanguage, outputLanguage) {

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText)}`;

    try {

        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Translation failed: ${res.statusText}`);
        }

        const data = await res.json();
        
        console.log(data);

        return data[0][0][0];

    } catch (error) {
        console.error("Error:", error);
        return "Translation failed. Please try again.";
    }
}



btn.addEventListener("click", async () => {

    const inputText = document.querySelector(".inputText").value.trim();  
    
    const lang_opt = document.querySelector(".langCon").value;  

    const outPutText = document.querySelector(".output-text");  


    if (!inputText) {
        alert("Please enter some text to translate.");
        return; 
    }


    if (lang_opt === "--select a language--") {
        alert("Please select a valid language.");
        outPutText.textContent = "";
        return;
    }

    const translatedText = await translateText(inputText, "auto", lang_opt);  

    console.log(translatedText);
    
    outPutText.textContent = translatedText;  

});
