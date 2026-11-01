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

(Confirm each link still resolves before submitting, and swap in any tutorial or source you actually used while working through the CSS.)

Thembisa and Son Woodworks — WEDE5020 (Part 3)

Student: ST10490034 Module: WEDE5020 Part: 3 — Enhancing Functionality and SEO

A five-page website for Thembisa and Son Woodworks, a small family woodworking workshop in Linden, Johannesburg that builds custom solid-wood furniture, fitted joinery and restorations.

	
Live site	add your GitHub Pages / Netlify link here after deploying
GitHub repository	add your repository link here
1. Project structure
/
├── index.html          Home (hero, three ways to work, gallery + lightbox, process)
├── about.html          About (history, milestones, mission, team)
├── services.html       Services (dynamic cards, search / filter / sort, modal)
├── enquiry.html        Enquiry form (validation, cost + availability response, AJAX) + FAQ accordion
├── contact.html        Contact (interactive Leaflet map, validated email form)
├── 404.html            Custom "page not found" page (not indexed)
├── robots.txt          Crawler instructions
├── sitemap.xml         All five pages for search engines
├── README.md           This file (includes the changelog)
├── css/
│   ├── style.css       Site styles (Part 2 styles + Part 3 additions at the end)
│   ├── leaflet.css     Map library styles (self-hosted)
│   └── images/         Map marker icons used by leaflet.css
├── js/
│   ├── main.js         Nav toggle, scroll animations, back-to-top, accordion, lightbox
│   ├── services-data.js  The four services as data (used by services.js and forms.js)
│   ├── services.js     Builds service cards; search, filter, sort; details modal
│   ├── forms.js        Validation, enquiry estimate, AJAX submit, contact email builder
│   ├── map.js          Interactive map setup
│   └── vendor/leaflet.js   Leaflet 1.9.4 (self-hosted, no CDN needed)
└── images/             Photos (renamed with descriptive file names) + favicon.svg
2. JavaScript enhancements
Requirement	What was built	Where
Interactive elements — accordion	FAQ accordion with aria-expanded, smooth open/close and arrow-key / Home / End navigation	enquiry.html, main.js
Interactive elements — modal	"More details" modal built on the native <dialog> element (Esc to close, click outside to close, focus returns to the button)	services.html, services.js
Interactive map	Leaflet map with OpenStreetMap tiles, markers and pop-ups for the Linden workshop and Melville showroom, plus buttons that fly to each location	contact.html, map.js
Animations and transitions	Hero fade-up, cards fade in on scroll (IntersectionObserver), hover lift on cards, sliding mobile menu, accordion height transition, modal and lightbox fade-in, back-to-top button. All animation is switched off for visitors who set reduce motion	style.css, main.js
Advanced DOM manipulation	Cards, the modal, the lightbox, form results and the email preview are created with createElement / textContent (never innerHTML), so user input can't inject HTML	services.js, forms.js, main.js
Gallery with lightbox	Six-image gallery; click opens a full-size viewer with Next / Previous / Close, arrow keys, Esc and a "3 of 6" caption. Without JavaScript the thumbnails simply link to the full image	index.html, main.js
Dynamic content	The four service listings are loaded from services-data.js and rendered by JavaScript. The same data feeds the enquiry-form estimate so prices only exist in one place	services.js, services-data.js
Search functionality	Live search (matches name, description and keywords such as kitchen, table, repair), type-of-work filter, sort by price / lead time / name, "Showing x of y" count, empty-state message and Clear button. services.html?q=repair pre-fills the search (used by links on the home page)	services.html, services.js

The site works without JavaScript too: the menu stays open, the accordion answers are visible, the gallery links open the images, and a plain list of the four services appears on the services page.

3. Form functionality and validation
enquiry.html — enquire about a service

Fields: full name, email, phone (optional), suburb (optional), service, budget, timeline, details.

Validate (client side, see rules below).
Process: the page works out a response from the chosen service, budget and timeline:
Cost: compares the budget range with the service's starting price (below / overlaps / in line).
Availability: compares the timeframe with the service's lead time (too tight / possible / comfortable).
Submit with AJAX: the data is sent with fetch() to the URL in the form's action attribute, without reloading the page.
Present the response: a panel with the cost, availability and next-steps message replaces the form.
contact.html — general message

Fields: full name, email, phone (optional), message type (General question / Existing order / Press / Other), message.

