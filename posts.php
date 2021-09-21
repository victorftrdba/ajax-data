<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=testes;', '', '');
    $stmt = $pdo->prepare('SELECT * FROM posts ORDER BY created_at DESC');
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($result);
} catch (Exception $e) {
    echo "Erro ao conectar à base de dados ".$e->getMessage();
}
