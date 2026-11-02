# POE-PART-1
Thembisa and son woodworks — Website Project
Student Information
Full Name- onkarabile kwahla
Student Number- st10490034
Subject wed development WEDE5020
Submission- Part 1 
Project Overview

This repository contains the source code and supporting documentation for a five-page website built for Hendricks & Sons Carpentry, a small, family-run carpentry business specializing in bespoke furniture, fitted cabinetry, and general renovation carpentry. The project is being developed in three parts across the term:

Part 1 (this submission): Project planning, research, file structure, and basic HTML skeleton for all pages.
Part 2: Styling with CSS and improved layout/responsiveness. (To follow)
Part 3: Interactivity with JavaScript and final polish. (To follow)
Website Goals and Objectives

The website replaces word-of-mouth and social media as the business's main marketing channel. Its goals are to:

Generate new customer enquiries through an online enquiry form.
Showcase a gallery of completed projects to build trust with prospective clients.
Clearly present the services offered and the general enquiry-to-completion process.
Establish a professional, search-friendly online presence.

Key Performance Indicators (KPIs):

10+ enquiry form submissions per month within the first three months of launch.
2+ minutes average time-on-page for the Services and Gallery sections.
Bounce rate below 50%, tracked via analytics once the site is live.
Key Features and Functionality
Page	File	Purpose
Homepage	index.html	Hero image, brief introduction, call to action, navigation menu
About Us	about.html	Business history, mission, vision, team profiles
Services	services.html	Breakdown of carpentry services with project photos
Enquiry	enquiry.html	Form for visitors to request a quote
Contact	contact.html	Contact details, embedded map, contact form
Sitemap
Home (index)
 About Us 
 Services 
 Enquiry 
 Contact 

All five pages share a common header with a navigation menu and a consistent footer, so every page is reachable from every other page.

File and Folder Structure
project-root/
index.html
about.html
services.html
enquiry.html
contact.html
css/
js/
images/
README.md
Timeline and Milestones
Milestone	Target Date	Status
Project proposal drafted and submitted for approval	[Date]	
Organisation and proposal approved by lecturer	[Date]	
Content research and sourcing complete	[Date]	
Sitemap and file/folder structure created	[Date]	
Basic HTML structure for all five pages	[Date]	
Navigation linked across all pages	[Date]	
Content integrated into HTML files	[Date]	
Cross-browser testing and debugging complete	[Date]	
Part 1 submission (proposal, ZIP, GitHub link)	[Date]	
Part 1 Details

Part 1 covers project initiation and planning: choosing a target organisation, writing and submitting the project proposal, researching and sourcing content, planning the site structure, and building the initial HTML skeleton for all five pages with working navigation. Styling (Part 2) and interactivity (Part 3) are out of scope for this submission and will be added in future commits.

Changelog

All notable changes to this project are tracked below, most recent first.

Date	Change
[Date]	Initial commit: repository created, README added
[Date]	Project proposal approved by lecturer
[Date]	File and folder structure set up (css/, js/, images/)
[Date]	Sitemap finalised
[Date]	index.html created with basic structure
[Date]	about.html, services.html, enquiry.html, contact.html created
[Date]	Navigation menu linked across all pages
[Date]	Researched content integrated into all pages
[Date]	Cross-browser testing completed; bug fixes applied
References

References specific to Hendricks & Sons Carpentry and the researched content used across this project are listed below, in [institution referencing style], and are consolidated here per the assignment requirements..

