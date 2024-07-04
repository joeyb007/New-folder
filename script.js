//introducing buttons
let isrest = false;
let answ = 0
const butt = document.querySelectorAll("button");
let cace = 0;
let nop = "";
const oc = document.querySelectorAll(".oc");
const nc = document.querySelectorAll(".nc");
let nm = document.querySelector("#nm");
const zero = document.querySelector("#zero")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const del = document.querySelector("#del");
const ce = document.querySelector("#ce");
const x = document.querySelector("#x");
const d = document.querySelector("#d");
const p = document.querySelector("#p");
const m = document.querySelector("#m");
const ans = document.querySelector("#ans");
const dec = document.querySelector("#dec");
const neg = document.querySelector("#neg");
const eq = document.querySelector("#eq");
let num = [];
let bar = [];
let bcalc = ''
const sb = document.querySelectorAll(".sb")
//initializing small buttons aside from del
const root = document.querySelector("#root");
const dr = document.querySelector("#dr");
const ex = document.querySelector("#ex");
const ln = document.querySelector("#ln");
const log = document.querySelector("#log");
const pi = document.querySelector("#pi");
const sin = document.querySelector("#sin");
const cos = document.querySelector("#cos");
const tan = document.querySelector("#tan");
const arcsin = document.querySelector("#arcsin");
const arccos = document.querySelector("#arccos");
const arctan = document.querySelector("#arctan");
const percent = document.querySelector("#percent");
const exp = document.querySelector("#exp");
const square = document.querySelector("#square");
const obrac = document.querySelector("#obrac");
const cbrac = document.querySelector("#cbrac");

//number button functions
function func(sn) {
  cace = 0;
  switch (sn) {
      case "one":
      nm.appendChild(document.createTextNode("1"));
      break;
      case "two":
      nm.appendChild(document.createTextNode("2"));
      break;
      case "three":
      nm.appendChild(document.createTextNode("3"));
      break;
      case "four":
      nm.appendChild(document.createTextNode("4"));
      break;
      case "five":
      nm.appendChild(document.createTextNode("5"));
      break;
      case "six":
      nm.appendChild(document.createTextNode("6"));
      break;
      case "seven":
      nm.appendChild(document.createTextNode("7"));
      break;
      case "eight":
      nm.appendChild(document.createTextNode("8"));
      break;
      case "nine":
      nm.appendChild(document.createTextNode("9"));
      break;
      case "zero":
      nm.appendChild(document.createTextNode("0"));
      break;
      case "neg":
      nm.innerHTML*=-1;
      break;
      case "ans":
      nm.innerHTML = answ;
      break;
      case "dec":
      if (nm.innerHTML.includes(".")) {
        nm.innerHTML = nm.innerHTML.replace(".", "");
      } else if (nm.innerHTML == ""){
        nm.appendChild(document.createTextNode("0."));
      }else {
        nm.appendChild(document.createTextNode("."));
      } 
      break;
      case "ex":
      nm.innerHTML = Math.E;
      break;
      case "pi":
      nm.innerHTML = Math.PI;
      break;
  }
}

butt.forEach(el => el.addEventListener('click', () => {
  if (nm.innerHTML.charAt(0) == "0" && isNaN(nm.innerHTML.charAt(1)) == false) {
    nm.innerHTML = nm.innerHTML.substring(1);
  }
  if (el.id != "ce") {
    cace = 0;
  }
  if (el.classList.contains("nc") == false || el.id == "eq" || el.id == "del") {
    isrest = false;
  }
}));

nc.forEach(el2 => el2.addEventListener('click', () => {
  if (isNaN(num[num.length - 1]) == false) {
    nm.innerHTML= '';
    nop.classList.replace("c3", "c2");
    switch(nop.id) {
      case "p":
      num.push("+");
      break;
      case "m":
      num.push("-");
      break;
      case "x":
      num.push("*");
      break;
      case "d":
      num.push("/");
      break;
      case "exp":
      num.push("**");
      break;
    }
  } else if (isrest) {
    nm.innerHTML=''
    isrest = false;
  }
  func(el2.id)
}));

