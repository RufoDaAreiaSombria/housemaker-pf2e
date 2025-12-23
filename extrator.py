from bs4 import BeautifulSoup

# Ler o HTML
with open("index.html", "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), "html.parser")

casarooms = {}
casafeats = {}

# ---------- FEATS ----------
for container in soup.find_all("div", class_="feats2"):
    inputs = container.find_all("input")
    h3s = container.find_all("h3")

    for inp, h3 in zip(inputs, h3s):
        if inp.get("id"):
            texto = h3.get_text(strip=True) + ": "
            casarooms[inp["id"]] = f"<i>{texto}</i>"

# ---------- ROOMS ----------
for container in soup.find_all("div", class_="rooms2"):
    inputs = container.find_all("input")
    h3s = container.find_all("h3")

    for inp, h3 in zip(inputs, h3s):
        if inp.get("id"):
            texto = h3.get_text(strip=True) + ": "
            casafeats[inp["id"]] = f"<i>{texto}</i>"

# ---------- GERAR TXT ----------
with open("listas_output.txt", "w", encoding="utf-8") as f:
    f.write("const casarooms = {\n")
    for k, v in casarooms.items():
        f.write(f"  {k}: \"{v}\",\n")
    f.write("}\n\n")

    f.write("const casafeats = {\n")
    for k, v in casafeats.items():
        f.write(f"  {k}: \"{v}\",\n")
    f.write("}\n")

print("✔ Arquivo gerado com ':' após cada h3.")
