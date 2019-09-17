let Straight=document.querySelector('#submitstraight');
let Right=document.querySelector('#submitright');
let Left=document.querySelector('#submitleft');
let listoforders=[]
let listbutton=[document.querySelector('#submitstraight'),document.querySelector('#submitright'),document.querySelector('#submitleft')]
let m=1
let n=0
function straight(){
listoforders.push(listbutton[0].innerHTML)
if (listoforders.length<7){ 
const x = document.getElementById("myTable").rows[m].cells;
for (i=0;i<listoforders.length;i++){
x[0].innerHTML = listoforders[i]
}}
else{
n++
const x = document.getElementById("myTable").rows[n].cells;
for (i=0;i<listoforders.length;i++){
x[1].innerHTML = listoforders[i]
}}
m++}

function right(){
listoforders.push(listbutton[1].innerHTML)
if (listoforders.length<7){ 
const x = document.getElementById("myTable").rows[m].cells;
for (i=0;i<listoforders.length;i++){
x[0].innerHTML = listoforders[i]
}}
else{
n++
const x = document.getElementById("myTable").rows[n].cells;
for (i=0;i<listoforders.length;i++){
x[1].innerHTML = listoforders[i]
}}
m++}

function left(){
listoforders.push(listbutton[2].innerHTML)
if (listoforders.length<7){ 
const x = document.getElementById("myTable").rows[m].cells;
for (i=0;i<listoforders.length;i++){
x[0].innerHTML = listoforders[i]
}}
else{
n++
const x = document.getElementById("myTable").rows[n].cells;
for (i=0;i<listoforders.length;i++){
x[1].innerHTML = listoforders[i]
}}
m++}

Straight.addEventListener('click', straight)
Right.addEventListener('click', right)
Left.addEventListener('click', left)
