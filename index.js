const timer=document.getElementById("watch");
var hr=0;
var min=0;
var sec=0;
var stop=true;

function StartTimer(){
    if(stop==true){
        stop=false;
        timercycle();
    }   
}

function StopTimer(){
    if(stop==false){
        stop=true;
    }

}

function ResetTimer(){
    timer.innerHTML="00:00:00";
    stop=true;
    hr=0;
    sec=0;
    min=0;
}

function timercycle(){
    if(stop==false){
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);

        sec=sec+1;

        if(sec==60){
            min=min+1;
            sec=0;
        }

        if(min==60){
            hr=hr+1;
            sec=0;
            min=0;
        }

        if(sec<10){
            sec="0" + sec;
        }

        if(hr<10){
            hr="0" + hr;
        }

        if(min<10){
            min="0" + min;
        }
        timer.innerHTML=hr + ":" + min + ":" + sec;

        setTimeout("timercycle()",1000);
    }
}