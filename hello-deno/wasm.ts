const wasmCode = await Deno.readFile("./target/wasm32-unknown-unknown/debug/hello_deno.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const {
    square,
    fib
} = wasmInstance.exports;

console.log(`square(1) : ${square(1)}`);
console.log(`square(2) : ${square(2)}`);
console.log(`square(3) : ${square(3)}`);
console.log(`square(5) : ${square(5)}`);

console.log(`fib(5) : ${fib(10)}`);
