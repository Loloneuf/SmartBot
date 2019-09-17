
let listbox=['boxe1','boxe2','boxe3']

function setcolor(list){
 for (j=0;j<3;j++){
 document.getElementById(list[j]).style.backgroundColor = "rgb(255,255,255)"
 }
}
function clignotement(list){
for (i=0;i<3;i++){
if (document.getElementById(list[i]).style.backgroundColor== List_for_color_change[i]) {
	document.getElementById(list[i]).style.backgroundColor = "rgb(255,255,255)"; 
}
else {document.getElementById(list[i]).style.backgroundColor = List_for_color_change[i]
}}}
setcolor(listbox)
clignotement(listbox)
setInterval("clignotement(listbox)", 1000); 

