const fibonacci = (n, f1, f2) => {
   
   if (f1 == undefined) f1 = 0;
   if (f2 == undefined) f2 = 1;

   if(n < 0) throw Error('Invalid number!');
   if(n === 0 || n === 1) return n;

   let result = 0;

   for(let i = 1; i <= n; i++) {
      f1 = f2;
      f2 = result;
      result = f1 + f2
   }

   return result;
   
}

export default fibonacci;