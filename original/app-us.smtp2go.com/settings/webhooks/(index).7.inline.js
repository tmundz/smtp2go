$(document).off("mouseup", ".row-remove-toggler");
$(document).on("mouseup", ".row-remove-toggler", function () {
  $(".row-remove-toggler")
    .not(this)
    .parents(".drop-content")
    .removeClass("options-on")
    .find(".dropdown-options")
    .removeClass("is-active");
  $(this)
    .parent(".drop-content")
    .toggleClass("options-on")
    .find(".dropdown-options")
    .toggleClass("is-active");
});

$(document).off("mouseup", ".modal-actions .row-remove-toggler");
$(document).on("mouseup", ".modal-actions .row-remove-toggler", function () {
  $(this).parents(".modal-actions").removeClass("is-visible");
  $(this)
    .parents(".modal-actions")
    .toggleClass("options-on")
    .next(".dropdown-options")
    .addClass("is-active");
});

$(document).off(
  "click",
  ".modal-actions + .dropdown-options .row-remove-cancel, .domain-modal + .dropdown-options .row-remove.confirm",
);
$(document).on(
  "click",
  ".modal-actions + .dropdown-options .row-remove-cancel, .domain-modal + .dropdown-options .row-remove.confirm",
  function () {
    $(this).parents(".dropdown-options").removeClass("is-active");
    $(".modal-actions-overlay").removeClass("is-visible");
  },
);

$(document).off(
  "click",
  ".dropdown-options .row-remove-cancel, .row-remove.confirm",
);
$(document).on(
  "click",
  ".dropdown-options .row-remove-cancel, .row-remove.confirm",
  function () {
    $(this)
      .parents(".drop-content")
      .removeClass("options-on")
      .find(".dropdown-options")
      .removeClass("is-active");
  },
);

$(document).on("click", ".tagsinput-wrapper .bootstrap-tagsinput", function () {
  $(this).addClass("focus");
});

$(document).on("click", function (e) {
  var container = $(".tagsinput-wrapper .bootstrap-tagsinput");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("focus");
  }
});

// Toggling dropdowns in the edit view
$(document).on("click", ".users-active, .labels-active", function (e) {
  e.stopPropagation();
  $(".mode-dropdown-select, .mode-dropdown-option").removeClass("is-active");
  $(".labels-dropdown")
    .not($(this).siblings(".labels-dropdown"))
    .removeClass("is-active");
  $(this).siblings(".labels-dropdown").toggleClass("is-active");
});

// Closing dropdowns when clicking outside
$(document).on("click", function (event) {
  if (
    !$(event.target).closest(
      ".users-list, .labels-list, .labels-list-sms, .labels-dropdown",
    ).length
  ) {
    $(".labels-dropdown").removeClass("is-active");
  }
});

// Prevent the dropdown from closing when clicking inside it
$(document).on("click", ".labels-dropdown", function (e) {
  e.stopPropagation();
});

// select all
$(document).on("click", ".indicators-filter-main", function () {
  // get the check box
  $(e.target).parent().parent().pareb;

  var isSelected = $(this).hasClass("selected");
  $(this)
    .closest(".labels-dropdown")
    .find(".indicators-filter")
    .each(function () {
      $(this).toggleClass("selected", !isSelected);
      $(this).find(".checker-box").toggleClass("checked", !isSelected);
    });
  updateDropdownPlaceholder();
});

// individual selection
$(document).on(
  "click",
  ".users-list .indicators-filter:not(.indicators-filter-main)",
  function () {
    $(this).toggleClass("selected");
    $(this).find(".checker-box").toggleClass("checked");
    updateDropdownPlaceholder();
  },
);

// update the dropdown placeholder text
function updateDropdownPlaceholder(e) {
  console.log("updatedDropdownPlaceholder:", e);
  var totalFilters = $(
    ".users-list .indicators-filter:not(.indicators-filter-main)",
  ).length;
  var selectedFilters = $(
    ".users-list .indicators-filter.selected:not(.indicators-filter-main)",
  ).length;
  var placeholderText = "";

  $(".users-list .indicators-filter-main").toggleClass(
    "selected",
    selectedFilters === totalFilters,
  );
  $(".users-list .indicators-filter-main .checker-box").toggleClass(
    "checked",
    selectedFilters === totalFilters,
  );

  if (selectedFilters === 0) {
    placeholderText = "No users selected";
    $(".users-list .indicators-filter-main .event-indicator > span").text(
      "Select All",
    );
  } else if (selectedFilters === totalFilters) {
    $(".users-list .indicators-filter-main .event-indicator > span").text(
      "Deselect All",
    );
    placeholderText = "All users selected";
  } else {
    $(".users-list .indicators-filter-main .event-indicator > span").text(
      "Select All",
    );
    placeholderText = selectedFilters + " users selected";
  }

  $(".users-list .dropdown-placeholder").text(placeholderText);
}

