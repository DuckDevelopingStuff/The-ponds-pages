//session alert
if (!
  sessionStorage.getItem('alertShown')
) {
    alert('This page is work in progress!');
    sessionStorage.setItem('alertShown','true');
}

//Darkmode stuff
const button = document.getElementById('dark-mode-btn');

// Load saved preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  document.button.classList.add('dark');
} else {
  document.body.classList.remove('dark'); // force light mode if false
  document.button.classList.remove('dark');
}

// Toggle dark mode on button click
button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Save preference
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});
