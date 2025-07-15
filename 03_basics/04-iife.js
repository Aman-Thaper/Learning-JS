//Immediately Invoked Function Expressions (IIFE)

(function dbconnect() {
    console.log('DB is connected');
})();   //semicolon is necessary to stop the context

(
    (name)=> console.log(`DB conneceted Two by ${name}`)
)("Aman");

