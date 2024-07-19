// src/vscode-extension.ts

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "my-extension" is now active!');

    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        vscode.window.showInformationMessage('Hello from My Extension!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
