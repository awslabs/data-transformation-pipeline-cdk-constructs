# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: GPL-3.0-only

import bpy
import bmesh
import os
from mathutils import Vector, Quaternion
import sys
import numpy as np
import time

utilsDir = os.path.dirname("main/blender/blenderUtils")
if not utilsDir in sys.path:
    sys.path.append(utilsDir)
from blenderUtils import blenderUtils


def print_line_break():
    print('--------------------')

startTime = time.monotonic()

## Store arguments
argv = sys.argv
argv = argv[argv.index("--") + 1:]  # get all args after "--"

# directory path for source models
modelDirectory = argv[0]

# export path for joined mesh
outputFilePath = argv[1]

## Clean default scene and import photogrammetry scene
# scene ref
scene = blenderUtils.clear_scene()
        
print_line_break()

# import all objects in input directory
print("Importing models:")
for root, dirs, files in os.walk(modelDirectory):
    for file in files:
        importExtension = file.split('.').pop()
        if importExtension == 'obj':
            bpy.ops.wm.obj_import(filepath=os.path.join(root, file))

print_line_break()

# join models
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.join()

# remove duplicate vertices
blenderUtils.remove_duplicate_vertices()

# export joined model
bpy.ops.wm.obj_export(filepath=outputFilePath, 
                      export_selected_objects=True,
                      export_materials=False)

print_line_break()

elapsedTime = time.monotonic() - startTime
print(f"Done. Elapsed time: {elapsedTime}")