document.getElementById('email').addEventListener('click', function() {

    const email = 'contactjoaof@gmail.com';
    navigator.clipboard.writeText(email);
    
    
    const notification = document.createElement('div');
    notification.textContent = 'Email copiado!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background-color: #333;
        color: #fff;
        border-radius: 5px;
        z-index: 9999;
    `;
    document.body.appendChild(notification);
    
    
    setTimeout(function() {
        notification.remove();
    }, 2000);
    });