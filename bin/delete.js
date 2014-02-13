#!/usr/bin/env node

var _ = require('underscore');
var config = require('..');
var env = require('superenv')('cfn');

config.setCredentials(env.accessKeyId, env.secretAccessKey);

var argv = require('optimist')
    .options('region', {
        describe: 'AWS region deployed the stack',
        demand: true,
        alias: 'r'
    })
    .options('name', {
        describe: 'Name of the AWS CloudFormation to deploy',
        demand: true,
        alias: 'n'
    })
    .argv;

config.deleteStack(argv, function(err) {
    console.log(err ? err : 'Deleted stack: ' + argv.name);
});
