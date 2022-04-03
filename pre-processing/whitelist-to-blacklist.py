import simplejson

with open("src/assets/texture-blacklist.json", "r") as f:
    whitelist = set(simplejson.load(f))

with open("src/assets/file-keys.json", "r") as f:
    all_keys = set(simplejson.load(f)["fileKeys"])

blacklist = list(all_keys.difference(whitelist))
blacklist.sort()

with open("src/assets/blacklist.json", "w") as f:
    json = simplejson.dumps(blacklist, indent=2)
    f.write(json)

