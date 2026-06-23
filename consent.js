const form = document.querySelector("[data-consent-form]");
const successNote = document.querySelector("[data-success-note]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const payload = new FormData(form);
    const subject = encodeURIComponent("SMS consent submission - Essayons Bax");
    const body = encodeURIComponent(
      [
        "SMS consent submission",
        "",
        `Full name: ${payload.get("full_name") || ""}`,
        `Mobile phone: ${payload.get("mobile_phone") || ""}`,
        `Email: ${payload.get("email") || ""}`,
        `Role/company: ${payload.get("role_company") || ""}`,
        `Notes: ${payload.get("notes") || ""}`,
        "",
        "Consent checkbox: checked",
        "Consent source: https://essayonsbax.com/sms-consent.html",
      ].join("\n")
    );

    if (successNote) {
      successNote.style.display = "block";
    }

    window.location.href = `mailto:dispatch@essayonsbax.com?subject=${subject}&body=${body}`;
  });
}
