// metadata
export const version = "0.8.24"
export const title = "EVM Memory Layout in Solidity"
export const description = "Example of EVM memory in Solidity"

export const keywords = ["data", "evm", "memory", "yul", "assembly"]

export const codes = [
  {
    fileName: "YulMem.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKLy8gTWVtb3J5IGxheW91dAovLyBhcnJheSBvZiBsZW5ndGggMioqMjU2ICgzMiBieXRlcyksIGVhY2ggZWxlbWVudCBzdG9yZXMgMSBieXRlICgweDAwIHRvIDB4ZmYpCi8vIGluZGV4ICAgICAwICAgIDEgICAgMiAgIC4uLiAgIDB4ZmZmLi4uZmZmID0gMioqMjU2IC0gMQovLyBtZW1vcnkgfCAwMCB8IDAwIHwgMDAgfCAuLi4gfCAwMCB8CgovLyBSZXNlcnZlZCBzbG90cwovLyAweDAwIC0gMHgzZiAoNjQgYnl0ZXMpOiBzY3JhdGNoIHNwYWNlIGZvciBoYXNoaW5nIG1ldGhvZHMKLy8gMHg0MCAtIDB4NWYgKDMyIGJ5dGVzKTogZnJlZSBtZW1vcnkgcG9pbnRlciAtIHBvaW50ZXIgdG8gbmV4dCBhdmFpbGFibGUgbG9jYXRpb24gaW4gbWVtb3J5IHRvIHN0b3JlIGRhdGEKLy8gMHg2MCAtIDB4N2YgKDMyIGJ5dGVzKTogemVybyBzbG90IC0gdXNlZCBhcyBpbml0aWFsIHZhbHVlIGZvciBkeW5hbWljIG1lbW9yeSBhcnJheXMgYW5kIHNob3VsZCBuZXZlciBiZSB3cml0dGVuIHRvCgovLyBGcmVlIG1lbW9yeSBwb2ludGVyICgweDQwKQovLyAweDgwID0gRnJlZSBtZW1vcnkgcG9pbnRlciBpbml0aWFsbHkgcG9pbnRzIGhlcmUKY29udHJhY3QgTWVtQmFzaWMgewogICAgLy8gbXN0b3JlKHAsIHYpID0gc3RvcmUgMzIgYnl0ZXMgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IG1lbW9yeSBsb2NhdGlvbiBwCiAgICAvLyBtbG9hZChwKSA9IGxvYWQgMzIgYnl0ZXMgZnJvbSBtZW1vcnkgc3RhcnRpbmcgYXQgbWVtb3J5IGxvY2F0aW9uIHAKICAgIGZ1bmN0aW9uIHRlc3RfMSgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIgYjMyKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBGcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIC8vIHAgPSAweDgwCiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIG1zdG9yZShwLCAweGFiYWJhYikKICAgICAgICAgICAgYjMyIDo9IG1sb2FkKHApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfMigpIHB1YmxpYyBwdXJlIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgwLCAweDExKQogICAgICAgICAgICAvLyBpbmRleDogMzIgYnl0ZXMgb2YgZGF0YSBzdG9yZWQgaW4gbWVtb3J5IGZyb20gaW5kZXgKICAgICAgICAgICAgLy8gIDB4MDA6IDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMQogICAgICAgICAgICBtc3RvcmUoMSwgMHgyMikKICAgICAgICAgICAgLy8gICAgICAgICAgIDAgMQogICAgICAgICAgICAvLyAgMHgwMDogMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgICAgIC8vICAweDIwOiAweDIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgbXN0b3JlKDIsIDB4MzMpCiAgICAgICAgICAgIC8vICAgICAgICAgICAwIDEgMgogICAgICAgICAgICAvLyAgMHgwMDogMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgICAgIC8vICAweDIwOiAweDAwMzMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgbXN0b3JlKDMsIDB4NDQpCiAgICAgICAgICAgIC8vICAgICAgICAgICAwIDEgMiAzCiAgICAgICAgICAgIC8vICAweDAwOiAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgLy8gIDB4MjA6IDB4MDAwMDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgTWVtU3RydWN0IHsKICAgIC8vIE1lbW9yeSBkYXRhIGlzIG5vdCBwYWNrZWQgLSBhbGwgZGF0YSBzdG9yZWQgaW4gY2h1bmtzIG9mIDMyIGJ5dGVzCiAgICBzdHJ1Y3QgUG9pbnQgewogICAgICAgIHVpbnQyNTYgeDsKICAgICAgICB1aW50MzIgeTsKICAgICAgICB1aW50MzIgejsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3JlYWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IHgsIHVpbnQyNTYgeSwgdWludDI1NiB6KQogICAgewogICAgICAgIC8vIFBvaW50IGlzIGxvYWRlZCB0byBtZW1vcnkgc3RhcnRpbmcgYXQgMHg4MAogICAgICAgIC8vIDB4ODAgPSBpbml0aWFsIGZyZWUgbWVtb3J5CiAgICAgICAgUG9pbnQgbWVtb3J5IHAgPSBQb2ludCgxLCAyLCAzKTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBsb2FkIDMyIGJ5dGVzIHN0YXJ0aW5nIGZyb20gMHg4MAogICAgICAgICAgICB4IDo9IG1sb2FkKDB4ODApCiAgICAgICAgICAgIC8vIGxvYWQgMzIgYnl0ZXMgc3RhcnRpbmcgZnJvbSAweGEwICgweDgwICsgMzIgPSAweGEwKQogICAgICAgICAgICB5IDo9IG1sb2FkKDB4YTApCiAgICAgICAgICAgIC8vIGxvYWQgMzIgYnl0ZXMgc3RhcnRpbmcgZnJvbSAweGMwICgweGEwICsgMzIgPSAweGMwKQogICAgICAgICAgICB6IDo9IG1sb2FkKDB4YzApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyIGZyZWVfbWVtX3B0ciwgdWludDI1NiB4LCB1aW50MjU2IHksIHVpbnQyNTYgeikKICAgIHsKICAgICAgICAvLyBBbGxvY2F0ZXMgbWVtb3J5IDB4ODAgdG8gMHhkZiB0byBQb2ludAogICAgICAgIC8vIEZyZWUgbWVtb3J5IHBvaW50ZXIgPSAweGRmICsgMSA9IDB4ZTAKICAgICAgICBQb2ludCBtZW1vcnkgcDsKCiAgICAgICAgLy8gV3JpdGUKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIHN0b3JlIHRvIDB4ODAKICAgICAgICAgICAgbXN0b3JlKHAsIDExKQogICAgICAgICAgICAvLyBzdG9yZSB0byAweGEwCiAgICAgICAgICAgIG1zdG9yZShhZGQocCwgMHgyMCksIDIyKQogICAgICAgICAgICAvLyBzdG9yZSB0byAweGMwCiAgICAgICAgICAgIG1zdG9yZShhZGQocCwgMHg0MCksIDMzKQogICAgICAgICAgICAvLyAweGUwCiAgICAgICAgICAgIGZyZWVfbWVtX3B0ciA6PSBtbG9hZCgweDQwKQogICAgICAgIH0KCiAgICAgICAgeCA9IHAueDsKICAgICAgICB5ID0gcC55OwogICAgICAgIHogPSBwLno7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUZpeGVkQXJyYXkgewogICAgZnVuY3Rpb24gdGVzdF9yZWFkKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhMCwgdWludDI1NiBhMSwgdWludDI1NiBhMikKICAgIHsKICAgICAgICAvLyBhcnIgaXMgbG9hZGVkIHRvIG1lbW9yeSBzdGFydGluZyBhdCAweDgwCiAgICAgICAgLy8gRWFjaCBhcnJheSBlbGVtZW50IGlzIHN0b3JlZCBhcyAzMiBieXRlcwogICAgICAgIHVpbnQzMlszXSBtZW1vcnkgYXJyID0gW3VpbnQzMigxKSwgdWludDMyKDIpLCB1aW50MzIoMyldOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGEwIDo9IG1sb2FkKDB4ODApCiAgICAgICAgICAgIGExIDo9IG1sb2FkKDB4YTApCiAgICAgICAgICAgIGEyIDo9IG1sb2FkKDB4YzApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGEwLCB1aW50MjU2IGExLCB1aW50MjU2IGEyKQogICAgewogICAgICAgIHVpbnQzMlszXSBtZW1vcnkgYXJyOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIDB4ODAKICAgICAgICAgICAgbXN0b3JlKGFyciwgMTEpCiAgICAgICAgICAgIC8vIDB4YTAKICAgICAgICAgICAgbXN0b3JlKGFkZChhcnIsIDB4MjApLCAyMikKICAgICAgICAgICAgLy8gMHhjMAogICAgICAgICAgICBtc3RvcmUoYWRkKGFyciwgMHg0MCksIDMzKQogICAgICAgIH0KCiAgICAgICAgYTAgPSBhcnJbMF07CiAgICAgICAgYTEgPSBhcnJbMV07CiAgICAgICAgYTIgPSBhcnJbMl07CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUR5bmFtaWNBcnJheSB7CiAgICBmdW5jdGlvbiB0ZXN0X3JlYWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyIHAsIHVpbnQyNTYgbGVuLCB1aW50MjU2IGEwLCB1aW50MjU2IGExLCB1aW50MjU2IGEyKQogICAgewogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYXJyID0gbmV3IHVpbnQyNTZbXSg1KTsKICAgICAgICBhcnJbMF0gPSB1aW50MjU2KDExKTsKICAgICAgICBhcnJbMV0gPSB1aW50MjU2KDIyKTsKICAgICAgICBhcnJbMl0gPSB1aW50MjU2KDMzKTsKICAgICAgICBhcnJbM10gPSB1aW50MjU2KDQ0KTsKICAgICAgICBhcnJbNF0gPSB1aW50MjU2KDU1KTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBwIDo9IGFycgogICAgICAgICAgICAvLyAweDgwCiAgICAgICAgICAgIGxlbiA6PSBtbG9hZChhcnIpCiAgICAgICAgICAgIC8vIDB4YTAKICAgICAgICAgICAgYTAgOj0gbWxvYWQoYWRkKGFyciwgMHgyMCkpCiAgICAgICAgICAgIC8vIDB4YzAKICAgICAgICAgICAgYTEgOj0gbWxvYWQoYWRkKGFyciwgMHg0MCkpCiAgICAgICAgICAgIC8vIDB4ZTAKICAgICAgICAgICAgYTIgOj0gbWxvYWQoYWRkKGFyciwgMHg2MCkpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlczMyIHAsIHVpbnQyNTZbXSBtZW1vcnkpIHsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFyciA9IG5ldyB1aW50MjU2W10oMCk7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgcCA6PSBhcnIKICAgICAgICAgICAgLy8gU3RvcmUgbGVuZ3RoIG9mIGFycgogICAgICAgICAgICBtc3RvcmUoYXJyLCAzKQogICAgICAgICAgICAvLyBTdG9yZSAxLCAyLCAzCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDIwKSwgMTEpCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDQwKSwgMjIpCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDYwKSwgMzMpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQoYXJyLCAweDgwKSkKICAgICAgICB9CgogICAgICAgIC8vIERhdGEgd2lsbCBiZSBBQkkgZW5jb2RlZCB3aGVuIGFyciBpcyByZXR1cm5lZCB0byBjYWxsZXIKICAgICAgICByZXR1cm4gKHAsIGFycik7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUludGVybmFsRnVuY1JldHVybiB7CiAgICBmdW5jdGlvbiBpbnRlcm5hbF9mdW5jX3JldHVybl92YWwoKSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiB1aW50MjU2KDB4YWJhYmFiKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3ZhbCgpIHB1YmxpYyBwdXJlIHsKICAgICAgICAvLyAweGFiYWJhYiB3aWxsIGJlIHN0b3JlZCBpbiB0b3Agb2YgdGhlIHN0YWNrCiAgICAgICAgaW50ZXJuYWxfZnVuY19yZXR1cm5fdmFsKCk7CiAgICB9CgogICAgZnVuY3Rpb24gaW50ZXJuYWxfZnVuY19yZXR1cm5fbWVtKCkKICAgICAgICBwcml2YXRlCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzMzJbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgYnl0ZXMzMltdIG1lbW9yeSBhcnIgPSBuZXcgYnl0ZXMzMltdKDMpOwogICAgICAgIGFyclswXSA9IGJ5dGVzMzIodWludDI1NigweGFhYSkpOwogICAgICAgIGFyclsxXSA9IGJ5dGVzMzIodWludDI1NigweGJiYikpOwogICAgICAgIGFyclsyXSA9IGJ5dGVzMzIodWludDI1NigweGNjYykpOwogICAgICAgIHJldHVybiBhcnI7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9tZW0oKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGxlbiwgYnl0ZXMzMiBhMCwgYnl0ZXMzMiBhMSwgYnl0ZXMzMiBhMikKICAgIHsKICAgICAgICAvLyBTdG9yZXMgMHg4MCB0byB0b3Agb2YgdGhlIHN0YWNrCiAgICAgICAgLy8gMHg4MCA9IG1lbW9yeSBwb2ludGVyIHRvIGJlZ2lubmluZyBvZiBhcnIKICAgICAgICBpbnRlcm5hbF9mdW5jX3JldHVybl9tZW0oKTsKICAgICAgICAvLyBSZWFkIGRhdGEgZnJvbSBhcnIsIGluaXRpYWxpemVkIGluIGludGVybmFsX2Z1bmNfcmV0dXJuX21lbSwgdXNpbmcgYXNzZW1ibHkKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxlbiA6PSBtbG9hZCgweDgwKQogICAgICAgICAgICBhMCA6PSBtbG9hZCgweGEwKQogICAgICAgICAgICBhMSA6PSBtbG9hZCgweGMwKQogICAgICAgICAgICBhMiA6PSBtbG9hZCgweGUwKQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgQUJJRW5jb2RlIHsKICAgIC8vIGpzIGNvZGUgdG8gc3BsaXQgc3RyaW5nIGludG8gY2h1bmtzIG9mIGxlbmd0aCA2NAogICAgLy8gc3RyLm1hdGNoKC8uezEsNjR9L2cpCgogICAgLy8gVmFsdWUgdHlwZXMgPCAzMiBieXRlcyAtPiB6ZXJvIHBhZGRlZCBvbiB0aGUgbGVmdCBzaWRlCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWIKICAgIGZ1bmN0aW9uIGVuY29kZV9hZGRyKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYWRkcmVzcyBhZGRyID0gMHhBQmFCYUJhQkFCYWJBQmFiQWJBYkFCQWJBQmFiYWJhYmFCYUJBQmFCOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGFkZHIpOwogICAgfQoKICAgIC8vIEZpeGVkIHNpemVkIGJ5dGVzIC0+IHplcm8gcGFkZGVkIG9uIHRoZSByaWdoIHNpZGUKICAgIC8vIDB4YWFiYmNjZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgZnVuY3Rpb24gZW5jb2RlX2J5dGVzNCgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIGJ5dGVzNCBiNCA9IDB4YWFiYmNjZGQ7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYjQpOwogICAgfQoKICAgIC8vIER5bmFtaWMgc2l6ZSB0eXBlcwogICAgLy8gb2Zmc2V0IHwgbGVuZ3RoIHwgZGF0YQogICAgLy8gb2Zmc2V0ID0gMzIgYnl0ZXMgaW5kZXggd2hlcmUgZGF0YSBzdGFydHMKICAgIC8vIGxlbmd0aCA9IDMyIGJ5dGVzIGRhdGEgbGVuZ3RoCgogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgYWJhYmFiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgZnVuY3Rpb24gZW5jb2RlX2J5dGVzKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IGIgPSBuZXcgYnl0ZXMoMyk7CiAgICAgICAgYlswXSA9IDB4YWI7CiAgICAgICAgYlsxXSA9IDB4YWI7CiAgICAgICAgYlsyXSA9IDB4YWI7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYik7CiAgICB9CgogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIGZ1bmN0aW9uIGVuY29kZV91aW50OF9hcnIoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICB1aW50OFtdIG1lbW9yeSBhID0gbmV3IHVpbnQ4W10oMyk7CiAgICAgICAgYVswXSA9IDE7CiAgICAgICAgYVsxXSA9IDI7CiAgICAgICAgYVsyXSA9IDM7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYSk7CiAgICB9CgogICAgLy8gRml4ZWQgc2l6ZSBhcnJheXMKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIGZ1bmN0aW9uIGVuY29kZV91aW50MjU2X2ZpeGVkX3NpemVfYXJyKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KQogICAgewogICAgICAgIHVpbnQ4WzNdIG1lbW9yeSBhOwogICAgICAgIGFbMF0gPSAxOwogICAgICAgIGFbMV0gPSAyOwogICAgICAgIGFbMl0gPSAzOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGEpOwogICAgfQoKICAgIC8vIFN0cnVjdAogICAgc3RydWN0IFBvaW50IHsKICAgICAgICB1aW50MjU2IHg7CiAgICAgICAgdWludDEyOCB5OwogICAgICAgIHVpbnQxMjggejsKICAgIH0KCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICBmdW5jdGlvbiBlbmNvZGVfc3RydWN0KCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgUG9pbnQgbWVtb3J5IHAgPSBQb2ludCgxLCAyLCAzKTsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShwKTsKICAgIH0KCiAgICAvLyBEeW5hbWljIHNpemVkIGFycmF5IG9mIHN0cnVjdHMKICAgIC8vIG9mZnNldCB8IGxlbmd0aCB8IHN0cnVjdCBkYXRhCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDUKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOQogICAgZnVuY3Rpb24gZW5jb2RlX3N0cnVjdF9hcnJheSgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIFBvaW50W10gbWVtb3J5IGFyciA9IG5ldyBQb2ludFtdKDMpOwogICAgICAgIGFyclswXSA9IFBvaW50KDEsIDIsIDMpOwogICAgICAgIGFyclsxXSA9IFBvaW50KDQsIDUsIDYpOwogICAgICAgIGFyclsyXSA9IFBvaW50KDcsIDgsIDkpOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGFycik7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbVJldHVybiB7CiAgICBmdW5jdGlvbiB0ZXN0X3JldHVybl92YWxzKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NiwgdWludDI1NikgewogICAgICAgIC8vIHJldHVybihzdGFydCwgbGVuKSAtIEhhbHQgZXhlY3V0aW9uIGFuZCByZXR1cm4gZGF0YSBzdG9yZWQgaW4gbWVtb3J5IGZyb20gc3RhcnQgdG8gc3RhcnQgKyBsZW4KICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgweDgwLCAxMSkKICAgICAgICAgICAgbXN0b3JlKDB4YTAsIDIyKQogICAgICAgICAgICByZXR1cm4oMHg4MCwgMHg0MCkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9yZXR1cm5fZHluX2FycigpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpIHsKICAgICAgICAvLyBBQkkgZW5jb2RlIHVpbnQyNTZbXSBhcnJheSB3aXRoIDMgZWxlbWVudHMgMTEsIDIyIGFuZCAzMwogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gb2Zmc2V0CiAgICAgICAgICAgIG1zdG9yZSgweDgwLCAweDIwKQogICAgICAgICAgICAvLyBsZW5ndGgKICAgICAgICAgICAgbXN0b3JlKGFkZCgweDgwLCAweDIwKSwgMykKICAgICAgICAgICAgLy8gYXJyYXkgZWxlbWVudHMKICAgICAgICAgICAgbXN0b3JlKGFkZCgweDgwLCAweDQwKSwgMTEpCiAgICAgICAgICAgIG1zdG9yZShhZGQoMHg4MCwgMHg2MCksIDIyKQogICAgICAgICAgICBtc3RvcmUoYWRkKDB4ODAsIDB4ODApLCAzMykKICAgICAgICAgICAgLy8gTm8gbmVlZCB0byB1cGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlciAtIGZ1bmN0aW9uIGV4ZWN1dGlvbiBlbmRzIGhlcmUKICAgICAgICAgICAgcmV0dXJuKDB4ODAsIG11bCg1LCAweDIwKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9yZXR1cm4oKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2LCB1aW50MjU2KSB7CiAgICAgICAgLy8gUmV0dXJucyAoMTEsIDIyKQogICAgICAgIHRlc3RfcmV0dXJuX3ZhbHMoKTsKICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBuZXZlciBleGVjdXRlCiAgICAgICAgcmV0dXJuICgzMzMsIDQ0NCk7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbVJldmVydCB7CiAgICBmdW5jdGlvbiB0ZXN0X3JldmVydCgpIHB1YmxpYyBwdXJlIHsKICAgICAgICAvLyByZXZlcnQoc3RhcnQsIGxlbikgLSBSZXZlcnQgZXhlY3V0aW9uIGFuZCByZXR1cm4gZGF0YSBzdG9yZSBpbiBtZW1vcnkgZnJvbSBzdGFydCB0byBzdGFydCArIGxlbgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbXN0b3JlKDB4ODAsICJFUlJPUiBIRVJFIikKICAgICAgICAgICAgcmV2ZXJ0KDB4ODAsIDB4MjApCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBNZW1LZWNjYWsgewogICAgZnVuY3Rpb24gdGVzdF9rZWNjYWsoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlczMyKSB7CiAgICAgICAgLy8ga2VjY2FrMjU2KHN0YXJ0LCBsZW4pIC0gS2VjY2FrMjU2IGZyb20gZGF0YSBpbiBtZW1vcnkgZnJvbSBzdGFydCB0byBzdGFydCArIGxlbgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbXN0b3JlKDB4ODAsIDEpCiAgICAgICAgICAgIG1zdG9yZSgweGEwLCAyKQoKICAgICAgICAgICAgbGV0IGggOj0ga2VjY2FrMjU2KDB4ODAsIDB4NDApCiAgICAgICAgICAgIG1zdG9yZSgweGMwLCBoKQoKICAgICAgICAgICAgcmV0dXJuKDB4YzAsIDB4MjApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGtlY2NhaygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQodWludDI1NigxKSwgdWludDI1NigyKSkpOwogICAgfQp9Cgpjb250cmFjdCBUYXJnZXQgewogICAgZnVuY3Rpb24gcmV0dXJuX3VpbnQyNTYodWludDI1NiB4KSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIHg7CiAgICB9CgogICAgZnVuY3Rpb24gcmV0dXJuX2J5dGVzKHVpbnQyNTYgbikgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IG91dCA9IG5ldyBieXRlcyhuKTsKICAgICAgICBmb3IgKHVpbnQyNTYgaTsgaSA8IG47IGkrKykgewogICAgICAgICAgICBvdXRbaV0gPSAweGFiOwogICAgICAgIH0KICAgICAgICByZXR1cm4gb3V0OwogICAgfQoKICAgIGZ1bmN0aW9uIHJldHVybl91aW50MjU2X2Fycih1aW50MjU2IG4pCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgdWludDI1NltdIG1lbW9yeSBvdXQgPSBuZXcgdWludDI1NltdKG4pOwogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IG47IGkrKykgewogICAgICAgICAgICBvdXRbaV0gPSBpICsgMTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG91dDsKICAgIH0KfQoKLy8gY2FsbGRhdGFjb3B5KHAsIHN0YXJ0LCBzaXplKSAtIENvcHkgc3RhcnQgdG8gc3RhcnQgKyBzaXplIGNhbGxkYXRhIHRvIG1lbW9yeSBzdGFydGluZyBhdCBwb2ludGVyIHAKLy8gcmV0dXJuZGF0YXNpemUgLSBHZXQgc2l6ZSBvZiByZXR1cm5lZCBkYXRhIGZyb20gY2FsbCwgc3RhdGljY2FsbCBvciBkZWxlZ2F0ZWNhbGwKLy8gcmV0dXJuZGF0YWNvcHkocCwgc3RhcnQsIHNpemUpIC0gQ29weSBzdGFydCB0byBzdGFydCArIHNpemUgcmV0dXJuIGRhdGEgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IHBvaW50ZXIgcAovLyBjYWxsKGcsIGEsIHYsIGluLCBpbl9zaXplLCBvdXQsIG91dF9zaXplKQovLyAtIGNhbGwgY29udHJhY3QgYXQgYSwgdXNlIG1heCBnIGdhcywgc2VuZCB2IHdlaQovLyAtIHdpdGggaW5wdXQgZnJvbSBtZW1vcnkgaW4gdG8gaW4gKyBpbl9zaXplCi8vIC0gdXNlIG1lbW9yeSBvdXQgdG8gb3V0ICsgb3V0X3NpemUgZm9yIG91dHB1dAovLyBzdGF0aWNjYWxsKGcsIGEsIGluLCBpbl9zaXplLCBvdXQsIG91dF9zaXplKSAtIHJlYWQgb25seSB2ZXJzaW9uIG9mIGNhbGwKY29udHJhY3QgWXVsU3RhdGljQ2FsbCB7CiAgICBmdW5jdGlvbiB0ZXN0X3N0YXRpY2NhbGwoYWRkcmVzcyBhLCBieXRlcyBjYWxsZGF0YSBkYXRhKSBwdWJsaWMgdmlldyB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgcCA6PSBtbG9hZCgweDQwKQogICAgICAgICAgICAvLyBDb3B5IGNhbGxkYXRhIHRvIG1lbW9yeQogICAgICAgICAgICBjYWxsZGF0YWNvcHkocCwgZGF0YS5vZmZzZXQsIGRhdGEubGVuZ3RoKQoKICAgICAgICAgICAgbGV0IG9rIDo9IHN0YXRpY2NhbGwoZ2FzKCksIGEsIHAsIGRhdGEubGVuZ3RoLCAwLCAwKQoKICAgICAgICAgICAgaWYgaXN6ZXJvKG9rKSB7IHJldmVydCgwLCAwKSB9CgogICAgICAgICAgICAvLyBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIGxldCByZXR1cm5fZGF0YV9zaXplIDo9IHJldHVybmRhdGFzaXplKCkKICAgICAgICAgICAgLy8gQ29weSByZXR1cm5lZCBkYXRhIHRvIG1lbW9yeQogICAgICAgICAgICAvLyBJcyBpdCBzYWZlIHRvIG92ZXJ3cml0ZSBtZW1vcnkgdGhhdCB3YXMgdXNlZCBmb3IgaW5wdXRzPwogICAgICAgICAgICByZXR1cm5kYXRhY29weShwLCAwLCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICByZXR1cm4ocCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9hYmlfZGVjb2RlX3VpbnQyNTYoYWRkcmVzcyBhLCBieXRlcyBjYWxsZGF0YSBkYXRhKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KQogICAgewogICAgICAgIHRlc3Rfc3RhdGljY2FsbChhLCBkYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X2FiaV9kZWNvZGVfYnl0ZXMoYWRkcmVzcyBhLCBieXRlcyBjYWxsZGF0YSBkYXRhKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChieXRlcyBtZW1vcnkpCiAgICB7CiAgICAgICAgdGVzdF9zdGF0aWNjYWxsKGEsIGRhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfYWJpX2RlY29kZV91aW50MjU2X2FycihhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgdGVzdF9zdGF0aWNjYWxsKGEsIGRhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfc3RhdGljY2FsbF9yZXR1cm5fYWJpX2VuY29kZWRfYnl0ZXMoCiAgICAgICAgYWRkcmVzcyBhZGRyLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgcHVibGljIHZpZXcgcmV0dXJucyAoYnl0ZXMgbWVtb3J5IG91dCwgdWludDI1NiByZXR1cm5fZGF0YV9zaXplKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgcCA6PSBtbG9hZCgweDQwKQogICAgICAgICAgICAvLyBDb3B5IGNhbGxkYXRhIHRvIG1lbW9yeQogICAgICAgICAgICBjYWxsZGF0YWNvcHkocCwgZGF0YS5vZmZzZXQsIGRhdGEubGVuZ3RoKQogICAgICAgICAgICAvLyBVcGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlcgogICAgICAgICAgICBtc3RvcmUoMHg0MCwgYWRkKHAsIGRhdGEubGVuZ3RoKSkKCiAgICAgICAgICAgIGxldCBvayA6PSBzdGF0aWNjYWxsKGdhcygpLCBhZGRyLCBwLCBkYXRhLmxlbmd0aCwgMCwgMCkKCiAgICAgICAgICAgIGlmIGlzemVybyhvaykgeyByZXZlcnQoMCwgMCkgfQoKICAgICAgICAgICAgLy8gcmV0dXJuX2RhdGFfc2l6ZSA9IDMyICBmb3IgY2FsbGluZyBUYXJnZXQucmV0dXJuX3VpbnQyNTYgLT4gdWludDI1NgogICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgID0gOTYgIGZvciBjYWxsaW5nIFRhcmdldC5yZXR1cm5fYnl0ZXMgLT4gYnl0ZXNbXSAoMzIgb2Zmc2V0LCAzMiBsZW5ndGgsIDMgYnl0ZXMgcGFkZGVkIHRvIDMyKQogICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgID0gMTYwIGZvciBjYWxsaW5nIFRhcmdldC5yZXR1cm5fdWludDI1Nl9hcnIgLT4gdWludDI1NltdICgzMiBvZmZzZXQsIDMyIGxlbmd0aCwgMzIgeCAzIGVsZW1lbnRzKQogICAgICAgICAgICByZXR1cm5fZGF0YV9zaXplIDo9IHJldHVybmRhdGFzaXplKCkKICAgICAgICAgICAgLy8gU3RvcmUgbGVuZ3RoIG9mIHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICAvLyBwb2ludGVyIHRvIG91dCA9IDB4NjAgKHplcm8gc2xvdCkKICAgICAgICAgICAgbXN0b3JlKG91dCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgLy8gQ29weSByZXR1cm4gZGF0YSB0byBvdXQKICAgICAgICAgICAgcmV0dXJuZGF0YWNvcHkoYWRkKG91dCwgMHgyMCksIDAsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQob3V0LCBhZGQoMHgyMCwgcmV0dXJuX2RhdGFfc2l6ZSkpKQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgQ291bnRlciB7CiAgICB1aW50MjU2IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBpbmMoKSBwdWJsaWMgcmV0dXJucyAodWludDI1NikgewogICAgICAgIGNvdW50ICs9IDE7CiAgICAgICAgcmV0dXJuIGNvdW50OwogICAgfQp9Cgpjb250cmFjdCBZdWxDYWxsIHsKICAgIGZ1bmN0aW9uIHRlc3RfY2FsbChhZGRyZXNzIGEsIGJ5dGVzIG1lbW9yeSBkYXRhKQogICAgICAgIHB1YmxpYwogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zIChieXRlcyBtZW1vcnkgb3V0KQogICAgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gMHg4MAogICAgICAgICAgICBsZXQgZGF0YV9wdHIgOj0gZGF0YQogICAgICAgICAgICAvLyAweDYwCiAgICAgICAgICAgIGxldCBvdXRfcHRyIDo9IG91dAoKICAgICAgICAgICAgbGV0IGRhdGFfc2l6ZSA6PSBtbG9hZChkYXRhKQogICAgICAgICAgICBsZXQgZGF0YV9zdGFydCA6PSBhZGQoZGF0YSwgMHgyMCkKICAgICAgICAgICAgbGV0IG9rIDo9IGNhbGwoZ2FzKCksIGEsIGNhbGx2YWx1ZSgpLCBkYXRhX3N0YXJ0LCBkYXRhX3NpemUsIDAsIDApCgogICAgICAgICAgICBpZiBpc3plcm8ob2spIHsgcmV2ZXJ0KDAsIDApIH0KCiAgICAgICAgICAgIGxldCByZXR1cm5fZGF0YV9zaXplIDo9IHJldHVybmRhdGFzaXplKCkKICAgICAgICAgICAgLy8gU3RvcmUgbGVuZ3RoIG9mIHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICBtc3RvcmUob3V0LCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICAvLyBDb3B5IHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICByZXR1cm5kYXRhY29weShhZGQob3V0LCAweDIwKSwgMCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgLy8gVXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgbXN0b3JlKDB4NDAsIGFkZChvdXQsIGFkZCgweDIwLCByZXR1cm5fZGF0YV9zaXplKSkpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfaW5jKGFkZHJlc3MgY291bnRlcikgcHVibGljIHJldHVybnMgKHVpbnQyNTYgY291bnQpIHsKICAgICAgICBieXRlcyBtZW1vcnkgcmVzID0gdGVzdF9jYWxsKGNvdW50ZXIsIGFiaS5lbmNvZGVDYWxsKENvdW50ZXIuaW5jLCAoKSkpOwogICAgICAgIGNvdW50ID0gYWJpLmRlY29kZShyZXMsICh1aW50MjU2KSk7CiAgICB9Cn0KCi8vIE1lbW9yeSBleHBhbnNpb24gZ2FzIGNvc3QKLy8gR2FzIGNvc3QgaXMgcXVhZHJhdGljIHRvIG1lbW9yeSBhbGxvY2F0aW9uLgpjb250cmFjdCBNZW1FeHAgewogICAgZnVuY3Rpb24gYWxsb2NfbWVtKHVpbnQyNTYgbikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgdWludDI1NiBnYXNfc3RhcnQgPSBnYXNsZWZ0KCk7CiAgICAgICAgdWludDI1NltdIG1lbW9yeSBhcnIgPSBuZXcgdWludDI1NltdKG4pOwogICAgICAgIHVpbnQyNTYgZ2FzX2VuZCA9IGdhc2xlZnQoKTsKICAgICAgICByZXR1cm4gZ2FzX3N0YXJ0IC0gZ2FzX2VuZDsKICAgIH0KfQoKLy8gYXJyIHNpemUgfCBnYXMKLy8gICAgICAgIDAgfCAgICAxMjAKLy8gICAgICAgIDEgfCAgICAxNzgKLy8gICAgICAgMTAgfCAgICAyMzIKLy8gICAgICAgMjAgfCAgICAyOTMKLy8gICAgICAgMzAgfCAgICAzNTQKLy8gICAgICAgNDAgfCAgICA0MTUKLy8gICAgICAgNTAgfCAgICA0NzcKLy8gICAgICAgNjAgfCAgICA1NDAKLy8gICAgICAgNzAgfCAgICA2MDIKLy8gICAgICAgODAgfCAgICA2NjYKLy8gICAgICAgOTAgfCAgICA3MjkKLy8gICAgICAxMDAgfCAgICA3OTMKLy8gICAgICAxMTAgfCAgICA4NTcKLy8gICAgICAxMjAgfCAgICA5MjIKLy8gICAgICAxMzAgfCAgICA5ODcKLy8gICAgICAxNDAgfCAgIDEwNTMKLy8gICAgICAxNTAgfCAgIDExMTgKLy8gICAgICAxNjAgfCAgIDExODUKLy8gICAgICAxNzAgfCAgIDEyNTEKLy8gICAgICAxODAgfCAgIDEzMTgKLy8gICAgICAxOTAgfCAgIDEzODYKLy8gICAgICAyMDAgfCAgIDE0NTQKCi8vICAgICAxMDAwIHwgICA4MTQ0Ci8vICAgICAyMDAwIHwgIDIwMDIzCi8vICAgICAzMDAwIHwgIDM1ODA4Ci8vICAgICA0MDAwIHwgIDU1NTAwCi8vICAgICA1MDAwIHwgIDc5MDk3Ci8vICAgICA2MDAwIHwgMTA2NjAxCi8vICAgICA3MDAwIHwgMTM4MDExCi8vICAgICA4MDAwIHwgMTczMzI4Ci8vICAgICA5MDAwIHwgMjEyNTUwCi8vICAgIDEwMDAwIHwgMjU1Njc5Ci8vICAgIDExMDAwIHwgMzAyNzE1Ci8vICAgIDEyMDAwIHwgMzUzNjU2Ci8vICAgIDEzMDAwIHwgNDA4NTA0Ci8vICAgIDE0MDAwIHwgNDY3MjU3Ci8vICAgIDE1MDAwIHwgNTI5OTE4Ci8vICAgIDE2MDAwIHwgNTk2NDg0Ci8vICAgIDE3MDAwIHwgNjY2OTU3Ci8vICAgIDE4MDAwIHwgNzQxMzM2Ci8vICAgIDE5MDAwIHwgODE5NjIxCi8vICAgIDIwMDAwIHwgOTAxODEyCg==",
  },
]

