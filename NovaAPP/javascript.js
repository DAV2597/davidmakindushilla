//recuperation du contenu
const conteneur1=document.querySelector(".novMenu1")
const conteneur2=document.querySelector(".novaMenu2")
const conteneur3=document.querySelector(".novaImage")

//recuperation de buttons
const button1=document.getElementById("novMenu1")
const button2=document.getElementById("novaMenu2")
const button3=document.getElementById("novaImage")


conteneur2.style.display="none"
conteneur3.style.display="none"
//evenement
button1.addEventListener('click',()=>{
    conteneur3.style.display="none"
    conteneur2.style.display="none"
    conteneur1.style.display="block"
})
button2.addEventListener('click',()=>{
    conteneur3.style.display="none";
    conteneur2.style.display="block";
    conteneur1.style.display="none";
})
button3.addEventListener('click',()=>{
    conteneur3.style.display="block";
    conteneur2.style.display="none";
    conteneur1.style.display="none";
})
//recuperation de champs
const input1=document.getElementById("nom")
const input2=document.getElementById("postnom")
const input3=document.getElementById("prenom")
//creation de liste vide
const sauve=document.getElementById("enregistre")

var listevide=[];

const DATA=document.querySelector(".data")
//condition
sauve.addEventListener('click',(e)=>{
    if(input1.value==="" || input2.value==="" || input3.value===""){
        alert("veuillez saisir tout le champs !!!")
    }else{
        e.preventDefault()
        let associer={
            david:'',
            victoire:'',
            ben:''
        }
        associer.david=input1.value;
        associer.victoire=input2.value;
        associer.ben=input3.value;

        listevide.push(associer)

       
        let tableau=``
        //creation de data json
        const DATAj=JSON.stringify(listevide)
        console.log(DATAj)
        listevide.map((gys)=>{
            let steven=`
            
            <tr>
                <td>${gys.david}</td>
                <td>${gys.victoire}</td>
                <td>${gys.ben}</td>
            <tr>
            `
            tableau+=steven
        })
        DATA.innerHTML=tableau

        input1.value=""
        input2.value=""
        input3.value=""
    }
})
