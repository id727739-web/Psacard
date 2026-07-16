/* GradeVault — certificate lookup demo.
   This is a client-side demo using sample data. Replace the
   SAMPLE_CERTS object (or the lookupCert function) with a call
   to your real backend / database when you wire it up. */
(function () {
  "use strict";

  // Sample certificate records for demonstration only.
  var SAMPLE_CERTS = {
    "10025431": {
      item: "2003 Rookie Signature — Card #148",
      category: "Basketball",
      grade: "9",
      gradeLabel: "Mint",
      autograph: "Verified (10)",
      graded: "Mar 2024",
      pop: "1,204"
    },
    "10025432": {
      item: "1999 Holo Insert — Card #7",
      category: "Baseball",
      grade: "10",
      gradeLabel: "Gem Mint",
      autograph: "—",
      graded: "Nov 2023",
      pop: "318"
    },
    "10025433": {
      item: "2018 Prizm Base — Card #52",
      category: "Football",
      grade: "8",
      gradeLabel: "Near Mint-Mint",
      autograph: "—",
      graded: "Jul 2024",
      pop: "5,891"
    }
  };

  function lookupCert(id) {
    // Swap this for: fetch('/api/cert/' + id).then(r => r.json())
    return SAMPLE_CERTS[String(id).trim()] || null;
  }

  var form = document.getElementById("verify-form");
  var input = document.getElementById("cert-input");
  var result = document.getElementById("verify-result");
  if (!form || !input || !result) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var id = input.value.trim();
    if (!id) return;

    var rec = lookupCert(id);
    result.className = "result show" + (rec ? "" : " notfound");

    if (!rec) {
      result.innerHTML =
        '<div class="result-head"><strong>No match found</strong>' +
        '<span class="grade">✕</span></div>' +
        '<div class="result-body"><p class="muted" style="margin:0">' +
        "We couldn't find certificate <strong>" + escapeHtml(id) +
        "</strong>. Check the number and try again. " +
        "(Demo tip: try 10025431, 10025432, or 10025433.)</p></div>";
      return;
    }

    result.innerHTML =
      '<div class="result-head">' +
        "<div><div style=\"font-size:.8rem;opacity:.8\">Certificate #" + escapeHtml(id) + "</div>" +
        "<strong>" + escapeHtml(rec.item) + "</strong></div>" +
        '<span class="grade">' + escapeHtml(rec.grade) + "</span>" +
      "</div>" +
      '<div class="result-body">' +
        row("Grade", rec.grade + " · " + rec.gradeLabel) +
        row("Category", rec.category) +
        row("Autograph", rec.autograph) +
        row("Date graded", rec.graded) +
        row("Population", rec.pop) +
      "</div>";
  });

  function row(k, v) {
    return '<div class="result-row"><span class="k">' + escapeHtml(k) +
           '</span><span class="v">' + escapeHtml(v) + "</span></div>";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
})();
