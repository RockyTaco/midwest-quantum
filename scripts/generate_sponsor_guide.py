import base64
import os
import subprocess
from pathlib import Path
from pypdf import PdfReader, PdfWriter

BASE_DIR = Path(__file__).resolve().parent.parent

def get_base64_img(rel_path):
    p = BASE_DIR / rel_path
    if not p.exists():
        return ""
    suffix = p.suffix.lower()
    mime = "image/png"
    if suffix == ".svg":
        mime = "image/svg+xml"
    elif suffix in (".jpg", ".jpeg"):
        mime = "image/jpeg"
    with open(p, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    return f"data:{mime};base64,{data}"

# Get logo base64
ng_logo = get_base64_img("public/images/northrop_grumman_official.png")
infleqtion_logo = get_base64_img("public/images/infleqtion_official.svg")
bluequbit_logo = get_base64_img("public/images/bluequbit_official.svg")
ibm_logo = get_base64_img("public/images/ibm_official.png")
qciti_logo = get_base64_img("public/images/qciti_logo.png")
uic_logo = get_base64_img("public/images/uic_logo.svg")

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MidQWest 2026 — Sponsor Logistics & Schedule Guide</title>
<style>
  @page {{
    size: letter;
    margin: 0.32in 0.42in 0.32in 0.42in;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    line-height: 1.32;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  .page {{
    width: 100%;
    min-height: 10.36in;
    max-height: 10.36in;
    page-break-after: always;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background: #ffffff;
    position: relative;
  }}
  .page:last-child {{
    page-break-after: avoid;
  }}

  /* Top Accent Bar */
  .top-accent {{
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, #1e3a8a, #2563eb, #38bdf8);
    border-radius: 2px;
    margin-bottom: 8px;
  }}

  /* Header */
  .header {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1.5px solid #e2e8f0;
    margin-bottom: 8px;
  }}
  .brand {{
    display: flex;
    align-items: center;
    gap: 10px;
  }}
  .brand-logo {{
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: #0f172a;
  }}
  .brand-logo span {{
    color: #2563eb;
  }}
  .brand-title {{
    font-size: 14.5px;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.15;
  }}
  .brand-sub {{
    font-size: 10.5px;
    color: #64748b;
    font-weight: 500;
  }}
  .header-badge {{
    text-align: right;
  }}
  .badge-pill {{
    display: inline-block;
    background: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 2.5px 8px;
    border-radius: 9999px;
    margin-bottom: 2px;
  }}
  .header-dates {{
    font-size: 10px;
    font-weight: 600;
    color: #334155;
  }}

  /* Quick Stats Grid */
  .stats-grid {{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-bottom: 10px;
  }}
  .stat-card {{
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 6px 8px;
  }}
  .stat-label {{
    font-size: 9px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 3px;
    margin-bottom: 2px;
  }}
  .stat-value {{
    font-size: 11.5px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.2;
  }}
  .stat-desc {{
    font-size: 9.5px;
    color: #475569;
    margin-top: 1.5px;
    line-height: 1.25;
  }}

  /* Section Title */
  .section-title {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11.5px;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-bottom: 5px;
    padding-bottom: 3px;
    border-bottom: 1px solid #cbd5e1;
  }}
  .section-title-tag {{
    font-size: 9.5px;
    font-weight: 600;
    color: #2563eb;
    text-transform: none;
    letter-spacing: normal;
  }}

  /* Directory Table */
  .dir-table {{
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
    font-size: 10px;
  }}
  .dir-table th {{
    background: #f1f5f9;
    color: #334155;
    text-align: left;
    font-weight: 700;
    padding: 4px 7px;
    border: 1px solid #e2e8f0;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }}
  .dir-table td {{
    padding: 4px 7px;
    border: 1px solid #e2e8f0;
    color: #334155;
    vertical-align: middle;
  }}
  .dir-table tr:nth-child(even) td {{
    background: #f8fafc;
  }}
  .room-tag {{
    display: inline-block;
    font-weight: 800;
    color: #1e3a8a;
    background: #dbeafe;
    padding: 1.5px 5px;
    border-radius: 4px;
    font-size: 9.5px;
    white-space: nowrap;
  }}

  /* Schedule Table */
  .sched-table {{
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    margin-bottom: 6px;
  }}
  .sched-table th {{
    background: #0f172a;
    color: #ffffff;
    text-align: left;
    font-weight: 700;
    padding: 4.5px 7px;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }}
  .sched-table td {{
    padding: 4.5px 7px;
    border-bottom: 1px solid #e2e8f0;
    color: #334155;
    vertical-align: top;
  }}
  .sched-table tr.highlight {{
    background: #f0f7ff;
    border-left: 3px solid #2563eb;
  }}
  .sched-table tr.highlight td {{
    font-weight: 500;
  }}
  .time-col {{
    font-weight: 700;
    color: #0f172a;
    white-space: nowrap;
    width: 110px;
  }}
  .event-col {{
    font-weight: 700;
    color: #0f172a;
    width: 175px;
  }}
  .room-col {{
    width: 85px;
  }}
  .desc-col {{
    font-size: 9.5px;
    color: #475569;
    line-height: 1.25;
  }}

  /* Talk Sub-Table */
  .talk-box {{
    margin-top: 4px;
    background: #ffffff;
    border: 1px solid #bfdbfe;
    border-radius: 5px;
    padding: 4px 6px;
  }}
  .talk-item {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 0;
    font-size: 9.5px;
    border-bottom: 1px dashed #e2e8f0;
  }}
  .talk-item:last-child {{
    border-bottom: none;
  }}
  .talk-sponsor {{
    font-weight: 700;
    color: #1e40af;
  }}
  .talk-time {{
    font-weight: 600;
    color: #475569;
    font-size: 9px;
  }}

  /* Facility Grid */
  .facility-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 9px;
  }}
  .facility-card {{
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 7px 9px;
  }}
  .facility-title {{
    font-size: 10px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 2.5px;
    display: flex;
    align-items: center;
    gap: 4px;
  }}
  .facility-text {{
    font-size: 9px;
    color: #475569;
    line-height: 1.25;
  }}

  /* Criteria Grid */
  .criteria-grid {{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-bottom: 9px;
  }}
  .crit-card {{
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-top: 2.5px solid #2563eb;
    border-radius: 5px;
    padding: 6px 7px;
  }}
  .crit-num {{
    font-size: 8.5px;
    font-weight: 800;
    color: #2563eb;
    text-transform: uppercase;
  }}
  .crit-title {{
    font-size: 9.5px;
    font-weight: 700;
    color: #0f172a;
    margin: 1.5px 0;
  }}
  .crit-desc {{
    font-size: 8.5px;
    color: #64748b;
    line-height: 1.2;
  }}

  /* Contacts Box */
  .contacts-box {{
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 7px 10px;
    margin-bottom: 8px;
  }}
  .contacts-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin-top: 4px;
  }}
  .contact-item {{
    font-size: 9px;
    color: #334155;
  }}
  .contact-name {{
    font-weight: 700;
    color: #0f172a;
    font-size: 9.5px;
  }}
  .contact-role {{
    color: #64748b;
    font-size: 8.5px;
  }}
  .contact-val {{
    color: #2563eb;
    font-weight: 600;
    margin-top: 0.5px;
  }}

  /* Sponsor Logo Strip */
  .logo-strip {{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 6px 10px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    margin-bottom: 6px;
  }}
  .logo-strip img {{
    max-height: 20px;
    max-width: 100px;
    object-fit: contain;
  }}

  /* Footer */
  .footer {{
    padding-top: 6px;
    border-top: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 8.5px;
    color: #64748b;
  }}
  .footer-bold {{
    font-weight: 600;
    color: #334155;
  }}

  /* Callout Banner */
  .callout-box {{
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 5px;
    padding: 5px 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 9.5px;
    color: #1e40af;
  }}
  .callout-text {{
    font-weight: 600;
  }}
  .callout-link {{
    font-weight: 700;
    color: #1d4ed8;
  }}
