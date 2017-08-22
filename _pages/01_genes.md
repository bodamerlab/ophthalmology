---
layout: page
title: Genes
permalink: /genes/
---

<ul>
  {% for post in site.posts reversed %}
    <li>
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
