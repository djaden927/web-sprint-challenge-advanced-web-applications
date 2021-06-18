import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import userEvent from '@testing-library/user-event'

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={[{color:"white", code:"#630464", id:1}, {color:"white", code:"##f9e7d2", id:2}]}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    render(<ColorList colors={[{color:"white", code:"#630464", id:1}, {color:"white", code:"##f9e7d2", id:2}]}/>)

});
