

// const btnEl = document.getElementById("charForm");

const charFormHandler = async(event) => {
    event.preventDefault();

    const characterName = document.getElementById("character-name").value.trim();
    const level = document.getElementById("level").value.trim();
    const strength = document.getElementById("strength").value.trim();
    const dexterity = document.getElementById("dexterity").value.trim();
    const constitution = document.getElementById("constitution").value.trim();
    const intelligence = document.getElementById("intelligence").value.trim();
    const wisdom = document.getElementById("wisdom").value.trim();
    const charisma = document.getElementById("charisma").value.trim();
    // const background = document.getElementById("bg-menu").value.trim();
    // const characterClass = document.getElementById("class-menu").value.trim();
    // const race = document.getElementById("race-menu").value.trim();

    if (characterName && level && strength && dexterity && constitution && intelligence && wisdom && charisma){
    const characterData = {
        race_id: 2,
        role_id: 2,
        level: parseInt(level),
        background_id: 2,
        name: characterName,
        strength: parseInt(strength),
        dexterity: parseInt(dexterity),
        constitution: parseInt(constitution),
        intelligence: parseInt(intelligence),
        wisdom: parseInt(wisdom),
        charisma: parseInt(charisma),
        user_id: 5,
    };
    console.log(characterData);

    console.log(JSON.stringify(characterData));
    try {
        const response = await fetch('/api/newCharacter/newCharacter', {
          method: 'POST',
          body: JSON.stringify(characterData),
          headers: { 'Content-Type': 'application/json'}
        });
  
        if (response.ok) {
          document.location.replace('/characters');
        } else {
            console.log('hello world')
          const data = await response.json();
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
};

const formEl = document.querySelector('.createCharacter-form');

formEl.addEventListener('submit', charFormHandler)


// const charFormHandler = async(event) => {
//     event.preventDefault();

//     const characterName = document.getElementById("character-name").value.trim();
//     const level = document.getElementById("level").value.trim();
//     const strength = document.getElementById("strength").value.trim();
//     const dexterity = document.getElementById("dexterity").value.trim();
//     const constitution = document.getElementById("constitution");
//     const intelligence = document.getElementById("intelligence").value.trim();
//     const wisdom = document.getElementById("wisdom").value.trim();
//     const charisma = document.getElementById("charisma").value.trim();
//     // const background = document.getElementById("bg-menu").value.trim();
//     // const characterClass = document.getElementById("class-menu").value.trim();
//     // const race = document.getElementById("race-menu").value.trim();

//     const characterData = {
//         race_id: 2,
//         role_id: 2,
//         level: level,
//         background_id: 2,
//         name: characterName,
//         strength: strength,
//         dexterity: dexterity,
//         constitution: constitution,
//         intelligence: intelligence,
//         wisdom: wisdom,
//         charisma: charisma,
//         user_id: 5,
//     };


//     if (characterName && level && strength && dexterity && constitution && intelligence && wisdom && charisma && background && characterClass && race) {
//         const response = await fetch(`/api/characters/characters`, {
//             method: 'POST',
//             // body: JSON.stringify({characterName, level, strength, dexterity, constitution, intelligence, wisdom, charisma, background, characterClass, race}),
//             body: JSON.stringify(characterData),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
    
//         if (response.ok) {
//             document.location.replace(`/characters/characters`);                //Should it be /characters/characters/${id}
//         } else {
//             const data = await response.json();
//             alert(data.message);
//         }
//     }
// };