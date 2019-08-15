let Submit=document.querySelector('#submit');
let listbox=['boxe1','boxe2']
let color=['rgb(0,0,0)','rgb(255,255,255)']
function setcolor(){
 for (j=0;j<2;j++){
 document.getElementById(listbox[j]).style.backgroundColor = color[0]
 }
}

function straight_line(){
for (i=0;i<2;i++){
	document.getElementById(listbox[i]).style.backgroundColor = color[1];
}}

function turn_right(){
for (i=0;i<2;i++){
	document.getElementById(listbox[1]).style.backgroundColor = color[0];
}}

function square(){
setTimeout(straight_line,0);
setTimeout(turn_right,4000);
setTimeout(straight_line,6000);
setTimeout(turn_right,10000);
setTimeout(straight_line,12000);
setTimeout(turn_right,16000);
setTimeout(straight_line,18000);
setTimeout(setcolor,22000);
}


setcolor()
Submit.addEventListener('click', square)

