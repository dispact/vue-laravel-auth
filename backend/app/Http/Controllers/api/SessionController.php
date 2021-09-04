<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SessionController extends Controller
{
    // auth user against db
    public function authenticate(Request $request) {
        $cred = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if (!Auth::attempt($cred)) {
            return response(['message' => 'Invalid credentials'], 400);
        }

        $accessToken = Auth::user()->createToken('authToken')->accessToken->token;

        return response([
            'user' => Auth::user(),
            'access_token' => $accessToken
        ]);
    }
}