let cloneOpr = ''
function _opr(opr) {
    cloneOpr = opr
}
function ans() {
    let num1 = document.getElementById("num1")
    let n1 = Number(num1.value)
    let num2 = document.getElementById("num2")
    let n2 = Number(num2.value)
    console.log(n1)
    console.log(n2)
    if (n1 == '' || n2 == '') {
        alert('enter your numbers')
    }
    else {
        if (_opr == '') {
            alert('choose your operation')
            _p.innerHTML ="Result is : ...." 
        }
        else {
           
            switch (cloneOpr) {
                case '+': n1 += n2; break;
                case '-': n1 -= n2; break;
                case '*': n1 *= n2; break;
                case '/': n1 /= n2; break;
                case '%': n1 %= n2; break;

            }
            let _p = document.getElementById('par')
            _p.innerHTML ="Result is :" + n1
            _p.style.color = 'white'
            _p.style.textTransform = 'uppercase'
            num1.value = ''
            num2.value = ''

        }
    }
}