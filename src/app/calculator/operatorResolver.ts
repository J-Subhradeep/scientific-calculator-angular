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

        case "sqrt": return "sqrt(x)";

        case "log": return "log(x)";

        case "log10": return "log10(x)";

        case "^": return "power 'x'";

        case "mod": return "y % x";
        case "pi": return "pi"

    }
    return "";
}