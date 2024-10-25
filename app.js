// Function to load component HTML into specified element
function loadComponent(componentId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById(componentId);
      container.innerHTML = data;

      // Thay vì thêm lại mỗi script vào body, hãy sử dụng eval để thực thi
      const scripts = container.querySelectorAll('script');
      scripts.forEach((script) => {
        eval(script.textContent); // Cẩn thận với eval, nhưng nó có thể giảm thiểu các thao tác DOM
      });
    })
    .catch((error) => console.error("Error loading component:", error));
}

//  -----------------Navbar Section----------------- 
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Hàm để khởi tạo nút scroll-back
function initScrollBackButton() {
  // Lấy tham chiếu đến nút scroll-back
  const scrollBackBtn = document.getElementById("scrollBackBtn");

  // Hiển thị nút khi người dùng kéo xuống 100px
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBackBtn.style.display = "block";
    } else {
      scrollBackBtn.style.display = "none";
    }
  };

  // Khi người dùng nhấn vào nút, cuộn lên đầu trang
  scrollBackBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

// Gọi hàm khi trang được tải
window.onload = function() {
  initScrollBackButton();
};

// Load all components
loadComponent("header", "html/header.html");
loadComponent("service", "html/service.html");
loadComponent("FAQ", "html/homesection.html");
loadComponent("feature", "html/Feature.html");
loadComponent("product", "html/productsSection.html");
loadComponent("testimonial", "html/testimonial.html");
loadComponent("footer", "html/footer.html");
