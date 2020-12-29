from os import listdir
from os.path import isfile, join
import re
import json

mypath = r'D:\web\rnoar\static\docs'
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

from transliterate import translit, get_available_language_codes

urls = [translit(f, 'ru', reversed=True) for f in onlyfiles]
urls = [url.lower() for url in urls]
urls = [re.sub('[^\w]', '_', url) for url in urls]
urls = [re.sub('_+', '_', url) for url in urls]

names = onlyfiles
for ex in ["pdf", "doc", "rtf"]:
    urls = [url.replace(f"_{ex}", f".{ex}") for url in urls]
    names = [name.replace(f".{ex}", "") for name in names]

folder = r'D:\web\rnoar\static\docs'
for old_name, new_name in zip(onlyfiles, urls):
    os.rename(os.path.join(folder, old_name), os.path.join(folder, new_name))

urls = [f"/docs/{url}" for url in urls]

print(json.dumps([{'name': name, 'url': url} for name, url in list(zip(names, urls))], ensure_ascii=False))
