
var count=false
var card1
var card2
var livecount=10
var rightcount=16
var level=0
var schuffel=false

function asingcolor(){
    const coloroptions=["red","green","black","blue","purple","yellow","pink","orange","red","green","black","blue","purple","yellow","pink","orange"]
    var borderoptions=["red","green","black","blue","purple","yellow","pink","orange","red","green","black","blue","purple","yellow","pink","orange"]
    var html=""
    if(level>=5){
        level=0
    }



    document.getElementById("level").innerHTML=level+1
    var options=coloroptions
    for(i=0;i<16;i++){
        var r = Math.floor(Math.random()*options.length)
        var t =Math.floor(Math.random()*borderoptions.length)
        if(level<=1){
            t=r
        }
        html=`${html} <div class="gridbit back${level}"><div class="Card diamond" style="background-color:${options[r]}; border-color:${borderoptions[t]}" onclick="pick(${i+1})"></div></div>`
        options.splice(r,1)
        borderoptions.splice(t,1)
    }
  

    if(level===0){
        rightcount=8
        livecount=16
    }else if(level<=1){
        rightcount=8
        livecount=8
    }else{
        rightcount=16
        livecount=10
    }
    var livesrendert=""
    var matchrendert=""
    for(i=0;i<livecount;i++){
        livesrendert=`${livesrendert}   <div class="lives"></div>`
    }
    for(i=0;i<rightcount;i++){
        matchrendert=`${matchrendert}   <div class="Matsch"></div>`

    }
    document.getElementById("rightcount").innerHTML=matchrendert;
    document.getElementById("wrongcount").innerHTML=livesrendert;
    document.getElementById("Grid").innerHTML=html
}
asingcolor()

function pick(number){
    if(schuffel){
        return
    }
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
            cards[card11].style.backgroundColor="#ffffff00"
            cards[card22].style.backgroundColor="#ffffff00"
            backcard=document.getElementsByClassName("gridbit")
            if(level===0){
                document.getElementsByClassName("Card")[card11].removeAttribute("onclick")
                document.getElementsByClassName("Card")[card22].removeAttribute("onclick")
                cards[card11].style.borderColor="#ffffff00"
                cards[card22].style.borderColor="#ffffff00"
                backcard[card11].style.opacity=0
                backcard[card22].style.opacity=0
                
            }else if(level===1){
                cards[card11].style.borderColor="grey"
                cards[card22].style.borderColor="grey"
                cards[card11].style.backgroundColor="grey"
                cards[card22].style.backgroundColor="grey"
                cards[card11].classList.remove("Opacity1")
                cards[card22].classList.remove("Opacity1")
            }else if(level>=2){
                cards[card11].style.backgroundColor="grey"
                cards[card22].style.backgroundColor="grey"
                cards[card11].classList.remove("Opacity1")
                cards[card22].classList.remove("Opacity1")
            }
            document.getElementById("right").load()
            document.getElementById("right").play()
            right()
            if(innerHTML=Number(document.getElementById("rightcount").innerHTML)===8&&level===2){
                rest()
            }
        },1000)

    }else if(cards[card11].style.backgroundColor=="grey"&&cards[card22].style.backgroundColor=="grey"&&cards[card11].style.borderColor===cards[card22].style.borderColor&&cards[card11].style.borderColor!="grey"){
        setTimeout(()=>{
            if(level>=2){
                cards[card11].style.borderColor="grey"
                cards[card22].style.borderColor="grey"
                cards[card11].classList.remove("Opacity1")
                cards[card22].classList.remove("Opacity1")
            }
            document.getElementById("right").load()
            document.getElementById("right").play()
            right()
            if(innerHTML=Number(document.getElementById("rightcount").innerHTML)===8&&level===2){
                rest()
            }
        },1000)
        if(innerHTML=Number(document.getElementById("rightcount").innerHTML)===8&&level===2){
            rest()
        }
    }else{
        setTimeout(()=>{
            
            document.getElementById("wrong").load()
            document.getElementById("wrong").play()
            cards[card11].classList.remove("Opacity1")
            cards[card22].classList.remove("Opacity1")
            
            var lives=document.getElementsByClassName("lives")
            if(lives.length!==0){
                lives[lives.length-1].classList.remove("lives")
            }else{
                alert("You lose. Try Agin")
                rest()
            }
            // document.getElementById("wrongcount").innerHTML=Number(document.getElementById("wrongcount").innerHTML)+1
        },1000)
    }
    if(level>3&&Math.floor(Math.random()*7)>2&&count){
        schuffel=true
        schuffelcards2()
    }else if(Math.floor(Math.random()*7)>4&&count&&level>2){
       
        schuffel=true
        schuffelcards()
    }
}