//operartion onclick designs 
oc.forEach(el => el.addEventListener('click', () => {
  x.classList.replace("c3", "c2");
  m.classList.replace("c3", "c2");
  p.classList.replace("c3", "c2");
  d.classList.replace("c3", "c2");
  exp.classList.replace("c3", "c2");
  el.classList.replace("c2", "c3");
  if(nm.innerHTML != "" && isNaN(num[num.length - 1])) {
    num.push(nm.innerHTML);
  } else if (isNaN(num[num.length - 1]) && num[num.length - 1] != ")") {
    num.push(0);
  }
  nop = el;
}));

// operations functionality
del.addEventListener("click", () => {
  if (isrest == true) {
    nm.innerHTML = '';
    isrest = false;
  } else {
    nm.innerHTML = nm.innerHTML.slice(0, -1);
  }
});
ac.addEventListener("click", () => {
  nm.innerHTML = "";
  x.classList.replace("c3", "c2");
  d.classList.replace("c3", "c2");
  m.classList.replace("c3", "c2");
  p.classList.replace("c3", "c2");
  exp.classList.replace("c3", "c2");
  num = [];
  bcalc = '';
  bar = []
  nop = "";
});
ce.addEventListener("click", () => {
  if(cace > 0){
    nm.innerHTML = "";
    x.classList.replace("c3", "c2");
    d.classList.replace("c3", "c2");
    m.classList.replace("c3", "c2");
    p.classList.replace("c3", "c2");
    exp.classList.replace("c3", "c2");
    num = [];
    nop = "";
    bcalc = '';
    bar = []
    cace = 0;
  } else {
    cace++;
  }
  if(isNaN(num[num.length - 1]) == false) {
    x.classList.replace("c3", "c2");
    d.classList.replace("c3", "c2");
    m.classList.replace("c3", "c2");
    p.classList.replace("c3", "c2");
    exp.classList.replace("c3", "c2");
    num.pop()
  } else{
    nm.innerHTML = "";
    nop.classList.replace("c2", "c3");
    num.pop()
  }
});


