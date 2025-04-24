import React from "react";
/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "./Banner";

/* eslint-env jest */

describe("Banner Component", () => {
    
    it("renders the title and subtitle", () => {
        render(<Banner title="Welcome" subtitle="Shop now" />);
        expect(screen.getByText("Welcome")).toBeInTheDocument();
        expect(screen.getByText("Shop now")).toBeInTheDocument();
    });

    it("renders the image when imageUrl is provided", () => {
        render(<Banner imageUrl="test-image.jpg" />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", "test-image.jpg");
    });

    it("calls onImageClick when the image is clickable and clicked", () => {
        const handleImageClick = jest.fn();
        render(
            <Banner
                imageUrl="test-image.jpg"
                isImageClickable={true}
                onImageClick={handleImageClick}
            />
        );
        const image = screen.getByRole("img");
        fireEvent.click(image);
        expect(handleImageClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onImageClick when the image is not clickable", () => {
        const handleImageClick = jest.fn();
        render(
            <Banner
                imageUrl="test-image.jpg"
                isImageClickable={false}
                onImageClick={handleImageClick}
            />
        );
        const image = screen.getByRole("img");
        fireEvent.click(image);
        expect(handleImageClick).not.toHaveBeenCalled();
    });

    it("renders the button when showButton is true", () => {
        render(<Banner showButton={true} buttonText="Click Me" />);
        const button = screen.getByRole("button", { name: "Click Me" });
        expect(button).toBeInTheDocument();
    });

    it("calls onButtonClick when the button is clicked", () => {
        const handleButtonClick = jest.fn();
        render(
            <Banner
                showButton={true}
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
            />
        );
        const button = screen.getByRole("button", { name: "Click Me" });
        fireEvent.click(button);
        expect(handleButtonClick).toHaveBeenCalledTimes(1);
    });

    it("does not render the button when showButton is false", () => {
        render(<Banner showButton={false} />);
        expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("does not render the image when imageUrl is not provided", () => {
        render(<Banner />);
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("does not render the title and subtitle when not provided", () => {
        render(<Banner />);
        expect(screen.queryByText("Welcome")).not.toBeInTheDocument();
        expect(screen.queryByText("Shop now")).not.toBeInTheDocument();
    });
});