const htmlIc = document.querySelector('.fa-html5');
const htmlInfo = document.querySelector('.html-block');

const cssIc = document.querySelector('.fa-css3-alt');
const cssInfo = document.querySelector('.css-block');

const jsIc = document.querySelector('.fa-js-square');
const jsInfo = document.querySelector('.js-block');

const nodeIc = document.querySelector('.fa-node-js');
const nodeInfo = document.querySelector('.node-block');

const sassIc = document.querySelector('.fa-sass');
const sassInfo = document.querySelector('.sass-block');

const reactIc = document.querySelector('.fa-react');
const reactInfo = document.querySelector('.react-block');

const gitIc = document.querySelector('.fa-git-square');
const gitInfo = document.querySelector('.git-block');

htmlIc.addEventListener("click", toggleHtml);
cssIc.addEventListener("click", toggleCss);
jsIc.addEventListener("click", toggleJs);
nodeIc.addEventListener("click", toggleNode);
sassIc.addEventListener("click", toggleSass);
reactIc.addEventListener("click", toggleReact);
gitIc.addEventListener("click", toggleGit);

function toggleHtml() {
       htmlInfo.classList.toggle("show");
       cssInfo.classList.remove("show");
       jsInfo.classList.remove("show");
       nodeInfo.classList.remove("show");
       sassInfo.classList.remove("show");
       reactInfo.classList.remove("show");
       gitInfo.classList.remove("show");
}

function toggleCss() {
       htmlInfo.classList.remove("show");
       cssInfo.classList.toggle("show");
       jsInfo.classList.remove("show");
       nodeInfo.classList.remove("show");
       sassInfo.classList.remove("show");
       reactInfo.classList.remove("show");
       gitInfo.classList.remove("show");
}

function toggleJs() {
       htmlInfo.classList.remove("show");
       cssInfo.classList.remove("show");
       jsInfo.classList.toggle("show");
       nodeInfo.classList.remove("show");
       sassInfo.classList.remove("show");
       reactInfo.classList.remove("show");
       gitInfo.classList.remove("show");
}

function toggleNode() {
       htmlInfo.classList.remove("show");
       cssInfo.classList.remove("show");
       jsInfo.classList.remove("show");
       nodeInfo.classList.toggle("show");
       sassInfo.classList.remove("show");
       reactInfo.classList.remove("show");
       gitInfo.classList.remove("show");
}

function toggleSass() {
       htmlInfo.classList.remove("show");
       cssInfo.classList.remove("show");
       jsInfo.classList.remove("show");
       nodeInfo.classList.remove("show");
       sassInfo.classList.toggle("show");
       gitInfo.classList.remove("show");
}

function toggleReact() {
       htmlInfo.classList.remove("show");
       cssInfo.classList.remove("show");
       jsInfo.classList.remove("show");
       nodeInfo.classList.remove("show");
       sassInfo.classList.remove("show");
       reactInfo.classList.toggle("show");
       gitInfo.classList.remove("show");
}
function toggleGit() {
       htmlInfo.classList.remove("show");
       cssInfo.classList.remove("show");
       jsInfo.classList.remove("show");
       nodeInfo.classList.remove("show");
       sassInfo.classList.remove("show");
       reactInfo.classList.remove("show");
       gitInfo.classList.toggle("show");
}


