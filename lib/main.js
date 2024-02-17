/**
 * @fileoverview This file serves as the main module for the @basd/cli project. 
 * It aggregates various command-line interface (CLI) utilities into a single, cohesive API.
 */

// External Dependencies

/**
 * Core utility wrapper around lodash for CLI operations.
 * @link https://npmjs.com/package/basd
 * @type {Object}
 */
const cli = require('basd')

/**
 * ShellJS module for executing shell commands through Node.js.
 * @link https://npmjs.com/package/shelljs
 * @type {Object}
 */
const shell = require('shelljs')

/**
 * Prompts module for interactive command line user interfaces.
 * @link https://npmjs.com/package/prompts
 * @type {Object}
 */
const prompts = require('prompts')

/**
 * cli-color provides color and formatting for CLI output.
 * @link https://npmjs.com/package/cli-color
 * @type {Object}
 */
const colors = require('cli-color')

/**
 * Commander.js, a complete solution for node.js command-line interfaces.
 * @link https://npmjs.com/package/commander
 * @type {Object}
 */
const { program, Command } = require('commander')


/**
 * Spinner and Progress components from @basd/spinner.
 * Spinner provides an interactive CLI spinner.
 * Progress provides a CLI progress bar.
 * @link https://npmjs.com/package/@basd/spinner
 * @type {Object}
 */
const { Spinner, spinner, Progress } = require('@basd/spinner')

// Module Augmentation

// Assigning imported modules to the cli object for unified export.
cli.Command = Command
cli.program = program
cli.Progress = Progress
cli.Spinner = Spinner
cli.spinner = spinner
cli.prompts = prompts
cli.colors = colors
cli.shell = shell

/**
 * Exported cli module, aggregating various utilities for CLI development.
 * Includes commander for command-line interfaces, 
 * Spinner and Progress for interactive elements, 
 * prompts for user input, colors for styled output, 
 * and shell for executing shell commands.
 * 
 * @module cli
 */
module.exports = cli
