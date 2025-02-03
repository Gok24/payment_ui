cds = document.querySelector(".cds")
flab = document.querySelector(".flab")
lbl = document.querySelector(".lbl")
frmsel = document.querySelector(".frmsel")
labwrap = document.querySelector(".labwrap")

cds.onclick = function(){
    flab.style.position="relative"
    flab.style.top="95px"
    cds.style.position="relative"
    cds.style.top="-90px"
    lbl.classList.add("cardactive")
    flab.classList.remove("cardactive")
    labwrap.classList.remove("openclose")
    // frmsel.click()
}
flab.onclick = function(){
    flab.style.top="0px"
    cds.style.top="0px"
    lbl.classList.remove("cardactive")
    labwrap.classList.remove("openclose")
    flab.classList.add("cardactive")
}