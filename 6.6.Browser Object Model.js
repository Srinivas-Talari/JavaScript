// Browser Object Model (BOM) [Allows JS to interact with the browser itself]

//  Window

console.log(window.innerHeight); // 359 [only the space available for webpage content]
console.log(window.innerWidth);  // 1536[only the space available for webpage content]
console.log(window.open('https://chatgpt.com')) // opens the window in new tab
console.log(window.close()) // closes the current window 
let popup1 = window.open("https://example.com", "popup", "width=400,height=300");
popup1.moveTo(200, 200); // Only works in some browsers/popups
let popup2 = window.open("https://example.com", "popup", "width=400,height=300");
popup2.resizeTo(600, 400); // Resizes the popup window

//  Screen

console.log(screen.height) // 864px // [includes taskbars,tabs,etc]
console.log(screen.width) // 1536px [includes taskbars,tabs,etc]
console.log(screen.availHeight) // 816
console.log(screen.availWidth) // 1536
console.log(screen.colorDepth) // 24
console.log(screen.pixelDepth) // 24

// Location

console.log(location.href) // shows current URL(eg:'https://sora.chatgpt.com') [url = hostname + pathname]
console.log(location.pathname) // shows current path name(eg:'/explore')
console.log(location.protocol) // shows current protocol (eg:'https')
console.log(location.hostname) // shows host name (eg: 'sora.chatgpt.com')
console.log(location.reload()) // reload the page
console.log(location.assign('https://example.com')) // redirects to the link assigned by the developer
console.log(location.origin()) //(eg:'https://sora.chatgpt.com)
console.log(location.port) // eg:'https://sora.chatgpt.com:8080 (eg:8080)

// History [instead of using browser's default front and back buttons to navigate between the pages we can create a custom button to navigate between the pages ]

// history.back() - same as clicking back in the browser
// history.forward() - same as clicking forward in the browser

// Navigator

console.log(navigator.cookieEnabled) // true
console.log(navigator.appName) // 'Netscape'
console.log(navigator.appCodeName) // 'Mozilla
console.log(navigator.appVersion) // '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
console.log(navigator.javaEnabled()); //false
console.log(navigator.userAgent) // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
console.log(navigator.product) // 'Gecko'
console.log(navigator.platform) // 'Win32'

//Popup Alert

alert("Hello world");
alert("hello\n world") // to display line breaks in popup
confirm('Allow the cookies?')
prompt("Enter your Username")

// Timing

// setInterval(At every interval(user mentioned) it triggers)

setInterval(()=>{

    console.log('Hello world')
},1000) // for every 1 sec it triggers

// setTimeout(Only triggers once when it reaches certain timeInterval)

setTimeout(()=>{

    console.log('Hello world')
},6000) // after 6 sec it triggers

//Cookies

document.cookie // displays all the cookies of particular window

// How to add cookie

document.cookie = "username=John Doe";

// add expiry date for a cookie

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

// With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";





