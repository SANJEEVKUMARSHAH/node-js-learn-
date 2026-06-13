let n=5;
for(let i=0;i<5;i++){
    console.log("hello",i);
}

console.log("hi,sanjeev");

console.log(process.argv);

let arg=process.argv;

for(let i=2;i<arg.length;i++){
    console.log("hello",arg[i]);
}
