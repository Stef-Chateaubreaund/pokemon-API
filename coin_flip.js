function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails"  //.5 chance 
}
function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            if(attempts > 20){
                return reject ("ops...sorry!")
            }
            let result = tossCoin();
            // console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;  //when is logs, it goes the opposite.. in the third time it showed "14 times" instead of 3 
            }
        }
        return resolve(`yay! foi apenas   ${attempts}  vezes pro "heads"`) 
    });
}
fiveHeads().then( (res) => console.log("this was successfull" + " " +res) ).catch( (err) => console.log("this was an error" + " " + err) );
// catch return a promise ? we never know 