import * as b from "bobril";

export interface IDynamicData<ModuleType> {
    module: Promise<ModuleType>;
}

interface IDynamicContext<ModuleType> extends b.IBobrilCtx {
    data: IDynamicData<ModuleType>;
    module: ModuleType|null
}

export function Dynamic<ModuleType>(): (data: IDynamicData<ModuleType>) => b.IBobrilNode {
    return b.createComponent({
        init(ctx: IDynamicContext<ModuleType>) {
            debugger;
            ctx.data.module
                .then((module) => {
                    setTimeout(() => {
                        ctx.module = module;
                        b.invalidate(ctx);
                    });
                })
                .catch(() => null)
        },
        render(ctx: IDynamicContext<ModuleType>, me: b.IBobrilNode) {
            me.children = ctx.module ? ctx.module["default"]() : "loading";
        }
    });
}
