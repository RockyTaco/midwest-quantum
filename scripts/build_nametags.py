import csv
import base64
import json
import os
import re

def get_data_uri(path):
    with open(path, "rb") as f:
        data = f.read()
    b64 = base64.b64encode(data).decode("utf-8")
    if path.endswith(".svg"):
        mime = "image/svg+xml"
    elif path.endswith(".jpg") or path.endswith(".jpeg"):
        mime = "image/jpeg"
    else:
        mime = "image/png"
    return f"data:{mime};base64,{b64}"

def clean_school(s):
    s = s.strip()
    lower = s.lower()
    if re.search(r"\buic\b", lower) or "illinois chicago" in lower or "illinois at chicago" in lower:
        return "UIC"
    if re.search(r"\buiuc\b", lower) or "urbana" in lower:
        return "UIUC"
    if "university of chicago" in lower or "uchicago" in lower:
        return "University of Chicago"
    if "wisconsin" in lower or "uw madison" in lower or "uw-madison" in lower:
        return "UW–Madison"
    if "purdue" in lower:
        return "Purdue University"
    if "illinois institute of technology" in lower or "illinois insitute" in lower or re.search(r"\biit\b", lower):
        return "Illinois Tech (IIT)"
    if "missouri state" in lower:
        return "Missouri State University"
    if "michigan" in lower:
        return "University of Michigan"
    if "loyola" in lower:
        return "Loyola University Chicago"
    if "northwestern" in lower:
        return "Northwestern University"
    if "northern illinois" in lower:
        return "Northern Illinois University"
    if "depaul" in lower:
        return "DePaul University"
    if "indiana university" in lower:
        return "Indiana University"
    if "national louis" in lower:
        return "National Louis University"
    if s.islower() or s.isupper():
        return s.title()
    return s

