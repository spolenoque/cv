(() => {
  const data = window.resume;
  const root = document.getElementById("site");
  if (!data || !root) return;

  const el = (tag, className = "", content) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  };
  const append = (parent, ...children) => children.forEach(child => parent.append(child));
  const link = (label, href, className = "") => {
    const a = el("a", className, label);
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  };

  const header = el("header", "hero");
  const heroInner = el("div", "wrap hero__inner");
  const heroText = el("div", "hero__text");
  append(heroText,
    el("p", "eyebrow", "Curriculum vitae"),
    el("h1", "hero__name", data.name),
    el("p", "hero__title", data.title)
  );
  const intro = el("div", "hero__intro");
  data.introduction.forEach(paragraph => intro.append(el("p", "", paragraph)));
  heroText.append(intro);
  const actions = el("div", "hero__actions");
  const download = link("Download CV (PDF)", data.pdf, "button button--light");
  download.setAttribute("download", "Arsenii-Polenok-CV.pdf");
  append(actions, download, link("Get in touch ↗", `mailto:${data.email}`, "button button--outline"));
  heroText.append(actions);
  const portrait = el("div", "portrait");
  const photo = el("img", "portrait__image");
  photo.src = "./assets/portrait.png";
  photo.alt = `Portrait of ${data.name}`;
  photo.width = 320;
  photo.height = 320;
  portrait.append(photo);
  append(heroInner, heroText, portrait);
  header.append(heroInner);

  const contact = el("nav", "contact-bar");
  contact.setAttribute("aria-label", "Contact links");
  const contactInner = el("div", "wrap contact-bar__inner");
  append(contactInner,
    el("span", "contact-item contact-item--location", data.location),
    link(data.email, `mailto:${data.email}`, "contact-item"),
    link("Telegram ↗", data.telegram, "contact-item"),
    link(data.phone, `tel:${data.phone.replace(/[^+\d]/g, "")}`, "contact-item"),
    link("LinkedIn ↗", data.linkedin, "contact-item")
  );
  contact.append(contactInner);

  const main = el("main", "wrap content-grid");
  main.id = "main";
  const experience = el("section", "experience");
  experience.setAttribute("aria-labelledby", "experience-title");
  const experienceHeading = el("div", "section-heading");
  const heading = el("h2", "", "Work experience");
  heading.id = "experience-title";
  append(experienceHeading, heading, el("span", "section-heading__rule"));
  experience.append(experienceHeading);
  data.experience.forEach((job, index) => {
    const article = el("article", "job");
    const top = el("div", "job__top");
    const identity = el("div", "job__identity");
    const companyLine = el("h3", "job__company", job.company);
    if (job.context) companyLine.append(el("span", "job__context", ` · ${job.context}`));
    append(identity, companyLine, el("p", "job__role", job.role));
    append(top, identity, el("p", "job__dates", job.dates));
    article.append(top);
    job.groups.forEach(group => {
      const groupBlock = el("div", "job__group");
      groupBlock.append(el("h4", "job__group-title", group.label));
      const list = el("ul", "job__bullets");
      group.bullets.forEach(item => list.append(el("li", "", item)));
      groupBlock.append(list);
      article.append(groupBlock);
    });
    if (index < data.experience.length - 1) article.classList.add("job--with-rule");
    experience.append(article);
  });

  const sidebar = el("aside", "sidebar");
  sidebar.setAttribute("aria-label", "Skills and education");
  sidebar.append(el("h2", "sidebar__heading", "Skills"));
  data.skills.forEach(group => {
    const block = el("section", "skill-group");
    block.append(el("h3", "skill-group__title", group.category));
    const list = el("ul", group.category === "Areas of expertise" ? "skill-list skill-list--prose" : "skill-list skill-list--tags");
    group.items.forEach(item => list.append(el("li", "", item)));
    block.append(list);
    sidebar.append(block);
  });
  const extras = el("section", "extras");
  extras.append(el("h3", "skill-group__title", "Besides, I'm…"));
  const extraList = el("ul", "extra-list");
  data.extras.forEach(item => extraList.append(el("li", "", item)));
  extras.append(extraList);
  sidebar.append(extras);
  const education = el("section", "education");
  education.append(el("h2", "sidebar__heading", "Education"));
  education.append(el("h3", "education__school", data.education.school));
  education.append(el("p", "education__degree", data.education.degree));
  education.append(el("p", "education__specialization", data.education.specialization));
  const educationMeta = el("div", "education__meta");
  append(educationMeta, el("span", "", data.education.location), el("span", "", data.education.dates));
  education.append(educationMeta);
  sidebar.append(education);
  append(main, experience, sidebar);

  const footer = el("footer", "footer");
  const footerInner = el("div", "wrap footer__inner");
  append(footerInner, el("span", "", `${data.name} · ${data.title}`), link("Back to top ↑", "#site"));
  footer.append(footerInner);
  append(root, header, contact, main, footer);
})();
