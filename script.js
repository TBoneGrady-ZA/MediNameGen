let prefix = ["Sire","Sir","Lord","King","Duke","Count","Queen","Her Majesty","Duchess","Baroness"];
let suffix = ["I","II","III","IV","V","VI","Of Dingleberry","Of Harpington","The Great","The Feared","The Tyrant","Of Engelwood"];

let display = document.getElementById('display');
let close = document.getElementById('closeBtn');

document.getElementById("genBtn").onclick = function() {
    userName = document.getElementById("userName").value;
    
    document.getElementById("display").textContent = getName();
}

function getName() {
    var randomName = prefix[Math.floor(Math.random() * prefix.length)] + ' ' + userName + ' ' + suffix[Math.floor(Math.random() * suffix.length)]
    return randomName;
}

close.onclick = function() {
    closeFtr()
}

function closeFtr() {
    var foot = document.querySelector(".atri");
    
    close.onclick = foot.classList.toggle("hidden"); 
}