//your JS code here. If r
let newElement=document.createElement("h1");
newElement.innerText='Width: ${window.innerWidth} and Height: ${window.innerHeight}';
document.body.append(newElement);

window.onresize=function(){
	newElement.innerText='Width: ${window.innerWidth} and Height: ${window.innerHeight}';
}