sb.forEach(el3 => el3.addEventListener('click', () => {
  if(isNaN(num[num.length - 1]) == false && el3.classList.contains("oc") == false) {
    x.classList.replace("c3", "c2");
    d.classList.replace("c3", "c2");
    m.classList.replace("c3", "c2");
    p.classList.replace("c3", "c2");
    exp.classList.replace("c3", "c2");
    if(el3.id != "obrac"){
      num.pop()
    }
  }
  switch(el3.id) {
    case "ln":
      if (nm.innerHTML != 0 && nm.innerHTML != "") {
        nm.innerHTML = Math.log(parseFloat(nm.innerHTML));
      } else {
        nm.innerHTML = "undefined";
      }
    break;
    case "log":
      if (nm.innerHTML != 0 && nm.innerHTML != "") {
        nm.innerHTML = Math.log10(parseFloat(nm.innerHTML));
      } else {
        nm.innerHTML = "undefined";
      }
      break;
    case "root":
      if (nm.innerHTML != "") {
        nm.innerHTML = Math.sqrt(parseFloat(nm.innerHTML));
      } else {
        nm.innerHTML = "0";
      }
      break;
    case "sin":
      if(dr.classList.contains("deg")) {
        if (nm.innerHTML % 180 == 0) {
          nm.innerHTML = '0';
          } else {
          nm.innerHTML = Math.sin(parseFloat(nm.innerHTML) * Math.PI / 180);
          }
      } else { 
        if (nm.innerHTML % Math.PI == 0) {
          nm.innerHTML = '0';
        } else {
          nm.innerHTML = Math.sin(parseFloat(nm.innerHTML));
        }
      }
      break;
    case "cos":
      if(dr.classList.contains("deg")) {
        if (nm.innerHTML % 90 == 0 && nm.innerHTML % 180 != 0) {
          nm.innerHTML = '0';
          } else {
          nm.innerHTML = Math.cos(parseFloat(nm.innerHTML) * Math.PI / 180);
          }
      } else { 
        if (nm.innerHTML % (Math.PI/2) == 0 && nm.innerHTML % Math.PI != 0) {
          nm.innerHTML = '0';
        } else {
          nm.innerHTML = Math.cos(parseFloat(nm.innerHTML));
        }
      }
      break;
    case "tan":
      if(dr.classList.contains("deg")) {
        if (nm.innerHTML % 90 == 0 && nm.innerHTML % 180 != 0) {
          nm.innerHTML = "undefined";
        } else if (nm.innerHTML % 180 == 0) {
          nm.innerHTML = "0";
        } else {
          nm.innerHTML = Math.tan(parseFloat(nm.innerHTML) * Math.PI / 180);
        }
      } else { 
        if (nm.innerHTML % (Math.PI/2) == 0 && nm.innerHTML % Math.PI != 0) {
          nm.innerHTML = "undefined";
        } else if (nm.innerHTML % Math.PI == 0) {
          nm.innerHTML = "0";
        } else {
          nm.innerHTML = Math.tan(parseFloat(nm.innerHTML) * Math.PI / 180);
        }
      }
      break;
    case "arcsin":
      if (dr.classList.contains("deg")) {
        if (nm.innerHTML != "") {
          nm.innerHTML = (Math.asin(parseFloat(nm.innerHTML)) * 180 / Math.PI);
        } else {
          nm.innerHTML = (Math.asin(0) * 180 / Math.PI);
        }
      } else {
        if (nm.innerHTML != "") {
          nm.innerHTML = Math.asin(parseFloat(nm.innerHTML));
        } else {
          nm.innerHTML = Math.asin(0);
        }
      }
      break;
    case "arccos":
      if (dr.classList.contains("deg")) {
        if (nm.innerHTML != "") {
          nm.innerHTML = (Math.acos(parseFloat(nm.innerHTML)) * 180 / Math.PI);
        } else {
          nm.innerHTML = (Math.acos(0) * 180 / Math.PI);
        }
      } else {
        if (nm.innerHTML != "") {
          nm.innerHTML = Math.acos(parseFloat(nm.innerHTML));
        } else {
          nm.innerHTML = Math.acos(0);
        }
      }
      break;
    case "arctan":
      if (dr.classList.contains("deg")) {
        if (nm.innerHTML != "") {
          nm.innerHTML = (Math.atan(parseFloat(nm.innerHTML)) * 180 / Math.PI);
        } else {
          nm.innerHTML = (Math.atan(0) * 180 / Math.PI);
        }
      } else {
        if (nm.innerHTML != "") {
          nm.innerHTML = Math.atan(parseFloat(nm.innerHTML));
        } else {
          nm.innerHTML = Math.atan(0);
        }
      }
      break;
    case "square":
      nm.innerHTML **= 2;
      break;
    case "obrac":
      if(num.length > 0) {
        bar.push(num.length+1)
      } else {
        bar.push(num.length)
      }
      break;
    case "cbrac":
      if(bar.length > 0){
        for(i=bar[bar.length-1];i<num.length;i++){
          bcalc+=num[i];
        }
        num.splice(bar[bar.length-1],num.length);
        nm.innerHTML = (eval(bcalc+nm.innerHTML))
        bcalc = '';
        bar.pop();
      }
      break;
    case "dr":
      dr.classList.toggle("deg");
      dr.classList.toggle("rad");
      break;
    case "percent":
      nm.innerHTML/=100;
      break;
  }
}));

eq.addEventListener("click", () => {
  x.classList.replace("c3", "c2");
  d.classList.replace("c3", "c2");
  m.classList.replace("c3", "c2");
  p.classList.replace("c3", "c2");
  exp.classList.replace("c3", "c2");
  if(isNaN(num[num.length - 1]) && num.length > 0) {
    num.push(nm.innerHTML)
  }
  answ = (eval(num.join("")));
  if(num.length != 0) {
    nm.innerHTML = answ
  } else if (nm.innerHTML == ""){
    nm.innerHTML = '0';
  }
  nop = '';
  bcalc = '';
  bar = []
  num = [];
  isrest = true;
});