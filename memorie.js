
var count=false
var card1
var card2
var level=1

function asingcolor(){
    const coloroptions=["red","green","black","blue","purple","yellow","pink","orange","red","green","black","blue","purple","yellow","pink","orange"]
    var html=""
    var options=coloroptions
    for(i=0;i<16;i++){
        var r = Math.floor(Math.random()*options.length)
        html=`${html} <div class="gridbit"><div class="Card" style="background-color:${options[r]}" onclick="pick(${i+1})"></div></div>`
        options.splice(r,1)
        console.log(html)
    }
    console.log(html)
    document.getElementById("Grid").innerHTML=html
}
asingcolor()

function pick(number){
    
    var cards= document.getElementsByClassName("Card")
    cards[number-1].classList.add("Opacity1")
    console.log(number)
    if(count){
        card2=number-1
        if(card2===card1){
            return
        }
        eval()
        document.getElementById("trun").load()
        document.getElementById("trun").play()

        count=false
    }else{
        card1=number-1
        count=true
        document.getElementById("trun").load()
        document.getElementById("trun").play()

    }
}


function eval(){
    var cards= document.getElementsByClassName("Card")
    let card11=card1
    let card22=card2
    
    if(cards[card1].style.backgroundColor===cards[card2].style.backgroundColor&&cards[card11].style.backgroundColor!="grey"&&cards[card22].style.backgroundColor!="grey"){
        setTimeout(()=>{
            cards[card11].style.backgroundColor="#fff"
            cards[card22].style.backgroundColor="#fff"
            if(level===0){
                document.getElementsByClassName("Card")[card11].removeAttribute("onclick")
                document.getElementsByClassName("Card")[card22].removeAttribute("onclick")
            }else if(level===1){
                cards[card11].style.backgroundColor="grey"
                cards[card22].style.backgroundColor="grey"
                cards[card11].classList.remove("Opacity1")
                cards[card22].classList.remove("Opacity1")
            }
            document.getElementById("right").load()
            document.getElementById("right").play()
            document.getElementById("rightcount").innerHTML=Number(document.getElementById("rightcount").innerHTML)+1
            if(innerHTML=Number(document.getElementById("rightcount").innerHTML)===8){
                rest()
            }
        },1000)

    }else{
        setTimeout(()=>{
            cards[card11].style.opacity=0
            cards[card22].style.opacity=0
            document.getElementById("wrong").load()
            document.getElementById("wrong").play()
            cards[card11].classList.remove("Opacity1")
            cards[card22].classList.remove("Opacity1")
            
            document.getElementById("wrongcount").innerHTML=Number(document.getElementById("wrongcount").innerHTML)+1
        },1000)
    }
}

function rest(){
    document.getElementById("wrongcount").innerHTML=0;
    document.getElementById("rightcount").innerHTML=0;
    asingcolor()
}