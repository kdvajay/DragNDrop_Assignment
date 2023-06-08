var html;
window.onload = function(){
	html = document.getElementById('DnD').innerHTML;
};
var container = document.getElementById("DnD");
var content = container.innerHTML;

 function allowDrop(ev) {
   ev.preventDefault();
 }//to allow drop

 function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
 }

 function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   var evtarget = ev.target;
   if (evtarget == "[object HTMLImageElement]") {
     evtarget = evtarget.parentNode;
   } else {
     ev.target.appendChild(document.getElementById(data));
     alert("Item dropped successfully!");
   }

 }



 function reset() {
   var container = document.getElementById("DnD");
   container.innerHTML = content;
 }
