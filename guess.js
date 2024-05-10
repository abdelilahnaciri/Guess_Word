let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By Elzero`;

// Setting Up Inputs
// let i = 4;
// let j = 6;


// document.addEventListener("keyup", function() {
//     // let text = e.currentTarget;
//     let inputText = document.querySelectorAll(".try");
//     // console.log(inputText[0].childNodes);
//     inputText.forEach(function(e) {
//         console.log(e.currentTarget);
//     });
//     // console.log(inputText);
//     // console.log(inputText.target);
//     // for (let i = 0; i < inputText.length - 1; i++) {
//     //     if (inputText[i].value.length > 0) {
//     //         inputText[i+1].focus();
//     //         // console.log(index);
//     //     }
//     // }
//     // inputText.forEach(function(e, index) {
//     //     // console.log(e);
        
//     // })
//     // if (inputText[0].value.length > 0) {
//     //     inputText[1].focus();
//     //     console.log(inputText);
//     //     console.log("Enough");
//     // }
// });
/*

let myWord = "Test";
let ntries = 4;
let nchecks = 1;
let res = [];
let val = "";
// window.addEventListener("load", function() {
//     let inputs = document.querySelectorAll(".try");
//     if (nchecks < 4) {
//         for (let j = nchecks; j < 4; j++) {
//             for (let i = 1; i < 7; i++) {
//                 inputs[j].children[i].disabled = true;
//             }
//         }
//     }
//     inputs.forEach((input, index) => {
//         // console.log(inputs[index+1]);
//         // if (index > nchecks) {
//         //     index++;
//         //     // console.log(index);
//         // }
//         input.addEventListener("keyup", function(e) {
//             // console.log(e);
//             for (let i = 1; i < input.childNodes.length; i++) {
//                 // console.log(input.children[i]);
//                 if (input.children[i].value.trim().length > 0) {
//                     input.children[i].style.cssText = `border-bottom-color: #e4c61b;`;
//                     val = '';
//                     val = input.children[i].value.trim().charAt(0);
//                     // console.log(input.children[i].value.trim().charAt(0));
//                     // .reduce(function(e) {
//                     //     console.log(e[0]);
//                     //     return e[0];
//                     // });
//                     input.children[i].value = val;
//                     // console.log(val.split(""));
//                     input.children[i].disabled = true;
//                     if (i < input.childNodes.length - 1) {
//                         input.children[i+1].focus();
//                     }
//                     res.push(val);
//                 }
//             }
//             // console.log(res);
//             // console.log(res);
//         });
//         // console.log(res);
//     });
//     // console.log(nchecks);
//     // console.log(inputs);
//     let checkbtn = document.querySelector(".check");
//     checkbtn.addEventListener("click", function(e) {
//         if (nchecks < 5) {
//             for (let i = 0; i < myWord.length; i++) {
//                 if (inputs[nchecks - 1].children[i+1].value === myWord.split("")[i]) {
//                     inputs[nchecks - 1].children[i+1].style.backgroundColor = "green";
//                 }
//             }
//             // index++;
//             // console.log(nchecks);
//             // if (index > nchecks) {
//             //     for (let i = 1; i < 7; i++) {
//             //         input.children[i].disabled = false;
//             //     }
//             // }
//             nchecks++;
//             for (let j = nchecks - 1; j < 4; j++) {
//                 for (let i = 1; i < 7; i++) {
//                     if (inputs[j-1].children[i].disabled === true) {
//                         inputs[j].children[i].disabled = false;
//                     }
//                 }
//             }
//             if (nchecks < 5) {
//                 for (let j = nchecks; j < 4; j++) {
//                     for (let i = 1; i < 7; i++) {
//                         inputs[j].children[i].disabled = true;
//                     }
//                     // console.log(nchecks);
//                 }
//             }
//             // console.log(inputs[nchecks]);
            
//         }
//     });
// });

let inputs = document.querySelector(".inputs");

for (let i = 0; i < ntries; i++) {
    let alltries = document.createElement("div");
    alltries.className = "try";
    let tryLabel = document.createElement("label");
    tryLabel.textContent = `Try ${i+1}`;
    alltries.appendChild(tryLabel);
    for (let j = 0; j < myWord.length; j++) {
        let tryInput = document.createElement("input");
        tryInput.type = "text";
        alltries.appendChild(tryInput);
    }
    inputs.appendChild(alltries);
}

