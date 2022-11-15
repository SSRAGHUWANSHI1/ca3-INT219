const subBtn = document.getElementById('submit')
const expBtn = document.getElementById('explanation')
// onclick="document.write(subset(arr, arr.length))

subBtn.addEventListener('click', () => {
    if(checkInput()==true){
        const sz = document.getElementById('noofels')
    const els = document.getElementById('els')
    const len=Number.parseInt(document.getElementById('noofels').value)
    // let arr = els.value.split(',').map(strDigit => { return parseInt(strDigit) })
    let arr = els.value.split(',').map(strDigit => { return parseInt(strDigit) }).slice(0,len)
    let size = parseInt(sz.value);
    document.getElementById("explanationP").innerHTML=arr;
    document.getElementById("answer").innerHTML="The minimum number of subset with distinct elements is: "+ subset(arr, arr.length);
    }
})
expBtn.addEventListener('click',async ()=>{
  if(checkInput()==true){
    myFunction()
    document.getElementById("explanation").disabled=true;
    
    const el=document.getElementById("subsetDiv")
    el.innerHTML=''
    const len=Number.parseInt(document.getElementById('noofels').value)
    let arr = els.value.split(',').map(strDigit => { return parseInt(strDigit) }).slice(0,len)
    let r = ''
    document.getElementById("explanationP").innerHTML=arr;

    //subset printing
    for (let v of subsetFind(arr)) {
        r='{'
        await new Promise((res,rej)=>{
            setTimeout(() => {
                el.innerHTML=el.innerHTML+r
                res()
            }, 1000);
        })
        for (let x of v) {
            await new Promise((res,rej)=>{
                setTimeout(() => {
                    el.innerHTML=el.innerHTML+' ' +x + ' '
                    res()
                }, 1000);
            })
        }
        await new Promise((res,rej)=>{
            setTimeout(() => {
                el.innerHTML=el.innerHTML+' } '
                res()
            }, 1000);
        })
    }
    document.getElementById("explanation").disabled=false;
  }
});
        
function subset(arr, n) {
        var mp = {};
        for (var i = 0; i < n; i++) {
          if (mp.hasOwnProperty(arr[i])) {
            var val = mp[arr[i]];
            delete mp[arr[i]];
            mp[arr[i]] = val + 1;
          } else {
            mp[arr[i]] = 1;
          }
        }
        var res = 0;
        for (const [key, value] of Object.entries(mp)) {
          res = Math.max(res, value);
        }
        return res;
      }
    //   function subset(arr, n)
    // {
    //     let res = 0;
    //     // Sort the array
    //     arr.sort();
    //     // Traverse the input array and
    //     // find maximum frequency
    //     for (let i = 0; i < n; i++)
    //     {
    //         let count = 1;
    //         // For each number find its repetition / frequency
    //         for (; i < n - 1; i++)
    //         {
    //             if (arr[i] == ar[i + 1])
    //                 count++;
    //             else
    //                 break;
    //         }
    //         // Update res
    //         res = Math.max(res, count);
    //     }
    //     return res;
    // }
      function myFunction() {
          const x = document.getElementById("explanationDiv");
          x.classList.toggle("hidden")
      }


      function subsetFind(arr) {
        // store frequencies of elements
        let mp = new Map();
        let ttl = -1;
        
        // Traverse the input array and
        arr.forEach(element => {
          if (!mp[element])
            mp[element] = 1;
          else
            mp[element]++;
            if (mp[element] > ttl)
              ttl = mp[element];
          });
      
      
          // Find the maximum value in map.
          let res = new Array()
          for (let i = 0; i < ttl; i++)
              res[i] = []
          for (let i = 0; i < ttl; i++) {
              for (let entry of Object.entries(mp)) {
                  if (entry[1] != 0) {
                      res[i].push(entry[0]);
                      mp[entry[0]]--;
                  }
              }
          }
      
          return res;
      }
      // Driver code
      function main() {
          for (let v of subsetFind(arr)) {
              let r = ''
              for (let x of v) {
                  r += x + ' '
              }
              console.log(r);
              document.getElementById("subsetDiv").innerHTML=r;
          }
          return 0;
      }

      //validation code
    function checkInput() {
        let input1 = document.getElementById("noofels").value;
        let input2 = document.getElementById("els").value;

        if(input1 == "" || input2 == ""){
          alert("inputs cannot be empty")
          return false
        }
      
        // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
      
        // n+	Matches any string that contains at least one n
        // n*	Matches any string that contains zero or more occurrences of n
        // n?	Matches any string that contains zero or one occurrences of n
        // n{X}	Matches any string that contains a sequence of X n's
        // n{X,Y}	Matches any string that contains a sequence of X to Y n's
        // n{X,}	Matches any string that contains a sequence of at least X n's
        // n$	Matches any string with n at the end of it
        // ^n	Matches any string with n at the beginning of it
        // ?=n	Matches any string that is followed by a specific string n
        // ?!n	Matches any string that is not followed by a specific string n
      
        reg = /^(([0-9](,)?)*)+$/;
        let result_1 = reg.test(input1);
        let result_2 = reg.test(input2);
        if (result_1 && result_2) {
          document.getElementById("noofels").style.removeProperty("border");
          document.getElementById("els").style.removeProperty("border");
          console.log("Strings correct");
          return true;
        } else if (!result_1 && !result_2) {
          document.getElementById("noofels").style.border = "2px solid red";
          document.getElementById("els").style.border = "2px solid red";
          setTimeout(function () {
            alert("wrong input");
          }, 500);
          return false;
        } else if (!result_1) {
          document.getElementById("noofels").style.border = "2px solid red";
          setTimeout(function () {
            alert("wrong input");
          }, 500);
          return false;
        } else if (!result_2) {
          document.getElementById("els").style.border = "2px solid red";
          setTimeout(function () {
            alert("wrong input");
          }, 500);
          return false;
        }
      }