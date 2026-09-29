
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');

if(menu){
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav?.classList.remove('open'));
});

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/*
  CONTACT FORM
  Static mailto workflow: prepares an email in the visitor's default email app.
  No form data is stored or sent to a third-party form service.
*/
const form = document.querySelector('#contactForm');

if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const note = document.querySelector('#formNotice');
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const projectType = (data.get('project_type') || 'Portfolio enquiry').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const subject = encodeURIComponent(projectType || 'Portfolio enquiry');
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} (${email})\nOpportunity: ${projectType}`
    );

    if(note){
      note.textContent = 'Opening your email app… Review the prepared email and press Send.';
      note.style.color = '#bfeee1';
    }

    window.location.href = `mailto:pinjarijafar123@gmail.com?subject=${subject}&body=${body}`;
  });
}