const html = `<p>Examples of</p>
<ul>
<li>Reading and writing to memory with <code>assembly</code></li>
<li>Memory layout in Solidity of different data types</li>
<li>Memory management for external calls</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

<span class="hljs-comment">// Memory layout</span>
<span class="hljs-comment">// array of length 2**256 (32 bytes), each element stores 1 byte (0x00 to 0xff)</span>
<span class="hljs-comment">// index     0    1    2   ...   0xfff...fff = 2**256 - 1</span>
<span class="hljs-comment">// memory | 00 | 00 | 00 | ... | 00 |</span>

<span class="hljs-comment">// Reserved slots</span>
<span class="hljs-comment">// 0x00 - 0x3f (64 bytes): scratch space for hashing methods</span>
<span class="hljs-comment">// 0x40 - 0x5f (32 bytes): free memory pointer - pointer to next available location in memory to store data</span>
<span class="hljs-comment">// 0x60 - 0x7f (32 bytes): zero slot - used as initial value for dynamic memory arrays and should never be written to</span>

<span class="hljs-comment">// Free memory pointer (0x40)</span>
<span class="hljs-comment">// 0x80 = Free memory pointer initially points here</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemBasic</span> </span>{
    <span class="hljs-comment">// mstore(p, v) = store 32 bytes to memory starting at memory location p</span>
    <span class="hljs-comment">// mload(p) = load 32 bytes from memory starting at memory location p</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_1</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> b32</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Free memory pointer</span>
            <span class="hljs-comment">// p = 0x80</span>
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-built_in">mstore</span>(p, <span class="hljs-number">0xababab</span>)
            b32 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(p)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_2</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0x11</span>)
            <span class="hljs-comment">// index: 32 bytes of data stored in memory from index</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000011</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">1</span>, <span class="hljs-number">0x22</span>)
            <span class="hljs-comment">//           0 1</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-comment">//  0x20: 0x2200000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">2</span>, <span class="hljs-number">0x33</span>)
            <span class="hljs-comment">//           0 1 2</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-comment">//  0x20: 0x0033000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">3</span>, <span class="hljs-number">0x44</span>)
            <span class="hljs-comment">//           0 1 2 3</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-comment">//  0x20: 0x0000440000000000000000000000000000000000000000000000000000000000</span>
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemStruct</span> </span>{
    <span class="hljs-comment">// Memory data is not packed - all data stored in chunks of 32 bytes</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Point</span> {
        <span class="hljs-keyword">uint256</span> x;
        <span class="hljs-keyword">uint32</span> y;
        <span class="hljs-keyword">uint32</span> z;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_read</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y, <span class="hljs-keyword">uint256</span> z</span>)
    </span>{
        <span class="hljs-comment">// Point is loaded to memory starting at 0x80</span>
        <span class="hljs-comment">// 0x80 = initial free memory</span>
        Point <span class="hljs-keyword">memory</span> p <span class="hljs-operator">=</span> Point(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// load 32 bytes starting from 0x80</span>
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x80</span>)
            <span class="hljs-comment">// load 32 bytes starting from 0xa0 (0x80 + 32 = 0xa0)</span>
            y <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xa0</span>)
            <span class="hljs-comment">// load 32 bytes starting from 0xc0 (0xa0 + 32 = 0xc0)</span>
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xc0</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_write</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> free_mem_ptr, <span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y, <span class="hljs-keyword">uint256</span> z</span>)
    </span>{
        <span class="hljs-comment">// Allocates memory 0x80 to 0xdf to Point</span>
        <span class="hljs-comment">// Free memory pointer = 0xdf + 1 = 0xe0</span>
        Point <span class="hljs-keyword">memory</span> p;

        <span class="hljs-comment">// Write</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// store to 0x80</span>
            <span class="hljs-built_in">mstore</span>(p, <span class="hljs-number">11</span>)
            <span class="hljs-comment">// store to 0xa0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(p, <span class="hljs-number">0x20</span>), <span class="hljs-number">22</span>)
            <span class="hljs-comment">// store to 0xc0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(p, <span class="hljs-number">0x40</span>), <span class="hljs-number">33</span>)
            <span class="hljs-comment">// 0xe0</span>
            free_mem_ptr <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
        }

        x <span class="hljs-operator">=</span> p.x;
        y <span class="hljs-operator">=</span> p.y;
        z <span class="hljs-operator">=</span> p.z;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemFixedArray</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_read</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> a0, <span class="hljs-keyword">uint256</span> a1, <span class="hljs-keyword">uint256</span> a2</span>)
    </span>{
        <span class="hljs-comment">// arr is loaded to memory starting at 0x80</span>
        <span class="hljs-comment">// Each array element is stored as 32 bytes</span>
        <span class="hljs-keyword">uint32</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> [<span class="hljs-keyword">uint32</span>(<span class="hljs-number">1</span>), <span class="hljs-keyword">uint32</span>(<span class="hljs-number">2</span>), <span class="hljs-keyword">uint32</span>(<span class="hljs-number">3</span>)];

        <span class="hljs-keyword">assembly</span> {
            a0 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x80</span>)
            a1 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xa0</span>)
            a2 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xc0</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_write</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> a0, <span class="hljs-keyword">uint256</span> a1, <span class="hljs-keyword">uint256</span> a2</span>)
    </span>{
        <span class="hljs-keyword">uint32</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">memory</span> arr;

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// 0x80</span>
            <span class="hljs-built_in">mstore</span>(arr, <span class="hljs-number">11</span>)
            <span class="hljs-comment">// 0xa0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x20</span>), <span class="hljs-number">22</span>)
            <span class="hljs-comment">// 0xc0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x40</span>), <span class="hljs-number">33</span>)
        }

        a0 <span class="hljs-operator">=</span> arr[<span class="hljs-number">0</span>];
        a1 <span class="hljs-operator">=</span> arr[<span class="hljs-number">1</span>];
        a2 <span class="hljs-operator">=</span> arr[<span class="hljs-number">2</span>];
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemDynamicArray</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_read</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> p, <span class="hljs-keyword">uint256</span> len, <span class="hljs-keyword">uint256</span> a0, <span class="hljs-keyword">uint256</span> a1, <span class="hljs-keyword">uint256</span> a2</span>)
    </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](<span class="hljs-number">5</span>);
        arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">11</span>);
        arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">22</span>);
        arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">33</span>);
        arr[<span class="hljs-number">3</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">44</span>);
        arr[<span class="hljs-number">4</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">55</span>);

        <span class="hljs-keyword">assembly</span> {
            p <span class="hljs-operator">:=</span> arr
            <span class="hljs-comment">// 0x80</span>
            len <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(arr)
            <span class="hljs-comment">// 0xa0</span>
            a0 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x20</span>))
            <span class="hljs-comment">// 0xc0</span>
            a1 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x40</span>))
            <span class="hljs-comment">// 0xe0</span>
            a2 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x60</span>))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_write</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> p, <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](<span class="hljs-number">0</span>);

        <span class="hljs-keyword">assembly</span> {
            p <span class="hljs-operator">:=</span> arr
            <span class="hljs-comment">// Store length of arr</span>
            <span class="hljs-built_in">mstore</span>(arr, <span class="hljs-number">3</span>)
            <span class="hljs-comment">// Store 1, 2, 3</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x20</span>), <span class="hljs-number">11</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x40</span>), <span class="hljs-number">22</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x60</span>), <span class="hljs-number">33</span>)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x80</span>))
        }

        <span class="hljs-comment">// Data will be ABI encoded when arr is returned to caller</span>
        <span class="hljs-keyword">return</span> (p, arr);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemInternalFuncReturn</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">internal_func_return_val</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xababab</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_val</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// 0xababab will be stored in top of the stack</span>
        internal_func_return_val();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">internal_func_return_mem</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes32</span>[](<span class="hljs-number">3</span>);
        arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xaaa</span>));
        arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xbbb</span>));
        arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xccc</span>));
        <span class="hljs-keyword">return</span> arr;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_mem</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> len, <span class="hljs-keyword">bytes32</span> a0, <span class="hljs-keyword">bytes32</span> a1, <span class="hljs-keyword">bytes32</span> a2</span>)
    </span>{
        <span class="hljs-comment">// Stores 0x80 to top of the stack</span>
        <span class="hljs-comment">// 0x80 = memory pointer to beginning of arr</span>
        internal_func_return_mem();
        <span class="hljs-comment">// Read data from arr, initialized in internal_func_return_mem, using assembly</span>
        <span class="hljs-keyword">assembly</span> {
            len <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x80</span>)
            a0 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xa0</span>)
            a1 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xc0</span>)
            a2 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xe0</span>)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ABIEncode</span> </span>{
    <span class="hljs-comment">// js code to split string into chunks of length 64</span>
    <span class="hljs-comment">// str.match(/.{1,64}/g)</span>

    <span class="hljs-comment">// Value types &lt; 32 bytes -&gt; zero padded on the left side</span>
    <span class="hljs-comment">// 0x000000000000000000000000abababababababababababababababababababab</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_addr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">address</span> addr <span class="hljs-operator">=</span> <span class="hljs-number">0xABaBaBaBABabABabAbAbABAbABabababaBaBABaB</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(addr);
    }

    <span class="hljs-comment">// Fixed sized bytes -&gt; zero padded on the righ side</span>
    <span class="hljs-comment">// 0xaabbccdd00000000000000000000000000000000000000000000000000000000</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_bytes4</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes4</span> b4 <span class="hljs-operator">=</span> <span class="hljs-number">0xaabbccdd</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(b4);
    }

    <span class="hljs-comment">// Dynamic size types</span>
    <span class="hljs-comment">// offset | length | data</span>
    <span class="hljs-comment">// offset = 32 bytes index where data starts</span>
    <span class="hljs-comment">// length = 32 bytes data length</span>

    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000020</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   ababab0000000000000000000000000000000000000000000000000000000000</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_bytes</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> b <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(<span class="hljs-number">3</span>);
        b[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        b[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        b[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(b);
    }

    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000020</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_uint8_arr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">uint8</span>[] <span class="hljs-keyword">memory</span> a <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint8</span>[](<span class="hljs-number">3</span>);
        a[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        a[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
        a[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(a);
    }

    <span class="hljs-comment">// Fixed size arrays</span>
    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_uint256_fixed_size_arr</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">uint8</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">memory</span> a;
        a[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        a[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
        a[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(a);
    }

    <span class="hljs-comment">// Struct</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Point</span> {
        <span class="hljs-keyword">uint256</span> x;
        <span class="hljs-keyword">uint128</span> y;
        <span class="hljs-keyword">uint128</span> z;
    }

    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_struct</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        Point <span class="hljs-keyword">memory</span> p <span class="hljs-operator">=</span> Point(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(p);
    }

    <span class="hljs-comment">// Dynamic sized array of structs</span>
    <span class="hljs-comment">// offset | length | struct data</span>
    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000020</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000004</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000005</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000006</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000007</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000008</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000009</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_struct_array</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        Point[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Point[](<span class="hljs-number">3</span>);
        arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> Point(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);
        arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> Point(<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>);
        arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> Point(<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(arr);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemReturn</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_return_vals</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-comment">// return(start, len) - Halt execution and return data stored in memory from start to start + len</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">11</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0xa0</span>, <span class="hljs-number">22</span>)
            <span class="hljs-keyword">return</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x40</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_return_dyn_arr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// ABI encode uint256[] array with 3 elements 11, 22 and 33</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// offset</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x20</span>)
            <span class="hljs-comment">// length</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x20</span>), <span class="hljs-number">3</span>)
            <span class="hljs-comment">// array elements</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x40</span>), <span class="hljs-number">11</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x60</span>), <span class="hljs-number">22</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x80</span>), <span class="hljs-number">33</span>)
            <span class="hljs-comment">// No need to update free memory pointer - function execution ends here</span>
            <span class="hljs-keyword">return</span>(<span class="hljs-number">0x80</span>, <span class="hljs-built_in">mul</span>(<span class="hljs-number">5</span>, <span class="hljs-number">0x20</span>))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_return</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-comment">// Returns (11, 22)</span>
        test_return_vals();
        <span class="hljs-comment">// This code will never execute</span>
        <span class="hljs-keyword">return</span> (<span class="hljs-number">333</span>, <span class="hljs-number">444</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemRevert</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_revert</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// revert(start, len) - Revert execution and return data store in memory from start to start + len</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-string">"ERROR HERE"</span>)
            <span class="hljs-keyword">revert</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x20</span>)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemKeccak</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_keccak</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-comment">// keccak256(start, len) - Keccak256 from data in memory from start to start + len</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">1</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0xa0</span>, <span class="hljs-number">2</span>)

            <span class="hljs-keyword">let</span> h <span class="hljs-operator">:=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x40</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0xc0</span>, h)

            <span class="hljs-keyword">return</span>(<span class="hljs-number">0xc0</span>, <span class="hljs-number">0x20</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">keccak</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-keyword">uint256</span>(<span class="hljs-number">2</span>)));
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Target</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">return_uint256</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">return_bytes</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> out <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(n);
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> n; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            out[i] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        }
        <span class="hljs-keyword">return</span> out;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">return_uint256_arr</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> n</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> out <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](n);
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> n; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            out[i] <span class="hljs-operator">=</span> i <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
        }
        <span class="hljs-keyword">return</span> out;
    }
}

<span class="hljs-comment">// calldatacopy(p, start, size) - Copy start to start + size calldata to memory starting at pointer p</span>
<span class="hljs-comment">// returndatasize - Get size of returned data from call, staticcall or delegatecall</span>
<span class="hljs-comment">// returndatacopy(p, start, size) - Copy start to start + size return data to memory starting at pointer p</span>
<span class="hljs-comment">// call(g, a, v, in, in_size, out, out_size)</span>
<span class="hljs-comment">// - call contract at a, use max g gas, send v wei</span>
<span class="hljs-comment">// - with input from memory in to in + in_size</span>
<span class="hljs-comment">// - use memory out to out + out_size for output</span>
<span class="hljs-comment">// staticcall(g, a, in, in_size, out, out_size) - read only version of call</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">YulStaticCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_staticcall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-comment">// Copy calldata to memory</span>
            <span class="hljs-built_in">calldatacopy</span>(p, data.<span class="hljs-built_in">offset</span>, data.<span class="hljs-built_in">length</span>)

            <span class="hljs-keyword">let</span> ok <span class="hljs-operator">:=</span> <span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">gas</span>(), a, p, data.<span class="hljs-built_in">length</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(ok) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }

            <span class="hljs-comment">// p := mload(0x40)</span>
            <span class="hljs-keyword">let</span> return_data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">returndatasize</span>()
            <span class="hljs-comment">// Copy returned data to memory</span>
            <span class="hljs-comment">// Is it safe to overwrite memory that was used for inputs?</span>
            <span class="hljs-built_in">returndatacopy</span>(p, <span class="hljs-number">0</span>, return_data_size)
            <span class="hljs-keyword">return</span>(p, return_data_size)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abi_decode_uint256</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        test_staticcall(a, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abi_decode_bytes</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        test_staticcall(a, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abi_decode_uint256_arr</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        test_staticcall(a, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_staticcall_return_abi_encoded_bytes</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> addr,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> out, <span class="hljs-keyword">uint256</span> return_data_size</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-comment">// Copy calldata to memory</span>
            <span class="hljs-built_in">calldatacopy</span>(p, data.<span class="hljs-built_in">offset</span>, data.<span class="hljs-built_in">length</span>)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(p, data.<span class="hljs-built_in">length</span>))

            <span class="hljs-keyword">let</span> ok <span class="hljs-operator">:=</span> <span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">gas</span>(), addr, p, data.<span class="hljs-built_in">length</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(ok) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }

            <span class="hljs-comment">// return_data_size = 32  for calling Target.return_uint256 -&gt; uint256</span>
            <span class="hljs-comment">//                  = 96  for calling Target.return_bytes -&gt; bytes[] (32 offset, 32 length, 3 bytes padded to 32)</span>
            <span class="hljs-comment">//                  = 160 for calling Target.return_uint256_arr -&gt; uint256[] (32 offset, 32 length, 32 x 3 elements)</span>
            return_data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">returndatasize</span>()
            <span class="hljs-comment">// Store length of return data to out</span>
            <span class="hljs-comment">// pointer to out = 0x60 (zero slot)</span>
            <span class="hljs-built_in">mstore</span>(out, return_data_size)
            <span class="hljs-comment">// Copy return data to out</span>
            <span class="hljs-built_in">returndatacopy</span>(<span class="hljs-built_in">add</span>(out, <span class="hljs-number">0x20</span>), <span class="hljs-number">0</span>, return_data_size)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(out, <span class="hljs-built_in">add</span>(<span class="hljs-number">0x20</span>, return_data_size)))
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">return</span> count;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">YulCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_call</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> out</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// 0x80</span>
            <span class="hljs-keyword">let</span> data_ptr <span class="hljs-operator">:=</span> data
            <span class="hljs-comment">// 0x60</span>
            <span class="hljs-keyword">let</span> out_ptr <span class="hljs-operator">:=</span> out

            <span class="hljs-keyword">let</span> data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(data)
            <span class="hljs-keyword">let</span> data_start <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(data, <span class="hljs-number">0x20</span>)
            <span class="hljs-keyword">let</span> ok <span class="hljs-operator">:=</span> <span class="hljs-built_in">call</span>(<span class="hljs-built_in">gas</span>(), a, <span class="hljs-built_in">callvalue</span>(), data_start, data_size, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(ok) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }

            <span class="hljs-keyword">let</span> return_data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">returndatasize</span>()
            <span class="hljs-comment">// Store length of return data to out</span>
            <span class="hljs-built_in">mstore</span>(out, return_data_size)
            <span class="hljs-comment">// Copy return data to out</span>
            <span class="hljs-built_in">returndatacopy</span>(<span class="hljs-built_in">add</span>(out, <span class="hljs-number">0x20</span>), <span class="hljs-number">0</span>, return_data_size)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(out, <span class="hljs-built_in">add</span>(<span class="hljs-number">0x20</span>, return_data_size)))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_inc</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> counter</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> count</span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res <span class="hljs-operator">=</span> test_call(counter, <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Counter.inc, ()));
        count <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">uint256</span>));
    }
}

<span class="hljs-comment">// Memory expansion gas cost</span>
<span class="hljs-comment">// Gas cost is quadratic to memory allocation.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemExp</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">alloc_mem</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">uint256</span> gas_start <span class="hljs-operator">=</span> <span class="hljs-built_in">gasleft</span>();
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](n);
        <span class="hljs-keyword">uint256</span> gas_end <span class="hljs-operator">=</span> <span class="hljs-built_in">gasleft</span>();
        <span class="hljs-keyword">return</span> gas_start <span class="hljs-operator">-</span> gas_end;
    }
}

<span class="hljs-comment">// arr size | gas</span>
<span class="hljs-comment">//        0 |    120</span>
<span class="hljs-comment">//        1 |    178</span>
<span class="hljs-comment">//       10 |    232</span>
<span class="hljs-comment">//       20 |    293</span>
<span class="hljs-comment">//       30 |    354</span>
<span class="hljs-comment">//       40 |    415</span>
<span class="hljs-comment">//       50 |    477</span>
<span class="hljs-comment">//       60 |    540</span>
<span class="hljs-comment">//       70 |    602</span>
<span class="hljs-comment">//       80 |    666</span>
<span class="hljs-comment">//       90 |    729</span>
<span class="hljs-comment">//      100 |    793</span>
<span class="hljs-comment">//      110 |    857</span>
<span class="hljs-comment">//      120 |    922</span>
<span class="hljs-comment">//      130 |    987</span>
<span class="hljs-comment">//      140 |   1053</span>
<span class="hljs-comment">//      150 |   1118</span>
<span class="hljs-comment">//      160 |   1185</span>
<span class="hljs-comment">//      170 |   1251</span>
<span class="hljs-comment">//      180 |   1318</span>
<span class="hljs-comment">//      190 |   1386</span>
<span class="hljs-comment">//      200 |   1454</span>

<span class="hljs-comment">//     1000 |   8144</span>
<span class="hljs-comment">//     2000 |  20023</span>
<span class="hljs-comment">//     3000 |  35808</span>
<span class="hljs-comment">//     4000 |  55500</span>
<span class="hljs-comment">//     5000 |  79097</span>
<span class="hljs-comment">//     6000 | 106601</span>
<span class="hljs-comment">//     7000 | 138011</span>
<span class="hljs-comment">//     8000 | 173328</span>
<span class="hljs-comment">//     9000 | 212550</span>
<span class="hljs-comment">//    10000 | 255679</span>
<span class="hljs-comment">//    11000 | 302715</span>
<span class="hljs-comment">//    12000 | 353656</span>
<span class="hljs-comment">//    13000 | 408504</span>
<span class="hljs-comment">//    14000 | 467257</span>
<span class="hljs-comment">//    15000 | 529918</span>
<span class="hljs-comment">//    16000 | 596484</span>
<span class="hljs-comment">//    17000 | 666957</span>
<span class="hljs-comment">//    18000 | 741336</span>
<span class="hljs-comment">//    19000 | 819621</span>
<span class="hljs-comment">//    20000 | 901812</span>
</code></pre><h3>References</h3>
<p><a href="https://docs.soliditylang.org/en/latest/internals/layout_in_memory.html">Solidity document</a></p>
<p><a href="https://www.evm.codes/">EVM Codes</a></p>
`

export default html
