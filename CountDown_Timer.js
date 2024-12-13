        const endingDate="3 july 2024 5:46 PM";
        document.querySelector("h3").innerText=endingDate;

        let inp=document.querySelectorAll("input");

        function CountDown(){
            let id=setInterval(()=>{
            let des=new Date(endingDate);
            let curr=new Date();
            let diff=(des-curr)/1000;

    
            inp[0].value=Math.floor(diff / 3600 / 24);
            inp[1].value=Math.floor(diff / 3600) % 24;
            inp[2].value=Math.floor(diff / 60) % 60;
            inp[3].value=Math.floor(diff) % 60;




            // FOR EQUAL CURRENT TIME AND ENDING TIME //
       let h2=document.createElement("h2");
       h2.innerText=des;

       let para=document.createElement("p");
       para.innerText=curr;

       if(para.innerText == h2.innerText){
        let main=document.querySelector("h2");
        main.style.color="red";

        stop(id);
       }       
    },1000);
    }
    function stop(id){
       clearInterval(id);
    }
    
    CountDown();

