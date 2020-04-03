'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/autheticate', 'AuthController.autheticate');
Route.post('/register', 'AuthController.register');

Route.group(() => {
  Route.resource('/app', 'AppController').apiOnly().except(['show', 'update']);
}).middleware(['auth']); 