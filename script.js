// ===== Settings =====
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeWsYJOW4k-kd2DweumKtJzsMpOakxeg0mbqVMZj9VRcUXW9A/viewform";
const NOMINEE = { name: "Ojudun Ayomide Papa", email: "a.ojudun@alustudent.com" };
const NA = "Not applicable";
const COUNTER = "https://abacus.jasoncameron.dev";
const NS = "papa-awards-2026-aojudun";

// Every category on the form, in order, with its Google Form field IDs.
// "key" points to a set of write-ups; null means "Not applicable".
const CATEGORIES = [
  {
    "name": "Moonshot Award (Leadership)",
    "nameId": "768256960",
    "emailId": "1980863165",
    "reasonId": "111841956",
    "key": "leadership"
  },
  {
    "name": "Entrepreneurship Award",
    "nameId": "706513076",
    "emailId": "975105369",
    "reasonId": "6476640",
    "key": null
  },
  {
    "name": "Social Transformation Award",
    "nameId": "1871154979",
    "emailId": "384745254",
    "reasonId": "1863716428",
    "key": null
  },
  {
    "name": "Sports Person of the Year",
    "nameId": "1731204427",
    "emailId": "482832151",
    "reasonId": "553924325",
    "key": null
  },
  {
    "name": "Tech Wiz of the Year",
    "nameId": "1147427635",
    "emailId": "111756972",
    "reasonId": "2725955",
    "key": "tech"
  },
  {
    "name": "Most Outstanding Staff Member",
    "nameId": "852882661",
    "emailId": "413099390",
    "reasonId": "88595733",
    "key": null
  },
  {
    "name": "Most Outstanding Student Intern",
    "nameId": "1401758373",
    "emailId": "1000125808",
    "reasonId": "2091143618",
    "key": null
  },
  {
    "name": "Exemplary Alumni",
    "nameId": "1059755199",
    "emailId": "1439240151",
    "reasonId": "1254919339",
    "key": null
  },
  {
    "name": "Vendor of the Year",
    "nameId": "354100099",
    "emailId": "2011666405",
    "reasonId": "258581724",
    "key": null
  },
  {
    "name": "Talent of the Year",
    "nameId": "673276997",
    "emailId": "10688301",
    "reasonId": "506442525",
    "key": null
  },
  {
    "name": "Club of the Year",
    "nameId": "1373786570",
    "emailId": "146244686",
    "reasonId": "1911418438",
    "key": null
  },
  {
    "name": "Volunteer of the Year",
    "nameId": "343520707",
    "emailId": "402244159",
    "reasonId": "1893563602",
    "key": null
  },
  {
    "name": "ALU Royalty Award",
    "nameId": "897187221",
    "emailId": "2003284998",
    "reasonId": "971874109",
    "key": null
  },
  {
    "name": "Community and Culture Award",
    "nameId": "1440403326",
    "emailId": "62365873",
    "reasonId": "20410663",
    "key": null
  },
  {
    "name": "Best Content Creator",
    "nameId": "835829933",
    "emailId": "1146951875",
    "reasonId": "28527739",
    "key": "content"
  }
];

// Three versions per award Papa is going for.
const WRITEUPS = {
  "leadership": [
    "I'd nominate Ayomide because he's genuinely contributed to making campus life more interesting. As Head of ALU Alive, he's been behind several activities that brought students together, including the Ubuntu Scavenger Hunt, AFCON watch party, Love Prom, Clubs Week and other campus experiences. I think what stands out is that he doesn't just talk about ideas; he actually puts in the effort to make them happen. He's played a big role in creating moments and experiences that students get to enjoy, and I think that deserves recognition.",
    "One thing I've noticed about Ayomide is that he's very big on collaboration. Even as Head of ALU Alive, he doesn't operate like someone who only cares about his own portfolio. He's worked with different SRC members, clubs, KMC and other student teams to bring ideas to life. I've seen how different initiatives become successful because people are willing to support one another, and Ayomide is one of those people who understands that. He's approachable, takes initiative and is always looking for ways to get people involved. That's a quality I really appreciate in a leader.",
    "I think Ayomide deserves this nomination because he understands that leadership is more than having a title. Beyond the events and activities he's helped organise, he's also concerned about what happens after his tenure. His effort towards documenting ALU Alive activities, creating guides and making sure future leaders have something to work with shows that he cares about continuity. Not everyone thinks about what they'll leave behind when their time in a position is over. I think that mindset, combined with his energy and commitment to the ALU community, makes him deserving of this award."
  ],
  "content": [
    "Have you ever watched a TikTok and immediately thought, \"This is literally me!\"? That's what I enjoy about Ayomide's content. His classroom skits, exam situations and relationship-related videos are so relatable, especially as students. He has a way of taking things that happen in our everyday lives and making them genuinely entertaining. And the funny thing is, you never really know what he's going to post next. 😂 I think his creativity and ability to connect with people through humour make him a deserving winner.",
    "What I like about Ayomide as a content creator is that he doesn't box himself into one kind of content. His page has a bit of everything: comedy, personal vlogs, celebrity-related conversations, lifestyle content and random things that somehow end up being entertaining. I particularly enjoy his vlogs because they give you a glimpse into his experiences and personality. You can tell he enjoys creating and experimenting with different ideas. He's not just following one trend or trying to fit into one category, and I think that versatility makes him stand out.",
    "I think Ayomide deserves this award because he understands that good content doesn't always have to be complicated. Sometimes it's just about noticing something funny that happens in class, an awkward relationship moment or an everyday experience and turning it into something people can enjoy. That's something he does really well. His content is entertaining, relatable and gives people something to talk about. I also appreciate that he shares parts of his personal life through his vlogs instead of limiting his page to skits. He's definitely one of the creators worth celebrating."
  ],
  "tech": [
    "If there's one thing about Ayomide, it's that he's genuinely curious about technology. He's not the type to just learn something in class and leave it there. He's always exploring different technologies, trying things out and finding ways to build something with what he's learning. From frontend and backend development to Python, Django, Linux and networking, he's explored quite a lot. I think his willingness to keep learning and challenge himself technically is what makes him deserving of Tech Wiz of the Year.",
    "I'd nominate Ayomide because he sees technology as more than just writing code. He's interested in using what he knows to solve actual problems. A good example is EduEthics, a project he's worked on to address unethical practices in Nigerian universities through technology. Beyond that, he's explored different areas of software development and infrastructure, and he's always looking for opportunities to build and experiment. I think it's great to see someone who is not just learning technology for academic purposes but is also thinking about what he can create with it.",
    "I honestly think Ayomide is one of those people who can spend hours trying to figure out why something isn't working just because he wants to understand it. 😂 His interest in technology goes beyond assignments or passing courses. He's worked with different tools, explored Linux and server administration, built backend systems and constantly challenges himself to learn new things. What I find impressive is his interest in understanding how things work behind the scenes, not just how to use them. That curiosity and hands-on approach are exactly why I'd nominate him for Tech Wiz of the Year."
  ]
};

