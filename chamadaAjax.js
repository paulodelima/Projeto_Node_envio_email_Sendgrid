
function EnviaEmail(){
    const to        = 'paulo@soulplus.digital';
    const from      = "hello@soulplus.digital";
    const subject 	= "Email teste de uso da API via Sendgrid";
    const text      = 'Para visualizar essa mensagem, por favor use um leitor de e-mails compatível com padrão HTML!';
    const html      = 'Teste de envio de email por chamada Ajax com JS puro';
    
    const BodyJSON  = { to, from, subject, text, html }                
    const url       = 'http://localhost:3000/api/email';
    const xhr       = new XMLHttpRequest();

    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            
            if (xhr.status == 200) {
                console.log(xhr.responseText);
                alert('Email enviado com sucesso!')
            }
            else {
                console.error(xhr.responseText);
            }
        }
    }
    xhr.send(JSON.stringify(BodyJSON));
}


/*
Se faço a chamada no postman com o body abaixo, funciona perfeitamente

endpoint => localhost:3000/api/email

{
  "to":  "paulo@soulplus.digital", 
  "from": "hello@soulplus.digital", 
  "subject": "Soul Plus Digital",
  "text": "Texto para emails que não abrem em HTML",
  "html": "zczczc NOVA CHAVE GERADA MANUALMENTE - TESTANDO de envio de email com a mesma chave de API" 
}

Agora quando realizo a chamada do cliente como está definido o código acima, retorna o erro abaixo:

Access to XMLHttpRequest at 'localhost:3000/api/email' from origin 'http://localhost' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.

*/
