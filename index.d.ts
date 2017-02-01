

declare interface IApp {
    foo(): IFoo;
}

interface Window {
    app: IApp;
}
