function sayHello(args, terminal) {
    terminal.writeln("Hello World!");
}

export const hello = {"name": "hello", "fn": sayHello, "description": "Says hello"};