export const operatorResolver = (operator: string) => {
    switch (operator) {
        case "sin": return "sin(x deg)";

        case "cos": return "cos(x deg)";

        case "tan": return "tan(x deg)";

        case "sin": return "sec(x deg)";

        case "cosec": return "cosec(x deg)";

        case "cot": return "cot(x deg)";

        case "cot^-1": return "cot^-1(x)";

        case "cosec^-1": return "cosec^-1(x)";

        case "sec^-1": return "sec^-1(x)";

        case "sin^-1": return "sin^-1(x)";

        case "cos^-1": return "cos^-1(x)";

        case "tan^-1": return "tan^-1(x)";

        case "sqrt": return "sqrt(x)";



        case "ln": return "ln(x)";

        case "log10": return "log10(x)";

        case "^": return "power 'x'";

        case "mod": return " % x (calculate remainder)";
        case "pi": return "pi";
        case "√": return "square root of 'x'"
        case "n√": return "nth root of x";
        case "logb(x)": return "logb(x)"
    }
    return "";
}
export const getExpressionFromOperator = (value: string, operator: string, value2 = "") => {
    let val = parseFloat(value);
    switch (operator) {
        case "sin(x deg)": return `sin(${val} deg)`;
        case "cos(x deg)": return `cos(${val} deg)`;
        case "tan(x deg)": return `tan(${val} deg)`;
        case "cot(x deg)": return `cot(${val} deg)`;
        case "sec(x deg)": return `sec(${val} deg)`;
        case "cosec(x deg)": return `csc(${val} deg)`;
        case "cosec^-1(x)": return `acsc(${val})`;
        case "sec^-1(x)": return `asec(${val})`;
        case "cot^-1(x)": return `acot(${val})`;
        case "tan^-1(x)": return `atan(${val})`;
        case "sin^-1(x)": return `asin(${val})`;
        case "cos^-1(x)": return `acos(${val})`;
        case "power 'x'": return `^(${val})`;
        case "square root of 'x'": return `sqrt(${val})`;
        case "nth root of x": return `nthRoot(${val},${value2})`
        case "ln(x)": return `log(${val})`
        case "log10(x)": return `log10(${val})`
        case "pi": return `pi`
        case "logb(x)": return `log(${val},${value2})`
        case " % x (calculate remainder)": return `%${val}`
    }
    return "0";
}