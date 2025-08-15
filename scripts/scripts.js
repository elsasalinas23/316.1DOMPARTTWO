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
topMenuEl.addEventListener.('click', function (event);

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







