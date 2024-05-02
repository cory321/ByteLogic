import './style.css';
import byteLogicLogo from '/images/ByteLogicLogo-dark.svg';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <img class="logo" src="${byteLogicLogo}" alt="ByteLogic Agency Logo" />
    <h1>We are a software development agency located in San Luis Obispo, California.</h1>
    <p class="read-the-docs">
        <a href="mailto:cory@bytelogic.agency" class="email">cory@bytelogic.agency</a>
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
