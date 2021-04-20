import colorgram
import os
import json

COLOR_EPSILON = 5

def pre_process_images(path_to_images, output_file):

    data = {}

    for filename in os.listdir(path_to_images):
        if filename.endswith(".png"): 
            parsed_filename = filename.split('.')[0]

            colors = colorgram.extract(path_to_images + '/' + filename, 3)

            data[parsed_filename] = {
                    'fileName': 'assets/mc-textures/' + filename,
                    'colors': list(filter(lambda x: not (x.h == 0 and x.s == 0 and x.l == 0), map(lambda y: y.hsl, colors)))
            }

    with open(output_file, 'w') as output:
        output.write(json.dumps(data, indent=4))

    return data 

def pre_process_color_maps(data, output_file):
    # generate palette maps
    colors = {}
    for key in data.keys():
        texclrs = data[key]["colors"]
        if len(texclrs) > 0:
            hue = texclrs[0][0]
            if hue not in colors:
                colors[hue] = []
            colors[hue].append(key)
    
    with open(output_file, 'w') as output:
        output.write(json.dumps(colors, indent=4))


data = pre_process_images('src/assets/mc-textures', 'src/assets/textures-data.json')
pre_process_color_maps(data, 'src/assets/texture-color-maps.json')
