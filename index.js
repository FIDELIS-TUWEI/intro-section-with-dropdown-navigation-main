// header
const header = document.createElement('header');
document.body.append(header);

// Nav bar
const navBar = document.createElement('nav');
navBar.setAttribute('class', 'nav__bar');
header.appendChild(navBar);

// Logo
const logo = document.createElement('img');
logo.setAttribute('class', 'nav__brand');
logo.setAttribute('src', '/images/logo.svg');
navBar.appendChild(logo);

// Nav menu
const navMenu = document.createElement('ul');
navMenu.setAttribute('class', 'nav__menu');
navBar.appendChild(navMenu);

// List Item 1
const list1 = document.createElement('li');
list1.setAttribute('class', 'nav__item');
navMenu.appendChild(list1);

// <a> tag to list item1
const link1 = document.createElement('a');
link1.setAttribute('href', '#');
link1.setAttribute('class', 'nav__link')
link1.innerHTML = `Features`;
list1.appendChild(link1);

// List item 2
const list2 = document.createElement('li');
list2.setAttribute('class', 'nav__item');
navMenu.appendChild(list2);

// <a> to list item 2
const link2 = document.createElement('a');
link2.setAttribute('class', 'nav__link');
link2.setAttribute('href', '#');
link2.innerHTML = `Company`;
list2.appendChild(link2);

// list item 3
const list3 = document.createElement('li');
list3.setAttribute('class', 'nav__item');
navMenu.appendChild(list3);

// <a> to list 3
const link3 = document.createElement('a');
link3.setAttribute('class', 'nav__link');
link3.setAttribute('href', '#');
link3.innerHTML = `Careers`;
list3.appendChild(link3);

// list item 4
const list4 = document.createElement('li');
list4.setAttribute('class', 'nav__item')
navMenu.appendChild(list4);

// <a> to list 4
const link4 = document.createElement('a');
link4.setAttribute('href', '#');
link4.setAttribute('class', 'nav__link');
link4.innerHTML = `About`;
list4.appendChild(link4);

// list item 5 - navbar
const list5 = document.createElement('li');
list5.setAttribute('class', 'nav__item')
navBar.appendChild(list5);

// <a> to list 5
const link5 = document.createElement('a');
link5.setAttribute('class', 'nav__link');
link5.setAttribute('href', '#');
link5.innerHTML = `Login`;
list5.appendChild(link5);

// button - navbar
const registerBtn = document.createElement('button');
registerBtn.setAttribute('class', 'register__btn');
registerBtn.innerText = `Register`;
navBar.appendChild(registerBtn);


// Hero section
const heroMain = document.createElement('main');
heroMain.setAttribute('class', 'conatiner');
document.body.append(heroMain);

// Hero container
const heroDiv = document.createElement('div');
heroDiv.setAttribute('class', 'hero');
heroMain.appendChild(heroDiv);

// Hero image
const heroImage = document.createElement('img');
heroImage.setAttribute('src', '/images/image-hero-mobile.png');
heroDiv.appendChild(heroImage);

// Section
const section = document.createElement('section');
section.setAttribute('class', 'container');
document.body.append(section);

// div section
const sectionDiv = document.createElement('div');
sectionDiv.setAttribute('class', 'text__content');
section.appendChild(sectionDiv);

// Header title
const h1Title = document.createElement('h1');
h1Title.innerHTML = `Make remote work`;
sectionDiv.appendChild(h1Title);

// paragraph
const paragraph = document.createElement('p');
paragraph.innerHTML = `Get your team in sync, no matter your location. Streamline processes, 
create team rituals, and watch productivity soar.`;
sectionDiv.appendChild(paragraph);

// learn more link
const learnLink = document.createElement('a');
learnLink.setAttribute('id', 'learn__link');
learnLink.innerHTML = `Learn more`;
sectionDiv.appendChild(learnLink);

// Footer
const footer = document.createElement('footer');
document.body.append(footer);

// Footer nav
const footerNav = document.createElement('nav');
footerNav.setAttribute('class', 'footer__nav');
footer.appendChild(footerNav);

// Footer items
const footerUl = document.createElement('ul');
footerUl.setAttribute('class', 'footer__ul');
footerNav.appendChild(footerUl);

// footer list 1
const footer1 = document.createElement('li');
footer1.setAttribute('class', 'footer__list');
footerUl.appendChild(footer1);

// Footer Link 1
const footerLink1 = document.createElement('a');
footerLink1.setAttribute('class', 'footer__link');
footer1.appendChild(footerLink1);

// footer image 1
const footerImage1 = document.createElement('img');
footerImage1.setAttribute('src', '/images/client-databiz.svg');
footerLink1.appendChild(footerImage1);

// footer list 2
const footer2 = document.createElement('li');
footer2.setAttribute('class', 'footer__list');
footerUl.appendChild(footer2);

// Footer Link 2
const footerLink2 = document.createElement('a');
footerLink2.setAttribute('class', 'footer__link');
footer2.appendChild(footerLink2);

// footer image 2
const footerImage2 = document.createElement('img');
footerImage2.setAttribute('src', '/images/client-audiophile.svg');
footerLink2.appendChild(footerImage2);

// footer list 3
const footer3 = document.createElement('li');
footer3.setAttribute('class', 'footer__list');
footerUl.appendChild(footer3);

// Footer Link 3
const footerLink3 = document.createElement('a');
footerLink3.setAttribute('class', 'footer__link');
footer3.appendChild(footerLink3);

// footer image 3
const footerImage3 = document.createElement('img');
footerImage3.setAttribute('src', '/images/client-meet.svg');
footerLink3.appendChild(footerImage3);

// footer list 4
const footer4 = document.createElement('li');
footer4.setAttribute('class', 'footer__list');
footerUl.appendChild(footer4);

// Footer Link 4
const footerLink4 = document.createElement('a');
footerLink4.setAttribute('class', 'footer__link');
footer4.appendChild(footerLink4);

// footer image 4
const footerImage4 = document.createElement('img');
footerImage4.setAttribute('src', '/images/client-maker.svg');
footerLink4.appendChild(footerImage4);