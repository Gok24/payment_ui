var amtselectors = document.querySelectorAll(".it")

amtselectors.forEach((i)=>{
    i.onclick = function(){
        val = this.getAttribute("data-amount")
        let conval = parseFloat(val);
        let formattedVal = conval.toFixed(2); 
        console.log(formattedVal)
        document.querySelector('.btnid').innerText = "$"+formattedVal
        document.getElementById('amt').value = formattedVal;

        amtselectors.forEach((i)=>{
            i.classList.remove('act')
        })
        this.classList.add('act')
    }
})

inp =  document.getElementById('amt')
inp.onkeyup = function(){
    val = inp.value
    valx = parseFloat(val).toFixed(2)
    dispval = valx.replace(/^0+/, '')
    document.querySelector('.btnid').innerText = "$"+dispval
    if(val==""||val==null||val==0){
        document.querySelector('.btnid').innerText =""
        console.log("no amount selected")
        amtselectors.forEach((i)=>{
            i.classList.remove('act')
        })
    }
    else if(val==10||val==10.00){
        // console.log(1)
        amtselectors.forEach((i)=>{
            i.classList.remove('act')
        })
        amtselectors[0].classList.add('act')
    }else if(val==50||val==50.00){
        // console.log(2)
        amtselectors.forEach((i)=>{
            i.classList.remove('act')
        })
        amtselectors[1].classList.add('act')
    }else if(val==100||val==100.00){
        // console.log(3)
        amtselectors.forEach((i)=>{
            i.classList.remove('act')
        })
        amtselectors[2].classList.add('act')
    }else if(val==200||val==200.00){
        // console.log(4)
        amtselectors.forEach((i)=>{
            i.classList.remove('act')
        })
        amtselectors[3].classList.add('act')
    }else{
        console.log('custom amount has been selected')
        if(val<1){
            document.querySelector('.btnid').innerText = ""
        }
        amtselectors.forEach((i)=>{
            i.classList.remove('act')
        })
    }
}

// document.querySelector('.frmsel').onclick = function(){
//     alert("you have no other cards")
// }
// document.querySelector('.recsel').onclick = function(){
//     alert("you have no other contacts")
// }

document.querySelector('.sen').onclick = function(){
    val = inp.value
    valx = parseFloat(val).toFixed(2)
    dispval = valx.replace(/^0+/, '')
    if(val==""||val==null||val==0){
        alert('no amount selected')
    }else if(val<1){
        alert("Amount too low. Please select minimum of $1")
    }
    else{
        alert("Proceed to pay $"+dispval+" ?")
    }
}

closebtn = document.querySelector('.close');
wrap = document.querySelector(".wrap")
closebtn.onclick = function(){
    clearModelValues()
    wrap.classList.add("closeani")
    setTimeout(() => {
        wrap.classList.remove('pop')
        // wrap.classList.remove("closeani")
        wrap.style.display='none';
    }, 40);
    
}
document.querySelector(".sp").onclick = function(){
    wrap.classList.remove('closeani')
    wrap.style.display='flex'
    wrap.classList.add('pop')


    // setTimeout(() => {
    //     wrap.classList.remove('closeani')
    // }, 200);
}

function clearModelValues(){
    amtselectors.forEach((i)=>{
        i.classList.remove('act')
    })
    inp.value=''
    document.querySelector('.btnid').innerText = ""
}