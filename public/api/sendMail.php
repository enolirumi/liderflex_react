<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Permitir apenas seu domínio
header("Access-Control-Allow-Origin: https://seudominio.com");
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
$assunto     = filter_input(INPUT_POST, 'assunto', FILTER_SANITIZE_STRING);
$mensagem    = htmlspecialchars($_POST['mensagem'] ?? '');

if (!$nome || !$sobrenome || !$email || !$assunto || !$mensagem) {
    echo json_encode(["status" => "error", "message" => "Preencha todos os campos obrigatórios."]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configuração do SMTP da HostGator
    $mail->isSMTP();
    $mail->Host = 'mail.seudominio.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'contato@seudominio.com'; 
    $mail->Password = 'SUA_SENHA_AQUI'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Remetente e destinatário
    $mail->setFrom('contato@seudominio.com', 'Formulário do Site');
    $mail->addAddress('empresa@seudominio.com');

    // Conteúdo do e-mail
    $mail->isHTML(true);
    $mail->Subject = "[$tipoContato] $assunto";
    $mail->Body    = "
        <h3>Novo contato do site</h3>
        <p><strong>Tipo de contato:</strong> $tipoContato</p>
        <p><strong>Nome:</strong> $nome $sobrenome</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Telefone:</strong> $telefone</p>
        <p><strong>Assunto:</strong> $assunto</p>
        <p><strong>Mensagem:</strong><br>$mensagem</p>
    ";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Mensagem enviada com sucesso!"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Erro ao enviar: {$mail->ErrorInfo}"]);
}
