<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\RespondsWithHttpStatus;

class BaseController extends Controller
{
    use RespondsWithHttpStatus;
}
