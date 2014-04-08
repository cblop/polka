
var delay;
var content = "var canvas = document.getElementById('pane');\n" +
	"var context = canvas.getContext('2d');\n\n" +
	"context.fillStyle = 'rgb(250,0,0)';\n" +
	"context.fillRect(10, 10, 55, 50);\n" +
	"context.fillStyle = 'rgba(0, 0, 250, 0.5)';\n" +
	"context.fillRect(30, 30, 55, 50);";
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
	mode: 'text/javascript', 
	theme: 'base16-monokai-light'
	});
editor.setValue(content);
editor.on("change", function() {
	clearTimeout(delay);
	delay = setTimeout(updatePreview, 100);
});

function updatePreview() {
	var prefix = "<!doctype html>" +
		"<html>" +
		"<head>" +
		"<meta charset=utf-8>" +
		"</head>" +
		"<body>" +
		"<canvas id=pane width=100% height=100%></canvas>" +
		"<script>";
	var suffix = "</script>" +
		"</body>" +
		"</html>" +
		"</textarea>";
	var previewFrame = document.getElementById('preview');
	var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
	preview.open();
	preview.write(prefix + editor.getValue() + suffix);
	preview.close();
}
setTimeout(updatePreview, 100);
