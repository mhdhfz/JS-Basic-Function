//function factorial(num) {
//var rval = 1;
//for (var i = 2; i <= num; i++) rval = rval * i;
//return rval;

//  return num < 2 ? 1 : factorial(num - 1) * num;
//}

f = n => (n < 2 ? 1 : f(n - 1) * n);
