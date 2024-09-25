# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: GPL-3.0-only

import bpy
import bmesh
import numpy as np
from mathutils import Vector
import os
import sys
import time

utilsDir = os.path.dirname("main/blender/blenderUtils")
if not utilsDir in sys.path:
    sys.path.append(utilsDir)
from blenderUtils import blenderUtils

# Create an object oriented bounding box for a given object
def create_object_oriented_bounding_box(obj):
    ## source: https://blender.stackexchange.com/questions/261049/how-to-get-an-objects-oriented-bounding-box-obb-using-script
    
    verts = [v.co for v in obj.data.vertices]

    # Convert the list of vertices to a numpy array of shape (n, 3)
    points = np.asarray(verts)

    # Calculate the covariance matrix of the points
    cov = np.cov(points, y = None,rowvar = 0,bias = 1)

    # Calculate the eigenvalues (v) and eigenvectors (vect) of the covariance matrix
    v, vect = np.linalg.eig(cov)

    # Transpose the eigenvectors
    tvect = np.transpose(vect)
    
    # Calculate the dot product of the points with the inverse eigenvector matrix
    points_r = np.dot(points, np.linalg.inv(tvect))
    
    # Calculate min and max bounds from points_r
    co_min = np.min(points_r, axis=0)
    co_max = np.max(points_r, axis=0)

    xmin, xmax = co_min[0], co_max[0]
    ymin, ymax = co_min[1], co_max[1]
    zmin, zmax = co_min[2], co_max[2]

    xdif = (xmax - xmin) * 0.5
    ydif = (ymax - ymin) * 0.5
    zdif = (zmax - zmin) * 0.5

    cx = xmin + xdif
    cy = ymin + ydif
    cz = zmin + zdif

    # Bounding box corner vertices
    corners = np.array([
        [cx - xdif, cy - ydif, cz - zdif],
        [cx - xdif, cy + ydif, cz - zdif],
        [cx - xdif, cy + ydif, cz + zdif],
        [cx - xdif, cy - ydif, cz + zdif],
        [cx + xdif, cy + ydif, cz + zdif],
        [cx + xdif, cy + ydif, cz - zdif],
        [cx + xdif, cy - ydif, cz + zdif],
        [cx + xdif, cy - ydif, cz - zdif],
    ])
    corners = np.dot(corners, tvect)

    # Convert the corners to a list of Vector objects
    corners = [Vector((el[0], el[1], el[2])) for el in corners]

    mat = obj.matrix_world
    
    # Create new mesh to hold bounding box
    boundingBoxMesh = bpy.data.meshes.new(name='Bounding Box')
    # Create helper bmesh for new mesh construction
    bm = bmesh.new()

    newVertices = []

    # Add bounding box corners (converted to local space) to mesh
    for el in corners: 
        newVertices.append(bm.verts.new(mat @ el))
        
    # Create edges between corners
    bm.edges.new((newVertices[0], newVertices[1]))
    bm.edges.new((newVertices[1], newVertices[2]))
    bm.edges.new((newVertices[2], newVertices[3]))
    bm.edges.new((newVertices[3], newVertices[0]))
    bm.edges.new((newVertices[4], newVertices[5]))
    bm.edges.new((newVertices[5], newVertices[7]))
    bm.edges.new((newVertices[7], newVertices[6]))
    bm.edges.new((newVertices[6], newVertices[4]))
    bm.edges.new((newVertices[0], newVertices[7]))
    bm.edges.new((newVertices[1], newVertices[5]))
    bm.edges.new((newVertices[2], newVertices[4]))
    bm.edges.new((newVertices[3], newVertices[6]))
    
    # Pass mesh data from helper bmesh to new mesh
    bm.to_mesh(boundingBoxMesh)
    bm.free()
    boundingBoxMesh.update()
    boundingBoxMesh.validate()
    
    # Create new object to hold bounding box mesh
    boundingBoxObject = bpy.data.objects.new('Bounding Box', boundingBoxMesh)
    
    # Link new object to the scene
    scene.collection.objects.link(boundingBoxObject)

# print line break
def print_line_break():
    print('--------------------')
    
# Split an object into separate objects based on islands of mesh


startTime = time.monotonic()

## Store arguments
argv = sys.argv
argv = argv[argv.index("--") + 1:]  # get all args after "--"

# path for source model
modelPath = argv[0]

# export path for oriented bounding box scene
outputFilePath = argv[1]

## Clean default scene and import photogrammetry scene
# scene ref
scene = blenderUtils.clear_scene()
        
print_line_break()

# import source model
bpy.ops.wm.obj_import(filepath=modelPath)
importedObject = bpy.data.objects[0]

# split imported source model into individual objects based on islands
blenderUtils.split_object_by_islands(importedObject)

# delete imported object
bpy.data.objects.remove(importedObject, do_unlink=True)

# copy reference to all separate objects
separateObjects = []
for obj in bpy.data.objects:
    separateObjects.append(obj)
    
# get object oriented minimum volume bounding box for each separate object
for obj in separateObjects:
    create_object_oriented_bounding_box(obj)

print_line_break()
  
# export as OBJ 
bpy.ops.object.select_all(action="SELECT")
bpy.ops.wm.obj_export(filepath=outputFilePath, 
                      export_selected_objects=True,
                      export_materials=False)

