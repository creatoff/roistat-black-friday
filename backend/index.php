<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$data = json_decode(file_get_contents('php://input'), true);

if (json_last_error() === JSON_ERROR_NONE) {
    $logEntry = date('Y-m-d H:i:s') . ' - ' . json_encode($data) . PHP_EOL;
    file_put_contents('/var/log/log.txt', $logEntry, FILE_APPEND);
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
}
?>
