let Submit=document.querySelector('#submit');
let Execute=document.querySelector('#submitexe');
let Save=document.querySelector('#submitsave');
let listbox=['boxe1','boxe2']
let color=['rgb(0,0,0)','rgb(255,255,255)']
let listfunction = [straight_line,turn_right,turn_left]
let listcomands =[]
let delay= [0,2000,4000,6000,8000,10000,12000,14000,16000,20000,22000,24000]

function saveyourorders(){
for (i=0;i<listoforders.length+1;i++){
if (listoforders[i]==="Go straight"){
listcomands.push(listfunction[0])}
if (listoforders[i]==="Turn to the right"){
listcomands.push(listfunction[1])}
if (listoforders[i]==="Turn to the left"){
listcomands.push(listfunction[2])}
}}

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

function turn_left(){
for (i=0;i<2;i++){
	document.getElementById(listbox[0]).style.backgroundColor = color[0];
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

function finalexecution(){
for	(i=0;i<listcomands.length+1;i++){
setTimeout(listcomands[i], delay[i]);		
}}

setcolor()
Submit.addEventListener('click', listfunction[0])
Save.addEventListener('click', saveyourorders)
Execute.addEventListener('click', finalexecution)
