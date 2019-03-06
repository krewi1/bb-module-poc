import * as b from 'bobril';

export default b.component(function CounterModule() {
    const [count, setCounter] = b.useState(0);

    return [
        b.styledDiv(count),
        {tag: "button", children: "+", onClick: () => setCounter(prevstate => prevstate + 1)},
        {tag: "button", children: "-", onClick: () => setCounter(prevstate => prevstate - 1)},
    ]
})
