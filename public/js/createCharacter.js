

const btnEl = document.getElementById("charForm");

const charFormHandler = async(event) => {
    event.preventDefault();

    const characterName = document.getElementById("character-name").value.trim();
    const level = document.getElementById("level").value.trim();
    const strength = document.getElementById("strength").value.trim();
    const dexterity = document.getElementById("dexterity").value.trim();
    const constitution = document.getElementById("constitution");
    const intelligence = document.getElementById("intelligence").value.trim();
    const wisdom = document.getElementById("wisdom").value.trim();
    const charisma = document.getElementById("charisma").value.trim();
    const background = document.getElementById("bg-menu").value.trim();
    const characterClass = document.getElementById("class-menu").value.trim();
    const race = document.getElementById("race-menu").value.trim();


    if (characterName && level && strength && dexterity && constitution && intelligence && wisdom && charisma && background && characterClass && race) {
        const response = await fetch(`/api/characters/characters`, {
            method: 'POST',
            body: JSON.stringify({characterName, level, strength, dexterity, constitution, intelligence, wisdom, charisma, background, characterClass, race}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        if (response.ok) {
            document.location.replace(`/characters/characters`);                //Should it be /characters/characters/${id}
        } else {
            alert('Failed to create a new character');
        }
    }
};

btnEl.addEventListener('submit', charFormHandler)