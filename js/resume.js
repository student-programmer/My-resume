
function wopen(){
	let options = "status = no, toolbar = no, Fullscreen = yes";
	return window.open("https://www.facebook.com/profile.php?id=100025315591591", "facebook", options)
};
function wopen2(){
	let options = "status = no, toolbar = no, Fullscreen = yes";
	return window.open("psd/psd.html", "Restoraunt", options)
};
function wopen3(){
	let options = "status = no, toolbar = no, Fullscreen = yes";
	return window.open("newpsd/html/newpsd.html", "Decision", options)
};
function wopen4(){
	let options = "status = no, toolbar = no, Fullscreen = yes";
	return window.open("latest project/html/latest project.html", "Neventum", options)
};
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  })
}