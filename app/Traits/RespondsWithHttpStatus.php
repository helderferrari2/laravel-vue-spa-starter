<?php

namespace App\Traits;

trait RespondsWithHttpStatus
{

    protected function successResponse($data = [], $code = 200)
    {
        $response = [
            'code' => $code,
            'success' => true,
            'data' => $data
        ];
        return response()->json($response, $code);
    }

    protected function errorResponse($error, $code = 422)
    {
        $response = [
            'code' => $code,
            'success' => false,
            'error' => $error
        ];
        return response()->json($response, $code);
    }
}
