const tabel = document.getElementsByTagName('tr')

console.log(tabel[2])

for(let x=1; x <= tabel.length; x++){
    if(x % 2 == 0){
        tabel[x].style.backgroundColor = "white";
    }else{
        tabel[x].style.backgroundColor = "#f3f1ec";
    }
}