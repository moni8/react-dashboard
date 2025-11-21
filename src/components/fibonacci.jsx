import React, { useContext, useState, useTransition } from "react";
import { NumberContext } from "../context/numberContext";
import { Card, Form, Button, Spinner } from "react-bootstrap";

const Fibonacci = () => {
    const { fibNumber, setFibNumber, fibSeries, setFibSeries } = useContext(NumberContext);
    const [isPending, startTransition] = useTransition();

    const generateFibonacci = (n) => {
        const series = [];
        let a = 0, b = 1;
        for (let i = 0; i < n; i++) {
            series.push(a);
            [a, b] = [b, a + b];
        }
        return series;
    };

    const handleGenerate = () => {
        const n = parseInt(fibNumber);
        if (n > 0) {
            startTransition(() => {
                setFibSeries(generateFibonacci(n));
            });
        } else {
            setFibSeries([]);
        }
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Fibonacci Series</Card.Title>
                <Form.Group className="mb-2">
                    <Form.Control
                        type="number"
                        value={fibNumber}
                        placeholder="Enter a positive number"
                        onChange={(e) => setFibNumber(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={handleGenerate} disabled={isPending}>
                    {isPending ? <Spinner animation="border" size="sm" /> : "Generate"}
                </Button>
                {fibSeries.length > 0 && (
                    <Card.Text className="mt-2">
                        Series: {fibSeries.join(", ")}
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
};

export default Fibonacci;
