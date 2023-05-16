document.addEventListener('DOMContentLoaded', function () {
    const chatIcon = document.createElement('div');
    chatIcon.style.position = 'fixed';
    chatIcon.style.bottom = '20px';
    chatIcon.style.right = '20px';
    chatIcon.style.width = '50px';
    chatIcon.style.height = '50px';
    chatIcon.style.background = 'blue';
    chatIcon.style.borderRadius = '50%';
    chatIcon.style.cursor = 'pointer';
    chatIcon.style.zIndex = '9999';
    document.body.appendChild(chatIcon);

    const chatWidget = document.createElement('div');
    chatWidget.style.position = 'fixed';
    chatWidget.style.bottom = '20px';
    chatWidget.style.right = '20px';
    chatWidget.style.width = '300px';
    chatWidget.style.height = '400px';
    chatWidget.style.border = '1px solid #ccc';
    chatWidget.style.borderRadius = '10px';
    chatWidget.style.display = 'none';
    chatWidget.style.overflow = 'hidden';
    chatWidget.style.zIndex = '9998';
    document.body.appendChild(chatWidget);

    const chatIframe = document.createElement('iframe');
    chatIframe.src = 'https://google.com';
    chatIframe.style.width = '100%';
    chatIframe.style.height = '100%';
    chatIframe.style.border = 'none';
    chatWidget.appendChild(chatIframe);

    chatIcon.addEventListener('click', function () {
        if (chatWidget.style.display === 'none') {
            chatWidget.style.display = 'block';
        } else {
            chatWidget.style.display = 'none';
        }
    });
});
