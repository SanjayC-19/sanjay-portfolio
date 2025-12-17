// In the Quick Links section of Footer.jsx, change:
<div className="grid grid-cols-2 gap-2">
  {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
    <button
      key={item}
      onClick={() => {
        if (window.location.pathname !== '/') {
          window.location.href = `/#${item.toLowerCase()}`;
        } else {
          const element = document.getElementById(item.toLowerCase());
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }}
      className="text-gray-300 hover:text-primary-green transition-colors duration-300 text-left"
    >
      {item}
    </button>
  ))}
</div>