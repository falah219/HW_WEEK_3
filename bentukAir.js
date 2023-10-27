const suhu = 80;

if (suhu >= -100 && suhu <= 0){
    console.log("Beku"); 
}

else if (suhu >= 1 && suhu <= 100){ 
    console.log("Cair");
}

else if (suhu >= 101 && suhu <= 500){
    console.log("Uap");
}

else {
    console.log("Rentang suhu tersebut tidak terdefinisi");
}

