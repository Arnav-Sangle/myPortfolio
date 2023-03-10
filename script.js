const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Cyber Security enthusiast, eager to learn and explore areas like pentesting, bug bounty hunting, web exploitation and many more. Currently doing B.Tech in Information Technology (IT) from Pimpri Chinchwad College of Engineering (Pune, India).",
  skills:
    "C | C++ | Python | HTML | Streamlit",
  education:
    "Primary Education: Delhi Public School, Pune <br> Secondary Education: City Internaltional School, (Wanowrie, Pune) <br> Currently: Undergraduate IT Student at Pimpri Chinchwad College of Engineering, Pune",
  experience:'Member of OWASP Chapter PCCOE',
  certifications: 
    "Python Linkedin Certificate <br> PICT C++ Course Certifacate",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/arnav-sangle-14528b229/' class='success link'><span class='code'>Linkedin</span></a>, <a href='mailto:arnavsangle7x24@gmail.com' class='success link'><span class='code'>Email</span></a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
