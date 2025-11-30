// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
            case "myTiles.tile5":
            case "myTile3":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 3 . . . . . . . . . 
. . . . . . 3 . . . . . . . . . 
. . . . . 3 3 . . . . . . . . . 
. . . . . 3 . . . . . . . . . . 
. . . . 3 3 3 3 3 3 . . . . . . 
. . . 3 3 3 3 3 3 . . . . . . . 
. . 3 3 . . . . . . . . . . . . 
. . 3 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
            case "BrownWallTile": return img`
44eeee44eeeeee444444444444eeeeee
4bebee4becebee4b444b4b4b4bebecee
44eeee44eeeeee444e4444e444eeeebe
44eeceb4eeceeeb4b4be44b4b4eeeeee
44eeee4444eeeeeeee44e444eeeeee44
4beeec444bebeceeec4b4bebeeecee44
eeeeee444444eeeeeeeeeeeeeeee4444
eeeeee444444eeceeeeeeeeeeebe4444
eeeeeeeeee44eeeeee4444eeee44444b
ebececeeeeb4ceeeeb4b44ceee444444
4444eeeeeeee44ebeeeeb4eeee444444
b4b4eeeeeeceb4eeecee44eee4b4b444
44eeeeee44eeee44eeecee44eeeeee44
4bebecee44eeeb44eeee4e4bebeeee44
eeeeee4b4beeee4b44beecee44eeeeee
eeeeee4444eeee4444eeceee4beeeeee
eeee44b4b4eeeeee44b4eeee44444444
eceb444444eeeeee4444eeeb44444b44
44eeecee4444eeeebeb4ceee444444b4
44eeeeee4444eeec4e44eeee44b44444
4444eeeeb44444eeeeeeeeb444eeeeee
4444eeee4444b4eeeeeeee4b44ebeeee
444b44eeee4beeeeee4beeeeeeeeeebe
4b4444eeee44eeeeee44eeececebecee
4444eeebebeeee4444e4ceceee44ee44
44b4ceeeeeeeeeb4b4b4eeeebeb4ceb4
4444eeb4eeee4444eeeeeb4bee44eeee
4b44eeb4eeee4b44ebebee44eb4beeec
44ee444b4b44eeeeee4eb44beeee4444
b4ee444444b4eeceeb444eb4eeeb4444
44ee44b44444ee4b444e4444eeee44b4
4bec44444444ec44444b4444eeee4444
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const BrownWallTile = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "intro":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
            case "myTile3":
            case "tile5": return myTiles.tile5;
            case "BrownWallMini": return myTiles.BrownWallTile
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
