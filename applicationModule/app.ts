import * as b from "bobril";
import {Dynamic} from "./dynamicWrapper";

b.init(() => {
    return [
        { tag: "h1", children: "Hello World!" },
        {tag: "div", children: Dynamic()({
                module: import("anotherModule")
            })},
        {tag: "div", children: Dynamic()({
                module: import("counter")
            })}
    ]
});