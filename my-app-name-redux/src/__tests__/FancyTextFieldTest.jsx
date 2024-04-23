import { render, screen } from "@testing-library/react";
import FancyTextField from "../components/bases/FancyTextField";
import React from "react";
//import { userEventApi } from "@testing-library/user-event/dist/cjs/setup/api.js";
import { userEvent } from "@testing-library/user-event";

describe("testFancyText", () => {
    it("Renders FancyTextField without errors", () => {
        render(<FancyTextField />);
        const input = screen.getByRole("textbox");
        expect(input).toBeTruthy();
    });
    it("Counter for FancyTextField is updated ", async () => {
        render(<FancyTextField limit={5} />);
        const input = screen.getByRole("textbox");
        expect(input).toBeTruthy();
        await userEvent.type(input, "hello");
        const counter = screen.getByText("5/5");
        expect(counter).toBeTruthy();
    });
})