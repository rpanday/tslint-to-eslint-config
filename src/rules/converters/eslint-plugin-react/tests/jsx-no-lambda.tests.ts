import { convertJsxNoLambda } from "../jsx-no-lambda";

describe(convertJsxNoLambda, () => {
    test("conversion without arguments", () => {
        const result = convertJsxNoLambda({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-no-lambda",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