// window.addEventListener("load", function() {
//     let inputs = document.querySelectorAll(".try");
//     let checkbtn = document.querySelector(".check");
//     // console.log(inputs[0].querySelectorAll("input")[0]);
//     for (let i = 1; i < ntries; i++) {
//         for (let j = 0; j < myWord.length; j++) {
//             inputs[i].querySelectorAll("input")[j].disabled = true;
//         }
//     }
//     let i = 1;
//     checkbtn.addEventListener("click", function(e) {
//         let res = "";
//             if (i < ntries) {
//                 inputs[i-1].querySelectorAll("input").forEach(function(e) {
//                     res += e.value;
//                 });
//                 // console.log(res);
//                 for (let j = 0; j < myWord.length; j++) {
//                     // res = res.concat(inputs[i].querySelectorAll("input")[j].value);
//                     // console.log(res);
//                     // if (inputs[i-1].querySelectorAll("input")) {
//                     //     console.log(inputs[i-1].querySelectorAll("input"));
//                     // }
//                     if (res.length === myWord.length) {
//                         inputs[i].querySelectorAll("input")[j].disabled = false;
//                     }
//                 }
//                 if (res.length === myWord.length) {
//                     i++;
//                 }
//             // console.log(inputs[i].querySelectorAll("input"));
//         }
//     });
//     // console.log(inputs[1].querySelectorAll("input"));
// });


window.addEventListener("load", function() {
    let inputs = document.querySelectorAll(".try");
    let checkbtn = document.querySelector(".check");
    // console.log(inputs[0].querySelectorAll("input")[0]);
    for (let i = 1; i < ntries; i++) {
        for (let j = 0; j < myWord.length; j++) {
            inputs[i].querySelectorAll("input")[j].disabled = true;
        }
    }

    inputs.forEach(function(input, index) {
        input.addEventListener("keyup", function(e) {
            let i = 1;
            let val = '';
            for (i = 1; i <= myWord.length; i++) {
                if (input.children[i].value.trim().length > 0) {
                    input.children[i].style.cssText = `border-bottom-color: #e4c61b;`;
                    val = '';
                    val = input.children[i].value.trim().charAt(0);
                    input.children[i].value = val;
                    input.children[i].disabled = true;
                    if (i < myWord.length) {
                        input.children[i+1].focus();
                    }
                }
            }
        })
    });
    let i = 1;
    checkbtn.addEventListener("click", function(e) {
        let res = "";
            if (i <= ntries) {
                inputs[i-1].querySelectorAll("input").forEach(function(e) {
                    res += e.value;
                });
                // console.log(res);
                // for (let j = 0; j < myWord.length; j++) {
                //     if (res.length === myWord.length && i < ntries) {
                //         inputs[i].querySelectorAll("input")[j].disabled = false;
                //     }
                // }
                if (res.length === myWord.length) {
                    for (let j = 0; j < myWord.length; j++) {
                        inputs[i-1].children[j+1].style.cssText = `
                        color: #fff; border-color: #999;
                        `;
                        if (res.split("")[j] == myWord.split("")[j]) {
                            inputs[i-1].children[j+1].style.cssText += `
                            background-color: #f89e13;`;
                        }
                        else if (myWord.includes(res.split("")[j])) {
                            inputs[i-1].children[j+1].style.cssText += `
                            background-color: #18ba89;`;
                        }
                        else {
                            inputs[i-1].children[j+1].style.cssText += `
                            background-color: #27303f;`;
                        }
                    }
                    let msgCheck = document.querySelector(".message");
                    // console.log(msgCheck);
                    let span = document.createElement("span");
                    
                    let state = document.createElement("h3");
                    state.appendChild(span);
                    msgCheck.appendChild(state);
                    let btn = document.createElement("button");
                    btn.textContent = "Got It";
                    msgCheck.appendChild(btn);
                    msgCheck.classList.add("active");
                    btn.addEventListener("click", function(e) {
                        msgCheck.classList.remove("active");
                        state.remove();
                        btn.remove();
                    })
                    if (res === myWord) {
                        span.textContent = "Congrats!";
                        state.innerHTML += "You Got The Right Word";
                        return ;
                    } else {
                        span.textContent = "Sorry!";
                        span.style.cssText = `color: #ff0159;`;
                        state.innerHTML += "Good Luck Next Time";
                    }
                    for (let j = 0; j < myWord.length; j++) {
                        if (res.length === myWord.length && i < ntries) {
                            inputs[i].querySelectorAll("input")[j].disabled = false;
                        }
                    }
                    i++;
                }
            // console.log(inputs[i].querySelectorAll("input"));
        }
    });
    // console.log(inputs[1].querySelectorAll("input"));
});
*/




