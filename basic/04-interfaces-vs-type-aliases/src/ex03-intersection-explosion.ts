/**
 * EXERCISE 3: Intersection Explosion
 * 
 * In large scale apps (like GraphQL auto-generated typings or UI component props),
 * engineers often use intersections (`A & B & C & D`) to compose types. 
 * TS must eagerly map and merge every property across all intersections, leading 
 * to O(N^2) or worse compile times.
 * 
 * Interfaces using `extends A, B, C, D` build a single flat object graph incrementally
 * and cache it heavily.
 * 
 * GOAL:
 * 1. Read the `MassiveComponentProps` type below. Notice it uses intersection `&`.
 * 2. Refactor it into an `interface` that `extends` the base types instead.
 * 3. Observe the type tests pass.
 */

// ------------------------------------------------------------------
// The Base Types
// ------------------------------------------------------------------

export interface StyleProps {
    color?: string;
    margin?: number;
    padding?: number;
}

export interface AriaProps {
    'aria-label'?: string;
    'aria-hidden'?: boolean;
}

export interface EventProps {
    onClick?: () => void;
    onHover?: () => void;
}

// ------------------------------------------------------------------
// The Anti-Pattern (Intersection Explosion Trigger)
// ------------------------------------------------------------------

// TODO: Refactor this from a intersected `type` to an `interface` 
// that uses `extends StyleProps, AriaProps, EventProps`
export type MassiveComponentProps = StyleProps & AriaProps & EventProps & {
    title: string;
};

// ------------------------------------------------------------------

export function renderComponent(props: MassiveComponentProps) {
    return `<div style="color: ${props.color}" aria-label="${props['aria-label']}">${props.title}</div>`;
}
