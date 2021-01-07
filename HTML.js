function createDiv(text){
    let div = document.createElement("div");
    div.innerHTML = text;
    return div;
}

function createInput(type,value){
    let input = document.createElement("input");
    input.type = type;
    input.placeholder = value;
    return input;
}

function createLabel(text){
    let label = document.createElement("label");
    label.innerHTML = text;
    return label;
}

export {createDiv, createInput, createLabel};