let myWord = "Test";
let ntries = 4;
let nchecks = 1;
let res = [];
let val = "";

// window.addEventListener("load", function() {
//     let inputs = document.querySelectorAll(".try");
//     if (nchecks < 4) {
//         for (let j = nchecks; j < 4; j++) {
//             for (let i = 1; i < 7; i++) {
//                 inputs[j].children[i].disabled = true;
//             }
//         }
//     }
//     inputs.forEach((input, index) => {
//         // console.log(inputs[index+1]);
//         // if (index > nchecks) {
//         //     index++;
//         //     // console.log(index);
//         // }
//         input.addEventListener("keyup", function(e) {
//             // console.log(e);
//             for (let i = 1; i < input.childNodes.length; i++) {
//                 // console.log(input.children[i]);
//                 if (input.children[i].value.trim().length > 0) {
//                     input.children[i].style.cssText = `border-bottom-color: #e4c61b;`;
//                     val = '';
//                     val = input.children[i].value.trim().charAt(0);
//                     // console.log(input.children[i].value.trim().charAt(0));
//                     // .reduce(function(e) {
//                     //     console.log(e[0]);
//                     //     return e[0];
//                     // });
//                     input.children[i].value = val;
//                     // console.log(val.split(""));
//                     input.children[i].disabled = true;
//                     if (i < input.childNodes.length - 1) {
//                         input.children[i+1].focus();
//                     }
//                     res.push(val);
//                 }
//             }
//             // console.log(res);
//             // console.log(res);
//         });
//         // console.log(res);
//     });
//     // console.log(nchecks);
//     // console.log(inputs);
//     let checkbtn = document.querySelector(".check");
//     checkbtn.addEventListener("click", function(e) {
//         if (nchecks < 5) {
//             for (let i = 0; i < myWord.length; i++) {
//                 if (inputs[nchecks - 1].children[i+1].value === myWord.split("")[i]) {
//                     inputs[nchecks - 1].children[i+1].style.backgroundColor = "green";
//                 }
//             }
//             // index++;
//             // console.log(nchecks);
//             // if (index > nchecks) {
//             //     for (let i = 1; i < 7; i++) {
//             //         input.children[i].disabled = false;
//             //     }
//             // }
//             nchecks++;
//             for (let j = nchecks - 1; j < 4; j++) {
//                 for (let i = 1; i < 7; i++) {
//                     if (inputs[j-1].children[i].disabled === true) {
//                         inputs[j].children[i].disabled = false;
//                     }
//                 }
//             }
//             if (nchecks < 5) {
//                 for (let j = nchecks; j < 4; j++) {
//                     for (let i = 1; i < 7; i++) {
//                         inputs[j].children[i].disabled = true;
//                     }
//                     // console.log(nchecks);
//                 }
//             }
//             // console.log(inputs[nchecks]);
            
//         }
//     });
// });

let inputsTry = document.querySelector(".inputs");
let gameArea = document.querySelector(".game-area");
let lvlTitle = document.createElement("h3");

// window.addEventListener("load", function() {
//     let inputs = document.querySelectorAll(".try");
//     let checkbtn = document.querySelector(".check");
//     // console.log(inputs[0].querySelectorAll("input")[0]);
//     for (let i = 1; i < ntries; i++) {
//         for (let j = 0; j < myWord.length; j++) {
//             inputs[i].querySelectorAll("input")[j].disabled = true;
//         }
//     }
//     let i = 1;
//     checkbtn.addEventListener("click", function(e) {
//         let res = "";
//             if (i < ntries) {
//                 inputs[i-1].querySelectorAll("input").forEach(function(e) {
//                     res += e.value;
//                 });
//                 // console.log(res);
//                 for (let j = 0; j < myWord.length; j++) {
//                     // res = res.concat(inputs[i].querySelectorAll("input")[j].value);
//                     // console.log(res);
//                     // if (inputs[i-1].querySelectorAll("input")) {
//                     //     console.log(inputs[i-1].querySelectorAll("input"));
//                     // }
//                     if (res.length === myWord.length) {
//                         inputs[i].querySelectorAll("input")[j].disabled = false;
//                     }
//                 }
//                 if (res.length === myWord.length) {
//                     i++;
//                 }
//             // console.log(inputs[i].querySelectorAll("input"));
//         }
//     });
//     // console.log(inputs[1].querySelectorAll("input"));
// });


