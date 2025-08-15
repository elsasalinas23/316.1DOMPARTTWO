//cPart one 
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Part Two 

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';
topMenuEl.classList.add('flex-around');



// Part Three 
// Menu data structure
// // uPDATED PART FOUR DOM2
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//Iterate over the entire menuLinks array and for each "link" object:

for (let link of menuLinks) {
    //  // Create an <a> element.
    let menuButton = document.createElement('a');
     //  // On the new element, add an href attribute with its value set to the href property of the "link" object.
     menuButton.setAttribute("href", link.href);
    //  // Set the new element's content to the value of the text property of the "link" object.
     menuButton.textContent = link.text;
    // console.log(menuButton);
    //  // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(menuButton);
}

//////////////////////////////////////////////////////////////////////////////
//DOM PART TWO


// // CREATING THE SUBMENU  
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById('sub-menu');

//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = '--sub-menu-bg';

//Add the class of flex-around to the subMenuEl element.//
subMenuEl.classList.add('flex-around');

//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

//Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = '0';

// PART FOUR 
////////////////////////////////////

//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
 let topMenuEl = document.getElementById ('top-menu'); // grab big box 
let topMenuLinks= topMenuEl.querySelectorAll ('a'); //  grab inside big box 

//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener.'click', function (event);

//The first line of code of the event listener function should call the event object's preventDefault() method.
event.preventDefault();  // **stop the link from navigating away***

//The second line of code of the function should immediately return if the element clicked was not an <a> element.
if (event.target.tagName ! == 'A') return ; // ** if the click was not on <a> stop there**

//Log the content of the <a> to verify the handler is working.//

console.log(event.target.tagName);   //** logthe link text */

//The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
//The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  // -------------------------
  // 1. Add 'active' to the <a> element clicked
  //    Unless it was already active, then remove it
  // -------------------------
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active'); // remove if already active
    return; // stop here if we removed it
  }
  // -------------------------
  // 2. Remove 'active' from ALL other <a> elements in topMenuLinks
  // -------------------------
  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });

  // Then add 'active' to the clicked link
  event.target.classList.add('active');
});

// PARTFIVE ADDING SUBMENU
//Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
//If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
//Otherwise, set the CSS top property of subMenuEl to 0.
// // //////////////////////////////////////////////////

// a) Save the text from the link that was clicked into a variable.
//    "event.target" means: the exact thing the user clicked.
//    ".textContent" means: the words inside that link.
//    ".toLowerCase()" makes it all lowercase so it matches the way our menuLinks data is written.
const linkText = event.target.textContent.toLowerCase();

// b) Look through our menuLinks array to find the object that matches the linkText we just saved.
//    ".find()" goes through each object in the array until it finds one where the text matches linkText.
const clickedLinkObj = menuLinks.find(function(link) {
  return link.text === linkText;
});

// c) Check TWO things before showing the submenu:
//    - clicked link have the "active" class = Meaning it was just clicked and is turned on
//    -  "subLinks" property = Meaning it has a submenu list
if (event.target.classList.contains('active') && clickedLinkObj.subLinks) {
  
  // d) If BOTH are true → move the submenu down into view.
  subMenuEl.style.top = '100%';
  
} else {
  
  // e) If either one is false → hide the submenu.
  //    "style.top = '0'" moves it up so it disappears from view.
  subMenuEl.style.top = '0';
}
////////////////////*********** */
// Clear the current contents of subMenuEl.
subMenuEl.innerHTML ='';

//Iterate over the subLinks array, passed as an argument, and for each "link" object:
subLinks.forEach(function(link)){

//Create an <a> element.
const aEL =document.createElement('a');

//Add an href attribute to the <a>, with the value set by the href property of the "link" object.
aEL.setAttribute('href', link.href);

//Set the element's content to the value of the text property of the "link" object.
aEL.textContent = link.text;

//Append the new element to the subMenuEl.
subMenuEl.appendChild(aEL);}

/////////////////////////////////////////////////////////////////////////////////////////
//Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function (event));

//The first line of code of the event listener function should call the event object's preventDefault() method.
event.preventDefault();

//The second line of code within the function should immediately return if the element clicked was not an <a> element.
if (event.target.tagName ! == 'A)
    return;

//Log the content of the <a> to verify the handler is working.
console.log('subMenu clicked:' , event.target.textContent);

//Next, the event listener should set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = '0' ;

//Remove the active class from each <a> element in topMenuLinks.
topMenuLinks.forEach(a => a.classList.remove('active'));

//Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
const clickedText = event.target.textContent.trim();
const h1 = mainEl.querySelector ('h1');

//If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
if (clickedText.toLowerCase() === 'about'){
    h1.textContent = 'About';
} else {
    h1.textContent = clickedText
});






