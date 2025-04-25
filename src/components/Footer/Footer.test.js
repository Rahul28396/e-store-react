import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
    test("renders the footer with the correct text", () => {
        render(<Footer />);
        expect(screen.getByTestId("rights")).toBeInTheDocument();
        expect(screen.getByTestId("rights")).toHaveTextContent(
            `© ${new Date().getFullYear()} E-Store. All rights reserved.`
        );
    });
});