let level = 0;
let myWords = ["Tests", "Okay", "Broski"];
// console.log(level);
function allTests() {
    lvlTitle.textContent = `Level: ${level+1} / ${myWords.length}`;
    gameArea.appendChild(lvlTitle);
    inputsTry.innerHTML = '';
    for (let i = 0; i < ntries; i++) {
        let alltries = document.createElement("div");
        alltries.className = "try";
        let tryLabel = document.createElement("label");
        tryLabel.textContent = `Try ${i+1}`;
        alltries.appendChild(tryLabel);
        // for (let s = 0; s < myWords.length; s++) {}
        for (let j = 0; j < myWords[level].length; j++) {
            let tryInput = document.createElement("input");
            tryInput.type = "text";
            alltries.appendChild(tryInput);
        }
        inputsTry.appendChild(alltries);
    }
    let inputs = document.querySelectorAll(".try");
    let checkbtn = document.querySelector(".check");
    // console.log(inputs[0].querySelectorAll("input")[0]);
    for (let i = 1; i < ntries; i++) {
        for (let j = 0; j < myWords[level].length; j++) {
            inputs[i].querySelectorAll("input")[j].disabled = true;
        }
    }

    inputs.forEach(function(input, index) {
        input.addEventListener("keyup", function(e) {
            let i = 1;
            let val = '';
            for (i = 1; i <= myWords[level].length; i++) {
                if (input.children[i].value.trim().length > 0) {
                    input.children[i].style.cssText = `border-bottom-color: #e4c61b;`;
                    val = '';
                    val = input.children[i].value.trim().charAt(0);
                    input.children[i].value = val;
                    input.children[i].disabled = true;
                    if (i < myWords[level].length) {
                        input.children[i+1].focus();
                    }
                }
            }
        })
    });
    let i = 1;
    checkbtn.addEventListener("click", function(e) {
        let res = "";
            if (i <= ntries) {
                inputs[i-1].querySelectorAll("input").forEach(function(e) {
                    res += e.value;
                });
                // console.log(res);
                // for (let j = 0; j < myWord.length; j++) {
                //     if (res.length === myWord.length && i < ntries) {
                //         inputs[i].querySelectorAll("input")[j].disabled = false;
                //     }
                // }
                if (res.length === myWords[level].length) {
                    for (let j = 0; j < myWords[level].length; j++) {
                        inputs[i-1].children[j+1].style.cssText = `
                        color: #fff; border-color: #999;
                        `;
                        if (res.split("")[j] == myWords[level].split("")[j]) {
                            inputs[i-1].children[j+1].style.cssText += `
                            background-color: #f89e13;`;
                        }
                        else if (myWord.includes(res.split("")[j])) {
                            inputs[i-1].children[j+1].style.cssText += `
                            background-color: #18ba89;`;
                        }
                        else {
                            inputs[i-1].children[j+1].style.cssText += `
                            background-color: #27303f;`;
                        }
                    }
                    let msgCheck = document.querySelector(".message");
                    // console.log(msgCheck);
                    let span = document.createElement("span");
                    
                    let state = document.createElement("h3");
                    state.appendChild(span);
                    msgCheck.appendChild(state);
                    let btn = document.createElement("button");
                    btn.textContent = "Got It";
                    msgCheck.appendChild(btn);
                    msgCheck.classList.add("active");
                    btn.addEventListener("click", function(e) {
                        msgCheck.classList.remove("active");
                        state.remove();
                        btn.remove();
                    })
                    if (res === myWords[level]) {
                        span.textContent = "Congrats!";
                        state.innerHTML += "You Got The Right Word";
                        level++;
                        if (level < myWords.length) {
                            window.addEventListener("load", allTests());
                        }
                        return ;
                    } else {
                        span.textContent = "Sorry!";
                        span.style.cssText = `color: #ff0159;`;
                        state.innerHTML += "Good Luck Next Time";
                    }
                    for (let j = 0; j < myWords[level].length; j++) {
                        if (res.length === myWords[level].length && i < ntries) {
                            inputs[i].querySelectorAll("input")[j].disabled = false;
                        }
                    }
                    i++;
                }
            // console.log(inputs[i].querySelectorAll("input"));
        }
    });
}
window.addEventListener("load", allTests());
