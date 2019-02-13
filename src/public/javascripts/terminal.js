/*
Author: Eric Udlis
Purpose: Handle the integrated terminal
*/
const os = require('os');
const pty = require('node-pty');
const Terminal = require('xterm').Terminal;
const fit = require('xterm/lib/addons/fit/fit');

Terminal.applyAddon(fit);

const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
let ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 240,
  rows: 30,
  cwd: process.cwd(),
  env: process.env,
});

const xterm = new Terminal();
xterm.open(document.getElementById('terminal'));
xterm.fit();

xterm.on('data', (e) => {
  ptyProcess.write(e);
});

ptyProcess.on('data', (e) =>{
  xterm.write(e);
})