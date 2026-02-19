import { MassiveComponentProps } from '../src/ex03-intersection-explosion';

const validProps: MassiveComponentProps = {
    title: 'Hello',
    color: 'red',
    'aria-hidden': true,
    onClick: () => { }
};

// @ts-expect-error - title is missing
const missingProps: MassiveComponentProps = {
    color: 'blue'
};

// @ts-expect-error - invalid onClick payload
const invalidMethodProps: MassiveComponentProps = {
    title: 'X',
    onClick: (e: any) => e.preventDefault()
};