</style>
</head>
<body>

<!-- ==================== PAGE 1 ==================== -->
<div class="page">
  <div>
    <div class="top-accent"></div>

    <!-- Header -->
    <div class="header">
      <div class="brand">
        <div class="brand-logo">MQW<span>.</span></div>
        <div>
          <div class="brand-title">MidQWest 2026 — Midwest Quantum Hackathon</div>
          <div class="brand-sub">Official Sponsor Logistics &amp; Abridged Itinerary Guide</div>
        </div>
      </div>
      <div class="header-badge">
        <div class="badge-pill">Sponsor Operations Brief</div>
        <div class="header-dates">Nov 21–22, 2026 · Chicago, IL</div>
      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">📍 Event Venue &amp; Address</div>
        <div class="stat-value">Student Center East (SCE)</div>
        <div class="stat-desc">750 S Halsted St, Chicago, IL 60607<br>University of Illinois Chicago (UIC)</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">🏢 Sponsor Tabling Room</div>
        <div class="stat-value">Room IL C</div>
        <div class="stat-desc">Directly behind registration. Tables stay set up throughout entire weekend.</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">👥 Participant Audience</div>
        <div class="stat-value">~130–140 Students</div>
        <div class="stat-desc">40–50 students per challenge track across 6+ Midwest collegiate clubs.</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">🛎️ Arrival &amp; Check-In</div>
        <div class="stat-value">Sat 8:00 AM – 9:00 AM</div>
        <div class="stat-desc">Ping organizers on Discord (or call) upon arrival for room escort &amp; badge.</div>
      </div>
    </div>

    <!-- Facility & Room Directory -->
    <div class="section-title">
      <span>Event Room Directory &amp; Campus Layout</span>
      <span class="section-title-tag">All Rooms Located Inside Student Center East (SCE)</span>
    </div>
    <table class="dir-table">
      <thead>
        <tr>
          <th style="width: 125px;">Room / Location</th>
          <th style="width: 165px;">Designated Function</th>
          <th>Sponsor Notes &amp; Facilities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="room-tag">Room IL C</span></td>
          <td><strong>Sponsor Tabling &amp; Home Base</strong></td>
          <td>Rectangular tables &amp; chairs provided. Active all hackathon; leave materials setup overnight.</td>
        </tr>
        <tr>
          <td><span class="room-tag">Room IL AB</span></td>
          <td><strong>Main Presentation Hall</strong></td>
          <td>Projector, HDMI, podium mics &amp; slide remotes for Opening, Sponsor Talks &amp; Awards.</td>
        </tr>
        <tr>
          <td><span class="room-tag">Fort Dearborn A</span></td>
          <td><strong>Registration &amp; Sat Lunch</strong></td>
          <td>Check-in (8:00–9:30 AM) and catered networking lunch (12:00–1:15 PM) right next to tabling.</td>
        </tr>
        <tr>
          <td><span class="room-tag">Room Dearborn B</span></td>
          <td><strong>Sunday Project Judging Expo</strong></td>
          <td>Dedicated room for Sunday 2:00 PM – 4:00 PM live demo judging and track evaluation.</td>
        </tr>
        <tr>
          <td><span class="room-tag">Fort Dearborn A</span></td>
          <td><strong>Sun Breakfast &amp; Brunch</strong></td>
          <td>Catered breakfast &amp; brunch spread with fresh morning coffee and refreshments (8:30–10:30 AM).</td>
        </tr>
      </tbody>
    </table>

    <!-- Saturday Schedule -->
    <div class="section-title">
      <span>Saturday, November 21, 2026 — Sponsor Itinerary</span>
      <span class="section-title-tag">When Sponsors Need to Be Around</span>
    </div>
    <table class="sched-table">
      <thead>
        <tr>
          <th class="time-col">Time</th>
          <th class="event-col">Event &amp; Focus</th>
          <th class="room-col">Room</th>
          <th class="desc-col">Sponsor Role &amp; Objectives</th>
        </tr>
      </thead>
      <tbody>
        <tr class="highlight">
          <td class="time-col">8:00 AM – 9:00 AM</td>
          <td class="event-col">Sponsor Arrival &amp; Setup</td>
          <td class="room-col"><span class="room-tag">IL C</span></td>
          <td class="desc-col">Arrive at SCE, check in with organizers, set up company banner, swag, and booth materials. Greet arriving students transitioning from registration.</td>
        </tr>
        <tr>
          <td class="time-col">9:00 AM – 9:15 AM</td>
          <td class="event-col">Opening Remarks &amp; Welcome Talk</td>
          <td class="room-col"><span class="room-tag">IL AB</span></td>
          <td class="desc-col">Opening remarks by UIC faculty (Prof. Chase &amp; Dr. Sokovic) and student leads. Sponsors publicly recognized before the full student assembly.</td>
        </tr>
        <tr class="highlight">
          <td class="time-col">9:30 AM – 12:00 PM</td>
          <td class="event-col">
            Sponsor Talks
          </td>
          <td class="room-col"><span class="room-tag">IL AB</span></td>
          <td class="desc-col">
            <strong>Key Presentation Block</strong>: 45 min allotted per sponsor (40 min talk + 5 min Q&amp;A/buffer). Introduce company, present challenge prompt, APIs, and expectations.
            <div class="talk-box">
              <div class="talk-item">
                <span class="talk-sponsor">1. Northrop Grumman</span>
                <span class="talk-time">9:30 AM – 10:15 AM (Presentation + Q&amp;A)</span>
              </div>
              <div class="talk-item">
                <span class="talk-sponsor">2. Infleqtion</span>
                <span class="talk-time">10:20 AM – 11:05 AM (Presentation + Q&amp;A)</span>
              </div>
              <div class="talk-item">
                <span class="talk-sponsor">3. BlueQubit</span>
                <span class="talk-time">11:10 AM – 11:55 AM (Presentation + Q&amp;A)</span>
              </div>
            </div>
          </td>
        </tr>
        <tr class="highlight">
          <td class="time-col">12:00 PM – 1:15 PM</td>
          <td class="event-col">Catered Networking Lunch</td>
          <td class="room-col"><span class="room-tag">Fort Dearborn A</span></td>
          <td class="desc-col">Enjoy catered lunch while connecting directly with interested student teams forming around your challenge track. Answer questions and recruit top talent.</td>
        </tr>
        <tr>
          <td class="time-col">1:15 PM – 5:00 PM</td>
          <td class="event-col">Open Hacking &amp; Mentoring</td>
          <td class="room-col"><span class="room-tag">IL C / Discord</span></td>
          <td class="desc-col"><em>Optional / Flexible</em>: Mentor students building solutions for your challenge. You may host informal office hours at your IL C table or field questions via Discord.</td>
        </tr>
        <tr>
          <td class="time-col">5:00 PM – 6:00 PM</td>
          <td class="event-col">Saturday Social Break</td>
          <td class="room-col"><span class="room-tag">IL C / SCE</span></td>
          <td class="desc-col">Casual break and snack hour; great opportunity for relaxed conversations with students and fellow quantum industry leaders.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Footer 1 -->
  <div class="footer">
    <div><strong>MidQWest 2026</strong> · Student Center East, 750 S Halsted St, Chicago, IL 60607</div>
    <div class="footer-bold">Page 1 of 2 · Full Live Schedule at https://www.midqwest.dev/schedule</div>
  </div>
