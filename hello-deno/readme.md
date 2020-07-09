# deno samples

dem

> deno install --allow-read --allow-write --allow-net -f -n dem https://deno.land/x/dem@0.9.3/cmd.ts

## web server sample

> deno run --allow-net --allow-read server.ts

## [rust-wasm sample](https://dev.to/lampewebdev/writing-webassembly-in-rust-and-runing-it-in-deno-144j)

(only at first time)

> rustup target add wasm32-unknown-unknown

build

> cargo build --target wasm32-unknown-unknown

target binary size is little bit huge

size : 1585505(1.5M)

shrink binary

> wasm-gc target/wasm32-unknown-unknown/debug/hello_deno.wasm 


size : 17331(17K)

run ( Of course ok for both binary )

> deno run --allow-read wasm.ts 