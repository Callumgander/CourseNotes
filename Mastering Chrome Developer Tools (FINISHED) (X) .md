What you'll learn in the course
- use the devtools as an IDE
- debug complex applications
- analyze network traffic
- audit a website
- monitor real user performance
- profile CPU usage
- analyze Node.js performance
- find and fix memory leaks
- tips and tricks

- firebug was the first sort of developer tools thingie

- app for the course  http://masteringdevtools.com/

Developer tools panels
- cmd -&gt; option -&gt; i
- **elements** - basically the dom tree, highlights nodes
- hold option key, click on carrot, opens all
- click an element and then look at the styles to the right to see the styles applied to it
- **console** - interactive console
- **sources** - like a text editor + a debugger
- **network** - shows every http request the page makes
- **performance** - essentially records what your CPU is doing
- **memory** - complicated, for memory leaks
- **application** - two purposes, shows all of the browser storage
- **security** - shows whether site has HTTPS, and whether the requests it makes a HTTPS
- **audits** - runs your site through an array of tests whose results are returned in simple english
- second button on the top left allows device emulation, you can set it to responsive and decide the resolution
- hitting the escape key on any tab brings up the console

- Can use DevTools as a full time IDE
- can double click elements in the html and change them 
- any site that has colors, look in the CSS, click on the actual color, go to the second section of the list and you can change the color palette for the website
- right click, scroll into view to find an element
- Trigger various states, click on :hov and you can trigger any event and see how it changes the CSS

- Computed tab next to styles, shows the css for an element as is rather than how it got there
- can then click the arrow of the appropriate style to find where in the code this code is from
- Event listeners tab shows all the event listeners on thepage
- shift and click on a color box and you can shift through the different color box like hex, rgb etc.
- You can hold and drag DOM elements into different positions
- in the styles class you can view specificity
- pretty print button at the bottom of sources tab
- Break on DOM changes, right click an element that's changing, click on break on and can break on node removal (why is this being removed), attribute modification (when it's changing)
- to save changes to disk, go to filesystem tab on sources, and you can add files 
- $0 for the last element you selected, $1 for the element before the last element you selected

Debugging
- cmd -&gt; shift -&gt; p, you get all the things you can do with the mouse but with your keyboard
- cmd -&gt; p to search through all the files it has access to
- set breakpoint, when the compiler hits this code, pause it and show me what's happening
- can also use the debugger keyword to set breakpoint
-  click on the line number to set a breakpoint
-  watch - lets you put in any expression and check what that expression evaluates to
-  call stacks - allows you to see what functions were called to lead to current breakpoint
-  watch and call stack are the most important
-  resume script execution - resumes until the next breakpoint or until the whole page is loaded
-  step over next function call - essentially skip a line in order of execution 
-  step into next function call - step into the next function in the call stack
-  step out next function - just steps to the next step in the stack, not where you were prior
-  in the call stack if you're not interested in certain functions, as they're external libraries, then you can right click and blackbox the script
-  can add permanent black boxes by going into settigns and the blackboxing heading
- conditional breakpoints - only breaks if a condition is true
- XHR/fetch breakpoints - whenever a url is fetched containing the string you type into the break 

Networking
- first you get the html file then you request related information like images, scripts, etc.
- hold shift and hover over a file to see what file called it
- a waterfall is graph on what happens with regards to requests
- what is caching?
- White means it's queuing. might be low priority, put on nhold to wait for an unavailable TCP socket to free up, browsers can only make six TCP connections per origin on HTTP1
- What is TCP?
- What is a TCP socket?
- what is HTTP1?
- Why do browsers only have six TCP connnectionsn per origin HTTP1
- Gray is stalled/blocking, request hasn't left the computer
- Proxy negotiation 
- Green is DNS Lookup, every new domain on a page requires a full roundtrip to do the DNS lookup
- What is DNS?
- What is DNS Lookup?
- Orange is Initial Connection/connecting, time it took to establish a connection, including TCP handshakes/retries and negotiating a SSL
- What is a TCP handshake/retry?
- What is an SSL?
- Brown is the time spent completing a SSL handshake
- Green is request sent/sending, time spent issuing the network request
- Waiting (TTFB) is after that, time spent waiting for the initial response, also known as the Time to First Byte. This time captures the latency of a round trip to the server in addition to the time spent waiting for the server to deliver the response
- What is TTFB?
- Blue is content download/downloading 

Screenshots
- shows what each file does as it loads
- will show how your site would load on slower connections

Auditing
- Google.com: +500ms speed decrease -&gt; 20% traffic loss
- Yahoo.com: +400ms speed decrease -&gt; -5-9% full-page traffic loss (visitor left before the page finished loading)
- amazon.com: +100ms speed decrease -&gt; -1% sales loss
- webpagetest.org
- lighthouse, built into chromedevtools
- go to audits tab
- what are progressive web apps?
- sonarwhal

Common Audit Problems
- Combine external CSS and JS
- enable gzip compression (apache, node, wordpress)
- compress images
- leverage browser caching
- put CSS in document head
- Unused CSS rules (old CSS that can be pruned)

Node.js Profiling
- npm start to start your server in terminal
- npm start actually just does node server/index.js
- node --inspect server/index.js
- then you get node.js dev tools
- use the profiler to see how your program is running
- x axis is time, y axis is the callstack
- long callstack isn't something to worry about, a short callstack is

Performance Monitoring
- you testing your app vs your user that could be anyway
- Controlled vs. User Monitoring

    performannce.mark('start');
    
    // do some work...
    
    performance.mark('end');
    
    performance.measure('Our Measurement', 'start', 'end')
    
    performance.getEntriesByType('measure');


Image Performance
- Start with a basic image
- `<img>`
- also do it with <img src="bdfsd.jps" for="">

Profiling
- How does V8 work?
- It takes JS -&gt; parses it -&gt; turns it innto ann abstract syntax tree -&gt; generates bytecode -&gt; get feedback for speculative optimizations -&gt; optimizies and compiles it -&gt; then runs the optimized code on your CPU
- What is an abstract syntax tree
- Page Jank is when you get jittering and moving on your screen
- Most devices today refresh their screens 60 times a second. The browser needs to match the device's refresh rate and put up 1 new picture or frame, for each of those refreshes
- Each of those frames has a budget of just over 16ms (1 second / 60 = 16.66ms). In reality, however, the browser has housekeeping work to do, so all of your work needs to be completed inside 10ms
- another thing that contributes to page jank is layout thrashing, changing CSS too much 
- window.requestAnimationFrame(), when you're about to render the frame, I've got some stuff to do first
- fastdom library

Performance Panel
- Keep the performance small, a second or two at the most when recording
- wide things are problems, not narrow things

Memory Leaks
- you don't deal with memory directly using scripting languages 
- allocate memory -&gt; use memory -&gt; release memory
- a memory leak in JS is when something can't be released
- Common causes of memory leaks
- accidental global, makes a variable global by accident that takes up time and memory

    function foo() {
        bar = "tdfdsfds";
    }
- the forgotton timer

    const data = getData();
    setInterval(() = {
        document.body.innerHTML = JSON.stringify(data);}, 1000);
- The DOM and not the DOM 

    const button = document.getElementById("button");
    // then later
    function removeButton() {
        document.body.removeChild(
            document.getElementById("button")
        );
    }

- more tools, task manager, right click on headers and click javascript memory
- if the javascript memory usage keeps going up annd up, it's a good indicator that you've got a memory leak
- when you're doing performance recordings for memory, do them for longer