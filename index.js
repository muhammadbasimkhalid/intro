function zktcal() {
    let value1 = document.getElementById("amnt").value;
    let year = document.getElementById("time").value;
    let item = document.getElementById("item").value;

    function gold(value1, year) {
        if (value1 >= 7.5 && year >= 1) {
            zakat = Math.round(value1 * 207700 * 0.025)
            document.getElementById("zktamnt").innerHTML = ("You have to pay Rs:"+ zakat +" for Zakat")
        } else {
            document.getElementById("zktamnt").innerHTML = ("You are not eligible for zakat")

        }
    }
    function silver(value1, year) {
        if (value1 >= 52.5 && year >= 1) {
            zakat = Math.round(value1 * 2443 * 0.025);
                       document.getElementById("zktamnt").innerHTML = ("You have to pay Rs:"+ zakat +" for Zakat")
        } else {
            document.getElementById("zktamnt").innerHTML = ("You are not eligible for zakat")

        }
    }
    function cash(value1, year) {
        if (value1 >= 1473000 && year >= 1) {
            zakat = Math.round(value1 * 0.025);
                document.getElementById("zktamnt").innerHTML = ("You have to pay Rs:"+ zakat +" for Zakat")
        } else {
            document.getElementById("zktamnt").innerHTML = ("You are not eligible for zakat")

        }
    }
    if (item == "Gold") {
        gold(value1, year)
    }
    if (item == "Silver") {
        silver(value1, year)
    }
    if (item == "Cash") {
        cash(value1, year)
    }

}