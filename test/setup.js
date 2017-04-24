import Promise from 'bluebird';
import { expect, should } from 'chai';
import { mount, shallow } from 'enzyme';
import httpCodes from 'http-codes';
import httpMocks from 'node-mocks-http';
import { jsdom } from 'jsdom';
import React from 'react';
import request from 'request';
import { assert, mock, spy, stub } from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import supertest from 'supertest';

import 'ignore-styles';

// Config.
import defaults from '../config/defaults';
import strings from '../config/strings';
import errors from '../config/errors';

import { randomPort } from '../src/server/utilities/ExpressUtil';

// Server.
import app from '../src/server/app';

// Use bluebird promises.
sinonAsPromised(Promise);

app.listen(randomPort()); // Start the server with a random port.

// General globals.
global.assert = assert;
global.strings = strings;
global.errors = errors;
global.expect = expect;
global.defaults = defaults;
global.mock = mock;
global.should = should;
global.spy = spy;
global.stub = stub;

// Server globals.
global.httpCodes = httpCodes;
global.httpMocks = httpMocks;
global.request = request;
global.app = app;
global.supertest = supertest;

// Client globals.
global.document = jsdom('<!doctype html><html><body></body></html>');
global.mount = mount;
global.navigator = { userAgent: 'node.js' };
global.React = React;
global.shallow = shallow;
global.window = document.defaultView;

Object
    .keys(document.defaultView)
    .forEach(property => {
        if (typeof global[property] === 'undefined') {
            global[property] = document.defaultView[property];
        }
    });
