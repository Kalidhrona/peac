const allowedUsers = ["Dheeraj", "Dhrona", "Krishna", "Harsha", "Abhi", "Target", "Me", "Taj"];
let currentUser = "";

function login() {
  const input = document.getElementById("usernameInput");
  const name = input.value.trim();
  const error = document.getElementById("error");

  if (!allowedUsers.includes(name)) {
    error.textContent = "Access Denied. You are not authorized.";
    return;
  }

  currentUser = name;
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("chatScreen").style.display = "block";
  listenForMessages();
}

function sendMessage() {
  const msgInput = document.getElementById("messageInput");
  const message = msgInput.value.trim();
  if (!message) return;

  db.ref("messages").push({
    sender: currentUser,
    text: message,
    timestamp: Date.now()
  });

  msgInput.value = "";
}

function listenForMessages() {
  const chatBox = document.getElementById("chatBox");
  db.ref("messages").on("child_added", (snapshot) => {
    const msg = snapshot.val();
    if (!allowedUsers.includes(msg.sender)) return;

    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text}`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

