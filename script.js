const next = document.querySelectorAll(".next");
const current = document.querySelectorAll(".current");
const button = document.getElementsByTagName("button")[0];
const input = document.getElementsByTagName("input")[0];
button.addEventListener("click", handleClick);
// function handleCount(){

// }
function handleClick() {
  let k = 1000;
  let count1=0;
  let count2=0;
  let count3=0;
  let count4=0;
  let count5=0;
  current[4].innerHTML="0"
  current[3].innerHTML="0"
  current[2].innerHTML="0"
  current[1].innerHTML="0"
  current[0].innerHTML="0"
  next[4].innerHTML="0"
  next[3].innerHTML="0"
  next[2].innerHTML="0"
  next[1].innerHTML="0"
  next[0].innerHTML="0"
  let value = input.value;
  input.value = "";
  let interval1=setInterval(() => {
    next[4].classList.add("animation");
    value--;
    if(count1>=9){
      count1=-1;
    }
      next[4].innerHTML=`${count1+1}`

    if(value==0){
      clearInterval(interval1)
    }
    
    else{

      setTimeout(() => {
        next[4].classList.remove("animation");

          count1++;

          current[4].innerHTML=`${count1}`
        

        
  
      }, 500);
    }
  
  }, 1000);
  let interval2=setInterval(() => {
    next[3].classList.add("animation");
    let iteration=Math.floor(value/10);
    iteration--;
    if(count2>=9){
      count2=-1;
    }
      next[3].innerHTML=`${count2+1}`

    if(iteration<0){
      clearInterval(interval2)
    }
    
    else{

      setTimeout(() => {
        next[3].classList.remove("animation");

          count2++;

          current[3].innerHTML=`${count2}`
        

        
  
      }, 500);
    }
  
  }, 10*k);
  
  let interval3=setInterval(() => {
    next[2].classList.add("animation");
    let iteration=Math.floor(value/100);
    iteration--;
    if(count3>=9){
      count3=-1;
    }
      next[2].innerHTML=`${count3+1}`

    if(iteration<0){
      clearInterval(interval3)
    }
    
    else{

      setTimeout(() => {
        next[2].classList.remove("animation");

          count3++;

          current[2].innerHTML=`${count3}`
        

        
  
      }, 500);
    }
  
  }, 100*k);
  let interval4=setInterval(() => {
    next[1].classList.add("animation");
    let iteration=Math.floor(value/1000);
    iteration--;
    if(count4>=9){
      count4=-1;
    }
      next[1].innerHTML=`${count4+1}`

    if(iteration<0){
      clearInterval(interval4)
    }
    
    else{

      setTimeout(() => {
        next[1].classList.remove("animation");

          count4++;

          current[1].innerHTML=`${count4}`
        

        
  
      }, 500);
    }
  
  }, 1000*k);


  let interval5=setInterval(() => {
    next[0].classList.add("animation");
    let iteration=Math.floor(value/10000);
    iteration--;
    if(count5>=9){
      count5=-1;
    }
      next[0].innerHTML=`${count5+1}`

    if(iteration<0){
      clearInterval(interval5)
    }
    
    else{

      setTimeout(() => {
        next[0].classList.remove("animation");

          count5++;

          current[0].innerHTML=`${count5}`
        

        
  
      }, 500);
    }
  
  }, 10000*k);
  
  
    

  

  //   let count = [0, 0, 0, 0];
  //   next[2].innerHTML=`${count[0]}`
  //   current[2].innerHTML=`${count[0]}`
  //   if(value<9999){
  //     var interval1 = setInterval(() => {
  //         if (value==0) {
  //           clearInterval(interval1);
  //         } else {
  //           next[3].classList.toggle("animation");
  //           next[3].innerHTML = `${count[3] + 1}`;
  // setTimeout(() => {

  //     if(count[3]+1>9){
  //       count[3]=-1;
  //     }
  // }, 500);
  //         }
  //       }, 500);
  //       var interval2 = setInterval(() => {
  //         if (value==0) {
  //           clearInterval(interval2);

  //         } else {
  //             count[3]++;
  //             value--;
  //             console.log(value)
  //           current[3].innerHTML = `${count[3]}`;
  //           setTimeout(() => {

  //               if(count[3]>9){
  //                 count[3]=-1;
  //               }
  //           }, 1000);
  //         }
  //       }, 1000);

  //         for(let i=1; i<=Math.floor(value/10); i++){
  //             if(i>10){
  //                 break;
  //             }
  //             else{
  //                 setTimeout(() => {
  //                     if(i==10){
  //                         next[2].innerHTML="0";

  //                     }
  //                     else{

  //                         next[2].innerHTML=`${i}`
  //                     }

  //                     next[2].classList.toggle("animation");

  //                 }, i*9500+(i-1)*500);
  //                 setTimeout(() => {
  //                     if(i==10){
  //                         current[2].innerHTML="0"

  //                     }
  //                     else{

  //                         current[2].innerHTML=`${i}`
  //                     }

  //                 }, i*10*k);
  //             }
  //             }

  //         for(let i=1; i<=Math.floor(value/100); i++){

  //             setTimeout(() => {
  //                 if(i==10){
  //                 next[1].innerHTML="0"

  //                 }
  //                 else{

  //                     next[1].innerHTML=`${i}`
  //                 }
  //                 next[1].classList.toggle("animation");

  //             }, 95.5*k*i+(i-1)*500+4*k);
  //             setTimeout(() => {
  //                 for(let i=1; i<=Math.floor(value/10); i++){
  //                     if(i>10){
  //                         break;
  //                     }
  //                     else{
  //                         setTimeout(() => {
  //                             if(i==10){
  //                                 next[2].innerHTML="0";

  //                             }
  //                             else{

  //                                 next[2].innerHTML=`${i}`
  //                             }

  //                             next[2].classList.toggle("animation");

  //                         }, i*9500+(i-1)*500-5*k);
  //                         setTimeout(() => {
  //                             if(i==10){
  //                                 current[2].innerHTML="0"

  //                             }
  //                             else{

  //                                 current[2].innerHTML=`${i}`
  //                             }

  //                         }, i*10*k-5*k);
  //                     }
  //                     }

  //                 if(i==10){
  //                     current[1].innerHTML="0"

  //                 }
  //                 else{

  //                     current[1].innerHTML=`${i}`
  //                 }
  //             }, 100*k*i+4*k);
  //         }
  //         for(let i=1; i<=Math.floor(value/1000); i++){
  //             setTimeout(() => {
  //                 next[1].innerHTML=`${i}`
  //                 next[1].classList.toggle("animation");

  //             }, 955.5*k*i+(i-1)*500);
  //             setTimeout(() => {
  //                 current[1].innerHTML=`${i}`
  //             }, 1000*k*i);
  //         }

  //     }
  //     else{
  //         alert("enter valid value")
  //     }
}
