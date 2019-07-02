let Submit=document.querySelector('#submit');
let listselect = [document.querySelector('#Color1'),document.querySelector('#Color2'),document.querySelector('#Color3')]
let listbox2=['boxe1','boxe2','boxe3']
let listcolor2=['rgb(255, 0, 0)','rgb(0, 255, 0)','rgb(0, 0, 255)',"rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 0, 255)"]
let listname=['Red', 'Green', 'Blue', 'White', 'Black', 'Yellow', 'Cyan', 'Magenta']
let Ptdr = []
function active() {
	Ptdr.shift()
	Ptdr.shift()
	Ptdr.shift()
	for (g=0;g<3;g++){
		for(h=0;h<8;h++){
			if (listselect[g].value === listname[h]) {
				document.getElementById(listbox2[g]).style.backgroundColor= listcolor2[h];
				Ptdr.push(listcolor2[h]) 
				
			}
		}
	}
}
Submit.addEventListener('click', active)
