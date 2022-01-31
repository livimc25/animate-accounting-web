import Application from 'animate-accounting-web/app';
import config from 'animate-accounting-web/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