function rest(){
    asingcolor()
}

function right(){
    var Matsch=document.getElementsByClassName("Matsch")
    if(Matsch.length!==1){
        Matsch[Matsch.length-1].classList.remove("Matsch")
    }else if(level===4){
        alert("You wone Great job.")
        rest()
    }else{
        alert("You wone Great job. Level Up")
        level=level+1
        rest()
    }
}

function schuffelcards(){
    document.getElementById("body").style.backgroundColor="#8c2b2b"
    var zcard=Math.floor(Math.random()*12)
    setTimeout(()=>{
        document.getElementsByClassName("gridbit")[zcard].classList.add("switchdown")
        document.getElementsByClassName("gridbit")[zcard+4].classList.add("switchup")
        var reambercoulr= document.getElementsByClassName("Card")[zcard].style.backgroundColor
        var reamberborder=document.getElementsByClassName("Card")[zcard].style.borderColor
        document.getElementsByClassName("card")[zcard].style=`background-color:${document.getElementsByClassName("Card")[zcard+4].style.backgroundColor}; border-color:${document.getElementsByClassName("Card")[zcard+4].style.borderColor}`
        document.getElementsByClassName("card")[zcard+4].style=`background-color:${reambercoulr}; border-color:${reamberborder}`
    },3000)
    setTimeout(() => {
        document.getElementById("body").style.backgroundColor="#fff"
        schuffel=false
        document.getElementsByClassName("gridbit")[zcard].classList.remove("switchdown")
        document.getElementsByClassName("gridbit")[zcard+4].classList.remove("switchup")
    }, 4000);

}

function schuffelcards2(){
    document.getElementById("body").style.backgroundColor="#8c2b2b"
    var zcard=Math.floor(Math.random()*12)
    var zcard2=Math.floor(Math.random()*12)
    zcard=4
    zcard2=0
    if(zcard2===zcard||zcard===zcard2-4||zcard===zcard2+4){
        zcard2=zcard2-1
            if(zcard===0){
                zcard2=3
            }
            if(zcard2===-1){
                zcard2=9
            }
    }
    setTimeout(()=>{
        document.getElementsByClassName("gridbit")[zcard].classList.add("switchdown")
        document.getElementsByClassName("gridbit")[zcard+4].classList.add("switchup")
        var reambercoulr= document.getElementsByClassName("Card")[zcard].style.backgroundColor
        var reamberborder=document.getElementsByClassName("Card")[zcard].style.borderColor
        document.getElementsByClassName("card")[zcard].style=`background-color:${document.getElementsByClassName("Card")[zcard+4].style.backgroundColor}; border-color:${document.getElementsByClassName("Card")[zcard+4].style.borderColor}`
        document.getElementsByClassName("card")[zcard+4].style=`background-color:${reambercoulr}; border-color:${reamberborder}`
    },3000)
    setTimeout(() => {
        document.getElementsByClassName("gridbit")[zcard].classList.remove("switchdown")
        document.getElementsByClassName("gridbit")[zcard+4].classList.remove("switchup")
    }, 4000);
    setTimeout(()=>{
        document.getElementsByClassName("gridbit")[zcard2].classList.add("switchdown")
        document.getElementsByClassName("gridbit")[zcard2+4].classList.add("switchup")
        var reambercoulr= document.getElementsByClassName("Card")[zcard2].style.backgroundColor
        var reamberborder=document.getElementsByClassName("Card")[zcard2].style.borderColor
        document.getElementsByClassName("card")[zcard2].style=`background-color:${document.getElementsByClassName("Card")[zcard2+4].style.backgroundColor}; border-color:${document.getElementsByClassName("Card")[zcard2+4].style.borderColor}`
        document.getElementsByClassName("card")[zcard2+4].style=`background-color:${reambercoulr}; border-color:${reamberborder}`
    },4500)
    setTimeout(() => {
        document.getElementById("body").style.backgroundColor="#fff"
        schuffel=false
        document.getElementsByClassName("gridbit")[zcard2].classList.remove("switchdown")
        document.getElementsByClassName("gridbit")[zcard2+4].classList.remove("switchup")
    }, 5500);
}


function levelplus(){
    level=level+1
    rest()
}