# Cloud / DevOps Portfolio

A responsive multi-page portfolio built with plain HTML, CSS and JavaScript.

## Pages
- index.html — Home / Hero
- about.html — Profile, focus, education and certifications
- projects.html — Projects
- skills.html — Technical stack
- contact.html — Contact form UI

## Add your photo
Replace `assets/profile-placeholder.svg` with your own image, or edit the hero section in `index.html` to use:
`<img src="assets/your-photo.jpg" alt="Your Name">`

## Important
The portfolio content is based on the supplied resume PDF. Update the name, email, LinkedIn, GitHub, project URLs and other personal details before publishing if needed.

## Run locally
Just open `index.html` in a browser. No build tools are required.

For deployment, upload the folder to GitHub Pages, Netlify, Vercel, S3 static hosting, or another static hosting service.

## Contact form
The contact form uses a static `mailto:` workflow. When a visitor submits the form, their default email application opens with the recipient, subject, and message pre-filled. The visitor must review the email and press Send. No third-party form service is used and no form data is stored by the portfolio.

If you change your email address, update the `mailto:` address in `contact.html` and `script.js`.
