import React, { useState } from "react";
import { Card, Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";

const Armstrong = () => {
    const [mode, setMode] = useState("check"); // "check" or "generate"
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    // Function to check if a number is Armstrong
    const isArmstrong = (num) => {
        const digits = num.toString().split("");
        const power = digits.length;
        const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
        return sum === Number(num);
    };

    // Function to generate Armstrong numbers up to a limit
    const generateArmstrongNumbers = (limit) => {
        const numbers = [];
        for (let i = 1; i <= limit; i++) {
            if (isArmstrong(i)) numbers.push(i);
        }
        return numbers;
    };

    // Handle button click
    const handleAction = () => {
        if (!inputValue) {
            setResult("");
            return;
        }

        const n = parseInt(inputValue);

        if (mode === "check") {
            setResult(
                isArmstrong(n)
                    ? `${n} is an Armstrong Number ✅`
                    : `${n} is NOT an Armstrong Number ❌`
            );
        } else if (mode === "generate") {
            const list = generateArmstrongNumbers(n);
            setResult(
                list.length > 0
                    ? `Armstrong Numbers up to ${n}: ${list.join(", ")}`
                    : "No Armstrong numbers found."
            );
        }
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Armstrong Number Utility</Card.Title>

                {/* Mode Selection */}
                <ButtonGroup className="mb-3">
                    <ToggleButton
                        id="mode-check"
                        type="radio"
                        variant="outline-primary"
                        name="mode"
                        value="check"
                        checked={mode === "check"}
                        onChange={(e) => setMode(e.currentTarget.value)}
                    >
                        Check Number
                    </ToggleButton>

                    <ToggleButton
                        id="mode-generate"
                        type="radio"
                        variant="outline-primary"
                        name="mode"
                        value="generate"
                        checked={mode === "generate"}
                        onChange={(e) => setMode(e.currentTarget.value)}
                    >
                        Generate Numbers
                    </ToggleButton>
                </ButtonGroup>

                {/* Input Field */}
                <Form.Group className="mb-2">
                    <Form.Control
                        type="number"
                        placeholder={mode === "check" ? "Enter a number" : "Enter upper limit"}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Form.Group>

                {/* Action Button */}
                <Button onClick={handleAction}>
                    {mode === "check" ? "Check" : "Generate"}
                </Button>

                {/* Result */}
                {result && <Card.Text className="mt-3">{result}</Card.Text>}
            </Card.Body>
        </Card>
    );
};

export default Armstrong;
