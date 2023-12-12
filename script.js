
        document.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('fade-in');
    
            const sections = document.querySelectorAll('.scroll-fade-in');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 }); 
    
            sections.forEach(section => {
                observer.observe(section);
            });
    
        });
    
        const initSlider = () => {
            const imageList = document.querySelector(".slider-wrapper .image-list");
            const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
            const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
            const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
            
            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                const thumbPosition = scrollbarThumb.offsetLeft;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
                
                const handleMouseMove = (e) => {
                    const deltaX = e.clientX - startX;
                    const newThumbPosition = thumbPosition + deltaX;
        
                    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                    
                    scrollbarThumb.style.left = `${boundedPosition}px`;
                    imageList.scrollLeft = scrollPosition;
                }
        
                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }
        
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            });
        
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                });
            });
        
            const handleSlideButtons = () => {
                slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
                slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
            }
        
            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            }
        
            // Call these two functions when image list scrolls
            imageList.addEventListener("scroll", () => {
                updateScrollThumbPosition();
                handleSlideButtons();
            });
        }
        
        window.addEventListener("resize", initSlider);
        window.addEventListener("load", initSlider);


        function validateForm() {
            var name = document.getElementById("name").value;
            var surname = document.getElementById("surname").value;
            var email = document.getElementById("email").value;
            var country = document.getElementById("country").value;
            var question = document.getElementById("question").value;
        
            if (name === "") {
              alert("Please enter your name");
              return false;
            }
            if (surname === "") {
              alert("Please enter your surname");
              return false;
            }
            if (email === "") {
              alert("Please enter your email");
              return false;
            }
            if (country === "") {
              alert("Please enter your country");
              return false;
            }
            if (question === "") {
              alert("Please enter your question");
              return false;
            }
        
            return true;
          }
  
          function validateForm() {
      var form = document.getElementById("contact-form");
      var inputs = form.querySelectorAll("input, textarea");
  
      var isValid = true;
  
      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      }
  
      if (!isValid) {
        alert("Please fill in all required fields");
      }
  
      return isValid;
    }
  
    function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById('preview');
    const filename = document.getElementById('filename');
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
        filename.textContent = input.files[0].name;
        filename.style.display = 'block';
      };
  
      reader.readAsDataURL(input.files[0]);
    } else {
      preview.src = '#';
      preview.style.display = 'none';
      filename.textContent = '';
      filename.style.display = 'none';
    }
  }
  
  function validateFile(file) {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif']; 
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif']; 
  
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const fileType = file.type.toLowerCase();
  
    if (!allowedExtensions.includes(fileExtension)) {
      return false; 
    }
  
    if (!allowedMimeTypes.includes(fileType)) {
      return false; 
    }
  
    return true; 
  }
  
  function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById('preview');
    const filename = document.getElementById('filename');
  
    if (input.files && input.files[0]) {
      const file = input.files[0];
  
      if (validateFile(file)) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = 'block';
          filename.textContent = file.name;
          filename.style.display = 'block';
        };
  
        reader.readAsDataURL(file);
      } else {
        alert('Invalid file type. Please select a valid image file.');
        input.value = '';
      }
    } else {
      preview.src = '#';
      preview.style.display = 'none';
      filename.textContent = '';
      filename.style.display = 'none';
    }
  }
  
  function validateForm() {
  
    return true;
  }