// ===== Page logic =====
(function(){
  const $ = id => document.getElementById(id);
  const TURN_KEY = 'papa-awards-turn-v2';

  // Round robin: visitor 1 gets version 1, visitor 2 gets version 2,
  // visitor 3 gets version 3, visitor 4 gets version 1 again, and so on.
  // The same person keeps the same version if they come back.
  async function getTurn(){
    try {
      const saved = Number(localStorage.getItem(TURN_KEY));
      if (localStorage.getItem(TURN_KEY) !== null && Number.isInteger(saved)) return saved;
    } catch(e){}

    let n = NaN;
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3000);
      const r = await fetch(COUNTER + '/hit/' + NS + '/visitor', { signal: ctrl.signal });
      clearTimeout(timer);
      const data = await r.json();
      n = Number(data.value) - 1;   // first visitor = 0 = version 1
    } catch(e){}

    // If the counter is down or answers strangely, still pick a real version
    if (!Number.isInteger(n) || n < 0) n = Math.floor(Math.random() * 3);

    try { localStorage.setItem(TURN_KEY, String(n)); } catch(e){}
    return n;
  }

  function buildLink(picks){
    const p = new URLSearchParams();
    p.set('usp', 'pp_url');
    CATEGORIES.forEach(c => {
      if (c.key) {
        // Moonshot, Tech Wiz and Content Creator: fully filled in
        p.set('entry.' + c.nameId, NOMINEE.name);
        p.set('entry.' + c.emailId, NOMINEE.email);
        p.set('entry.' + c.reasonId, picks[c.key]);
      } else {
        p.set('entry.' + c.nameId, NA);
        p.set('entry.' + c.emailId, NA);
        p.set('entry.' + c.reasonId, NA);
      }
    });
    return FORM_URL + '?' + p.toString();
  }

  async function copy(text, btn){
    try { await navigator.clipboard.writeText(text); }
    catch(e){
      const t = document.createElement('textarea'); t.value = text;
      document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove();
    }
    btn.textContent = 'Copied'; setTimeout(() => btn.textContent = 'Copy', 1400);
  }

  getTurn().then(n => {
    const version = n % 3;   // 0, 1 or 2
    const picks = {};
    Object.keys(WRITEUPS).forEach(k => { picks[k] = WRITEUPS[k][version]; });

    $('go').href = buildLink(picks);
    $('go').classList.remove('wait');

    const list = $('mine');
    CATEGORIES.filter(c => c.key).forEach(c => {
      const d = document.createElement('div'); d.className = 'card';
      d.innerHTML = '<div class="row"><b></b><button class="copy" type="button">Copy</button></div><p class="who"></p><p></p>';
      d.querySelector('b').textContent = c.name;
      d.querySelector('.who').textContent = NOMINEE.name + ' · ' + NOMINEE.email;
      d.querySelector('p:last-child').textContent = picks[c.key];
      d.querySelector('button').addEventListener('click', e => copy(picks[c.key], e.target));
      list.appendChild(d);
    });
  });

  $('done').addEventListener('click', () => {
    $('thanks').hidden = false;
    let first = true;
    try { if (localStorage.getItem('papa-awards-done')) first = false; else localStorage.setItem('papa-awards-done','1'); } catch(e){}
    if (first) fetch(COUNTER + '/hit/' + NS + '/done').catch(() => null);
  });
})();