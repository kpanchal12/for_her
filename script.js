const reasons = [
  {
    title: "Reason 1",
    detail: "Ur voice ufff i love to hear ur voice 😊"
  },
  {
    title: "Reason 2",
    detail: "Your smile: Yrrr i get butterflies when u smile from one ear to other 😄"
  },
  {
    title: "Reason 3",
    detail: "You believe in me when I don’t 💪"
  },
  {
    title: "Reason 4",
    detail: "You make even ordinary days feel special 🌟"
  },
  {
    title: "Reason 5",
    detail: "I love your nose ✨"
  },
  {
    title: "Reason 6",
    detail: "The way you look at me makes me melt 😍"
  },
  {
    title: "Reason 7",
    detail: "You're my safe space and my best friend 🤗"
  },
  {
    title: "Reason 8",
    detail: "The way you adore me 🎉"
  },
  {
    title: "Reason 9",
    detail: "Your heart is the most beautiful part of you ❤️"
  },
  {
    title: "Reason 10",
    detail: "And ofc 10 reasons are not enough i have millions of reason joh waqt ke sath apko batata rahunga💖"
  }
];

const cardGrid = document.getElementById('cardGrid');

reasons.forEach(reason => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${reason.title}</div>
      <div class="card-back">${reason.detail}</div>
    </div>
  `;

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  cardGrid.appendChild(card);
});
