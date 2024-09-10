const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

async function searchWord() {
    const word = document.getElementById('word-input').value;
    const definitionDiv = document.getElementById('definition');
    
    if (!word) {
        definitionDiv.innerHTML = 'Please enter a word.';
        return;
    }
    
    try {
        const response = await fetch(API_URL + word);
        if (!response.ok) {
            throw new Error('Word not found.');
        }
        const data = await response.json();
        const meanings = data[0].meanings;
        const definitions = meanings.map(meaning => 
            meaning.definitions.map(def => `<li>${def.definition}</li>`).join('')
        ).join('<br>');

        definitionDiv.innerHTML = `
            <h2>${word}</h2>
            <ul>${definitions}</ul>
        `;
    } catch (error) {
        definitionDiv.innerHTML = 'Word not found or an error occurred.';
    }
}
