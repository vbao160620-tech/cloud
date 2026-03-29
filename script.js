function typingEffect() {
    const title = document.querySelector('.typing-title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const speed = 70;

    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
});