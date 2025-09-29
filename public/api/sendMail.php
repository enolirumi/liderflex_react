<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . './PHPMailer/src/Exception.php';
require __DIR__ . './PHPMailer/src/PHPMailer.php';
require __DIR__ . './PHPMailer/src/SMTP.php';

// Permitir apenas seu domínio
header("Access-Control-Allow-Origin: https://liderflexvidros.com.br");
header("Content-Type: application/json");

// Só aceitar POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Método inválido."]);
    exit;
}

// Captura e validação dos campos
$tipoContato = filter_input(INPUT_POST, 'tipoContato', FILTER_SANITIZE_STRING);
$nome        = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$sobrenome   = filter_input(INPUT_POST, 'sobrenome', FILTER_SANITIZE_STRING);
$email       = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$telefone    = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
$mensagem    = htmlspecialchars($_POST['mensagem'] ?? '');

if (!$tipoContato) {
    echo json_encode(["status" => "error", "message" => "Preencha o tipo de contato"]);
    exit;
}
if (!$nome) {
    echo json_encode(["status" => "error", "message" => "Preencha o nome"]);
    exit;
}
if (!$sobrenome) {
    echo json_encode(["status" => "error", "message" => "Preencha o sobrenome"]);
    exit;
}
if (!$email) {
    echo json_encode(["status" => "error", "message" => "Preencha o email"]);
    exit;
}
if (!$telefone) {
    echo json_encode(["status" => "error", "message" => "Preencha o telefone"]);
    exit;
}
if (!$mensagem) {
    echo json_encode(["status" => "error", "message" => "Preencha a mensagem"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configuração do SMTP da HostGator
    $mail->isSMTP();
    $mail->Host       = 'smtp.titan.email';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'form@liderflexvidros.com.br'; // seu e-mail completo
    $mail->Password   = 'm!>q%{p?u2MB"3W';                     // senha do e-mail ou senha de app
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    $mail->SMTPDebug  = 2; // mostra toda a troca com o servidor
    $mail->Debugoutput = 'html';

    $mail->setFrom('form@liderflexvidros.com.br', 'Teste SMTP');
    $mail->addAddress('liderflex@liderflexvidros.com.br'); // para testar

    $mail->isHTML(true);
    $mail->Subject = "[$tipoContato]";
    $mail->Body    = "
        <h3>Novo contato do site</h3>
        <p><strong>Tipo de contato:</strong> $tipoContato</p>
        <p><strong>Nome:</strong> $nome $sobrenome</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Telefone:</strong> $telefone</p>
        <p><strong>Mensagem:</strong><br>$mensagem</p>
    ";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Mensagem enviada com sucesso!"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Erro ao enviar: {$mail->ErrorInfo}"]);
}
