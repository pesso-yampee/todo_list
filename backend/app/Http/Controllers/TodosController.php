<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $todos = $user->todos()->get();
        return response()->json($todos, 200);
    }

    public function store(Request $request)
    {
        $todo = new Todo;
        $todo->title = $request->title;
        $todo->detail = $request->detail;
        $todo->user_id = $request->user_id;
        $todo->save();
        return response()->json($todo, 200);
    }

    public function show(Request $request)
    {
        $todo = Todo::find($request->id);
        return $todo;
    }

    public function update(Request $request)
    {
        $todo = Todo::find($request->id);
        $todo->title = $request->title;
        $todo->detail = $request->detail;
        $todo->save();
        $user = $request->user();
        $todos = $user->todos()->get();
    }
    
    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();
    }
}
