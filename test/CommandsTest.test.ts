/// <reference path="../typings/tsd.d.ts" />

import chai = require("chai");

import View = require('../onejs/View');
import ViewModel = require('../onejs/ViewModel');
import CommandsTestBase = require("../CommandsTest/CommandsTestBase");
import CommandsTestModel = require("../CommandsTest/CommandsTestModel");

var assert = chai.assert;

describe('CommandsTest', () => {
    describe('constructor', () => {
        var vmInstance: CommandsTestModel;
        beforeEach(() => {
            vmInstance = new CommandsTestModel();
        });

        it('should be a viewmodel', () => {
            assert.strictEqual(vmInstance.isViewModel, true);
        })
    });
});
