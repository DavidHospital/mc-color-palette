import os
import simplejson

def gen_file_names(file, path_to_files):
  f = open(file, 'w')
  file_keys = { "fileKeys": [fn.split('.')[0] for fn in filter(lambda fn : fn.endswith(".png"), os.listdir(path_to_files))] }
  file_keys["fileKeys"].sort()
  json = simplejson.dumps(file_keys, indent=2)
  f.write(json)
  f.close()

gen_file_names('src/assets/file-keys.json', './src/assets/mc-textures')