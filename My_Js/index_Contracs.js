let firebaseConfig = {
    apiKey: "AIzaSyDlqgAaEJc_r6qq1RFYnsFuaGOQmtHY_nM",
    authDomain: "localhost",
    projectId: "lab5-fc32f",
  };
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore(); 
 

let m=0.00,f=0.00,o=0.00,sum=0.00;
let GenderReset =$('[name="gender"]');
let email = document.MyForm.EMail_1.value;

let NuberSentChecked = 0;

console.log('It is working');


db.collection("TEST1")
.add({
    massage:"Test....."
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
  });


$('#button_submit').click(function(e){
    e.preventDefault()
    console.log('User.........');
    console.log('User.........');
    console.log('User.........');
    console.log('User.........');
    console.log('User.........');
    console.log(NuberSentChecked + '.............................');

    if(CheckSuccss() === false){
        return;
    }else{
    db.collection("FinalCut")
.add({
    name:$("#Name").val(),
    email:$("#EMail").val(),
    massage:$("#Massage").val(),
    gender:Number($('input[name="gender"]:checked').val()),
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    $("#Name").val(""),
    $("#EMail").val(""),
    $("#Massage").val(""),
    GenderReset[0].checked=true;
})
.catch(function(error) {
    console.error("Error adding document: ", error);
  });
    }
})

$('#button_reset').click(function(e){
    e.preventDefault()
    console.log('User..................................');
    console.log('User.........');
    console.log('User.........');
    console.log('User.........');
    console.log('User.........');
    $("#Name").val(""),
    $("#EMail").val(""),
    $("#Massage").val(""),
    GenderReset[0].checked=true;
})

function CheckSuccss(){
    if($('#Name').val()===null||$('#name').val()===''){
        alert("please enter a name");
        document.myForm.Name.focus();
        return false;
    }      
    if($('#EMail').val().indexOf('@')<=1||($('#EMail').val().lastIndexOf('.')-$('#EMail').val().indexOf('@'))<=2||$('#EMail').val()===''){
        alert('Please enter valid Email');
        document.myForm.EMail_1.focus();
        return false;
    }
}








db.collection("FinalCut").orderBy("name").onSnapshot(doc =>{
    let table = $('tbody')[0];
    //document.querySelectorAll("tbody tr").forEach(item=>item.remove());
    $("tbody tr").remove()
    doc.forEach(item=>{

    let st= item.data().name
    let row = table.insertRow(-1)
    let firstCell = row.insertCell(0)
    let secondCell = row.insertCell(1)
    let thirdCell = row.insertCell(2)

    firstCell.textContent=st;

    if(item.data().gender==1){
        secondCell.textContent="Male";
        m++;
        console.log(m);
        console.log(f);
    }
    if(item.data().gender==2){
        secondCell.textContent="Female";
        f++;
        console.log(m);
        console.log(f);
    }

    let str = String(item.data().email);
    let buff="";
    for(i=0;i<str.length;i++){
        if(i===0||str[i]==="@"||str[i]==="."){
            buff+=str[i];
        }
        else buff+="x";
    }
    console.log(str);
    sum=m+f+o;
    thirdCell.textContent=buff;

    let options = {
        title: {
            text: "Gender Percentage"
        },
        subtitles: [{
            text: ""
        }],
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: (m/sum)*100, label: "Male" },
                { y: (f/sum)*100, label: "Female" },
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    })
})
















let ValueSent = () =>{
    let email = document.MyForm.EMail_1.value;
    let atpos = email.indexOf('@');
    let dotpos = email.lastIndexOf('.');
    if(email === '' || atpos < 1 || dotpos < 1){
        NuberSentChecked ++;
        console.log(NuberSentChecked + '.............................');
        alert('plase your Email');
        document.myForm.Email.focus();
    }



    
}









