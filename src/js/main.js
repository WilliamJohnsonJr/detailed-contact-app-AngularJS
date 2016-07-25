import angular from 'angular';
import 'angular-ui-router';

import { config } from './config';
import { SERVER } from './server';

import { HomeController } from './controllers/home.controller';
import { AddController } from './controllers/add.controller';
import { UserDetailsController } from './controllers/userdetails.controller.js';


angular
	.module('app', ['ui.router'])
	.config(config)
	.constant('SERVER', SERVER)
	.controller ('HomeController', HomeController)
	.controller ('AddController', AddController)
	.controller ('UserDetailsController', UserDetailsController);