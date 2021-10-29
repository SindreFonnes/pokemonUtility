import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

function HtmlRootComponent() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>Hello world</title>
			</head>
			<body>
				<App />
			</body>
		</html>
	);
}

function render() {
	const html = ReactDOMServer.renderToStaticMarkup(<HtmlRootComponent />);
	const htmlWDoc = "<!DOCTYPE html>" + html;
	const prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
	const outputFile = "./output.html";
	fs.writeFileSync(outputFile, prettyHtml);
	console.log(`Wrote ${outputFile}`);
}

render();
