console.log("test");

/* 
Nala
Droppy
alle Hunde Namen

Hunde Namen ändern
*/


let unsereHaustiere = [ // Array 0
    {// Object names
      tiertyp: "Katze",
  
      names: [ // Array 1
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ]
    }
  ];
  
  console.log(unsereHaustiere)
  console.table(unsereHaustiere);

  // Nala
  console.log(unsereHaustiere[0].names[1])


  //Droppy
  console.log(unsereHaustiere[1].names[2])

  // alle Hunde Namen
  console.log(unsereHaustiere[1].names);


  // Hund ändern oder hinzufügen
  let hund1 = 3 ; // 3 = IndexZahl wo er ins Array rein soll

  unsereHaustiere[1].names[hund1] = `neuer Name ${hund1} Wuffi`;

  console.log(unsereHaustiere)

// alle Hunde Ändern
unsereHaustiere[1].names = ["bello", "waldi", "tina"];
  console.log(unsereHaustiere)

  // Hund Array hinzufügen mit push
  unsereHaustiere[1].names.push("Hütehund");
  console.log(unsereHaustiere)

