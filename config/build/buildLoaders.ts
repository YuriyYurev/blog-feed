import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  // если не используем typescript, то нужен babel
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typeScriptLoader, cssLoader];
}
