// JavaScript code to handle clicking on the Projects link
document.getElementById('projects-link').addEventListener('click', function(event) {
  // Redirect to the given link
  window.location.href = 'https://github.com/Myst-Coder';
  event.preventDefault(); // Prevent default link behavior
});

// JavaScript code to handle clicking on the Resume link
document.getElementById('resume-link').addEventListener('click', function(event) {
  // Download the resume file
  var link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1iafLg6WhhklOwCNePQ6L4DzRtHhVqQ4Y/view?usp=sharing';
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  event.preventDefault(); // Prevent default link behavior
});
 // JavaScript code to handle clicking on the About link
document.getElementById('about-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); // Scroll to the About section smoothly
});
// JavaScript code to handle clicking on the Home link
document.querySelector('a[href="#home"]').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); // Scroll to the Home section smoothly
});