Validate, then compile the details into an email (subject like [Website] Existing order - Name).
A preview shows the To, Subject and body. The Open in my email app button is a mailto: link addressed to hello@thembisaandson.co.za (the recipient is stored in forms.js as RECIPIENT), so the visitor sends it from their own email program.
The form's action="mailto:…" is a fallback for browsers with JavaScript turned off.
Validation rules (both forms)
Field	Rule
Name	required, 2–80 characters, letters / spaces / hyphens / apostrophes only
Email	required, valid format, max 120 characters
Phone	optional, South African format: 0821234567 or +27821234567 (spaces, dashes and brackets allowed)
Suburb	optional, max 60 characters
Service / message type	required
Details	required, 20–1000 characters, live character counter
Message	required, 10–1000 characters, live character counter

Error handling: each field shows its own message under the field (aria-invalid + aria-describedby for screen readers), a summary message appears at the top ("Please fix 3 fields…"), focus moves to the first invalid field, and messages disappear as soon as the problem is fixed. HTML5 attributes (required, type, minlength, maxlength, pattern) are also on the fields as a fallback. A hidden honeypot field catches simple spam bots.

4. Search Engine Optimisation (SEO)
4.1 Keyword research

Target audience: Johannesburg homeowners (30–60) and small businesses. Keywords were chosen from the services the workshop actually offers plus the local area.

Keyword	Used on
custom furniture Johannesburg	Home (title, H1), Services, Enquiry
solid wood furniture Gauteng	Home, About, Services
fitted joinery / fitted cabinetry Johannesburg	Services (H1, card), Home
shopfitting Johannesburg	Services, Home
furniture restoration / re-finishing	Services, Home
woodworking workshop Linden	About, Contact
furniture showroom Melville	Contact
request a furniture quote	Enquiry (title, H1)
4.2 On-page SEO
Item	What was done
Title tags	A unique title of 60 characters or fewer on every page, with the main keyword first and the brand last
Meta descriptions	A unique description (about 120–165 characters) per page that includes the keyword and a reason to click
Header tags	Exactly one <h1> per page, with <h2> / <h3> in a logical order (footer headings changed from <h4> to <h3> so no level is skipped)
Image optimisation	Descriptive file names (e.g. oak-sideboard-living-room.jpg), accurate alt text, width / height on every image, loading="lazy" below the fold
URL structure	Short, lowercase, descriptive file names: services.html, enquiry.html, about.html, contact.html
Internal linking	Descriptive link text between pages (e.g. "Explore custom furniture" → services; "visit our Melville showroom" → contact; gallery link from Services) and a "Skip to main content" link
Mobile-friendliness	Responsive layout, viewport meta tag, hamburger menu on small screens, readable font sizes, buttons with generous padding
Social sharing	Open Graph tags and twitter:card on every page
Structured data	FurnitureStore JSON-LD (address, phone, opening hours, area served) on Home and Contact to help Google show the business in local results
Canonical tags	Each page declares its preferred URL
4.3 Technical / additional
Item	What was done
robots.txt	Allows crawling of the whole site, blocks 404.html, points to the sitemap
sitemap.xml	Lists all five pages with lastmod, changefreq and priority
Page speed	All scripts use defer; images are small and lazy-loaded with fixed dimensions (no layout shift); fonts load with display=swap and preconnect; Leaflet is only loaded on the contact page; no jQuery or other large libraries; animations use CSS transform / opacity
Security	Content-Security-Policy <meta> (scripts only from this site, no inline scripts or styles); rel="noopener noreferrer" on external links; no innerHTML with user input; referrer policy; honeypot spam field; all libraries self-hosted; form data only goes to the endpoint named in action. Note: GitHub Pages cannot set HTTP headers, so the CSP is delivered as a meta tag; it is served over HTTPS by the host.
4.4 Off-page SEO (plan — these are actions the business takes outside the code)
Backlinks: ask suppliers (timber merchants, hardware shops), interior designers and architects the workshop already works with to link to the site; list the business in South African directories (e.g. Yellow Pages SA, Cylex, Hotfrog); get a mention in local Johannesburg home and lifestyle blogs when a notable project is completed.
Social media: replace the outdated Facebook page with regular posts of finished pieces (each post linking back to the matching page), share the gallery photos on Facebook and Instagram, and use consistent hashtags such as #JohannesburgFurniture and #HandmadeInSA. The footer already links to the Facebook page.
Local SEO: claim and complete a Google Business Profile for both the Linden workshop and the Melville showroom (same name, address and phone number as the website), choose the categories Furniture maker and Furniture store, upload project photos, and ask happy clients for Google reviews. Keep the business name / address / phone identical everywhere.
5. How to run and test
Open the project folder in VS Code and use the Live Server extension, or just double-click index.html. (The map needs an internet connection for the map tiles.)
Manual test checklist:
 Home: click each gallery picture, use ←/→ and Esc, check the caption count
 Services: type kitchen, table, repair; change the filter and sort; click More details; press Clear
 Enquiry: submit empty (errors appear), enter a bad email / phone, then a valid form (response panel appears); open each FAQ item
 Contact: use both map buttons, click the markers; submit the form and check the email preview and the Open in my email app button
 Shrink the browser window below 700px and test the hamburger menu
 Tab through every page with the keyboard only
