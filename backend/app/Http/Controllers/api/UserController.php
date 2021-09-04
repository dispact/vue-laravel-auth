<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request) {
        $validator = \Validator::make($request->only(
            'name', 'email', 'password', 'password_confirmation'
        ), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => ['required', 'confirmed']
        ]);

        if ($validator->fails())
            return response($validator->failed(), 400);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response([
            'user' => $user
        ]);
    }
}
