'use strict';
const fs = require('fs');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', {type: String, required: false});
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the outstanding ' + chalk.red('generator-vue-ts') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name(project will be generated under this folder)',
        default: this.options.appname || this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: 'A Vue.js project'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Your name',
        default: this.username
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your email',
        default: ''
      },
      {
        type: 'confirm',
        name: 'private',
        message: 'Is this a private project?',
        default: true
      },
      {
        type: 'confirm',
        name: 'unitTest',
        message: 'Would you like to enable the Unit Test feature?',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
      this.log('app', props.name, 'will be created!');
    });
  }

  configuring() {
    // Try to create folder
    let isExist = fs.existsSync(this.destinationPath(this.props.name));
    if (isExist && fs.statSync(this.destinationPath(this.props.name)).isDirectory()) {
      this.log.error(`Directory [${this.props.name}] already exists`);
      process.exit(1);
    }
    this.destinationRoot(this.props.name);
    // Copy configuration files.
    [
      '.editorconfig', '.gitignore', '.postcssrc.js', 'tsconfig.json', 'tslint.json'
    ].forEach(
      file => this.fs.copy(this.templatePath(file), this.destinationPath(file))
    );
  }

  writing() {
    [
      'build', 'config'
    ].forEach(
      dir => this.fs.copy(this.templatePath(dir), this.destinationPath(dir))
    );
    if (this.props.unitTest) {
      this.fs.copy(this.templatePath('test/unit'), this.destinationPath('test/unit'));
    }
    // Copy dot hidden files.
    [
      'test/unit', 'static'
    ].forEach(
      dir => this.fs.copy(this.templatePath(dir, '.*'), this.destinationPath(dir))
    );
    // Copy templates
    [
      'src', 'index.html', 'package.json', 'README.md'
    ].forEach(
      path => this.fs.copyTpl(this.templatePath(path), this.destinationPath(path), this.props, {
        ignore: '*.png'
      })
    );
    this.fs.copy(this.templatePath('src/assets/*.png'), this.destinationPath('src/assets'));
  }

  install() {
    this.installDependencies();
  }

  end() {
    this.log.info('Type npm run dev to start! ');
  }
};
