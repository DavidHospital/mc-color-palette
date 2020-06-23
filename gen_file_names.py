import os

def gen_file_names(file, path_to_files):
  f = open(file, 'w')
  f.write('export const MC_TEXTURE_NAMES = [\n')
  for filename in os.listdir(path_to_files):
    if filename.endswith(".png"):
      f.write('  \"' + filename.split('.')[0] + '\",\n')
  f.write(']\n')
  f.close()

gen_file_names('src/app/file-keys.ts', './src/assets/mc-textures')