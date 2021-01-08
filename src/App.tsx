import React from 'react';
import './App.css';
import Cell from './components/Cell';

const possibilities: string[] = [
    '"Du er på mute"',
    'Møtet blir forstyrret av et familiemedlem eller kjæledyr',
    '"Hvis alle kan følge meg"',
    'IAAS, PAAS eller SAAS nevnes',
    'Video fryser',
    'Møtedeltaker tar slurk av kaffekopp',
    'Lyd hakker',
    'Order "frontend" nevnes',
    '"skateboard"',
    'Vi hører ekko',
    'Ordet "konsept" nevnes',
    '"Jeg må løpe videre"',
    'G R A T I S',
    'anskaffelser.no nevnes',
    '"veikart"',
    '"produsent" eller "leverandør" nevnes',
    '"prioritering"',
    'Noen må bytte hodetelefoner',
    'Ordet "backend" nevnes',
    '"veiledning"',
    '"veiledningtekster"',
    '"Kan dere høre meg?"',
    '"La meg dele skjerm"',
    'Ordet "laboratorisk" nevnes',
    'Barn som bråker',
    'Demospøkelse slår til',
    'Noen snakker i munnen på hverandre',
    '"Har du hånda oppe eller har du glemt å ta den ned?"',
    'Møtedeltaker rekker opp hånda',
    '"Kan alle se skjermen min?"',
    'Møtedeltaker deler feil skjerm',
    'Møtedeltaker må lete etter riktig vindu',
    'Møtedeltaker blir avslørt i å ikke følge med',
    '"<navn>, kan du mute?"',
    '"brukertest"',
    'Det oppstår forvirring rundt begrep',
    '"smidig utvikling"',
    '"dette var litt smått, kan du forstørre?"',
    '"skytjenester" nevnes',
    'Møtet blir forstyrret av høylydt tasting',
    'Hører mobiltelefon i bakgrunnen',
    '"ut i produksjon"',
    'En møtedeltaker venter i lobbyen og må slippes inn',
    'Noen fornorsker et engelsk ord',
    'Møtedeltaker avslører at hen sitter i undertøy',
    'Familiemedlem/dyr i bakgrunnen',
    'Kone/Mann/elsker(inne) i slåbrokk'
];

const createBoard = (): JSX.Element[] => {
  const board: string[] = [];
  for (let i = 0; i < 25; i++) {
    let candidate = possibilities[randomIndex()];
    while(board.includes(candidate)) {
      candidate = possibilities[randomIndex()];
    }
    board.push(candidate);
  }
  return board.map(c => <Cell key={c} marked={false} text={c}/>)
};

const randomIndex = (): number => Math.floor(Math.random() * Math.floor(25));

const App = () => (
    <div className="App">
      {createBoard()}
    </div>
);

export default App;