def build():
    csv_path = "/Users/ryanmanley/Downloads/MidQWest 2026 Application Form (Responses) - Form Responses 1 (1).csv"
    
    # Load all base64 data URIs
    mqw_logo = get_data_uri("public/MQW_light_grad_black.png")
    cat_logo = get_data_uri("public/cat_blob_atom.png")
    ng_logo = get_data_uri("public/images/northrop_grumman_official.png")
    infleqtion_logo = get_data_uri("public/images/infleqtion_official.svg")
    bluequbit_logo = get_data_uri("public/images/bluequbit_official.svg")
    ibm_logo = get_data_uri("public/images/ibm_official.png")
    qciti_logo = get_data_uri("public/images/qciti_logo.png")
    
    attendees = []
    with open(csv_path, "r", encoding="utf-8", errors="ignore") as f:
        reader = csv.reader(f)
        next(reader)
        for r in reader:
            if len(r) > 18 and r[18].strip().lower() == "online":
                continue
            first = r[2].strip()
            last = r[3].strip()
            if first.islower() or first.isupper():
                first = first.title()
            if last.islower() or last.isupper():
                last = last.title()
            raw_school = r[4].strip()
            school = clean_school(raw_school)
            attendees.append({
                "first": first,
                "last": last,
                "school": school,
                "role": "HACKER"
            })
    
    attendees.sort(key=lambda x: (x["first"].lower(), x["last"].lower()))
    
    # Add 16 blank badges (2 full sheets) for walk-ins
    for _ in range(16):
        attendees.append({
            "first": "",
            "last": "",
            "school": "",
            "role": ""
        })
        
    pages = [attendees[i:i+8] for i in range(0, len(attendees), 8)]
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MidQWest 2026 Name Badges (Avery 5390)</title>
<style>
  @page {{
    size: letter portrait;
    margin: 0;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #0f172a;
    color: #0f172a;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  /* Top Toolbar */
  .toolbar {{
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #1e1b4b;
    color: #fff;
    padding: 14px 28px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  }}
  .toolbar-title h1 {{
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }}
  .toolbar-title p {{
    font-size: 13px;
    color: #a5b4fc;
    margin-top: 2px;
  }}
  .toolbar-actions {{
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }}
  .btn {{
    background: #6366f1;
    color: white;
    border: 1px solid rgba(255,255,255,0.15);
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
  }}
  .btn:hover {{
    background: #4f46e5;
  }}
  .btn-print {{
    background: #a855f7;
    border-color: #9333ea;
  }}
  .btn-print:hover {{
    background: #9333ea;
  }}
  .btn.active {{
    background: #4338ca;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
  }}

  /* Sheet Layout: Avery 5390 Letter (8.5in x 11in) */
  .sheet-container {{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    gap: 28px;
  }}
  .page {{
    width: 8.5in;
    height: 11.0in;
    min-height: 11.0in;
    max-height: 11.0in;
    background: #ffffff;
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
    page-break-after: always;
    break-after: page;
    box-sizing: border-box;
    /* Avery 5390: Top 1.0in, Left 0.75in, Right 0.75in, Bottom 1.0in */
    padding: 1.0in 0.75in;
    display: grid;
    grid-template-columns: 3.5in 3.5in;
    grid-template-rows: repeat(4, 2.25in);
    position: relative;
  }}

  .cell {{
    width: 3.5in;
    height: 2.25in;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }}

  /* Guides */
  .show-guides .cell {{
    outline: 0.5px dashed #cbd5e1;
  }}

  /* Role Pill Styles */
  .role-pill {{
    display: inline-block;
    background: #f3e8ff;
    color: #6b21a8;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 2px 10px;
    border-radius: 9999px;
    line-height: 1.1;
    margin-top: 5px;
    align-self: center;
    border: 1px solid transparent;
  }}
  .role-pill-blank {{
    min-width: 68px;
    height: 16px;
    background: #f3e8ff;
    border: 1px dashed #a855f7;
    padding: 0;
  }}

  /* Tiny Date Hugging the Top-Right Corner */
  .header-date {{
    position: absolute;
    top: 5px;
    right: 7px;
    font-size: 4.5pt;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #94a3b8;
    text-transform: uppercase;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
  }}

  /* =========================================================
     LANDSCAPE MODE (Default: 3.5in wide x 2.25in tall)
     ========================================================= */
  .mode-landscape .card {{
    width: 3.5in;
    height: 2.25in;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.10in 0.16in 0.08in 0.16in;
    text-align: center;
    background: #ffffff;
    position: relative;
    transform: none;
  }}

  .mode-landscape .card-top-accent {{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
  }}

  /* Header: Cat + Logo on left */
  .mode-landscape .card-header {{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1px;
  }}
  .brand-group {{
    display: flex;
    align-items: center;
    gap: 7px;
  }}
  .card-cat {{
    height: 0.32in;
    width: 0.32in;
    background-image: url("{cat_logo}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
  }}
  .brand-text-col {{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }}
  .mode-landscape .card-logo {{
    height: 0.24in;
    width: 1.15in;
    background-image: url("{mqw_logo}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
  }}
  .brand-sub {{
    font-size: 5.5pt;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #64748b;
    line-height: 1;
    margin-top: 1px;
  }}

  /* Name & University Body */
  .mode-landscape .card-body {{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
    padding: 0.02in 0;
  }}
  .mode-landscape .first-name {{
    font-size: 23pt;
    font-weight: 800;
    line-height: 1.05;
    color: #0f172a;
    letter-spacing: -0.025em;
    word-break: break-word;
    max-width: 100%;
  }}
  .mode-landscape .first-name.long {{
    font-size: 18pt;
  }}
  .mode-landscape .first-name.very-long {{
    font-size: 14pt;
  }}
  .mode-landscape .last-name {{
    font-size: 15pt;
    font-weight: 600;
    color: #334155;
    line-height: 1.15;
    margin-top: 1px;
    word-break: break-word;
    max-width: 100%;
  }}
  .mode-landscape .last-name.long {{
    font-size: 13pt;
  }}
  .mode-landscape .accent-divider {{
    width: 45%;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, #a855f7, transparent);
    margin: 4px auto;
  }}
  .mode-landscape .institution {{
    font-size: 10.5pt;
    font-weight: 700;
    color: #4338ca;
    line-height: 1.15;
    max-width: 95%;
  }}
  .mode-landscape .institution.long {{
    font-size: 8.5pt;
  }}

  /* Blank Card for Walk-ins */
  .mode-landscape .blank-field {{
    width: 80%;
    margin-top: 4px;
  }}
  .mode-landscape .blank-line {{
    width: 100%;
    border-bottom: 1.5px dashed #94a3b8;
    height: 14px;
  }}
  .mode-landscape .blank-label {{
    font-size: 6.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #94a3b8;
    margin-top: 2px;
  }}

  /* Sponsor Logos Bar */
  .mode-landscape .sponsors-section {{
    width: 100%;
    border-top: 1px solid #e2e8f0;
    padding-top: 2px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
  }}
  .mode-landscape .sponsors-caption {{
    font-size: 5.5pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #94a3b8;
    line-height: 1;
  }}
  .mode-landscape .sponsors-row {{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    height: 0.20in;
    padding: 0 4px;
  }}
  .sponsor-logo {{
    height: 0.18in;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
  }}
  .sponsor-ng {{
    width: 0.70in;
    background-image: url("{ng_logo}");
  }}
  .sponsor-infleqtion {{
    width: 0.60in;
    background-image: url("{infleqtion_logo}");
  }}
  .sponsor-bluequbit {{
    width: 0.56in;
    background-image: url("{bluequbit_logo}");
  }}
  .sponsor-ibm {{
    width: 0.36in;
    background-image: url("{ibm_logo}");
  }}
  .sponsor-qciti {{
    width: 0.52in;
    background-image: url("{qciti_logo}");
  }}

  /* Toggle: Hide Sponsors */
  .hide-sponsors .sponsors-section {{
    display: none !important;
  }}
  .hide-sponsors .card-body {{
    padding: 0.08in 0;
  }}
  .hide-sponsors .first-name {{
    font-size: 26pt;
  }}
  .hide-sponsors .first-name.long {{
    font-size: 20pt;
  }}
  .hide-sponsors .last-name {{
    font-size: 17pt;
  }}
  .hide-sponsors .institution {{
    font-size: 12pt;
  }}
  .hide-sponsors .role-pill {{
    margin-top: 7px;
    font-size: 8pt;
    padding: 2.5px 12px;
  }}
  .hide-sponsors .role-pill-blank {{
    min-width: 75px;
    height: 18px;
  }}

  /* =========================================================
     PORTRAIT MODE (Rotated 90deg inside 3.5in x 2.25in cell)
     ========================================================= */
  .mode-portrait .card {{
    width: 2.25in;
    height: 3.5in;
    transform: rotate(-90deg);
    transform-origin: center center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.14in 0.14in 0.10in 0.14in;
    text-align: center;
    background: #ffffff;
    position: relative;
    flex-shrink: 0;
  }}
  .mode-portrait .card-top-accent {{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
  }}
  .mode-portrait .card-header {{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }}
  .mode-portrait .brand-group {{
    display: flex;
    align-items: center;
    gap: 6px;
  }}
  .mode-portrait .card-logo {{
    height: 0.28in;
    width: 1.35in;
    background-image: url("{mqw_logo}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }}
  .mode-portrait .card-body {{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
  }}
  .mode-portrait .first-name {{
    font-size: 20pt;
    font-weight: 800;
    line-height: 1.05;
    color: #0f172a;
    letter-spacing: -0.02em;
    word-break: break-word;
    max-width: 100%;
  }}
  .mode-portrait .first-name.long {{
    font-size: 16pt;
  }}
  .mode-portrait .first-name.very-long {{
    font-size: 13pt;
  }}
  .mode-portrait .last-name {{
    font-size: 14pt;
    font-weight: 600;
    color: #334155;
    line-height: 1.15;
    margin-top: 2px;
    word-break: break-word;
    max-width: 100%;
  }}
  .mode-portrait .last-name.long {{
    font-size: 12pt;
  }}
  .mode-portrait .accent-divider {{
    width: 50%;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, #a855f7, transparent);
    margin: 4px auto;
  }}
  .mode-portrait .institution {{
    font-size: 9.5pt;
    font-weight: 700;
    color: #4338ca;
    line-height: 1.2;
    max-width: 95%;
  }}
  .mode-portrait .institution.long {{
    font-size: 8pt;
  }}
  .mode-portrait .blank-field {{
    width: 85%;
    margin-top: 6px;
  }}
  .mode-portrait .blank-line {{
    width: 100%;
    border-bottom: 1.5px dashed #94a3b8;
    height: 16px;
  }}
  .mode-portrait .blank-label {{
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #94a3b8;
    margin-top: 2px;
  }}
  .mode-portrait .sponsors-section {{
    width: 100%;
    border-top: 1px solid #e2e8f0;
    padding-top: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
  }}
  .mode-portrait .sponsors-caption {{
    font-size: 5.5pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #94a3b8;
  }}
  .mode-portrait .sponsors-row {{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 4px;
    height: 0.18in;
  }}

  /* Print Media Query */
  @media print {{
    body {{
      background: none !important;
    }}
    .toolbar {{
      display: none !important;
    }}
    .sheet-container {{
      padding: 0 !important;
      gap: 0 !important;
    }}
    .page {{
      box-shadow: none !important;
      page-break-after: always !important;
      break-after: page !important;
      margin: 0 !important;
    }}
    .show-guides .cell {{
      outline: none !important;
    }}
  }}
</style>
</head>
<body class="mode-landscape show-guides">

<div class="toolbar">
  <div class="toolbar-title">
    <h1>MidQWest 2026 Name Badges</h1>
    <p>160 Registered Hackers + 16 Walk-in Blanks • {len(pages)} Avery 5390 Sheets</p>
  </div>
  <div class="toolbar-actions">
    <button id="btn-orientation" class="btn" onclick="toggleOrientation()">Orientation: Landscape (3.5" × 2.25")</button>
    <button id="btn-sponsors" class="btn active" onclick="toggleSponsors()">Sponsors: Show</button>
    <button id="btn-guides" class="btn" onclick="toggleGuides()">Perforation Guides: Show</button>
    <button class="btn btn-print" onclick="window.print()">Print / Save PDF</button>
  </div>
</div>

<div class="sheet-container">
"""

    for p_idx, page_cards in enumerate(pages):
        html += f'  <!-- PAGE {p_idx + 1} -->\n  <div class="page">\n'
        for card in page_cards:
            first = card["first"]
            last = card["last"]
            school = card["school"]
            role = card["role"]
            
            first_cls = "first-name"
            if len(first) > 13:
                first_cls += " very-long"
            elif len(first) > 9:
                first_cls += " long"
                
            last_cls = "last-name"
            if len(last) > 13:
                last_cls += " long"
                
            school_cls = "institution"
            if len(school) > 28:
                school_cls += " long"
                
            is_blank = not first and not last

            html += '    <div class="cell">\n'
            html += '      <div class="card">\n'
            html += '        <div class="card-top-accent"></div>\n'
            html += '        <div class="header-date">Nov 21–22, 2026 · Chicago</div>\n'
            
            # Header: Cat + MidQWest Logo on left
            html += '        <div class="card-header">\n'
            html += '          <div class="brand-group">\n'
            html += '            <div class="card-cat"></div>\n'
            html += '            <div class="brand-text-col">\n'
            html += '              <div class="card-logo"></div>\n'
            html += '              <div class="brand-sub">Midwest Quantum Hackathon</div>\n'
            html += '            </div>\n'
            html += '          </div>\n'
            html += '        </div>\n'
            
            # Body: First Name, Last Name, Divider, Institution, and Role Pill
            html += '        <div class="card-body">\n'
            if is_blank:
                html += '          <div class="blank-field">\n'
                html += '            <div class="blank-line"></div>\n'
                html += '            <div class="blank-label">Write Name Here</div>\n'
                html += '          </div>\n'
                html += '          <div class="blank-field">\n'
                html += '            <div class="blank-line"></div>\n'
                html += '            <div class="blank-label">Affiliation / School</div>\n'
                html += '          </div>\n'
                html += '          <div class="role-pill role-pill-blank" title="Write role here (e.g. Mentor, Judge, Guest)"></div>\n'
            else:
                html += f'          <div class="{first_cls}">{first}</div>\n'
                html += f'          <div class="{last_cls}">{last}</div>\n'
                html += '          <div class="accent-divider"></div>\n'
                html += f'          <div class="{school_cls}">{school}</div>\n'
                html += f'          <div class="role-pill">{role}</div>\n'
            html += '        </div>\n'
            
            # Sponsors with caption: "Thanks to our sponsors"
            html += '        <div class="sponsors-section">\n'
            html += '          <div class="sponsors-caption">Thanks to our sponsors</div>\n'
            html += '          <div class="sponsors-row">\n'
            html += '            <div class="sponsor-logo sponsor-ng" title="Northrop Grumman"></div>\n'
            html += '            <div class="sponsor-logo sponsor-infleqtion" title="Infleqtion"></div>\n'
            html += '            <div class="sponsor-logo sponsor-bluequbit" title="BlueQubit"></div>\n'
            html += '            <div class="sponsor-logo sponsor-ibm" title="IBM"></div>\n'
            html += '            <div class="sponsor-logo sponsor-qciti" title="Q-CITI"></div>\n'
            html += '          </div>\n'
            html += '        </div>\n'
            
            html += '      </div>\n'
            html += '    </div>\n'
            
        html += '  </div>\n'

    html += """</div>

<script>
function toggleOrientation() {
  const isLandscape = document.body.classList.contains('mode-landscape');
  const btn = document.getElementById('btn-orientation');
  if (isLandscape) {
    document.body.classList.remove('mode-landscape');
    document.body.classList.add('mode-portrait');
    btn.textContent = 'Orientation: Portrait (2.25" × 3.5")';
  } else {
    document.body.classList.remove('mode-portrait');
    document.body.classList.add('mode-landscape');
    btn.textContent = 'Orientation: Landscape (3.5" × 2.25")';
  }
}

function toggleSponsors() {
  const isHidden = document.body.classList.toggle('hide-sponsors');
  const btn = document.getElementById('btn-sponsors');
  if (isHidden) {
    btn.textContent = 'Sponsors: Hidden';
    btn.classList.remove('active');
  } else {
    btn.textContent = 'Sponsors: Show';
    btn.classList.add('active');
  }
}

function toggleGuides() {
  const hasGuides = document.body.classList.toggle('show-guides');
  const btn = document.getElementById('btn-guides');
  btn.textContent = hasGuides ? 'Perforation Guides: Show' : 'Perforation Guides: Hidden';
}
</script>
</body>
</html>
"""

    with open("scripts/nametags.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Successfully updated scripts/nametags.html with tiny date hugging top-right edge")

if __name__ == "__main__":
    build()
