let n1 = 0;
let n2 = 0;
let n3 = 0;

// let img1 = `Image/WISP_ +${n1} + .png`;

let buttonos_play = document.querySelectorAll('buttonos_play');
console.log(`${n1}`);


// for(let i = 0 ; i <buttonos_play.length;i++){
//     buttonos_play[i].addEventListener('click',function(){
//         //console.log(this);
//         document.location.reload(true);
//         let key = this.innerHTML;
//         console.log(`button ${key} click`);
//         random(key)
//     });
// }


let arr = [];
while (arr.length < 3) {
    let r = Math.floor(Math.random() * 4) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);


let s = Math.floor(Math.random() * 3);
console.log(s + ' ' + 'arr[s]');
let w = arr[s];
console.log(w +' ' + 'w');
let img1 = 'Imagi/Use/WISP_' + arr[s] + '.png';
document.querySelector('img.img1').setAttribute('src', img1);


for (let i = 0; i < 3; i++) {
    if (i === 0) {
        let Choose_1 = 'Imagi/Use/Choose_' + arr[i] + '.png';
        document.querySelector('img.Choose_1').setAttribute('src', Choose_1);
        n1 = arr[i];
        console.log(n1 + ' ' + 'n1')
    } else if (i === 1) {
        let Choose_2 = 'Imagi/Use/Choose_' + arr[i] + '.png';
        document.querySelector('img.Choose_2').setAttribute('src', Choose_2);
        n2 = arr[i];
        console.log(n2 + ' ' + 'n2')
    } else if (i === 2) {
        let Choose_3 = 'Imagi/Use/Choose_' + arr[i] + '.png';
        document.querySelector('img.Choose_3').setAttribute('src', Choose_3);
        n3 = arr[i];
        console.log(n3 + ' ' + 'n3')
    }
}

// .remove()

let Docty = 0;

function Sentvalue() {
    if(Docty < 4){
    let x = document.getElementById("mytext").value;
    // document.getElementById("Value_Anserw").innerHTML = x;
    CheckAnswer(x);
    
    }else{
        document.getElementById("Value_Anserw").remove();
        document.getElementById("Value_Count").innerHTML = 'Game Over';
        document.getElementById("button_1").style.visibility = "hidden"
        document.getElementById("Reset_Button").style.visibility = "visible"
        alert("Game Over");
        // ถ้าอยากที่จะ รีหน้าเว็บกดปุ้มตกลงของกล่องข้อความที่แจ้งเตือนเข้ามา 
        // confirm("Game Over");
        // window.location.reload();
    }
}

function CheckAnswer(x) {
    let a = parseInt(x, 10);
    let d = arr[a];
    let b = 10
    let c = 10
    CheckAnswer_Value(n1, n2, n3, s, x);

    //  if(a === b && a === c){
    //     console.log("5555");
    //  }else if(a === s && a === n1){
    //     console.log("4444");
    //  }

}

// document.getElementById("Value_Count").style.visibility = "hidden";
function CheckAnswer_Value(n1, n2, n3, s, x) {
    let a = parseInt(x, 10);
    console.log(a + ' ' + 'a');
    let e = a - 1;
    console.log(e + ' ' + 'e');
    let d = arr[e];
    console.log(d + ' ' + 'd');
    let b = 10;
    let c = 10;
    let count = 9;
        if (a === b && a === c) {
            console.log("5555");
            console.log(n1 + ' ' + '1');
            console.log(n2 + ' ' + '2');
            console.log(n3 + ' ' + '3');
            console.log(w + ' ' + '4');
            console.log(d + ' ' + '5');
            console.log(e + ' ' + '6')
        } else if (d === w && d === n1) {
            console.log(n1 + ' ' + 'n1')
            document.getElementById("Value_Anserw").innerText = 'Ture'
            document.getElementById("button_1").style.visibility = "hidden"
            document.getElementById("Value_Count").remove();
            document.getElementById("Reset_Button").style.visibility = "visible"

            
        } else if (d === w && d === n2) {
            console.log(n2 + ' ' + 'n2')
            document.getElementById("Value_Anserw").innerText = 'Ture'
            document.getElementById("button_1").style.visibility = "hidden"
            document.getElementById("Value_Count").remove()
            document.getElementById("Reset_Button").style.visibility = "visible"
            
        } else if (d === w && d === n3) {
            console.log(n3 + ' ' + 'n3')
            document.getElementById("Value_Anserw").innerText = 'Ture'
            document.getElementById("button_1").style.visibility = "hidden"
            document.getElementById("Value_Count").remove()
            document.getElementById("Reset_Button").style.visibility = "visible"
            
        } else if(a >= 1 && a <= 3) {
            document.getElementById("Value_Anserw").innerText = 'False'
            document.getElementById("Value_Count").innerHTML = 'Count' + ' ' + Docty;
            Docty ++;
        }else{
            document.getElementById("Value_Anserw").innerText = 'False'
            document.getElementById("Value_Count").innerHTML = 'Count' + ' ' + Docty;
            alert("Plase Your Enter 1 --- 3");
            Docty ++;
        }
}

function SentToReset(){
    document.location.reload(true);
}

















// for(let e = 0;e<a.length;e++){
//     let n1 = Math.floor(Math.random() * 25) + 1;
//     if(n1 !== a[n1]);
// }






// function Loop(){
// for(let i = 0;i<5;i++){
//     let ln1 = Math.floor(Math.random() * 25) + 1;
//     let n1 = Math.floor(Math.random() * 25) + 1;
//     if(ln1 === n1){
//         let ln1 = Math.floor(Math.random() * 25) + 1;
//         let n1 = Math.floor(Math.random() * 25) + 1;
//     }else{
//         return n1;
//         i++
//     }
// }

// }