
/**
 * A customizable FizzBuzz implementation that allows for any number of multiples to be checked
 * @param start the point at which to start counting, usually 1
 * @param stop the point at which to stop counting, traditionally 100
 * @param multiples an array of number, string tuples, the number being the multiple to check for, 
 * and the string being what to replace it with. for standard FizzBuzz this would be `[[3, "fizz"], [5, "buzz"]]` 
 */
function anyFizzBuzz(start:number, stop:number, multiples:[number, string][]):void {
    for (let i = start; i < stop; i++) {
        let printVal:string = "";
        multiples.forEach(multiple => {
            if (i%multiple[0] == 0) {
                printVal += multiple[1];
            }
        });
        printVal = printVal == "" ? i.toString():printVal;
        console.log(printVal);
        
    }
}

anyFizzBuzz(1, 100, [[3, "fizz"], [5, "buzz"]]);