import { UnsafeEventConsumer, ClickEvent, BaseEvent } from '../src/ex04-bivariance';

const clickHandler: UnsafeEventConsumer<ClickEvent> = {
    // @ts-expect-error - Once fixed to strict syntax, UnsafeEventConsumer will error if given wrong types.
    handle: (e: ClickEvent) => console.log(e.x)
};

// @ts-expect-error - This assignment should be explicitly blocked by TS once bivariance is removed
const safeBaseConsumer: UnsafeEventConsumer<BaseEvent> = clickHandler;
