const allQuestions = {
    Diagnostics: null,
    EyeAnatomy: null,
    EyeDiseasesAndDisorders: null,
    OpticsAndRefraction: null,
    Pharmacology: null
};

async function loadQuestionLibrary(libraryName) {
    if (allQuestions[libraryName] === null) {
        try {
            const response = await fetch(`${libraryName}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const questions = await response.json();
            allQuestions[libraryName] = questions;
        } catch (error) {
            console.error(`Could not load the ${libraryName} question library:`, error);
        }
    }
    return allQuestions[libraryName];
}
