document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header h1');
  
  
  header.innerHTML = '';
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'center';
  header.style.gap = '15px';
  
  const logo = document.createElement('div');
  logo.className = 'scinfinity-logo';
  logo.innerHTML = '<img src="images/scilogo.jpg" alt="Scinfinity Logo">';
  header.appendChild(logo);
  

  const textContainer = document.createElement('div');
  textContainer.className = 'scinfinity-text';
  

  const text = document.createElement('span');
  text.className = 'scinfinity-main-text';
  text.textContent = 'Sci-Infinity';
  textContainer.appendChild(text);
  
  header.appendChild(textContainer);
  
  
  const style = document.createElement('style');
  style.textContent = `
    .scinfinity-logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }
    
    .scinfinity-logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .scinfinity-logo:hover {
      transform: scale(1.1);
    }
    
    .scinfinity-main-text {
      font-size: 2.5rem;
      color: white;
      display: inline-block;
      transition: all 0.3s ease;
    }
    
    .scinfinity-main-text:hover {
      transform: translateY(-3px);
      text-shadow: 0 3px 10px rgba(226, 197, 253, 0.7);
    }
    
    /* Initial animation */
    .scinfinity-logo, .scinfinity-main-text {
      opacity: 0;
      animation: fadeIn 0.5s ease forwards;
    }
    
    .scinfinity-main-text {
      animation-delay: 0.2s;
    }
    
    @keyframes fadeIn {
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
});
document.addEventListener('DOMContentLoaded', function() {
  const starfield = document.createElement('div');
  starfield.className = 'starfield';
  document.body.prepend(starfield);
  
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 2 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 5 + 3;
    
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.setProperty('--duration', `${duration}s`);
    
    if (size > 2) {
      star.style.boxShadow = `0 0 ${size * 2}px white`;
    }
    
    starfield.appendChild(star);
  }
});
