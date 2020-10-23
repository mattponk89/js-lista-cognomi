// punto le variabili agli elementi del DOM
var btnNewSurnameEl = document.getElementById('btnNewSurname');
var insertResultEl = document.getElementById('insertResult');
var unorderedListEl = document.getElementById('unorderedList');
var orderedListEl = document.getElementById('orderedList');
var positionUserSurEl = document.getElementById('positionUserSur');

// valorizzo il mio array con i nome già presenti
var surnameList = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

//valorizzo la posizione del cognome
var positionUserSur = 0;

// Inserisco il cognome utente dentro il mio array quando viene premuto il tasto

btnNewSurnameEl.addEventListener('click', function() {

  // recupero cognome utente
  var userSurEl = document.getElementById('userSur');
  userSur = userSurEl.value;
  // Scrivo la lista dei cognomi prima di ordinarla nel DOM
  for(var i = 0; i < surnameList.length; i++){
    unorderedListEl.innerHTML += '<li>'+ surnameList[i] + '</li>';
  }

  surnameList.push(userSur);


  // riordina array in ordine alfabetico
  surnameList.sort();


  for(var i = 0; i < surnameList.length; i++){
    orderedListEl.innerHTML += '<li>'+ surnameList[i] + '</li>';
    if (userSur == surnameList[i]) {
      positionUserSur = i + 1;
    }
  }

  positionUserSurEl.innerHTML += 'La posizione del cognome inserito è: ' + positionUserSur;
});
