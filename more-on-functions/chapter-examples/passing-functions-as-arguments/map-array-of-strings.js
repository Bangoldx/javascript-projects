let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (n){
    for(let i = 0; i < n.length; i++){
        return n[i].slice(0,1);
    }
});

console.log(firstInitials);
