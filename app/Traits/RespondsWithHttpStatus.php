<?php

namespace App\Traits;

trait RespondsWithHttpStatus{

    protected function successResponse($data = [], $code = 200)
    {
        $response = [
			'code' => $code,
			'status' => 'success',
			'data' => $data
		];
        return response()->json($response, $code);
    }

    protected function errorResponse($data = [], $code = 422)
    {
        $response = [
			'code' => $code,
			'status' => 'error',
			'data' => $data
		];
        return response()->json($response, $code);
    }

}