6. Deployment (free platform)
Option A — GitHub Pages
Create a repository on GitHub and upload all the files in this folder (keep index.html in the root).
Go to Settings → Pages, choose Deploy from a branch, select main and / (root), then Save.
After a minute the site is live at https://<your-username>.github.io/<repository-name>/.
Option B — Netlify

Drag the project folder onto https://app.netlify.com/drop. Netlify gives you a live link straight away.

After deploying — update these placeholders
What	Where	Change to
Domain https://thembisaandson.co.za/	canonical + Open Graph tags (all pages), sitemap.xml, robots.txt, JSON-LD in index.html and contact.html	your live URL (use Find & Replace across the project)
YOUR_FORM_ID	action of the form in enquiry.html	your free form ID from https://formspree.io (create a form, copy its ID). Until then the form runs in demo mode and shows a note saying the enquiry was not delivered
Facebook link	footer of every page	the business's real Facebook page
Map coordinates	js/map.js	check them against the real addresses on Google Maps (they are approximate)
7. Known limitations
The gallery and "Every commission includes" pictures are the stock photos from Part 2, not photos of the workshop's own completed projects. Replace them with real project photos before the site goes live.
The business address, phone numbers, email and social link are the sample details used throughout the coursework.
The enquiry form needs a form-handling service (Formspree) to actually deliver submissions; static hosting cannot receive form data on its own.
Opening a mailto: link depends on the visitor having an email program or webmail registered on their device.
8. Credits
Leaflet 1.9.4 (BSD-2-Clause) — interactive map
Map data © OpenStreetMap contributors
Fonts: Merriweather and Open Sans from Google Fonts (SIL Open Font License)
Photos: stock images supplied for the coursework (see limitations above)
Changelog

All edits made after the Part 2 feedback, newest first.

