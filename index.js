function gettimes(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let mil = time.getMilliseconds();

    /*=============================================================
                        AM/PM logic
    =============================================================*/

      if(hour == 1){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 13){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 2){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 14){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 3){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 15){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 4){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 16){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 5){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 17){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 6){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 18){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 7){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 19){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 8){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 20){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 9){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 21){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 10){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 22){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 11){
            document.getElementsByClassName("am")[0].innerHTML = `AM`;
      } else if (hour == 23){
        document.getElementsByClassName("am")[0].innerHTML = `PM`;
      }
      if(hour == 12){
            document.getElementsByClassName("am")[0].innerHTML = `PM`;
      } else if (hour == 0){
        document.getElementsByClassName("am")[0].innerHTML = `AM`;
      }

      /*====================== Time Formate Logic ======================*/

      if(hour >= 13 && hour < 14 ){
            hour = 1;
      } else if(hour >= 14 && hour < 15){
            hour = 2;
      } else if(hour >= 15 && hour < 16){
            hour = 3;
      } else if(hour >= 16 && hour < 17){
            hour = 4;
      }else if(hour >= 17 && hour < 18){
            hour = 5;
      }else if(hour >= 18 && hour < 19){
            hour = 6;
      }else if(hour >= 19 && hour < 20){
            hour = 7;
      }else if(hour >= 20 && hour < 21){
            hour = 8;
      }else if(hour >= 21 && hour < 22){
            hour = 9;
      }else if(hour >= 22 && hour < 23){
            hour = 10;
      }else if(hour >= 23 && hour < 24){
            hour = 11;
      } else if(hour == 0){
            hour = 12;
      }


      

      if(hour < 10){
       hour = `0${hour}`;
      } else {
        hour = hour;
      }

      if(min < 10){
        min = `0${min}`;
      } else{
        min = min;
      }

      if(sec < 10){
        sec = `0${sec}`;
      } else {
        sec = sec;
      }
       
   
        document.getElementById("hours").innerHTML = `${hour}`;
        document.getElementById("mins").innerHTML = `${min}`;
        document.getElementById("secd").innerHTML = `${sec}`;
        document.getElementById("mils").innerHTML = `${mil}`;
        
    }

      let timers = setInterval(() => {
        gettimes();
      },1);
