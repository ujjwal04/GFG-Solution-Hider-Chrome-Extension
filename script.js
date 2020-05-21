const solutionNodes = document.getElementsByTagName("pre");
const solutionTextNodes = document.getElementsByTagName("p");
const mainArray = [...solutionNodes];

const mainTextArray = [...solutionTextNodes];

mainArray.forEach( e => {
    e.style.pointer= "cursor";
    e.style.filter = "blur(8px)";
    e.addEventListener('click',() => {
        if(e.style.filter) {
            const isVisible = confirm("Do you confirm to unhide the solution");
            if(isVisible)
                e.style.filter = "";
        }
    })
});

mainTextArray.forEach( e => {
    e.style.pointer= "cursor";
    if(e.textContent.startsWith("Output:")) {
        e.style.filter = "blur(8px)";
        e.addEventListener('click',() => {
        if(e.style.filter) {
            const isVisible = confirm("Do you confirm to unhide the solution");
            if(isVisible)
                e.style.filter = "";
        }
    })
    }

})