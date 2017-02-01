

declare interface IFoo {
    blah: string;
}

declare interface IApp {
    foo(): IFoo;
}

interface Window {
    app: IApp;
}
