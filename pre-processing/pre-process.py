import colorgram
import os
import json

def pre_process_images(path_to_images, output_file):

  data = {}

  for filename in os.listdir(path_to_images):
    if filename.endswith(".png"): 
      parsed_filename = filename.split('.')[0]

      colors = colorgram.extract(path_to_images + '/' + filename, 3)

      data[parsed_filename] = {
        'fileName': 'assets/mc-textures/' + filename,
        'colors': list(map(lambda x: x.hsl, colors))
      }

  with open(output_file, 'w') as output:
    output.write(json.dumps(data, indent=4))
  

pre_process_images('src/assets/mc-textures', 'src/assets/textures-data.json')