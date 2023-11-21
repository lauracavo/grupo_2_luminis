document.addEventListener('DOMContentLoaded', function() {
    const showAnswerButtons = document.querySelectorAll('.show-answer');
  
    showAnswerButtons.forEach(button => {
      button.addEventListener('click', function() {
        const answerContainer = this.previousElementSibling;
        const glassEffectContainer = this.parentElement;
  
        if (answerContainer.style.display === 'none' || answerContainer.style.display === '') {
          answerContainer.style.display = 'block';
          setTimeout(() => {
            answerContainer.style.opacity = '1';
            answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
          }, 1);
          this.innerText = 'Ocultar Respuesta';
          this.classList.add('active');
        } else {
          answerContainer.style.opacity = '0';
          answerContainer.style.maxHeight = '0';
          setTimeout(() => {
            answerContainer.style.display = 'none';
          }, 200);
          this.innerText = 'Mostrar Respuesta';
          this.classList.remove('active');
        }
  
        document.addEventListener('click', function closeAnswer(e) {
          if (e.target !== button && e.target !== answerContainer) {
            answerContainer.style.opacity = '0';
            answerContainer.style.maxHeight = '0';
            setTimeout(() => {
              answerContainer.style.display = 'none';
            }, 200);
            button.innerText = 'Mostrar Respuesta';
            button.classList.remove('active');
            document.removeEventListener('click', closeAnswer);
          }
        });
      });
    });
  });