

import {IFoo} from "./foo/FooTypes";

declare interface IApp {
    foo(): IFoo;
}

interface Window {
    app: IApp;
}
