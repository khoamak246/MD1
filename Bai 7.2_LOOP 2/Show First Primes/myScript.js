let count = 0;
let N = 2;
let inputNum = parseInt(prompt('So luong so nguyen to ban mmuon xuat hien:', '0'))

while (count < inputNum){
    let Pnum = 0;
    for (let i = 1; i < N; i++) {
        if (N % i == 0){
            Pnum++
        }
    } if (Pnum == 1){
        document.write(N);
        count++
    }
    N++
}

