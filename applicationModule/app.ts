import * as b from "bobril";
import {Dynamic} from "./dynamicWrapper";


const masterPage = b.createComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            {tag: "div", children: "Dynamic import on click"},
            me.data.activeRouteHandler()
        ]
    }
});

const app = b.component(() => [
    b.link(b.styledDiv({tag: "div", children: "todo"}, {textDecoration: "underline"}), "todo"),
    b.link(b.styledDiv({tag: "div", children: "counter"}, {textDecoration: "underline"}), "counter"),

]);

const todo = b.component(() => {
    return [
        b.link(b.styledDiv({tag: "div", children: "⬅"}, {fontSize: "30px"}), "/"),
        { tag: "h1", children: "Todo" },
        Dynamic()({
            module: import("anotherModule")
        })]
});

const counter = b.component(() => {
    return [
        b.link(b.styledDiv({tag: "div", children: "⬅"}, {fontSize: "30px"}), "/"),
        { tag: "h1", children: "Counter" },
        Dynamic()({
            module: import("counter")
        })]
});


b.routes(b.route({handler: masterPage}, [
    b.route({ url: "/", name: "todo", handler: app }),
    b.route({ url: "/todo", name: "todo", handler: todo }),
    b.route({ url: "/counter", name: "counter", handler: counter })
]));
