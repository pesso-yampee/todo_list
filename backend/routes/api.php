<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'api'], function() {
    Route::get('todos', 'App\Http\Controllers\TodosController@index');
    Route::post('todos/create', 'App\Http\Controllers\TodosController@create');
    Route::post('todos/show', 'App\Http\Controllers\TodosController@show');
    Route::get('todos/edit/{id}', 'App\Http\Controllers\TodosController@edit');
    Route::put('todos/update/{id}', 'App\Http\Controllers\TodosController@update');
    Route::get('todos/detail/{id}', 'App\Http\Controllers\TodosController@show');
    Route::post('todos/delete', 'App\Http\Controllers\TodosController@delete');
});