!function(){"use strict";var e,o,r,s=/^sect(\d)$/,i=document.querySelector(".nav-container"),a=document.querySelector(".nav-toggle"),c=i.querySelector(".nav"),l=(a.addEventListener("click",function(e){if(a.classList.contains("is-active"))return u(e);v(e);var e=document.documentElement,t=(e.classList.add("is-clipped--nav"),a.classList.add("is-active"),i.classList.add("is-active"),c.getBoundingClientRect()),n=window.innerHeight-Math.round(t.top);Math.round(t.height)!==n&&(c.style.height=n+"px");e.addEventListener("click",u)}),i.addEventListener("click",v),i.querySelector("[data-panel=menu]"));function t(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=l.querySelector('.nav-link[href="'+n+'"]')))){n=document.getElementById(n.slice(1));if(n)for(var i=n,a=document.querySelector("article.doc");(i=i.parentNode)&&i!==a;){var c=i.id;if((c=!c&&(c=s.test(i.className))?(i.firstElementChild||{}).id:c)&&(e=l.querySelector('.nav-link[href="#'+c+'"]')))break}}if(e)t=e.parentNode;else{if(!r)return;e=(t=r).querySelector(".nav-link")}t!==o&&(h(l,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),d(o=t),p(l,e))}function d(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function n(){var e,t,n,i;this.classList.toggle("is-active")&&(e=parseFloat(window.getComputedStyle(this).marginTop),t=this.getBoundingClientRect(),n=l.getBoundingClientRect(),0<(i=(t.bottom-n.top-n.height+e).toFixed())&&(l.scrollTop+=Math.min((t.top-n.top-e).toFixed(),i)))}function u(e){v(e);e=document.documentElement;e.classList.remove("is-clipped--nav"),a.classList.remove("is-active"),i.classList.remove("is-active"),e.removeEventListener("click",u)}function v(e){e.stopPropagation()}function p(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function h(e,t){return[].slice.call(e.querySelectorAll(t))}l&&(e=i.querySelector("[data-panel=explore]"),o=l.querySelector(".is-current-page"),(r=o)?(d(o),p(l,o.querySelector(".nav-link"))):l.scrollTop=0,h(l,".nav-item-toggle").forEach(function(e){var t=e.parentElement,e=(e.addEventListener("click",n.bind(t)),function(e,t){e=e.nextElementSibling;return(!e||!t||e[e.matches?"matches":"msMatchesSelector"](t))&&e}(e,".nav-text"));e&&(e.style.cursor="pointer",e.addEventListener("click",n.bind(t)))}),e&&e.querySelector(".context").addEventListener("click",function(){h(c,"[data-panel]").forEach(function(e){e.classList.toggle("is-active")})}),l.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),l.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&t(),window.addEventListener("hashchange",t)))}();
!function(){"use strict";var e=document.querySelector("nav.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2,10);if(!(t<0)){for(var n="article.doc",c=document.querySelector(n),o=[],i=0;i<=t;i++){var r=[n];if(i){for(var d=1;d<=i;d++)r.push((2===d?".sectionbody>":"")+".sect"+d);r.push("h"+(i+1)+"[id]")}else r.push("h1[id].sect0");o.push(r.join(">"))}m=o.join(","),f=c.parentNode;var a,s=[].slice.call((f||document).querySelectorAll(m));if(!s.length)return e.parentNode.removeChild(e);var l={},u=s.reduce(function(e,t){var n=document.createElement("a"),o=(n.textContent=t.textContent,l[n.href="#"+t.id]=n,document.createElement("li"));return o.dataset.level=parseInt(t.nodeName.slice(1),10)-1,o.appendChild(n),e.appendChild(o),e},document.createElement("ul")),f=e.querySelector(".toc-menu"),m=(f||((f=document.createElement("div")).className="toc-menu"),document.createElement("h3")),e=(m.textContent=e.dataset.title||"Contents",f.appendChild(m),f.appendChild(u),!document.getElementById("toc")&&c.querySelector("h1.page ~ :not(.is-before-toc)"));e&&((m=document.createElement("nav")).className="toc embedded",m.appendChild(f.cloneNode(!0)),e.parentNode.insertBefore(m,e)),window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}}function p(){var o,i,t,e=window.pageYOffset,n=1.15*h(document.documentElement,"fontSize"),r=c.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight)return a=Array.isArray(a)?a:Array(a||0),o=[],i=s.length-1,s.forEach(function(e,t){var n="#"+e.id;t===i||e.getBoundingClientRect().top+h(e,"paddingTop")>r?(o.push(n),a.indexOf(n)<0&&l[n].classList.add("is-active")):~a.indexOf(n)&&l[a.shift()].classList.remove("is-active")}),u.scrollTop=u.scrollHeight-u.offsetHeight,void(a=1<o.length?o:o[0]);Array.isArray(a)&&(a.forEach(function(e){l[e].classList.remove("is-active")}),a=void 0),s.some(function(e){if(e.getBoundingClientRect().top+h(e,"paddingTop")-n>r)return!0;t="#"+e.id}),t?t!==a&&(a&&l[a].classList.remove("is-active"),(e=l[t]).classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-u.offsetHeight)),a=t):a&&(l[a].classList.remove("is-active"),a=void 0)}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function r(e){if(e){if(e.altKey||e.ctrlKey)return;window.location.hash="#"+this.id,e.preventDefault()}window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n;(n=i(window.location.hash))&&(n=document.getElementById(n))&&(r.bind(n)(),setTimeout(r.bind(n),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t;(t=i(e.hash))&&(t=document.getElementById(t))&&e.addEventListener("click",r.bind(t))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
!function(){"use strict";var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(t){t.stopPropagation(),document.documentElement.classList.toggle("is-clipped--navbar"),this.classList.toggle("is-active");t=document.getElementById(this.dataset.target);{var e;t.classList.toggle("is-active")&&(t.style.maxHeight="",e=window.innerHeight-Math.round(t.getBoundingClientRect().top),parseInt(window.getComputedStyle(t).maxHeight,10)!==e&&(t.style.maxHeight=e+"px"))}}.bind(t))}();
!function(){"use strict";var o=/^\$ (\S[^\\\n]*(\\\n(?!\$ )[^\\\n]*)*)(?=\n|$)/gm,s=/( ) *\\\n *|\\\n( ?) */g,l=/ +$/gm,d=(document.getElementById("site-script")||{dataset:{}}).dataset;[].slice.call(document.querySelectorAll(".doc pre.highlight, .doc .literalblock pre")).forEach(function(e){var t,n,c,i;if(e.classList.contains("highlight"))(a=(t=e.querySelector("code")).dataset.lang)&&"console"!==a&&((c=document.createElement("span")).className="source-lang",c.appendChild(document.createTextNode(a)));else{if(!e.innerText.startsWith("$ "))return;var a=e.parentNode.parentNode;a.classList.remove("literalblock"),a.classList.add("listingblock"),e.classList.add("highlightjs","highlight"),(t=document.createElement("code")).className="language-console hljs",t.dataset.lang="console",t.appendChild(e.firstChild),e.appendChild(t)}(a=document.createElement("div")).className="source-toolbox",c&&a.appendChild(c),window.navigator.clipboard&&((n=document.createElement("button")).className="copy-button",n.setAttribute("title","Copy to clipboard"),"svg"===d.svgAs?((c=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("class","copy-icon"),(i=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttribute("href",window.uiRootPath+"/img/octicons-16.svg#icon-clippy"),c.appendChild(i),n.appendChild(c)):((i=document.createElement("img")).src=window.uiRootPath+"/img/octicons-16.svg#view-clippy",i.alt="copy icon",i.className="copy-icon",n.appendChild(i)),(c=document.createElement("span")).className="copy-toast",c.appendChild(document.createTextNode("Copied!")),n.appendChild(c),a.appendChild(n)),e.appendChild(a),n&&n.addEventListener("click",function(e){var t=e.innerText.replace(l,"");"console"===e.dataset.lang&&t.startsWith("$ ")&&(t=function(e){var t,n=[];for(;t=o.exec(e);)n.push(t[1].replace(s,"$1$2"));return n.join(" && ")}(t));window.navigator.clipboard.writeText(t).then(function(){this.classList.add("clicked"),this.offsetHeight,this.classList.remove("clicked")}.bind(this),function(){})}.bind(n,t))})}();
!function(){"use strict";var o=/ +$/gm,d=(document.getElementById("site-script")||{dataset:{}}).dataset;[].slice.call(document.querySelectorAll("span.perma-link-copy")).forEach(function(e){var t,i,n,c,a=window.location.href.replace("/latest/","/"+e.getAttribute("version")+"/");(i=document.createElement("div")).className="perma-link",window.navigator.clipboard&&((t=document.createElement("button")).className="copy-button",t.setAttribute("title","Copy Link for Version"),(n=document.createElement("span")).className="button-label",n.appendChild(document.createTextNode("Permalink")),t.appendChild(n),"svg"===d.svgAs?((n=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("class","copy-icon"),(c=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttribute("href",window.uiRootPath+"/img/link-24.svg#icon-clippy"),n.appendChild(c),t.appendChild(n)):((c=document.createElement("img")).src=window.uiRootPath+"/img/link-24.svg#view-clippy",c.alt="copy icon",c.className="copy-icon",t.appendChild(c)),(n=document.createElement("span")).className="copy-toast",n.appendChild(document.createTextNode("Copied!")),t.appendChild(n),i.appendChild(t)),e.appendChild(i),t&&t.addEventListener("click",function(e){e=e.replace(o,"");window.navigator.clipboard.writeText(e).then(function(){this.classList.add("clicked"),this.offsetHeight,this.classList.remove("clicked")}.bind(this),function(){})}.bind(t,a))})}();


/*
 * Add sidebar toggle functionality for BMS documentation
 */
!function() {
    "use strict";

    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
      // Find the left sidebar and right sidebar elements based on the structure in the screenshot
      var leftSidebar = document.querySelector('.nav-menu') || document.querySelector('.nav-container');
      var rightSidebar = document.querySelector('.toc-menu') || document.querySelector('.on-this-page');

      if (!leftSidebar && !rightSidebar) return; // Exit if neither sidebar exists

      // Create right toggle container
      var rightToggleContainer = document.createElement('div');
      rightToggleContainer.className = 'sidebar-toggles right-toggles';
      rightToggleContainer.style.position = 'fixed';
      rightToggleContainer.style.top = '80px';
      rightToggleContainer.style.right = '10px';
      rightToggleContainer.style.zIndex = '100';
      rightToggleContainer.style.display = 'flex';
      rightToggleContainer.style.flexDirection = 'column';
      rightToggleContainer.style.gap = '10px';

      // Create left toggle container
      var leftToggleContainer = document.createElement('div');
      leftToggleContainer.className = 'sidebar-toggles left-toggles';
      leftToggleContainer.style.position = 'fixed';
      leftToggleContainer.style.top = '80px';
      leftToggleContainer.style.left = '10px';
      leftToggleContainer.style.zIndex = '100';
      leftToggleContainer.style.display = 'flex';
      leftToggleContainer.style.flexDirection = 'column';
      leftToggleContainer.style.gap = '10px';

      // Create left sidebar toggle if it exists
      if (leftSidebar) {
        var leftToggle = createToggleButton('left', 'Toggle navigation sidebar');
        leftToggleContainer.appendChild(leftToggle);

        leftToggle.addEventListener('click', function() {
          document.body.classList.toggle('left-sidebar-hidden');
          this.classList.toggle('active');
          saveState('left-sidebar-hidden', document.body.classList.contains('left-sidebar-hidden'));
        });
      }

      // Create right sidebar toggle if it exists
      if (rightSidebar) {
        var rightToggle = createToggleButton('right', 'Toggle table of contents');
        rightToggleContainer.appendChild(rightToggle);

        rightToggle.addEventListener('click', function() {
          document.body.classList.toggle('right-sidebar-hidden');
          this.classList.toggle('active');
          saveState('right-sidebar-hidden', document.body.classList.contains('right-sidebar-hidden'));
        });
      }

      // Add the toggle containers to the document
      if (leftSidebar) document.body.appendChild(leftToggleContainer);
      if (rightSidebar) document.body.appendChild(rightToggleContainer);

      // Add CSS for sidebars and toggle buttons
      addStyles();

      // Restore previous state
      restoreState();
    });

    function createToggleButton(direction, title) {
      var button = document.createElement('button');
      button.className = 'sidebar-toggle ' + direction + '-toggle';
      button.setAttribute('title', title);
      button.innerHTML = '<div class="toggle-arrow"></div>';

      return button;
    }

    function addStyles() {
      var styleEl = document.createElement('style');
      styleEl.textContent = `
        /* Toggle button styles */
        .sidebar-toggle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #fff;
          border: 1px solid #ddd;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
        }

        .sidebar-toggle:hover {
          background-color: #f5f5f5;
        }

        .sidebar-toggle.active {
          background-color: #e8e8e8;
        }

        .toggle-arrow {
          width: 10px;
          height: 10px;
          border-style: solid;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 2px;
        }

        /* Default arrow directions */
        .left-toggle .toggle-arrow {
          transform: rotate(-45deg);
          margin-right: 2px;
        }

        .right-toggle .toggle-arrow {
          transform: rotate(-45deg);
          margin-right: 5px;
        }

        /* Active state arrow directions */
        .left-toggle.active .toggle-arrow {
          transform: rotate(135deg);
          margin-right: 0;
          margin-left: 2px;
        }

        .right-toggle.active .toggle-arrow {
          transform: rotate(135deg);
          margin-right: 0;
        }

        /* Hidden sidebar styles */
        body.left-sidebar-hidden .nav-menu,
        body.left-sidebar-hidden .nav-container {
          display: none !important;
        }

        body.right-sidebar-hidden .toc-menu,
        body.right-sidebar-hidden .on-this-page {
          display: none !important;
        }

        /* Adjust main content when sidebars are hidden */
        body.left-sidebar-hidden main,
        body.left-sidebar-hidden .main,
        body.left-sidebar-hidden .doc {
          margin-left: 0 !important;
          padding-left: 1rem !important;
        }

        body.right-sidebar-hidden main,
        body.right-sidebar-hidden .main,
        body.right-sidebar-hidden .doc {
          margin-right: 0 !important;
          padding-right: 1rem !important;
        }
      `;
      document.head.appendChild(styleEl);
    }

    function saveState(key, value) {
      if (window.localStorage) {
        localStorage.setItem(key, value);
      }
    }

    function restoreState() {
      if (window.localStorage) {
        if (localStorage.getItem('left-sidebar-hidden') === 'true') {
          document.body.classList.add('left-sidebar-hidden');
          var leftToggle = document.querySelector('.left-toggle');
          if (leftToggle) leftToggle.classList.add('active');
        }

        if (localStorage.getItem('right-sidebar-hidden') === 'true') {
          document.body.classList.add('right-sidebar-hidden');
          var rightToggle = document.querySelector('.right-toggle');
          if (rightToggle) rightToggle.classList.add('active');
        }
      }
    }
  }();