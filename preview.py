"""Preview the current Jekyll pages locally without installing Ruby."""

from html import escape
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent
PAGES = {"/": "index.html", "/research/": "research.html", "/oddities/": "oddities.html", "/essays/": "essays.html"}
ASSETS = {"/assets/style.css": "text/css", "/assets/main.js": "text/javascript"}


def render(url):
    page = (ROOT / PAGES[url]).read_text(encoding="utf-8")
    _, front, content = page.split("---", 2)
    metadata = dict(line.split(":", 1) for line in front.splitlines() if ":" in line)
    title = metadata["title"].strip()
    description = metadata.get("description", "推理加速、框架与卸载，以及偶尔的随笔").strip()

    # shortcut: archive loops assume no posts; switch to Jekyll when articles are added.
    content = re.sub(
        r"{% assign .*? %}\s*{% if .*? %}.*?{% else %}(.*?){% endif %}",
        lambda match: match[1], content, flags=re.S,
    )
    layout = (ROOT / "_layouts/default.html").read_text(encoding="utf-8")
    layout = re.sub(
        r"{% if page.title and page.title != '首页' %}.*?{% endif %}",
        "" if url == "/" else escape(title) + " · ", layout,
    )
    layout = re.sub(
        r"<p>{% if page.url == '/' %}(.*?){% else %}(.*?){% endif %}",
        lambda match: "<p>" + (match[1] if url == "/" else match[2]), layout, flags=re.S,
    )
    layout = re.sub(
        r"{% if page.url == '([^']+)' %}(.*?){% endif %}",
        lambda match: match[2] if url == match[1] else "", layout,
    )
    layout = re.sub(r"{{ '([^']+)' \| relative_url }}", lambda match: match[1], layout)
    content = re.sub(r"{{ '([^']+)' \| relative_url }}", lambda match: match[1], content)
    return (layout.replace("{{ site.title | escape }}", "depictlightning")
                  .replace("{{ page.description | default: site.description | escape }}", escape(description))
                  .replace("{{ content }}", content)).encode("utf-8")


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        url = urlsplit(self.path).path
        if url in PAGES:
            body, content_type = render(url), "text/html"
        elif url in ASSETS:
            body, content_type = (ROOT / url.lstrip("/")).read_bytes(), ASSETS[url]
        else:
            self.send_error(404)
            return
        self.send_response(200)
        self.send_header("Content-Type", f"{content_type}; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    if list((ROOT / "_posts").glob("*.md")):
        raise SystemExit("preview.py does not render posts; use jekyll serve instead")
    print("Preview: http://127.0.0.1:4000/", flush=True)
    ThreadingHTTPServer(("127.0.0.1", 4000), Handler).serve_forever()
