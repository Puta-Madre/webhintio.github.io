!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null});var e=window.getMessage,t=document.getElementById("categories-list"),n=document.getElementById("show-categories"),o=document.querySelector(".header"),r=window.matchMedia("(min-width: 48em)"),l=function(t,n){var o=void 0!==n?n:function(e){var t=e.closest(".rule-result");return Array.prototype.slice.apply(t.querySelectorAll(".rule-result--details")).some((function(e){return null!==e.getAttribute("open")}))}(t);o?(t.textContent=e("closeAll"),t.classList.remove("closed"),t.classList.add("expanded")):(t.textContent=e("expandAll"),t.classList.remove("expanded"),t.classList.add("closed"))},s=function(e,t){var n,o=void 0!==t?t:"true"===e.getAttribute("aria-expanded"),r=e.id;o?((n=e).setAttribute("aria-expanded","false"),n.removeAttribute("open"),e.setAttribute("title","show "+r+"'s result details")):(!function(e){e.setAttribute("aria-expanded","true"),e.setAttribute("open","")}(e),e.setAttribute("title","close "+r+"'s result details"))},a=function(){return o?"calc(100% - 5rem - "+o.clientHeight+"px)":"calc(100% - 5rem)"},i=function(){var e=n.closest(".module--categories").querySelector(".rule-categories");e.classList.contains("open")?(n.textContent="Jump to category",e.setAttribute("aria-expanded","false"),e.classList.remove("open"),document.body.classList.remove("menu-open")):(t.style.height=a(),n.textContent="Hide categories",e.setAttribute("aria-expanded","true"),e.classList.add("open"),document.body.classList.add("menu-open"))},c=function(e){setTimeout((function(){window.scrollTo(0,e.offsetTop-50)}),0)},u=["rule-tile--wrapper","rule-tile","rule-icon","rule-tile__category","rule-tile__sub-category","rule-tile__passed","rule-tile__info","rule-tile__results"],d=function(e){var t=e.target;return t.classList.contains("hint-link")?function(e){var t=e.getAttribute("href").substr(1);if(0!==t.indexOf("category")){var n=document.getElementById(t);c(n)}}(t):t.classList.contains("button-expand-all")?function(e){for(var t=e.closest(".rule-result"),n=Array.prototype.slice.apply(t.querySelectorAll(".rule-result--details")),o=e.classList.contains("expanded"),r=0;r<n.length;r++)s(n[r],!!o);l(e,!o)}(t):t.classList.contains("rule-title")?function(e){var t=e.closest(".rule-result").querySelector(".button-expand-all");setTimeout((function(){l(t)}),0)}(t):t.classList.contains("show-categories")?i():(r.matches||u.some((function(e){return!!t.classList.contains(e)&&(i(),!0)})),!0)},p=Array.prototype.slice.apply(document.querySelectorAll(".permalink-copy")),m=function(e){var t=e.currentTarget.parentElement;!function(e){var t="hidden-clipboard",n=document.getElementById(t);if(!n){var o=document.createElement("textarea");o.id=t,o.style.position="fixed",o.style.top="-10px",o.style.left="-10px",o.style.width="1px",o.style.height="1px",o.style.padding=0,o.style.border="none",o.style.outline="none",o.style.boxShadow="none",o.style.background="transparent",document.querySelector("body").appendChild(o),n=document.getElementById(t)}n.value=e,n.select(),document.execCommand("copy")}(t.querySelector(".permalink-content").textContent.trim()),function(e){var t=e.querySelector(".permalink-copy"),n=t.querySelector("img");window.ejsPartials?(t.removeChild(n),t.innerHTML+=ejsPartials["check-mark"]()):n.src="/static/images/scan/results-passed-icon-d12f41eeb3.svg"}(t)};p.forEach((function(e){e.addEventListener("click",m)})),window.addEventListener("popstate",(function(){var e,t;e="/scanner/",(t=window.location.href).length-e.length===t.indexOf(e)&&(window.location.href=window.location.href)}),!1);var y,f,g,h=function(){if(r.matches)t.removeAttribute("aria-expanded"),document.body.classList.remove("menu-open");else{var e=t.classList.contains("open");t.setAttribute("aria-expanded",e?"true":"false"),e&&(t.style.height=a(),document.body.classList.add("menu-open"))}},v=function(e){return e<10?"0"+e:e};!function(){var e=document.getElementById("scan-date");if(e){var t=e.getAttribute("data-date");if(t){var n=new Date(t);e.textContent=n.getFullYear()+"-"+v(n.getMonth()+1)+"-"+v(n.getDate())+" "+v(n.getHours())+":"+v(n.getMinutes())}}}(),t&&(f=Array.prototype.slice.apply(document.querySelectorAll("details[open]")),g=Array.prototype.slice.apply(document.querySelectorAll(".button-expand-all")),f.forEach((function(e){e.removeAttribute("open"),e.setAttribute("aria-expanded","false")})),g.forEach((function(t){t.textContent=e("expandAll"),t.classList.add("closed"),t.classList.remove("expanded")})),function(){var e=location.hash;if(e){var t=e.substr(1);if(0!==t.indexOf("category")){var n=document.getElementById(t),o=n.closest(".rule-result--details");o.setAttribute("open","open"),o.setAttribute("aria-expanded","true"),c(n)}}}(),(y=document.getElementById("results-container"))&&y.addEventListener("click",d,!1),h(),r.addListener(h),function(){for(var e=document.querySelectorAll("code"),t=0;t<e.length;t++)hljs.highlightBlock(e[t])}())}();