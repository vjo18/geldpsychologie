---
layout: page
title: GeldPsychologie
permalink: /
---

<div class="gp-home">
  <section class="gp-hero">
    <p class="gp-kicker">GeldPsychologie.be</p>
    <h1>Begrijp geld.<br>Bescherm je tijd, vrijheid en koopkracht.</h1>
    <p class="gp-lead">GeldPsychologie helpt je financiële keuzes beter begrijpen. Met praktische simulaties, heldere inzichten en mentale modellen voor lange termijn denken.</p>
    <div class="gp-actions">
      <a class="gp-btn gp-btn-primary" href="{{ '/tools/' | relative_url }}">Ontdek de tools</a>
      <a class="gp-btn gp-btn-secondary" href="{{ '/kennis/' | relative_url }}">Lees inzichten</a>
    </div>
  </section>

  <section>
    <h2>Waarom geld vaak stress veroorzaakt</h2>
    <p>Veel mensen hebben financiële onrust, niet door een gebrek aan inkomen, maar door een gebrek aan richting. We krijgen voortdurend tegenstrijdige boodschappen:</p>
    <ul>
      <li>“Beleggen is risicovol”</li>
      <li>“Je moet investeren”</li>
      <li>“Je moet meer sparen”</li>
      <li>“De markt timen is belangrijk”</li>
    </ul>
    <p>Daardoor ontstaan vaak uitstelgedrag, impulsieve beslissingen, onzekerheid en financiële ruis. GeldPsychologie wil die ruis verminderen.</p>
  </section>

  <section>
    <h2>Wat je hier vindt</h2>
    <div class="gp-grid gp-grid-3">
      <article class="gp-card">
        <h3>🧠 Psychologie van geld</h3>
        <p>Beleggen is geen puur rationeel proces. We bekijken hoe emoties financiële keuzes beïnvloeden, waarom timing vaak misloopt en hoe mentale modellen helpen bij lange termijn denken.</p>
      </article>
      <article class="gp-card">
        <h3>📊 Financiële simulaties</h3>
        <p>Verken scenario’s: wanneer passief inkomen kan starten, hoeveel je moet investeren en wat veranderende rendementen doen met je plan. Deze tools geven inzicht, geen voorspellingen.</p>
      </article>
      <article class="gp-card">
        <h3>📚 Financiële educatie</h3>
        <p>Heldere artikels over beleggen, inflatie en koopkracht, lange termijn vermogensopbouw en financiële onafhankelijkheid. Zonder hype of snelle rijkdom verhalen.</p>
      </article>
    </div>
  </section>

  <section>
    <h2>Simuleer financiële keuzes</h2>
    <div class="gp-grid gp-grid-2">
      <article class="gp-card"><h3>Wanneer kan ik starten met passief inkomen?</h3></article>
      <article class="gp-card"><h3>Hoeveel moet ik beleggen om mijn doel te bereiken?</h3></article>
      <article class="gp-card"><h3>Hoe groot moet mijn vermogen zijn?</h3></article>
      <article class="gp-card"><h3>Wat als rendement anders is?</h3></article>
      <article class="gp-card"><h3>Hoe duurzaam is mijn uitkeringsfase?</h3></article>
    </div>
    <p><a class="gp-btn gp-btn-primary" href="{{ '/tools/' | relative_url }}">Bekijk alle tools</a></p>
  </section>

  <section>
    <h2>De grootste fouten in financiën zijn zelden technisch</h2>
    <p>De meeste fouten ontstaan door gedrag:</p>
    <ul>
      <li>paniek tijdens markt dalingen</li>
      <li>overoptimisme tijdens stijgingen</li>
      <li>te veel complexiteit</li>
      <li>gebrek aan lange termijn perspectief</li>
    </ul>
    <p><strong>Daarom combineert GeldPsychologie financiële logica + menselijk gedrag.</strong></p>
  </section>

  <section>
    <h2>Financiële vrijheid</h2>
    <p>Financiële vrijheid is geen universeel cijfer. Het betekent verschillende dingen voor verschillende mensen.</p>
    <div class="gp-grid gp-grid-2">
      <article class="gp-card">
        <h3>Voor sommigen betekent het:</h3>
        <ul>
          <li>minder moeten werken</li>
          <li>meer tijd met familie</li>
          <li>minder financiële stress</li>
        </ul>
      </article>
      <article class="gp-card">
        <h3>Voor anderen betekent het:</h3>
        <ul>
          <li>onafhankelijkheid</li>
          <li>flexibiliteit</li>
          <li>zekerheid</li>
        </ul>
      </article>
    </div>
    <p>Het doel van deze website is niet om een ideaal te verkopen, maar om helderheid te creëren.</p>
  </section>

  <section>
    <h2>Coaching</h2>
    <p>Voor mensen die hun financiële keuzes beter willen begrijpen. Coaching helpt bij:</p>
    <ul>
      <li>financiële helderheid</li>
      <li>realistische verwachtingen</li>
      <li>een persoonlijk plan</li>
      <li>emotioneel stabiel beleggen</li>
    </ul>
    <p><a class="gp-btn gp-btn-secondary" href="{{ '/coaching/' | relative_url }}">Meer over coaching</a></p>
  </section>

  <section>
    <h2>Laatste inzichten</h2>
    <p>Laatste artikels uit het kennisgedeelte.</p>
    <ul>
      {% for post in site.posts limit:4 %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  </section>

  <footer class="gp-footer-links">
    <div>
      <a href="{{ '/tools/' | relative_url }}">Tools</a>
      <a href="{{ '/kennis/' | relative_url }}">Kennis</a>
      <a href="{{ '/methodiek/' | relative_url }}">Methodiek</a>
      <a href="{{ '/coaching/' | relative_url }}">Coaching</a>
      <a href="{{ '/over/' | relative_url }}">Over</a>
    </div>
    <div>
      <a href="{{ '/disclaimer/' | relative_url }}">Disclaimer</a>
      <a href="{{ '/privacy/' | relative_url }}">Privacy</a>
      <a href="{{ '/contact/' | relative_url }}">Contact</a>
    </div>
  </footer>
</div>
