// Problem 59

load("cipher1.txt");

function decrypt(numstr,pass) {

    var plen = pass.length;
    var slen = numstr.length;
    var arr = new Array(slen);
    var x = 0;

    var xorN = function(c) {
        return c^pass.charCodeAt(((x++)%plen));
    };

    for (var i = 0; i < slen; i++) {
        arr[i] = xorN(numstr[i]);
        if (arr[i] < 31 || arr[i] > 122 ||
            (arr[i] >= 94 && arr[i] < 97)) {
            return false;
        }
    }

    return arr;
}

for (var a = 97; a <= 122; a++) {
    for (var b = 97; b <= 122; b++) {
        for (var c = 97; c <= 122; c++) {
            var str = String.fromCharCode(a,b,c);
            var d = decrypt(cipher,str);
            if (d) {
                var len = d.length;
                var sum = 0;
                for (var i = 0; i < len; i++) {
                    sum += d[i];
                }
                print(sum);
            }
        }
    }
}

function printASCII(arr) {
    var len = arr.length;
    var str = "";
    for (var i = 0; i < len; i++) {
        str += String.fromCharCode(arr[i]);
    }
    print(str);
}
