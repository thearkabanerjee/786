const reasons = [
    "That smile that instantly turns my worst of days into a good one 🥹",
    "Those Eyes always say there's a beautiful story yet to be said 😩",
    "You are the most beautiful person I know 🫠",
    "You're the support I always wished I had 🤧 ",
    "Everything about you seems so PERFECT to me 😭🎀",
    "No reasons are Enough to describe my Love for You! ❤️"
  ];
  
  let index = 0;
  
  document.getElementById("revealButton").addEventListener("click", function () {
    if (index < reasons.length) {
      const list = document.getElementById("reasonsList");
      const listItem = document.createElement("li");
      listItem.textContent = reasons[index];
      list.appendChild(listItem);
      index++;
    } else {
      this.textContent = "I love youuu ❤️!";
      this.disabled = true;
    }
  });



//   const compliments = [
//     "You have the kindest heart. 💕",
//     "Your laughter is infectious! 😂",
//     "You make the world a brighter place. 🌟"
//   ];
  
//   document.getElementById("revealButton").addEventListener("click", function () {
//     const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
//     const listItem = document.createElement("li");
//     listItem.textContent = randomCompliment;
//     document.getElementById("reasonsList").appendChild(listItem);
//   });
  
 document.getElementById("revealButton").addEventListener("click", function () {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${window.innerHeight}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  });



  


