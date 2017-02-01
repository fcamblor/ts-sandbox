

import {IFoo} from "./foo/Foo";

declare interface IApp {
    foo(): IFoo;
}

interface Window {
    app: IApp;
}
