import colorgram
import os
import json

def get_whitelist(path_to_whitelist):
    with open(path_to_whitelist) as inpt:
        return json.load(inpt)["whitelist"]

def pre_process_images(path_to_images, output_file, whitelist=None):

    data = {}
    for filename in os.listdir(path_to_images):
        if filename.endswith(".png"): 
            if filename in whitelist:
                parsed_filename = filename.split('.')[0]
                colors = colorgram.extract(path_to_images + '/' + filename, 3)

                data[parsed_filename] = {
                        'fileName': 'assets/mc-textures/' + filename,
                        'name': parsed_filename,
                        'colors': list(filter(lambda x: not (x.h == 0 and x.s == 0 and x.l == 0), map(lambda y: y.hsl, colors)))
                }

    with open(output_file, 'w') as output:
        output.write(json.dumps(data, indent=4))

    return data 

def get_vibrant_color(colors):
    bestIndex = 0
    best = 0
    for i in range(len(colors)):
        t = (128 - abs(128 - colors[i][2])) * colors[i][1] 
        if t > best:
            best = t
            bestIndex = i
    return colors[bestIndex]

def pre_process_color_maps(data, output_file):
    # generate palette maps
    colors = {}
    for key in data.keys():
        texclrs = data[key]["colors"]
        if len(texclrs) > 0:
            hue = get_vibrant_color(texclrs)[0]
            if hue not in colors:
                colors[hue] = []
            colors[hue].append(key)
    
    with open(output_file, 'w') as output:
        output.write(json.dumps(colors, indent=4))

whitelist = get_whitelist('src/assets/texture-whitelist.json')
data = pre_process_images('src/assets/mc-textures', 'src/assets/textures-data.json', whitelist=whitelist)
pre_process_color_maps(data, 'src/assets/texture-color-maps.json')
