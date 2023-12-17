<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    // TODOの一覧を表示する
    public function index()
    {
        $todos = Todo::all();
        return response()->json($todos, 200);
    }

    // TODOを作成する
    public function store(Request $request)
    {
        $todo = new Todo;
        $todo->title = $request->title;
        $todo->detail = $request->detail;
        $todo->save();
        return response()->json($todo, 200);
    }

    // 詳細を表示するためのアクション
    public function show(Request $request)
    {
        $todo = Todo::find($request->id);
        return $todo;
    }

    // データを更新するためのアクション
    public function update(Request $request)
    {
        $todo = Todo::find($request->id);
        $todo->title = $request->title;
        $todo->detail = $request->detail;
        $todo->save();
        $todos = Todo::all();
    }
    
    // TODOを削除する
    public function destory(Request $request)
    {
        $todo = Todo::find($request->id);
        $todo->delete();
        $todos = Todo::all();
    }
}
