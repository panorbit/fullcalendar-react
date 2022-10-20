import HtmlWebpackPlugin = require("html-webpack-plugin");
export const mode: string;
export const devtool: string;
export const entry: string;
export namespace resolve {
    const extensions: string[];
}
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        use: string;
    } | {
        test: RegExp;
        use: string[];
        exclude?: undefined;
    })[];
}
export namespace output {
    const filename: string;
    const path: string;
}
export const plugins: HtmlWebpackPlugin[];
