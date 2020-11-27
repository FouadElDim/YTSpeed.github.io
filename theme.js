var i;
i=0;

function change(){
    if(i==0){
        document.getElementById('body').style.backgroundColor = "#0c2461";
        document.getElementById('body').style.color = "#fff";
        i=1;
    }else{
        document.getElementById('body').style.backgroundColor = "#fff";
        document.getElementById('body').style.color = "#000";
        i=0;
    }
}