import { RuleConverter } from "../../converter";

export const convertJsxNoLambda: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-no-lambda",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
