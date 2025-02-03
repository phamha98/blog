document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach((pre) => {
      const button = document.createElement("button");
    //   button.innerText = "Copy";
      button.innerHTML = '<i class="fas fa-copy"></i>';
      button.classList.add("copy-button");
  
      button.addEventListener("click", () => {
        const code = pre.querySelector("code").innerText;
        navigator.clipboard.writeText(code).then(() => {
          button.innerText = "Copied!";
          setTimeout(() => (button.innerText = "Copy"), 2000);
        });
      });
  
      pre.appendChild(button);
      pre.style.position = "relative";
    });
  });
  