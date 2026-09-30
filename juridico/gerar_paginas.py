"""
Gera termos.html e privacidade.html na raiz deste repositório.

Edite sempre o .md e rode de novo:
    python juridico/gerar_paginas.py

Só biblioteca padrão. Entende o Markdown usado nesses dois documentos:
títulos (# e ##), parágrafos, listas (- e 1.), tabelas, --- e **negrito**/`código`.
Linhas começando com ">" são notas internas e não vão para a página.
Trechos [ENTRE COLCHETES] aparecem destacados: são dados a preencher.
"""
import html
import re
from pathlib import Path

AQUI = Path(__file__).resolve().parent
LANDING = AQUI.parent

PAGINAS = [
    ("termos-de-uso.md", "termos.html", "Termos de Uso"),
    ("politica-de-privacidade.md", "privacidade.html", "Política de Privacidade"),
]


def inline(texto: str) -> str:
    t = html.escape(texto, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"`(.+?)`", r"<code>\1</code>", t)
    t = re.sub(r"\[([^\]]+)\]", r'<mark class="pendente">[\1]</mark>', t)
    return t


def converter(md: str) -> str:
    saida, paragrafo, lista, tabela = [], [], None, []

    def fechar():
        nonlocal lista
        if paragrafo:
            saida.append("<p>" + "<br>".join(inline(l) for l in paragrafo) + "</p>")
            paragrafo.clear()
        if lista:
            tag, itens = lista
            saida.append(f"<{tag}>" + "".join(f"<li>{inline(i)}</li>" for i in itens) + f"</{tag}>")
            lista = None
        if tabela:
            cab, *linhas = [[c.strip() for c in l.strip().strip("|").split("|")] for l in tabela
                            if not re.fullmatch(r"\|[\s\-:|]+\|", l.strip())]
            corpo = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in l) + "</tr>" for l in linhas)
            saida.append('<div class="legal-table"><table><thead><tr>'
                         + "".join(f"<th>{inline(c)}</th>" for c in cab)
                         + f"</tr></thead><tbody>{corpo}</tbody></table></div>")
            tabela.clear()

    for linha in md.splitlines():
        l = linha.rstrip()
        if l.startswith(">"):
            continue
        if not l.strip():
            fechar()
        elif l.startswith("|"):
            if not tabela:
                fechar()
            tabela.append(l)
        elif l.strip() == "---":
            fechar()
            saida.append("<hr>")
        elif l.startswith("# "):
            fechar()
            saida.append(f"<h1>{inline(l[2:])}</h1>")
        elif l.startswith("## "):
            fechar()
            saida.append(f"<h2>{inline(l[3:])}</h2>")
        elif re.match(r"- ", l) or re.match(r"\d+\. ", l):
            tag = "ul" if l.startswith("- ") else "ol"
            if paragrafo or (lista and lista[0] != tag):
                fechar()
            lista = lista or (tag, [])
            lista[1].append(re.sub(r"^(- |\d+\. )", "", l))
        else:
            if lista:
                fechar()
            paragrafo.append(l)
    fechar()
    return "\n".join(saida)


MODELO = """<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{titulo} — ESSE</title>
  <meta name="description" content="{titulo} do ESSE. Seus cronogramas não são armazenados nem compartilhados.">
  <meta name="theme-color" content="#2954E1">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="assets/brand.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header class="site-header">
  <div class="wrap nav-row">
    <a href="index.html" class="brand" aria-label="ESSE, página inicial"><img src="assets/logo.svg" alt="ESSE" width="130" height="34"></a>
    <a class="button button-small" href="index.html">Voltar ao site</a>
  </div>
</header>
<main id="conteudo" class="wrap legal">
<!-- Gerado por juridico/gerar_paginas.py a partir de juridico/{origem}. Não edite aqui. -->
{corpo}
</main>
<footer class="wrap site-footer"><a href="index.html" aria-label="ESSE, página inicial"><img src="assets/logo.svg" width="115" height="30" alt="ESSE"></a><p><a href="termos.html">Termos de Uso</a><br><a href="privacidade.html">Política de Privacidade</a></p><span>© 2026 ESSE</span></footer>
</body>
</html>
"""


def main() -> None:
    for origem, destino, titulo in PAGINAS:
        corpo = converter((AQUI / origem).read_text(encoding="utf-8"))
        pagina = MODELO.format(titulo=titulo, origem=origem, corpo=corpo)
        (LANDING / destino).write_text(pagina, encoding="utf-8")
        pendentes = len(re.findall(r'class="pendente"', corpo))
        print(f"{destino}: gerado ({pendentes} trecho(s) [A PREENCHER])")


if __name__ == "__main__":
    main()
