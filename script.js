/*function bingoTable () {

    let buttonsNode = document.getElementById("bingoTable");
    let content = buttonsNode.value;

    for (let i = 1; i <= 76; i++) {
        let button = buttonsNode[i];
        console.log(button)
    }
}*/

function onLoadTable() {

    for (let num = 1; num <= 76; num++) {
        let numNode = document.createElement("div");
        
        numNode.classList.add("num");
        numNode.innerText = num;
        numNode.addEventListener("click");

        document.getElementById("container").appendChild(numNode);
    }
}

window.onload = onLoadTable;