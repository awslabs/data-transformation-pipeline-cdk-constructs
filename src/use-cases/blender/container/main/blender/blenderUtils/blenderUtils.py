# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: GPL-3.0-only

import bpy

# Clean default scene
def clear_scene():
    scene = bpy.context.scene

    # delete all objects in scene
    for deleteObject in bpy.data.objects:
        bpy.data.objects.remove(deleteObject, do_unlink=True)

    # delete unused cameras from data
    for camera_test in bpy.data.cameras:
        if camera_test.users == 0:
            bpy.data.cameras.remove(camera_test)
    
    return scene

# Remove duplicate vertices
def remove_duplicate_vertices():
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_mode(type="VERT")
    bpy.ops.mesh.select_all(action = 'SELECT')
    bpy.ops.mesh.remove_doubles()
    bpy.ops.mesh.select_all(action='DESELECT')
    bpy.ops.object.mode_set(mode='OBJECT')
    
# Split objects by mesh islands
def split_object_by_islands(obj):
    while len(obj.data.vertices) > 0:
        # select first vertex in importedObject
        obj.data.vertices[0].select = True

        # select linked vertices    
        bpy.ops.object.mode_set(mode='EDIT')
        bpy.ops.mesh.select_mode(type="VERT")
        bpy.ops.mesh.select_linked()

        # separate selected vertices into a separate object
        bpy.ops.mesh.separate(type='SELECTED')
        
        # return to object mode and deselect all
        bpy.ops.object.mode_set(mode='OBJECT')
        bpy.ops.object.select_all(action='DESELECT')
        obj.select_set(True)