PART 2
1.Created external stylesheet (css/style.css) and linked it to all five HTML pages
2.Added a CSS reset to normalise spacing across browsers
3.Set base styles: font family, font size, line height, colour scheme
4.Applied a typography scale for consistent heading sizes (h1–h4)
5.Built page layout using CSS Grid (card grids) and Flexbox (navigation bar)
6.Styled buttons, cards, and form fields with borders, shadows, and colour
7.Added :hover, :focus, and :active states to nav links and buttons
8.Added two responsive breakpoints (900px tablet, 600px mobile)
9.Converted multi-column layouts to single-column on smaller screens
10.Used rem and % units throughout instead of fixed pixel values
11.Fixed broken/malformed HTML across all pages (unclosed tags, missing <body>, misused list elements)
12.Added proper <form> structure to the Enquiry page (fields weren't wrapped in a form before)
13.Standardised header/navigation and footer across all five pages
15.Corrected business name and spelling errors throughout (Hearthstone → Thembisa and Son Woodworks)
16.Removed manual <br> line breaks in favour of natural text wrapping

References:Mozilla Developer Network, 2026. CSS Grid Layout. [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout [Accessed 18 September 2026].

Mozilla Developer Network, 2026. CSS Flexible Box Layout. [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout [Accessed 18 September 2026].

Mozilla Developer Network, 2026. Using media queries. [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 18 September 2026].

Mozilla Developer Network, 2026. Pseudo-classes. [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes [Accessed 18 September 2026].

Mozilla Developer Network, 2026. box-sizing. [Online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing [Accessed 18 September 2026].

Coyier, C., 2026. A Complete Guide to Flexbox. CSS-Tricks. [Online] Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [Accessed 18 September 2026].

Coyier, C., 2026. A Complete Guide to Grid. CSS-Tricks. [Online] Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ [Accessed 18 September 2026].

W3Schools, 2026. CSS Units. [Online] Available at: https://www.w3schools.com/cssref/css_units.php [Accessed 18 September 2026].

Thembisa and Son Woodworks — WEDE5020 (Part 3)

Student: ST10490034 Module: WEDE5020 Part: 3 — Enhancing Functionality and SEO

This is a five-page website for Thembisa and Son Woodworks, a small family workshop in Linden, Johannesburg that builds custom solid-wood furniture, fitted joinery and restorations.

Live site: add your GitHub Pages or Netlify link here after deploying GitHub repository: add your repository link here

1. Project structure
index.html        Home page (hero, services overview, gallery with lightbox, process)
about.html        About page (history, milestones, mission, team)
services.html     Services page (search, filter, sort, details pop-up)
enquiry.html      Enquiry form with cost and availability response, plus FAQ accordion
contact.html      Contact page with interactive map and email form
404.html          Page-not-found page
robots.txt        Instructions for search engine crawlers
sitemap.xml       List of all pages for search engines
README.md         This file, including the changelog
css/              style.css (site styles), leaflet.css (map styles)
js/               main.js, services-data.js, services.js, forms.js, map.js, vendor/leaflet.js
images/           Photos with descriptive file names, plus favicon.svg
2. JavaScript enhancements

Interactive elements. The enquiry page has an FAQ accordion where each question opens and closes smoothly and can be used with the keyboard. The services page has a "More details" pop-up (a modal) that shows what each service includes and links to the enquiry form with that service already selected. The home page has a gallery where clicking a photo opens a larger view (a lightbox) with next, previous and close buttons, arrow-key support and a "3 of 6" caption.

Interactive map. The contact page uses the Leaflet library with OpenStreetMap tiles. It shows the Linden workshop and the Melville showroom as markers with pop-ups, and two buttons that move the map to each location. Leaflet is stored inside the project, so no outside code library is needed.

Animations and transitions. The hero text fades in, cards fade in as they scroll into view, cards lift slightly on hover, the mobile menu slides open, the accordion expands smoothly and the modal and lightbox fade in. A back-to-top button appears when you scroll down. All animation is switched off for visitors who have asked their device for reduced motion.

Dynamic content and search. The four services are stored in services-data.js and the services page builds its cards from that data. Visitors can search (for example "kitchen", "table" or "repair"), filter by type of work and sort by price, lead time or name. The page shows how many services match and a friendly message when nothing does. The same data is used by the enquiry form to calculate its estimate, so prices are only written in one place.

Advanced DOM manipulation. Cards, pop-ups, the lightbox, form results and the email preview are all created with JavaScript using createElement and textContent, never innerHTML, so anything a visitor types cannot inject code into the page.

The site still works if JavaScript is switched off: the menu stays open, the accordion answers are visible, the gallery photos open as normal links and a plain list of the four services is shown.

3. Forms and validation

Enquiry form (enquiry.html). The visitor gives their name, email, optional phone and suburb, the service they need, an approximate budget, a timeframe and details of the piece. The form is checked first. If everything is valid, the page works out a response: it compares the budget with the service's starting price (below, overlapping or in line) and compares the timeframe with the service's lead time (too tight, possible or comfortable). The data is then sent in the background using AJAX (fetch) to the address in the form's action attribute, and the page shows a response panel with the cost, the availability and what happens next, without reloading.

Contact form (contact.html). The visitor gives their name, email, an optional phone number, the type of message (general question, existing order, press or other) and their message. Once it is valid, the details are compiled into an email with a subject such as "[Website] Existing order - Name". A preview shows who it is addressed to, the subject and the body. The "Open in my email app" button is a mailto: link addressed to hello@thembisaandson.co.za, which is set in forms.js, so the visitor sends it from their own email program. The form's action also points to that address as a fallback for browsers without JavaScript.

Validation rules. Names are required, 2 to 80 characters, letters only (spaces, hyphens and apostrophes are allowed). Email is required and must be a valid format. Phone is optional but must be a South African number such as 082 123 4567 or +27 82 123 4567. The suburb is optional and limited to 60 characters. The service or message type must be chosen. The enquiry details must be 20 to 1000 characters and the contact message 10 to 1000 characters, each with a live character counter.

Error handling. Each field shows its own message underneath, a summary message appears at the top of the form, and focus moves to the first problem. Messages disappear as soon as the problem is fixed, and screen readers are told about errors through aria-invalid and aria-describedby. HTML5 attributes (required, type, minlength, maxlength, pattern) are also on the fields as a fallback, and a hidden honeypot field catches simple spam bots.

4. Search Engine Optimisation (SEO)

Keyword research. The audience is Johannesburg homeowners aged 30 to 60 and small businesses, so the keywords combine the workshop's real services with the local area: custom furniture Johannesburg, solid wood furniture Gauteng, fitted joinery and cabinetry Johannesburg, shopfitting Johannesburg, furniture restoration, woodworking workshop Linden, furniture showroom Melville and request a furniture quote. They are used naturally in the page titles, headings, introductions and image descriptions.

On-page SEO. Every page has its own title of 60 characters or fewer and its own meta description. Every page has exactly one <h1> with <h2> and <h3> headings in a logical order. Images have descriptive file names such as oak-sideboard-living-room.jpg, accurate alt text, set width and height and lazy loading below the fold. File names for the pages are short and lowercase (services.html, enquiry.html). Pages link to each other with descriptive link text, for example "Explore custom furniture" or "visit our Melville showroom". The site is mobile-friendly, with a viewport tag, a responsive layout and a hamburger menu on small screens. Each page also has a canonical link, Open Graph and Twitter card tags for social sharing, and the Home and Contact pages include structured data (FurnitureStore JSON-LD) with the address, phone number, opening hours and area served.

Additional SEO. robots.txt allows crawling of the site and points to the sitemap, and sitemap.xml lists all five pages. For page speed, all scripts use defer, images are small and lazy-loaded, fonts use display=swap, Leaflet is only loaded on the contact page and no large libraries such as jQuery are used. For security, a Content-Security-Policy meta tag limits where scripts can come from, there are no inline scripts or styles, external links use rel="noopener noreferrer", user input is never inserted as HTML and all libraries are hosted inside the project. GitHub Pages cannot set HTTP headers, so the policy is set with a meta tag instead.

Off-page SEO (the business's own actions, not code). For backlinks, the workshop can ask suppliers, interior designers and architects it works with to link to the site, list the business in South African directories such as Yellow Pages SA, Cylex and Hotfrog, and try to get mentioned in local Johannesburg home and lifestyle blogs. For social media, the old Facebook page should be replaced with regular posts of finished pieces that link back to the matching pages, and the same photos can be shared on Instagram. The footer already links to Facebook. For local SEO, the business should claim a Google Business Profile for both the Linden workshop and the Melville showroom, use the same name, address and phone number everywhere, choose categories such as furniture maker and furniture store, upload project photos and ask happy clients for reviews.

5. How to run and test

Open the project folder in VS Code and use the Live Server extension, or double-click index.html. The map needs an internet connection to load its tiles. To test, click through the gallery photos using the arrow keys and Esc, search the services page for "kitchen", "table" and "repair" and try the filter and sort, submit the enquiry form empty and with bad details and then with valid details, use both map buttons, submit the contact form and check the email preview, shrink the browser below 700px to try the hamburger menu, and tab through every page using only the keyboard.

6. Deployment

GitHub Pages. Create a repository on GitHub and upload all the files with index.html in the root. Go to Settings, then Pages, choose "Deploy from a branch", select main and the root folder, and save. After a minute the site is live at https://your-username.github.io/repository-name/.

Netlify. Drag the project folder onto https://app.netlify.com/drop and Netlify gives you a live link straight away.

After deploying, update these placeholders. Replace https://thembisaandson.co.za/ with your live link in the canonical and Open Graph tags on every page, in sitemap.xml, in robots.txt and in the structured data on index.html and contact.html (Find and Replace across the project works well). Replace YOUR_FORM_ID in the action of the enquiry form with your free form ID from formspree.io; until then the form runs in demo mode and shows a note that the enquiry was not delivered. Replace the Facebook link in the footer with the business's real page. Check the map coordinates in js/map.js against the real addresses on Google Maps, because they are approximate.

7. Known limitations

The gallery and "Every commission includes" photos are the stock photos from Part 2, not photos of the workshop's own finished projects, and should be replaced with real ones before the site goes live. The addresses, phone numbers and email are the sample details used throughout the coursework. The enquiry form needs a form service such as Formspree to deliver submissions, because static hosting cannot receive form data. The contact email button depends on the visitor having an email program or webmail set up on their device.

8. Credits

Leaflet 1.9.4 (BSD-2-Clause) provides the interactive map. Map data is from OpenStreetMap contributors. The fonts Merriweather and Open Sans come from Google Fonts. The photos are stock images supplied for the coursework.

Changelog
Version 3.0.0 — 2026-10-26 — Part 3: Enhancing Functionality and SEO
Added

JavaScript and interactivity. main.js was added to every page and handles the mobile menu toggle, scroll animations, the back-to-top button, the accordion and the gallery lightbox. services-data.js stores the four services as one data list. services.js builds the service cards, adds live search, a type filter, four sort options, a result count, a no-results message, a Clear button and the "More details" modal. forms.js handles validation for both forms, live error messages, character counters, the honeypot, the enquiry cost and availability response, AJAX submission and the contact email builder. map.js and a self-hosted copy of Leaflet 1.9.4 add the interactive map, replacing the two Google Maps iframes. An FAQ accordion with five questions was added to the enquiry page and a six-photo gallery with lightbox was added to the home page. CSS animations and transitions were added, with an override for reduced motion.

SEO and site files. Every page now has a unique title and meta description, a canonical link, Open Graph and Twitter tags and a theme colour. FurnitureStore structured data was added to the Home and Contact pages. New files are robots.txt, sitemap.xml, 404.html (set to noindex) and images/favicon.svg. Headings and intro text were reworded to include keywords, and pages now link to each other with descriptive link text (home cards link to filtered services, About links to Services and Enquiry, Services links to the gallery and Contact, Enquiry links to Services and Contact). A Facebook link was added to the footer for the social media requirement, and a Content-Security-Policy and referrer policy were added to every page.

Forms. The enquiry form gained a required "Service you need" field (needed to calculate cost and availability), length and pattern attributes, error messages under each field, a status banner at the top, a character counter, a hidden honeypot field, action and method attributes and a result panel. The contact form gained an optional phone field, a "Select a topic" placeholder so the visitor must choose a message type, error messages, a character counter, a mailto: fallback action, a "Prepare my email" button and an email preview panel.

Changed

Headings were reworded for SEO without changing the facts in the text. For example, the home page <h1> now reads "Custom solid-wood furniture and fitted joinery in Johannesburg", and the business name moved into the page title and header. On every page the navigation gained a "Skip to main content" link, id="main" on the main area and a hamburger menu button that replaces the old stacked links on small screens. Footer headings changed from <h4> to <h3> so no heading level is skipped. The service cards on services.html are now generated from the data file, with a plain list inside <noscript> as a fallback. On contact.html the map is interactive, the two location cards no longer have iframes, and two buttons ("Show the workshop" and "Show the showroom") control the map. Card images are cropped to a consistent 4:3 shape.

All photos were renamed with descriptive names and moved into a lowercase images folder: cabinent.jpeg became oak-chest-of-drawers.jpg, images 2.jpeg became oak-sideboard-living-room.jpg, images33.jpeg became solid-wood-species-samples.jpg, imagesyu.jpeg became happy-clients-thumbs-up.jpg, woood.jpg became carpenter-measuring-timber-frame.jpg, work.jpg became craftsman-planing-oak-workshop.jpg, and the long Shutterstock-numbered .webp file became hand-drawn-measuring-with-set-square.webp. That last image is not used on any page because it carries a stock-photo watermark.

Fixed

Broken image paths. The HTML pointed to images/ but the folder was named Images. This works on Windows but breaks on GitHub Pages and Netlify, which are case-sensitive. The folder is now images.

Wrong alt text. The three "Every commission includes" images on the Services page were described as a pencil drawing of a table, stacked planks and a dovetail joint, but the photos show a carpenter measuring a timber frame, wood samples and people giving a thumbs up. The alt text now describes what is really in each photo.

Grid overflow. The grid classes used percentage widths (for example 33.33% three times) plus a gap, which adds up to more than 100% and pushed cards outside the container. They now use repeat(n, 1fr), and the tablet and mobile breakpoints were updated to match.

Fonts. The proposal specifies Merriweather for headings and Open Sans for body text, but the CSS used Georgia. The fonts are now loaded as in the proposal with Georgia and Arial as fallbacks, and form fields inherit the page font.

Keyboard focus. Links and buttons had no clear focus outline. A visible outline was added site-wide, in a light colour on the dark header and footer.

Heading order. Footer <h4> headings followed <h2> directly, and the About page card titles jumped from <h1> to <h3>. Both were corrected.

Forms without feedback. The Part 2 forms only had required, with no action, no error messages and no processing. They now work as described in section 3.

Header behind the map. The sticky header was covered by the map layers, so it now has a higher z-index and the map is isolated.

Budget logic. During testing, a budget range such as "R 5,000 – R 15,000" was treated as comfortably above a R 14,000 starting price. The estimate now compares both ends of the range and reports below, overlapping or in line.

Testing performed

Automated tests (53 checks) covered the search, filter and sort, the modal, protection against HTML injection in the search box, every validation rule, the estimate messages, the honeypot, successful and failed AJAX submission, the email link and its encoding, the lightbox, the accordion, the menu toggle and the map markers. Static checks on all six pages confirmed one <h1> each, titles of 60 characters or fewer, sensible meta description lengths, unique ids, alt text and dimensions on every image, working internal links, no inline scripts or styles, valid structured data and a sitemap that matches the real files.

Version 2.1.0 — Changes I made to Part 2 after the feedback

Before starting Part 3, I went back through my Part 2 work and corrected the things that were not right.

Images not loading online. My pictures were in a folder called Images, but my pages asked for images. That works on my own computer, but it breaks once the site is on GitHub Pages or Netlify, so I renamed the folder to images.
Wrong picture descriptions. The alt text on the Services page described a pencil drawing, stacked planks and a dovetail joint, but the photos show a carpenter measuring, wood samples and happy clients. I rewrote each description so it matches its photo.
Cards spilling out of the page. My grid columns were set in percentages and then I added a gap, so the total was more than 100%. I changed them to equal-width columns (1fr) and updated the tablet and mobile layouts to match.
Fonts did not match my proposal. My proposal says Merriweather for headings and Open Sans for body text, but the CSS was using Georgia. I loaded both fonts and applied them, with Georgia and Arial as backups.
No clear focus outline. Someone using the keyboard could not tell which link or button was selected, so I added a visible outline to everything you can tab to.
Heading order. Some headings skipped a level (for example an <h1> straight to an <h3>, and footer <h4> headings right after an <h2>). I fixed the order on every page.
Forms that did nothing. The Part 2 forms only had required on a few fields. I gave them proper checks, error messages and a working submit, which I describe under Version 3.0.0.
Version 2.0.0 — Part 2: Styling and responsive design

An external stylesheet (css/style.css) was created with a CSS reset, base styles, typography, Grid and Flexbox layouts, hover, focus and active states and two responsive breakpoints (900px and 600px). All five pages were styled with a consistent header, footer, cards and forms using the proposal's colour palette: walnut brown 
#5C3A21, sawdust cream 
#F1E8D8 and forest green 
#3B5D42.