// Toggle individual checkboxes within the labels list
$(document).on(
  "click",
  ".labels-list .indicators-filter, .labels-list-sms .indicators-filter",
  doStuff,
);

function doStuff() {
  var checkerBox = $(this).find(".checker-box");
  checkerBox.toggleClass("checked");
}

// Handle deletion of selected events
$(document).on("click", ".item-delete", function (event) {
  event.stopPropagation();

  var $entry = $(this).closest(".dynamic-entry");
  var $parentContainer = $entry.closest(".labels-list, .labels-list-sms");
  var $dropdown = $parentContainer.find(".labels-dropdown");
  var eventClass = $entry
    .find(".item-label")
    .attr("class")
    .split(" ")
    .filter((c) => c !== "item-label" && c !== "long-event-indicator")
    .join(" ");
  var $checkbox = $dropdown.find(
    ".event-indicator." + eventClass + " .checker-box",
  );

  $entry.remove();
  $checkbox.removeClass("checked");

  checkAllControl($dropdown);
});

// Toggle the output type dropdown
/*
  $(document).on('click', '.app-dropdown-wrapper', function (event) {
    event.stopPropagation();
    $('.mode-dropdown-select, .mode-dropdown-option').toggleClass('is-active');
    $('.labels-list-sms .labels-dropdown, .labels-list .labels-dropdown').removeClass('is-active');
  });
  */
$(document).on("click", ".app-dropdown-wrapper", function (event) {
  event.stopPropagation();
  const $container = $(this);

  // Toggle classes only within the clicked container
  $container
    .find(".mode-dropdown-select, .mode-dropdown-option")
    .toggleClass("is-active");

  // Close label dropdowns in the same context
  $container
    .closest(".form-group-item")
    .find(".labels-list-sms .labels-dropdown, .labels-list .labels-dropdown")
    .removeClass("is-active");
});

// click outside the output type dropdown
$(document).on("click", function (event) {
  if (!$(event.target).closest(".app-dropdown-wrapper").length) {
    $(".mode-dropdown-select, .mode-dropdown-option").removeClass("is-active");
  }
});

// Activate option and update selected text
var clearedValue = null;
$(document).on("click", ".dropdown-item.blue", function (event) {
  event.stopPropagation();
  const $clickedItem = $(this);
  const $container = $clickedItem.closest(".app-dropdown-wrapper");
  const dropdownType = $container.data("dropdown-type");

  $container.find(".dropdown-item.blue").removeClass("is-active");
  $clickedItem.addClass("is-active");

  const selectedText = $clickedItem.find("dt").text();
  $container.find(".mode-dropdown-select .selected").text(selectedText);
  $container
    .find(".mode-dropdown-select, .mode-dropdown-option")
    .removeClass("is-active");

  // Update the authorization header placeholder
  if (dropdownType === "authorization") {
    const inputField = $container
      .closest(".group-line")
      .find('input[name="auth_header_value"]');
    const authType = $clickedItem.data("value");
    if (authType === "none") {
      clearedValue = $('input[name="auth_header_value"]').val();
      $('input[name="auth_header_value"]').attr("disabled", true);
      $('input[name="auth_header_value"]').val("");
    } else {
      cur = $('input[name="auth_header_value"]').val();
      $('input[name="auth_header_value"]').val(
        clearedValue !== null ? clearedValue : cur,
      );
      $('input[name="auth_header_value"]').removeAttr("disabled");
      clearedValue = null;
    }
    inputField.attr(
      "placeholder",
      authType === "basic"
        ? "Base64 encoded user:pass"
        : authType === "bearer"
          ? "token"
          : "",
    );
  }
});

var headerEditHeight = $(".header-edit").outerHeight();

// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = { init: function () {} };

// run general to get all the standard stuff in
HTML.general();

// mount the custom tags ( wrap in compile to do them in order )
riot.mount("webhooks", {
  show_splash: true,
  failing_webhooks: 0,
  usernames: [
    {
      label: "0xcaphe+roy@wearehackerone.com",
      owner: 1010395,
      username: "0xcaphe+roy@wearehackerone.com",
    },
  ],
  disable_add: false,
  show_sms: false,
  is_trial_account: true,
  can_use_svix_webhooks: true,
});