</div>

<!-- ==================== PAGE 2 ==================== -->
<div class="page">
  <div>
    <div class="top-accent"></div>

    <!-- Sub-Header -->
    <div class="header">
      <div class="brand">
        <div class="brand-logo">MQW<span>.</span></div>
        <div>
          <div class="brand-title">MidQWest 2026 — Midwest Quantum Hackathon</div>
          <div class="brand-sub">Sunday Itinerary, Judging Protocol &amp; Technical Logistics</div>
        </div>
      </div>
      <div class="header-badge">
        <div class="badge-pill">Sunday Operations &amp; Judging</div>
        <div class="header-dates">Sunday, November 22, 2026</div>
      </div>
    </div>

    <!-- Callout Box -->
    <div class="callout-box">
      <span class="callout-text">⚠️ Crucial Sponsor Presence on Sunday: Project Judging from 2:00 PM – 4:00 PM in Dearborn B.</span>
      <span class="callout-link">Tag @Organizer on Discord</span>
    </div>

    <!-- Sunday Schedule -->
    <div class="section-title">
      <span>Sunday, November 22, 2026 — Sponsor Itinerary</span>
      <span class="section-title-tag">Judging, Awards &amp; Wrap-Up</span>
    </div>
    <table class="sched-table">
      <thead>
        <tr>
          <th class="time-col">Time</th>
          <th class="event-col">Event &amp; Focus</th>
          <th class="room-col">Room</th>
          <th class="desc-col">Sponsor Role &amp; Objectives</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="time-col">8:30 AM – 10:30 AM</td>
          <td class="event-col">Catered Breakfast &amp; Brunch</td>
          <td class="room-col"><span class="room-tag">Fort Dearborn A</span></td>
          <td class="desc-col">Catered morning breakfast and brunch spread with fresh coffee, tea, and sprint check-ins with teams.</td>
        </tr>
        <tr>
          <td class="time-col">12:00 PM – 1:00 PM</td>
          <td class="event-col">Midday Coffee &amp; Refreshments</td>
          <td class="room-col"><span class="room-tag">Fort Dearborn A</span></td>
          <td class="desc-col">Coffee refresh and energy fuel as teams polish their code and demo decks ahead of the 2:00 PM deadline.</td>
        </tr>
        <tr>
          <td class="time-col">1:00 PM – 2:00 PM</td>
          <td class="event-col">Hacking Deadline &amp; Submissions</td>
          <td class="room-col"><span class="room-tag">Portal / IL C</span></td>
          <td class="desc-col">Hacking officially ends at 1:00 PM. Teams submit their source code, write-up, and demo decks for evaluation.</td>
        </tr>
        <tr class="highlight">
          <td class="time-col">2:00 PM – 4:00 PM</td>
          <td class="event-col">PROJECT JUDGING EXPO</td>
          <td class="room-col"><span class="room-tag">Dearborn B</span></td>
          <td class="desc-col"><strong>CRITICAL SPONSOR BLOCK</strong>: Sponsor judges listen to team presentations, review live code &amp; circuit benchmarks, ask questions, and determine the winner for their challenge track.</td>
        </tr>
        <tr class="highlight">
          <td class="time-col">4:00 PM – 4:30 PM</td>
          <td class="event-col">Closing Talk &amp; Awards</td>
          <td class="room-col"><span class="room-tag">IL AB</span></td>
          <td class="desc-col">Sponsor representatives take the stage to announce their challenge track winner, present company awards/swag, and share closing thoughts.</td>
        </tr>
        <tr>
          <td class="time-col">4:30 PM – 5:00 PM</td>
          <td class="event-col">Optional Farewell Tabling</td>
          <td class="room-col"><span class="room-tag">IL C</span></td>
          <td class="desc-col">Optional final networking with top finalists, collection of resumes/contact info, and booth teardown.</td>
        </tr>
        <tr>
          <td class="time-col">5:00 PM</td>
          <td class="event-col">Hackathon Conclusion</td>
          <td class="room-col"><span class="room-tag">SCE</span></td>
          <td class="desc-col">Venue clear-out and official conclusion of MidQWest 2026. Safe travels!</td>
        </tr>
      </tbody>
    </table>

    <!-- Facility & Technical Specs Grid -->
    <div class="section-title">
      <span>Sponsor Logistics &amp; Facility Amenities</span>
      <span class="section-title-tag">What to Expect on Site</span>
    </div>
    <div class="facility-grid">
      <div class="facility-card">
        <div class="facility-title">📦 Tabling &amp; Booth Space (Room IL C)</div>
        <div class="facility-text">
          Standard 6ft rectangular table with chairs provided in Room IL C (directly behind registration). Display banners, table runners, marketing collateral, and swag. <strong>Tables can stay set up overnight.</strong>
        </div>
      </div>
      <div class="facility-card">
        <div class="facility-title">🎤 Presentation &amp; A/V (Room IL AB)</div>
        <div class="facility-text">
          Features overhead projection, HDMI input, podium mic, and wireless presentation remote/clicker. Student tech volunteers will assist with laptop setup 10 minutes prior to your talk.
        </div>
      </div>
      <div class="facility-card">
        <div class="facility-title">📶 Wi-Fi &amp; Electrical Power</div>
        <div class="facility-text">
          High-speed guest Wi-Fi is available campus-wide via open <code>UIC-Guest</code> portal or <code>eduroam</code>. Standard 120V AC electrical power strips available at tabling stations and podium.
        </div>
      </div>
      <div class="facility-card">
        <div class="facility-title">🚗 Parking &amp; Building Access</div>
        <div class="facility-text">
          Public parking is available at the <strong>Halsted Street Parking Structure</strong> (760 W Taylor St) adjacent to Student Center East. Enter SCE via 750 S Halsted St entrance.
        </div>
      </div>
    </div>

    <!-- Judging Criteria -->
    <div class="section-title">
      <span>Challenge Track Judging Rubric</span>
      <span class="section-title-tag">Recommended Evaluation Criteria</span>
    </div>
    <div class="criteria-grid">
      <div class="crit-card">
        <div class="crit-num">Criteria 1 (25%)</div>
        <div class="crit-title">Technical Depth</div>
        <div class="crit-desc">Algorithmic rigor, circuit depth, proper use of SDKs/APIs, and mathematical correctness.</div>
      </div>
      <div class="crit-card">
        <div class="crit-num">Criteria 2 (25%)</div>
        <div class="crit-title">Challenge Fit</div>
        <div class="crit-desc">Thorough execution of sponsor's problem statement and fulfillment of all quest requirements.</div>
      </div>
      <div class="crit-card">
        <div class="crit-num">Criteria 3 (25%)</div>
        <div class="crit-title">Innovation</div>
        <div class="crit-desc">Novelty of approach, creative problem-solving, and practical real-world feasibility or impact.</div>
      </div>
      <div class="crit-card">
        <div class="crit-num">Criteria 4 (25%)</div>
        <div class="crit-title">Presentation</div>
        <div class="crit-desc">Clarity of demo, well-structured documentation, and ability to defend technical choices.</div>
      </div>
    </div>

    <!-- Day-of Organizer Contacts -->
    <div class="contacts-box">
      <div style="font-size: 10px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.3px;">
        Day-Of Organizer Contacts &amp; Real-Time Support
      </div>
      <div class="contacts-grid">
        <div class="contact-item">
          <div class="contact-name">Ashe Francq</div>
          <div class="contact-role">UIC Venue &amp; Campus Logistics</div>
          <div class="contact-val">kfrancq2@uic.edu</div>
        </div>
        <div class="contact-item">
          <div class="contact-name">Ryan Manley</div>
          <div class="contact-role">Student Coalition Lead (QSO Purdue)</div>
          <div class="contact-val">ryan@midqwest.dev</div>
        </div>
        <div class="contact-item">
          <div class="contact-name">River Chen</div>
          <div class="contact-role">Hackathon Operations (SIGQuantum UIUC)</div>
          <div class="contact-val">Discord: @River · MidQWest</div>
        </div>
      </div>
      <div style="margin-top: 4px; font-size: 8.5px; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 3px;">
        <strong>Immediate assistance:</strong> Mention <code>@Organizer</code> in Discord <code>#sponsor-lounge</code> or visit registration at Fort Dearborn A.
      </div>
    </div>

    <!-- Sponsor Logo Recognition Strip -->
    <div class="logo-strip">
      <img src="{ng_logo}" alt="Northrop Grumman">
      <img src="{infleqtion_logo}" alt="Infleqtion">
      <img src="{bluequbit_logo}" alt="BlueQubit">
      <img src="{ibm_logo}" alt="IBM Quantum">
      <img src="{qciti_logo}" alt="Q-CITI">
      <img src="{uic_logo}" alt="UIC">
    </div>
  </div>

  <!-- Footer 2 -->
  <div class="footer">
    <div><strong>MidQWest 2026</strong> · Midwest Student Quantum Hackathon · Student Center East, 750 S Halsted St, Chicago, IL 60607</div>
    <div class="footer-bold">Page 2 of 2 · https://www.midqwest.dev</div>
  </div>
