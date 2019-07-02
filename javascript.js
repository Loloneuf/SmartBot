let listbox=['boxe1','boxe2','boxe3']
let listcolor=['rgb(255, 0, 0)','rgb(0, 255, 0)','rgb(0, 0, 255)',"rgb(255,255,255)"]


function setcolor(list,listc){
 for (j=0;j<3;j++){
 document.getElementById(list[j]).style.backgroundColor = listc[3]
 }
}
function clignotement(list,listc){
for (i=0;i<3;i++){
if (document.getElementById(list[i]).style.backgroundColor== Newcolor[i]) {
	document.getElementById(list[i]).style.backgroundColor = listc[3]; 
}
else {document.getElementById(list[i]).style.backgroundColor = Newcolor[i]
}}}
setcolor(listbox,listcolor)
clignotement(listbox,listcolor)
setInterval("clignotement(listbox,listcolor)", 1000); 


