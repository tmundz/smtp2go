window.announcekit = window.announcekit || {
  queue: [],
  on: function (n, x) {
    window.announcekit.queue.push([n, x]);
  },
  push: function (x) {
    window.announcekit.queue.push(x);
  },
};

window.announcekit.push({
  widget: "https://announcekit.co/widgets/v2/2n0i2c",
  selector: ".announcekit-widget",
});

$(document).on("mouseenter", ".vert-nav-support", function () {
  if (!$("#announcekit-style").length) {
    const style = document.createElement("style");
    style.id = "announcekit-style";
    style.textContent = `
        .announcekit-frame-wrapper {
          border-radius: 4px !important;
          top: 8px !important;
          right: 8px !important;
          max-width: 410px !important;
          bottom: 8px !important;
        }
      `;
    document.head.appendChild(style);
  }
});
