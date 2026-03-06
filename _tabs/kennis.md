---
layout: page
title: Kennis
icon: fas fa-book-open
order: 2
permalink: /kennis/
---

Hier vind je artikels over geldgedrag, beleggen, inflatie en lange termijn denken.

{% assign posts = site.posts %}
{% if posts.size == 0 %}
Er zijn nog geen artikels gepubliceerd.
{% else %}
{% for post in posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% endif %}
