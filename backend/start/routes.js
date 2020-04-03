'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/register', 'AuthController.register');
Route.post('/auth', 'AuthController.autheticate');

Route.group(() => {
  Route.resource('/app', 'AppController').apiOnly().except(['show', 'update']);
}).middleware(['auth']); 