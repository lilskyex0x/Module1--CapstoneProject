const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navbar');
const homeBtn = document.querySelector('#Home');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  homeBtn.classList.toggle('active');
});

document.querySelectorAll('.navLink').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  homeBtn.classList.remove('active');
}));

// Speaker Data

const speakers = {
  speakerData: [
    {
      img: 'img/boopmeep.jpg',
      name: 'BoopMeep',
      work: 'Mage main pve player, content creator and streamer',
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, magni laudantium? Ipsam cum voluptas accusamus!',
    },
    {
      img: 'img/Drjayfisto.jpg',
      name: 'Dr-jayfisto',
      work: 'Mage main pve player, content creator, theory crafter and streamer',
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, magni laudantium? Ipsam cum voluptas accusamus!',
    },
    {
      img: 'img/preheat.jpg',
      name: 'Preheat',
      work: 'Mage main pve player, theory crafter, content writer at WoWHead, and streamer',
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, magni laudantium? Ipsam cum voluptas accusamus!',
    },
    {
      img: 'img/mitchjones.jpg',
      name: 'Mitchjones',
      work: 'Mage main pvp player and streamer',
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, magni laudantium? Ipsam cum voluptas accusamus!',
    },
    {
      img: 'img/Venruki.jpg',
      name: 'Venruki',
      work: 'Mage main pvp player, theroy crafter, co-host at AWC tournament and streamer',
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, magni laudantium? Ipsam cum voluptas accusamus!',
    },
    {
      img: 'img/xaryu.jpg',
      name: 'Xaryu',
      work: 'Fire mage main pvp player, played WOW since 2004, content creator, AWC tournament champion, and streamer',
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, magni laudantium? Ipsam cum voluptas accusamus!',
    },
  ],
};

// Speaker Elements & Styles

let speakerDiv = '';

speakers.speakerData.forEach((speaker) => {
  speakerDiv += `<div class="card">
  <div class="speakerImg"><img width="150" src=${speaker.img} alt=${speaker.name}></div>
  <div class="aboutSpeaker">
      <h4 class="name">${speaker.name}</h4>
      <h6 class="work"><i>${speaker.work}</i></h6>
      <div class="underline"></div>
      <p class="aboutText">${speaker.bio}</p>
  </div>
</div>`;
});

document.querySelector('#speakerCards').innerHTML = speakerDiv;

const more = document.querySelector('.more');
const close = document.querySelector('.close');
const spClass3 = document.querySelector('.card:nth-child(3)');
const spClass4 = document.querySelector('.card:nth-child(4)');
const spClass5 = document.querySelector('.card:nth-child(5)');
const spClass6 = document.querySelector('.card:nth-child(6)');

more.addEventListener('click', () => {
  spClass3.style.display = 'flex';
  spClass4.style.display = 'flex';
  spClass5.style.display = 'flex';
  spClass6.style.display = 'flex';

  more.style.display = 'none';
  close.style.display = 'flex';
});

close.addEventListener('click', () => {
  spClass3.style.display = 'none';
  spClass4.style.display = 'none';
  spClass5.style.display = 'none';
  spClass6.style.display = 'none';

  more.style.display = 'flex';
  close.style.display = 'none';
});
