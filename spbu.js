const jenisKendaraan = "mobil";
const CC = 1700;

if (jenisKendaraan === "motor" || jenisKendaraan === "plat kuning") { 
    console.log("BBM SUBSIDi")
}

else if (jenisKendaraan === "mobil" && CC < 1500) { 
    console.log("PERTAMAX")
}

else if (jenisKendaraan === "mobil" && CC >= 1500) {
    console.log("PERTAMAX TURBO");
}
