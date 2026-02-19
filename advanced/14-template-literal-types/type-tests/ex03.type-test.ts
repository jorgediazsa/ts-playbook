import { NestedPaths, EventNames, on } from '../src/ex03-event-names';
import { Expect, Equal } from '../../../type-utils';

interface State {
    app: {
        theme: string;
        version: number;
    };
    user: {
        profile: {
            name: string;
        };
        isActive: boolean;
    };
}

// --- NestedPaths ---
type ExpectedPaths = 'app.theme' | 'app.version' | 'user.profile.name' | 'user.isActive';
type P1 = Expect<Equal<NestedPaths<State>, ExpectedPaths>>;

// --- EventNames ---
type ExpectedEvents = 'app.themeChanged' | 'app.versionChanged' | 'user.profile.nameChanged' | 'user.isActiveChanged';
type E1 = Expect<Equal<EventNames<State>, ExpectedEvents>>;

// --- Testing `on` Function ---
declare const state: State;
on(state, 'user.profile.nameChanged', () => { });
// @ts-expect-error
on(state, 'user.profileChanged', () => { }); // .profile is an object, not a leaf!
