import React, { useCallback, useMemo, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Display from "./Display";

const Parent = () => {
    const [salary, setSalary] = useState(2000);
    const [age, setAge] = useState(30);

    const incrementAge = useCallback(() => {
        setAge((oldAge) => oldAge + 5);
    });

    const incrementSalary = useCallback(() => {
        setSalary((oldSalary) => oldSalary + 100);
    });

    return (
        <div>
            <Title />
            <Display text="age" displayvalue={age} />
            <Button handleClick={incrementAge}>Update Age</Button>
            <Display text="salary" displayvalue={salary} />
            <Button handleClick={incrementSalary}>Update Salary</Button>
        </div>
    );
};

export default Parent;
