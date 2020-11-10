const htmlInfo = document.querySelector('.html-block');
const cssInfo = document.querySelector('.css-block');
const jsInfo = document.querySelector('.js-block');
const nodeInfo = document.querySelector('.node-block');
const sassInfo = document.querySelector('.sass-block');
const reactInfo = document.querySelector('.react-block');
const gitInfo = document.querySelector('.git-block');
let lastElement = null;

function toggleHtml() {
       htmlInfo.classList.add("show");
       if(lastElement != null) {
              lastElement.classList.remove("show");
       }
       
       lastElement = htmlInfo;
       
}

function toggleCss() {
       cssInfo.classList.add("show");
       if(lastElement != null) {
              lastElement.classList.remove("show");
       }
       lastElement = cssInfo;
}

function toggleJs() {
       jsInfo.classList.add("show");
       if(lastElement != null) {
              lastElement.classList.remove("show");
       }
       lastElement = jsInfo;
}

function toggleNode() {
       nodeInfo.classList.add("show");
       if(lastElement != null) {
              lastElement.classList.remove("show");
       }
       lastElement = nodeInfo;
}

function toggleSass() {
       sassInfo.classList.add("show");
       if(lastElement != null) {
              lastElement.classList.remove("show");
       }
       lastElement = sassInfo;
}

function toggleReact() {
       reactInfo.classList.add("show");
       if(lastElement != null) {
              lastElement.classList.remove("show");
       }
       lastElement = reactInfo;
}
function toggleGit() {
       gitInfo.classList.add("show");
       if(lastElement != null) {
              lastElement.classList.remove("show");
       }
       lastElement = gitInfo;
}