</div>

</body>
</html>
"""

html_path = BASE_DIR / "scripts" / "sponsor_guide.html"
pdf_path = BASE_DIR / "public" / "MidQWest_2026_Sponsor_Guide.pdf"
pdf_copy_path = BASE_DIR / "public" / "sponsor_guide.pdf"

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Generated HTML template at {html_path}")

# Run headless chrome
chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cmd = [
    chrome_path,
    "--headless",
    "--disable-gpu",
    "--print-to-pdf-no-header",
    f"--print-to-pdf={pdf_path}",
    str(html_path)
]

res = subprocess.run(cmd, capture_output=True, text=True)
print("Chrome exit code:", res.returncode)
if pdf_path.exists():
    print(f"Successfully generated PDF: {pdf_path} ({os.path.getsize(pdf_path)} bytes)")
    import shutil
    shutil.copyfile(pdf_path, pdf_copy_path)
    print(f"Copied to {pdf_copy_path}")

    # Extract single pages and convert to PNG with sips
    reader = PdfReader(str(pdf_path))
    print(f"Total pages in PDF: {len(reader.pages)}")
    for i, page in enumerate(reader.pages):
        writer = PdfWriter()
        writer.add_page(page)
        p_path = f"/tmp/sponsor_guide_page{i+1}.pdf"
        png_path = f"/tmp/sponsor_guide_page{i+1}.png"
        with open(p_path, "wb") as pf:
            writer.write(pf)
        subprocess.run(["sips", "-s", "format", "png", p_path, "--out", png_path], capture_output=True)
        print(f"Exported {png_path}")
else:
    print("PDF generation failed:", res.stderr)