[3.0.0] — 2026-10-26 — Part 3: Enhancing Functionality and SEO
Added — JavaScript and interactivity
js/main.js — mobile navigation toggle (button with aria-expanded, closes with Esc), scroll-reveal animation using IntersectionObserver, back-to-top button, accordion behaviour, gallery lightbox. Loaded on every page with defer.
js/services-data.js — the four services (name, description, starting price, lead time, tags, feature list) stored as one data array so prices and lead times are not repeated in several files.
js/services.js — builds the service cards dynamically, live search (matches name, description, category and keyword tags), type-of-work filter, four sort options, result count (aria-live), no-results message, Clear button, ?q= pre-fill, and a "More details" <dialog> modal with an "Enquire about this service" link that pre-selects the service on the enquiry form.
js/forms.js — shared validation for both forms (see section 3), live per-field errors, character counters, honeypot, enquiry cost/availability response, AJAX (fetch) submission with success and failure handling, contact-form email compiler with mailto: link and preview.
js/map.js + self-hosted Leaflet 1.9.4 — interactive map with two markers, pop-ups and fly-to buttons; replaced the two Google Maps iframes.
FAQ accordion (5 questions) added to enquiry.html.
Gallery with lightbox (6 images) added to index.html.
Animations and transitions (CSS): hero fade-up, card fade-in on scroll, card hover lift, sliding mobile menu, accordion expand, modal / lightbox fade-in, hover zoom on gallery images, with a prefers-reduced-motion override.
Added — SEO and site files
Unique <title> and meta description on every page, canonical link, Open Graph and Twitter card tags, theme-color.
FurnitureStore JSON-LD structured data on index.html and contact.html.
robots.txt, sitemap.xml, 404.html (set to noindex), images/favicon.svg.
Keyword-focused <h1> headings and intro text on all pages; descriptive internal links between pages (home cards → filtered services, about → services/enquiry, services → gallery/contact, enquiry → services/contact).
Footer "Follow us on Facebook" link (rel="noopener noreferrer") for the social-media requirement.
Content-Security-Policy and referrer-policy meta tags; honeypot fields in both forms.
Added — forms
enquiry.html: new required Service you need field (needed to calculate cost and availability), minlength / maxlength / pattern attributes, per-field error messages, status banner, character counter, hidden honeypot, action and method="post" attributes, and a result panel for the cost / availability response.
contact.html: new optional phone field, message-type drop-down now has a "Select a topic" placeholder so the visitor must choose, per-field errors, character counter, action="mailto:…" fallback, "Prepare my email" button and an email preview panel.
Changed
Page content for SEO: headings reworded to include keywords (e.g. home <h1> is now "Custom solid-wood furniture and fitted joinery in Johannesburg"; the old business-name heading moved into the title tag and header). Existing wording and facts were kept.
Navigation (all pages): added a "Skip to main content" link, id="main" on <main>, and a hamburger menu button; the previous mobile layout (a stacked list of links) was replaced by a collapsible menu.
Footer (all pages): headings changed from <h4> to <h3> (no skipped heading levels); added the Facebook link; CSS selector updated to match.
services.html: the four service cards are now generated from services-data.js (with a <noscript> list as a fallback) instead of being typed into the HTML.
contact.html: the map is now interactive; the two location cards no longer contain an iframe each and a "Show the workshop / Show the showroom" button pair controls the map; the page now has an <h2> "Two places to find us" (the old <h1> text) under a keyword <h1>.
Images: all photos renamed with descriptive names and moved to a lower-case images/ folder (see the table below).
Cards: card images are cropped to a consistent 4:3 shape with object-fit: cover.
Old file name	New file name
cabinent.jpeg	oak-chest-of-drawers.jpg
images 2.jpeg	oak-sideboard-living-room.jpg
images33.jpeg	solid-wood-species-samples.jpg
imagesyu.jpeg	happy-clients-thumbs-up.jpg
woood.jpg	carpenter-measuring-timber-frame.jpg
work.jpg	craftsman-planing-oak-workshop.jpg
carpenter-hand-measuring-wood-people-260nw-2236076557.webp	hand-drawn-measuring-with-set-square.webp (not used on any page — it carries a stock-photo watermark)
Fixed
Broken image paths: the HTML pointed to images/… but the folder was named Images. This works on Windows but breaks on GitHub Pages and Netlify (Linux servers are case-sensitive). The folder is now images.
Wrong image descriptions (alt text) on the Services page: the three "Every commission includes" images were described as a pencil drawing of a table, stacked planks and a dovetail joint, but the photos actually show a carpenter measuring a timber frame, wood species samples and people giving a thumbs up. Alt text rewritten to describe what is really in each photo.
Grid overflow: .grid-2, .grid-3 and .grid-4 used percentage column widths (e.g. 33.33% × 3) plus a gap, which adds up to more than 100% and pushed cards past the container. Changed to repeat(n, 1fr); the tablet and mobile breakpoints were updated to match.
Fonts did not match the proposal: the proposal specifies Merriweather (headings) and Open Sans (body) but the CSS used Georgia. Fonts are now loaded as in the proposal with Georgia / Arial as fall-backs. Form controls now inherit the page font instead of being hard-coded.
Missing keyboard focus on links and buttons: added a visible :focus-visible outline site-wide (light outline on the dark header and footer).
Heading order: footer <h4> headings appeared straight after <h2>; about-page card titles skipped from <h1> to <h3>. Both corrected.
Form fields without error feedback: forms previously had required only, with no action, no message when something was wrong and no processing of the data; replaced by the validation and submission described in section 3.
Sticky header hidden behind the map: gave the header a higher z-index and isolated the map so Leaflet's layers stay beneath it.
Budget logic: during testing, a budget range such as "R 5,000 – R 15,000" was treated as comfortably above a R 14,000 starting price. The estimate now compares the bottom and top of the range, so it reports "below", "overlaps" or "in line".
Testing performed
Automated checks (jsdom) of 53 behaviours: search, filter, sort, modal, XSS-safety of the search box, every validation rule, the estimate messages, honeypot, AJAX success and failure paths, mailto compiling and encoding, lightbox navigation, accordion, menu toggle and map markers.
Static checks on all six pages: one <h1> each, title ≤ 60 characters, meta description length, unique ids, every image has alt text and dimensions, all internal links and files exist, no inline scripts or styles (CSP), valid JSON-LD, sitemap URLs match real files.
[2.1.0] — Corrections to Part 2 feedback

Add the lecturer's Part 2 feedback here, one entry per item, in this format:

Feedback received	Change made	File(s) changed
e.g. "Fonts do not match the proposal"	Merriweather and Open Sans now loaded and applied	css/style.css, all .html
…	…	…

(Several corrections that were found while preparing Part 3 are already listed under Fixed above: image folder name, alt text, grid overflow, fonts, focus styles, heading order.)

[2.0.0] — Part 2: Styling and responsive design
External stylesheet css/style.css with CSS reset, base styles, typography, Grid and Flexbox layout, hover / focus / active states and two responsive breakpoints (900px and 600px).
Five pages styled with a consistent header, footer, cards and forms in the proposal's colour palette (walnut brown 
#5C3A21, sawdust cream 
#F1E8D8, forest green 
#3B5D42).















