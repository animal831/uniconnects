"use strict";
// src/vscode-extension.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
var vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "my-extension" is now active!');
    var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        vscode.window.showInformationMessage('Hello from My Extension!');
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
