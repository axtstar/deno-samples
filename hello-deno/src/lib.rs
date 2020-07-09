#[no_mangle]
pub extern "C" fn square(x: u32) -> u32 {
    x * x
}

#[no_mangle]
pub fn fib(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fib(n-2) + fib(n-1),
    }
}
